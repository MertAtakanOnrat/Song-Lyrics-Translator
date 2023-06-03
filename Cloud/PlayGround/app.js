/*
const http = require('http');

const server = http.createServer((req, res)=>{

    res.end('Hello node js')
});
const PORT = 5000;
server.listen(5000);
console.log('Node js running at ${PORT}');


const {Translate} = require('@google-cloud/translate').v2;
require('dotenv').config();

// Your credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Configuration for the client
const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`);
        return 0;
    }
}

 detectLanguage('Oggi è lunedì')
     .then((res) => {
         console.log(res);
     })
     .catch((err) => {
         console.log(err);
     });
     
const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log(`Error at translateText --> ${error}`);
        return 0;
    }
};

 translateText('Oggi è lunedì', 'en')
     .then((res) => {
         console.log(res);
     })
     .catch((err) => {
         console.log(err);
     });

'use strict';

const express = require('express');
     
const app = express();
          
app.get('/', (req, res) => {
    var i = 1,
    max = 5;
     
    //set the appropriate HTTP header
    res.setHeader('Content-Type', 'text/html');
     
    //send multiple responses to the client
    for (; i <= max; i++) {
        res.write('<h1>This is the response #: ' + i + '</h1>');
    }
    
     
    //end the response process
    res.end();
});
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
     
module.exports = app;
*/

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let songName = "";
let artistName = "";
let desiredLanguage = "";

app.post("/song", (req, res) => {
  songName = req.body.songName;
  artistName = req.body.artistName;
  desiredLanguage = req.body.desiredLanguage;

  // Do something with the data, e.g. store it in a database

  res.json({ songName: `${songName}`, artistName: `${artistName}`, desiredLanguage: `${desiredLanguage}`, message: `Song added successfully!!!!!` });

  // Call a callback function after the values have been updated
  printValues(() => {
    console.log("Song Name:", songName);
    console.log("Artist Name:", artistName);
    console.log("Desired Language:", desiredLanguage);
  });
});

const printValues = (callback) => {
  // Delay the execution of the callback to ensure that the values have been updated
  setTimeout(callback, 0);
};

app.get('/', (req, res) => {
    res.status(200).send(songName).end();
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

