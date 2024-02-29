import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css';


const API_URL="https://backend-api-u4m5.onrender.com"


const Insurance = () => {
  const initialFormData = {
    name: '',
    mobile: '',
    alternate_number: '',
    place: '',
    district: '',
    insurance_type: ''
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
      const response = await axios.post(`${API_URL}/services/insurance`, formData);
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
        <DialogTitle>Apply for Insurance</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Place" name="place" value={formData.place} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="District" name="district" value={formData.district} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField
            fullWidth
            select
            label="Insurance Type"
            name="insurance_type"
            value={formData.insurance_type}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          >
            {['Health Insurance', 'Life Insurance', 'Global Insurance', 'Others'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Insurance;
