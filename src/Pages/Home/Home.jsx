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


const Home = () => {
  const { referralToken } = useParams();


  useEffect(() => {
    // console.log('Referral Token:', referralToken);
  }, [referralToken]);


  return (
    <>
 <AppBar position="static">
      <Toolbar>
        <div className="logo">
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            PEEJIYEM
          </Typography>
        </div>
      </Toolbar>
    </AppBar>

 


<div className="container">
<h2 className='service-h2'>Services we provide</h2>
 <div className="our-servics">
  <div className="credit-card" style={{marginBottom:"10px"}}>
    <div className="row">
      <div className="col">
      <h2 className="cta-title-service">Credit-Card</h2>

      </div>

      <div className="col">
      <CreditCard/>

      </div>
    </div>
  </div>
  <div className="insurance" style={{marginBottom:"10px"}}>
    <div className="row">
      <div className="col">
      <h2 className="cta-title-service">Insurance</h2>

      </div>

      <div className="col">
        <Insurance/>
      </div>
    </div>
  </div>
  <div className="vehicle-insurances" style={{marginBottom:"10px"}}>
  <div className="row">
      <div className="col">
      <h2 className="cta-title-service"> Vechicle Insurance</h2>

      </div>

      <div className="col">
      <VehicleInsurance/>

      </div>
    </div>
  </div>
  <div className="loans" style={{marginBottom:"10px"}}>
  <div className="row">
      <div className="col">
      <h2 className="cta-title-service">Loans</h2>

      </div>

      <div className="col">
<Loan/>
      </div>
    </div>
  </div>
  <div className="real estate" style={{marginBottom:"10px"}}>
  <div className="row">
      <div className="col">
      <h2 className="cta-title-service">Real Estate</h2>

      </div>

      <div className="col">
<Realestate/>
      </div>
    </div>
  </div>


<div className="savings" style={{marginBottom:"10px"}}>
<div className="row">
  <div className="col">
      <h2 className="cta-title-service">Micro Savings & Investments</h2>

      </div>
      <div className="col">
        <Savings/>
      </div>
  </div>
</div>
 <div className="job-queries"style={{marginBottom:"10px"}} >
  <div className="row">
  <div className="col">
      <h2 className="cta-title-service">For Job Related Queries</h2>

      </div>
      <div className="col">
        <Job/>
      </div>
  </div>
 </div>
</div>

</div>
   







    </>
  )
}

export default Home