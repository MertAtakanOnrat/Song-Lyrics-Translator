import axiosInstance from "../axios";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function LoginForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(''); // Add a state for the token

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    try {
      const response = await axiosInstance.post('/login', {
        username: username.value,
        password: password.value,
      });
      const { token } = response.data;

      // Store the token in localStorage or session storage
      localStorage.setItem('token', token);

        // Print the token to the console
        console.log('Token:', token);


      // Redirect to the admin control page
      navigate('/home');
    } catch (error) {
      console.error(error);
      // Handle login error, show an error message, etc.
      if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid credentials. Please check your username and password.');
      } else {
        setErrorMessage('An error occurred during login. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}
