import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom'; 
import './Forms.css';

const API_URL = "https://backend-api-u4m5.onrender.com" || "http://localhost:4040";

const CreditCard = () => {
  const initialFormData = {
    name: '',
    mobile: '',
    alternate_number: '',
    Place: '',
    District: ''
  };

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { referralId } = useParams(); 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/services/creditcard/${referralId}`, formData); 
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
      <h3 onClick={handleOpen} className='click-text'>Credit card</h3>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for CreditCard</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} style={{ marginBottom: "10px" }} />
            <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} style={{ marginBottom: "10px" }} />
            <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number} onChange={handleChange} style={{ marginBottom: "10px" }} />
            <TextField fullWidth label="Place" name="place" value={formData.Place} onChange={handleChange} style={{ marginBottom: "10px" }} />
            <TextField fullWidth label="District" name="district" value={formData.District} onChange={handleChange} style={{ marginBottom: "10px" }} />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit'>Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreditCard;
