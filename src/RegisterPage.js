// RegisterPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Container, Paper } from '@mui/material';
import { registerUser } from './api/'; // Import the registerUser function from the api/index.js file

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Use the registerUser function to send the registration data to the server
      const response = await registerUser({ username, password });
      if (response.data.message === 'User registered successfully!') {
        navigate('/'); // Navigate back to the login page after successful registration
      } else {
        alert('Error registering user. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default RegisterPage;
