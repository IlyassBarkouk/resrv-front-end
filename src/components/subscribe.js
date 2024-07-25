import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Subscribe() {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    // Perform subscription logic here
    // After successful subscription, navigate to the login page
    navigate('/');
  };

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <h2>Crèer un compte</h2>
      <TextField label="entrez votre Email" color="secondary" focused />
      <TextField label="entrez votre Mot de passe" color="secondary" focused />
      <TextField label="Confirmez votre mot de passe" color="secondary" focused /> 
      <Button variant="contained" color="secondary" onClick={handleSubscribe}>Créer</Button>
    </Box>
  );
}
