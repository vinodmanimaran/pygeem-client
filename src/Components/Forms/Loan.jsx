import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css';
import { useParams } from 'react-router-dom';

const API_URL = "https://backend-api-u4m5.onrender.com" || "http://localhost:4040";


const Loan = () => {
  const {referralId}=useParams()
  const initialFormData = {
    name: '',
    mobile: '',
    alternate_number: '',
    amount: '',
    place: '',
    district: '',
    loan_type: ''
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
      const response = await axios.post( `${API_URL}/services/loans/${referralId}`, formData);
      toast.success('Form submitted successfully');
      handleClose(); 
      setFormData(initialFormData);
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <div>
      <h3 onClick={handleOpen} className='click-text'>Loans</h3>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for Loan</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Amount" name="amount" type="number" value={formData.amount} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Place" name="place" value={formData.place} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="District" name="district" value={formData.district} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField
            fullWidth
            select
            label="Loan Type"
            name="loan_type"
            value={formData.loan_type}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          >
            {['Home Loan', 'Personal Loan', 'Business Loan', 'Loan against Property', 'Vehicle Loan', 'Vehicle Refinance', 'Gold Loan', 'Others'].map((option) => (
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

export default Loan;
