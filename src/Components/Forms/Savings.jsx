import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css';
import {useParams} from 'react-router-dom'


const API_URL = import.meta.env.VITE_API || "http://localhost:4040";


const Savings = () => {
  const {referralId}=useParams()
  const initialFormData = {
    name: '',
    mobile: '',
    alternate_number: '',
    Place: '',
    District: '',
    savingamount:''
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
      const response = await axios.post(`${API_URL}/services/savinginvestment/${referralId}`, formData);
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
      <h3 onClick={handleOpen} className='click-text'> MicroSavings & Investments</h3>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for Micro Savings & Investments</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name || ''} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile || ''} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number || ''} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Place" name="Place" value={formData.Place || ''} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="District" name="District" value={formData.District || ''} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Estimated Saving Amount" name="savingamount" value={formData.savingamount || ''} onChange={handleChange} style={{marginBottom:"10px"}} />

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
