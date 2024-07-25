import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const ContactInfoStyles= ({ title, address, phone, email }) => {
  return (
    <Paper className="detailPane" elevation={3} style={{ marginTop: '20px', padding: '20px',textAlign: "center" }} >
      <Typography align='center' variant="h6" gutterBottom>{title}</Typography>
      
      <Box display="flex" alignItems="center" mb={1}>
        <HomeIcon style={{ marginRight: '8px' }} />
        <Typography>{address}</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
        <PhoneIcon style={{ marginRight: '8px' }} />
        <Typography>{phone}</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={1}>
        <EmailIcon style={{ marginRight: '8px' }} />
        <Typography>{email}</Typography>
      </Box>
    </Paper>
  );
}

export default ContactInfoStyles;
