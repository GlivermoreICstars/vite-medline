import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function FullWidthTextField2() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Username" id="fullWidth" />
      <TextField fullWidth label="Enter Password" id="fullWidth" />
      
    </Box>
  );
}