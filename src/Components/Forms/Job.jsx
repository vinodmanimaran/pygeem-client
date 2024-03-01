import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css';
import { useParams } from 'react-router-dom';

const API_URL = "https://backend-api-u4m5.onrender.com" || "http://localhost:4040";


const Job = () => {
  const {referralId}=useParams()
  const initialFormData = {
    name: '',
    mobile_number: '',
    alternate_number: '',
    Qualification:'',
    Experience:'',
    Country:'',
    Place: '',
    District: ''
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
      const response = await axios.post(`${API_URL}/others/jobquery/${referralId}`, formData);
      toast.success('Form submitted successfully');
      handleClose(); 
      setFormData(initialFormData); 
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <div>
      <h3 onClick={handleOpen} className='click-text'>Job Query</h3>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Job Query</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Mobile" name="mobile_number" value={formData.mobile_number} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Qualification" name="Qualification" value={formData.Qualification} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Place" name="Place" value={formData.Place} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Experience" name="Experience" value={formData.Experience} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="District" name="District" value={formData.District} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Country" name="Country" value={formData.Country} onChange={handleChange} style={{marginBottom:"10px"}} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Job;
