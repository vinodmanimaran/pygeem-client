import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css'
import ApplyButton from './ApplyButton';




const Realestate = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    alternate_number: '',
    purchaseOrSale: '',
    agreeOrCommercial: '',
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
      // Check if all fields are filled out
      if (!formData.name || !formData.mobile || !formData.alternate_number || !formData.purchaseOrSale || !formData.agreeOrCommercial || !formData.place || !formData.district) {
        toast.error("Please fill out all fields");
        return;
      }

      // Call API to submit form data
      const response = await axios.post('http://localhost:4040/services/realestate', formData);

      // Display success message
      toast.success('Your application submitted successfully');

      // Close dialog
      handleClose();
    } catch (error) {
      // Display error message
      toast.error('Failed to submit Your application');
    }
  };

  return (
    <div>
<ApplyButton onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for Real Estate</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number} onChange={handleChange} style={{marginBottom:"10px"}}/>
          <TextField fullWidth label="Purchase or Sale" name="purchaseOrSale" value={formData.purchaseOrSale} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Agree or Commercial" name="agreeOrCommercial" value={formData.agreeOrCommercial} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Place" name="place" value={formData.place} onChange={handleChange}  style={{marginBottom:"10px"}}/>
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

export default Realestate;
