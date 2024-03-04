import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Forms.css';
import { useParams } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API || "http://localhost:4040";


const VehicleInsurance = () => {
  const { referralId } = useParams();
  const initialFormData = {
    name: "",
    mobile: "",
    alternate_number: "",
    vehicle: "",
    OtherVehicle: "",
    Place: "",
    District: ""
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/services/vechicleinsurance/${referralId}`, formData);
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
      <h3 onClick={handleOpen} className='click-text'>Vehicle Insurance</h3>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Apply for Vehicle Insurance</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" name="name" value={formData.name  || ''} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Mobile" name="mobile" value={formData.mobile  || ''} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="Alternate Number" name="alternate_number" value={formData.alternate_number  || ''} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField
            fullWidth
            select
            label="Vehicle Type"
            name="vehicle"
            value={formData.vehicle  || ''}
            onChange={handleChange}
            style={{ marginBottom: "10px" }}
          >
            {["Bike", "Car", "Van", "School Bus", "Commercial vehicles", "Others"].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {formData.vehicle === "Others" && (
            <TextField fullWidth label="Specify Other Vehicle" name="OtherVehicle" value={formData.OtherVehicle  || ''} onChange={handleChange} style={{ marginBottom: "10px" }} />
          )}
          <TextField fullWidth label="Place" name="Place" value={formData.Place  || ''} onChange={handleChange} style={{ marginBottom: "10px" }} />
          <TextField fullWidth label="District" name="District" value={formData.District  || ''} onChange={handleChange} style={{ marginBottom: "10px" }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VehicleInsurance;
