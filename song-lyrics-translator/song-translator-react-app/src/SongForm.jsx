import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import axiosInstance from "./axios";

export function SongForm({ onCancelClick, type }) {
  const buttonText = type.charAt(0).toUpperCase() + type.slice(1);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  const handleCancelClick = () => {
    onCancelClick(); // Call the onCancelClick callback function passed from AdminControlPage
  };

  const handleAddSong = () => {
    const artistName = document.getElementById("artistName").value;
    const songName = document.getElementById("songName").value;
    const songLyrics = document.getElementById("songLyrics").value;

    const songData = {
      artistName: artistName,
      songName: songName,
      lyrics: songLyrics,
    };

    axiosInstance
      .post("/add-song", songData, {headers: {Authorization: `Token ${localStorage.getItem("token")}`}})
      .then((response) => {
        console.log(response.data.message);
        setShowSuccessAlert(true);
      })
      .catch((error) => {
        console.log(error);
        setShowFailureAlert(true);
      });
  };

  const handleDeleteSong = () => {
    const artistName = document.getElementById('artistName').value;
    const songName = document.getElementById('songName').value;
  
    const songData = {
      artistName: artistName,
      songName: songName,
    };
  
    axiosInstance
      .delete('/delete-song', {
        data: songData,
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
        setShowSuccessAlert(true);
        setShowFailureAlert(false);
      })
      .catch((error) => {
        console.log(error.response);
        setShowSuccessAlert(false);
        if (error.response && error.response.status === 404) {
          setShowFailureAlert(true);
        } else {
          // Handle other errors (e.g., network error)
          // You can display a generic failure message or handle the error as needed
          console.log(error);
        }
      });
  };
  


  const handleAlert = () => {
    setShowSuccessAlert(false);
    setShowFailureAlert(false);
    if (type === "add") {
      handleAddSong();
    } else if (type === "remove") {
      handleDeleteSong();
    }
  };

  return (
    <div>
      <div className="formContainer">
        {type === "add" && <h1>Add New Song</h1>}
        {type === "remove" && <h1>Remove Song</h1>}
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text
            style={{ height: "50px" }}
            id="inputGroup-sizing-default"
          >
            Song Artist
          </InputGroup.Text>
          <Form.Control
            id="artistName"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text
            style={{ height: "50px" }}
            id="inputGroup-sizing-default"
          >
            Song Name
          </InputGroup.Text>

          <Form.Control
            id="songName"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        {(type === "add" || type === "update") && (
          <InputGroup className="mb-3">
            <InputGroup.Text
              style={{ height: "200px" }}
              id="inputGroup-sizing-default"
            >
              Song Lyrics
            </InputGroup.Text>

            <Form.Control
              id="songLyrics"
              as="textarea"
              rows={6}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            style={{ flex: "1", marginRight: "10px", height: "40px" }}
            onClick={handleAlert}
          >
            {buttonText}
          </Button>
          <Button
            style={{ flex: "1", height: "40px" }}
            variant="danger"
            onClick={handleCancelClick}
          >
            {" "}
            Cancel{" "}
          </Button>
        </div>

        <br></br>
        {showSuccessAlert && (
          <Alert
            variant="success"
            onClose={() => setShowSuccessAlert(false)}
            dismissible
          >
            Success.
          </Alert>
        )}
        {showFailureAlert && (
          <Alert
            variant="danger"
            onClose={() => setShowFailureAlert(false)}
            dismissible
          >
            Failure. Please try again.
          </Alert>
        )}
      </div>
    </div>
  );
}
