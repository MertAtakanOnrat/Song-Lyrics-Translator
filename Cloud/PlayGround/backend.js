const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
//import express from "express"
//import mysql from "mysql"
//import config from "./config.js"

//const express = require("express")
//const mysql = require("mysql")
//const config = require('./config');

//const options = {
//    user: config.MYSQL_USER,
//    password: config.MYSQL_PASSWORD,
//    database: "cloud"
//};

const app = express()

//const db = mysql.createConnection(options);
/*
$host="34.65.119.253";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());
*/
//$con->close();

const db = mysql.createConnection({
    port:3306,
    host:"34.65.119.253",
    //host:"localhost",
    //port:"3306",
    user:"root",
    password:"",
    database:"cloud",
})

// Parse JSON request bodies
app.use(bodyParser.json());
// Parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');// 'https://hazel-env-380416.lm.r.appspot.com'); // localhost kısmını Frontend'in Cloud'daki External IP'si ile değiştir
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  

      next();

});



app.get('/get-song-info', (req, res) => {
    const { artistName, songName, desiredLanguage } = req.query;
  
    if (!artistName || !songName || !desiredLanguage) {
      return res.status(400).json({ error: 'Invalid input. Please provide Song Artist, Song Name, and Desired Language.' });
    }
  
    const q = `SELECT id, lyrics FROM song WHERE artist = ? AND title = ? LIMIT 1;`;
    db.query(q, [artistName, songName], (err, data, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      if (data.length === 0) {
        return res.status(404).json({ error: 'Song not found' });
      }
  
      const songId = data[0].id;
      const lyrics = data[0].lyrics;
  
      const trq = `SELECT translatedLyrics FROM translatedSongs WHERE id = ? AND targetLanguage = ?`;
      db.query(trq, [songId, desiredLanguage], (err, translationData, fields) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        if (translationData.length === 0) {
          // Translate the lyrics if no translation is found
          const { Translate } = require('@google-cloud/translate').v2;
          require('dotenv').config();
  
          const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
  
          const translate = new Translate({
            credentials: CREDENTIALS,
            projectId: CREDENTIALS.project_id,
          });
  
          translate
            .translate(lyrics, desiredLanguage)
            .then(([translation]) => {
              const translatedData = translation;
              const response = {
                translatedData: translatedData,
                originalLyrics: lyrics,
              };
  
              // Save the translated lyrics to the database
              const ins = 'INSERT INTO translatedSongs (id, targetLanguage, translatedLyrics) VALUES (?, ?, ?);';
              db.query(ins, [songId, desiredLanguage, translatedData], (error, data, fields) => {
                if (error) {
                  console.error(error);
                  return res.status(500).json({ error: 'Internal server error' });
                }
                return res.json(response);
              });
            })
            .catch((err) => {
              console.error(err);
              return res.status(500).json({ error: 'Internal server error' });
            });
        } else {
          const response = {
            translatedData: translationData[0].translatedLyrics,
            originalLyrics: lyrics,
          };
          return res.json(response);
        }
      });
    });
  });


app.get("/", (req, res)=> {
    res.json("Hello backend")
})

app.get("/songs", (req,res)=>{
    const q = "SELECT * FROM song LIMIT 2"
    db.query(q, (err,data)=> {
        if(err) return res.json(err)
        console.log(data)
        return res.json(data)
    })
})

// Endpoint for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Fetch the user from the database based on the provided username
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      // Check if the user exists
      const user = results[0];
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare the provided password with the password from the database
      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate a JWT token with a secret key
      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1d' });
  
      // Send the token back to the client
      res.json({ token });
    });
  });
  
  
  
  
  // Middleware function to authenticate requests
  function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, 'your-secret-key', (err, user) => {
      if (err) {
        console.error(err);
        return res.status(403).json({ error: 'Forbidden' });
      }
  
      req.user = user;
      next();
    });
  }
  
  app.post('/add-song', authenticateToken, (req, res) => {
    const { songName, artistName, lyrics } = req.body;

    const q = `INSERT INTO song (title, artist, lyrics) VALUES ('${songName}', '${artistName}', "${lyrics}")`;
    db.query(q, (err, result) => {
        if(err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        else {
            return res.json({message: 'Song added successfully!'});
        }
    })
});

app.delete('/delete-song', authenticateToken, (req, res) => {
    const { songName, artistName } = req.body;
  
    const q = `DELETE FROM song WHERE title = '${songName}' AND artist = '${artistName}'`;
    db.query(q, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Song not found' });
      }
  
      return res.json({ message: 'Song deleted successfully!' });
    });
  });
  




const port = process.env.PORT || 8025;
app.listen(port, ()=>{
    console.log(`Connected to backend! ${port}`);
    //console.log(`Example app listening on port ${port}`);
})
