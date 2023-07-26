import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Container, Paper } from '@mui/material';
import { loginUser } from './api/';
import { styled } from '@mui/material/styles';

const GreenLoginButton = styled(Button)({
  backgroundColor: '#33b249',
  color: 'white',
  '&:hover': {
    backgroundColor: '#4CAF50',
  },
});

const BlueRegisterButton = styled(Button)({
  backgroundColor: '#5783db',
  color: 'white',
  '&:hover': {
    backgroundColor: '#4681f4',
  },
});

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password }); // Use the loginUser function
      console.log(response);
      if (response.data.success) {
        navigate('/dashboard'); // Navigate to the dashboard after successful login
      } else {
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the register page when the button is clicked
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
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
        </form>
        <div style={{ marginTop: '1rem' }}>
          <GreenLoginButton
            variant="contained"
            fullWidth
            onClick={handleLogin} // Call the handleLogin function when the button is clicked
          >
            Login
          </GreenLoginButton>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <BlueRegisterButton
            variant="contained"
            fullWidth
            onClick={handleRegister} // Call the handleRegister function when the button is clicked
          >
            Register
          </BlueRegisterButton>
        </div>
      </Paper>
    </Container>
  );
}

export default LoginPage;
