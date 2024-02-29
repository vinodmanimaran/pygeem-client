import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css';


const API_URL="https://backend-api-u4m5.onrender.com"


const Savings = () => {
  const initialFormData = {
    name: '',
    mobile: '',
    alternate_number: '',
    place: '',
    district: ''
  };

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/services/savinginvestment`, formData);
      // Handle successful submission
      console.log('Form submitted:', response.data);
      toast.success('Form submitted successfully');
      handleClose(); // Close dialog on successful submission
      setFormData(initialFormData); // Reset form fields
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>Apply Here</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for Micro Savings & Investments</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Place" name="place" value={formData.place} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="District" name="district" value={formData.district} onChange={handleChange} style={{marginBottom:"10px"}} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Savings;
