import React,{useEffect} from 'react'
import './Home.css'
import Loan from '../../Components/Forms/Loan.jsx'
import CreditCard from '../../Components/Forms/CreditCard.jsx'
import Realestate from '../../Components/Forms/RealEstate.jsx'
import Savings from '../../Components/Forms/Savings.jsx'
import VehicleInsurance from '../../Components/Forms/Vechicle.jsx'
import { useParams } from 'react-router-dom';
import Insurance from '../../Components/Forms/Insurance.jsx'
import Job from '../../Components/Forms/Job.jsx'
import { AppBar, Toolbar, Typography } from '@mui/material';
import card from '../../assets/card.svg'
import insurance from '../../assets/insurance.svg'
import Vehicle from '../../assets/vinsurance.svg'
import loan from '../../assets/loan.svg'
import land from '../../assets/land.svg'
import invest from '../../assets/invest.svg'
import job from '../../assets/job.svg'

const Home = () => {
  const { referralToken } = useParams();


  useEffect(() => {
    // console.log('Referral Token:', referralToken);
  }, [referralToken]);


  return (
    <>

    <div className="home-page">
    <AppBar position="static">
      <Toolbar>
        <div className="logo">
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            PEEJIYEM
          </Typography>
        </div>
      </Toolbar>
    </AppBar>

 


<div className=" home-container">
  <div className="row">
    <div className="col">

    <h2 className='service-h2'>Services we provide here for you</h2>

    </div>
  </div>

  <div className="row">
    <div className="col-xxl col-xl col-lg col-md">
    <div className="creditcard" style={{marginBottom:"10px"}}>
    <div className="row">
      <div className="col service-list">
      <div className="service_logo">
        <img src={card} alt="" className='logo'/>
        </div>
        <CreditCard/>

      </div>

    </div>
  </div>
  
  <div className="insurance" style={{marginBottom:"10px"}}>
    <div className="row">
      <div className="col service-list">
      <div className="service_logo">
        <img src={insurance} alt="" className='logo'/>
        </div>
        <Insurance/>

      </div>

     
    </div>
  </div>
  <div className="vehicle-insurances" style={{marginBottom:"10px"}}>
  <div className="row">
      <div className="col service-list">
      <div className="service_logo">
        <img src={Vehicle} alt="" className='logo'/>
        </div>
        <VehicleInsurance/>

      </div>

     
    </div>
  </div>
  <div className="loans" style={{marginBottom:"10px"}}>
  <div className="row">
      <div className="col  service-list">
      <div className="service_logo">
        <img src={loan} alt="" className='logo'/>
        </div>
        <Loan/>

      </div>

    </div>
  </div>
  <div className="real estate" style={{marginBottom:"10px"}}>
  <div className="row">
      <div className="col service-list">
      <div className="service_logo">
        <img src={land} alt="" className='logo'/>
        </div>
        <Realestate/>

      </div>

      
    </div>
  </div>


<div className="savings" style={{marginBottom:"10px"}}>
<div className="row">
  <div className="col service-list">
  <div className="service_logo">
        <img src={invest} alt="" className='logo'/>
        </div>
        <Savings/>

      </div>
  </div>
</div>
 <div className="job-queries"style={{marginBottom:"10px"}} >
  <div className="row">
  <div className="col service-list">
  <div className="service_logo">
        <img src={job} alt="" className='logo'/>
        </div>
        <Job/>

      </div>
  </div>
 </div>
</div>
  </div>
 

</div>
    </div>
 
   







    </>
  )
}

export default Home