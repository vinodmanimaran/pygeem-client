import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css';
import { useParams } from 'react-router-dom';


const API_URL = "https://backend-api-u4m5.onrender.com" || "http://localhost:4040";


const Realestate = () => {
  const {referralId}=useParams()
  const initialFormData = {
    name: '',
    mobile: '',
    alternate_number: '',
    purchaseOrSale: '',
    agreeOrCommercial: '',
    place: '',
    district: '',
    Estimated_value:''
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
      const response = await axios.post(`${API_URL}/services/realestate/${referralId}`, formData);
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
      <h3 onClick={handleOpen} className='click-text'>Real Estate</h3>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for Real Estate</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange}  style={{marginBottom:"10px"}}/>
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number} onChange={handleChange} style={{marginBottom:"10px"}}/>
          <TextField
            fullWidth
            select
            label="Purchase or Sale"
            name="purchaseOrSale"
            value={formData.purchaseOrSale}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          >
            {['Purchase','Sale','Others'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField fullWidth label="Agree or Commercial" name="agreeOrCommercial" value={formData.agreeOrCommercial} onChange={handleChange} style={{marginBottom:"10px"}} />
          <TextField fullWidth label="Estimated Value" name="Estimated_value" value={formData.Estimated_value} onChange={handleChange} style={{marginBottom:"10px"}} />

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
