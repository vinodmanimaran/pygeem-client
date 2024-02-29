import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css'
import ApplyButton from './ApplyButton';




const Loan = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    alternate_number: '',
    amount: '',
    place: '',
    district: ''
  });

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

        if(!formData){
            toast.error("Please fill out all fields")
        }
      const response = await axios.post('http://localhost:4040/services/loans', formData);

      toast.success('Your application submitted successfully');

      handleClose();
    } catch (error) {
      toast.error('Failed to submit your application');
    }
  };

  return (
    <div>
<ApplyButton onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for Loan</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange}  style={{marginBottom:"10px"}}/>
          <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} style={{marginBottom:"10px"}}/>
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number} onChange={handleChange} style={{marginBottom:"10px"}}/>
          <TextField fullWidth label="Amount" name="amount" type="number" value={formData.amount} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Place" name="place" value={formData.place} onChange={handleChange} style={{marginBottom:"10px"}}/>
          <TextField fullWidth label="District" name="district" value={formData.district} onChange={handleChange} style={{marginBottom:"10px"}}/>
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
