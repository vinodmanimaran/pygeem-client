import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import './JobQuery.css';
import job from '../../assets/jobapply.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobQuery = () => {
  const [jobValue, setJobValue] = useState({
    name: '',
    mobile_number: '',
    alternate_number: '',
    Qualification: '',
    Experience: '',
    Country: '',
    Place: '',
    District: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJobValue({
      ...jobValue,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      if(!jobValue){
        toast.error("Enter the fields")
      }
      const res = await axios.post("http://localhost:4040/others/jobquery", jobValue);
      toast.success("Applied successfully")
      // Handle response if needed
    } catch (error) {
      toast.error(error)
      // Handle error
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>

      <div className="row">

        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-6">
        <div className="row">
  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
  <div className="job-apply-cta">
             <div className="job-content">
                <h3>Join with us</h3>
                <p>Become a part of our dynamic team. Your journey to success starts here.</p>
             </div>

      
        </div>
  </div>
</div>
          
<div className="row">
  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
  <Paper elevation={6} className='applicationcontainer' style={{borderRadius:"20px"}}>
        <form onSubmit={handleSubmit} className='job-application'>
          <div className="form-group ">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={jobValue.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="mobile_number">Mobile Number:</label>
            <input type="tel" id="mobile_number" name="mobile_number" value={jobValue.mobile_number} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="alternate_number">Alternate Number:</label>
            <input type="tel" id="alternate_number" name="alternate_number" value={jobValue.alternate_number} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Qualification">Qualification:</label>
            <input type="text" id="Qualification" name="Qualification" value={jobValue.Qualification} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Experience">Experience:</label>
            <input type="text" id="Experience" name="Experience" value={jobValue.Experience} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Country">Country:</label>
            <input type="text" id="Country" name="Country" value={jobValue.Country} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="Place">Place:</label>
            <input type="text" id="Place" name="Place" value={jobValue.Place} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="District">District:</label>
            <input type="text" id="District" name="District" value={jobValue.District} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </Paper>
  </div>
</div>
        
        </div>
        <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div className="side-img">
          <img src={job} alt=""  />

          </div>

        </div>
      </div>

     
      <div>
      </div>

      <ToastContainer/>
    </div>
  );
};

export default JobQuery;
