import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert} from '@mui/material';
import "./ContactFormStyles.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); 
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic 
      console.log('Form submitted:', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    
    <form className="Form" onSubmit={handleSubmit} noValidate autoComplete="off">
    <h1 className='heading'>Send us your feedback</h1>
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        label="Message"
        name="message"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
      />
      <Button  variant="contained" color="primary" type="submit">
        Submit
      </Button>

      <Snackbar open={success}  onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>
      

      
    </form>
    </>
    
  );

  
};


export default ContactForm;
