import React,{useEffect} from 'react'
import Footer from '../../Components/Footer/Footer.jsx'
import './Home.css'
import CTA from '../../assets/cta-banner.jpg'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import JobQuery from '../../Components/JobQuery/JobQuery.jsx'
import Loan from '../../Components/Forms/Loan.jsx'
import CreditCard from '../../Components/Forms/CreditCard.jsx'
import Realestate from '../../Components/Forms/RealEstate.jsx'
import Savings from '../../Components/Forms/Savings.jsx'
import VehicleInsurance from '../../Components/Forms/Vechicle.jsx'
import OtherInsurance from '../../Components/Forms/OtherInsurances.jsx'
import { useParams } from 'react-router-dom';

const Home = () => {
  const { referralToken } = useParams();


  useEffect(() => {
    // console.log('Referral Token:', referralToken);
  }, [referralToken]);


  return (
    <>
{/* <div className="banner-slides">
  which demostatrtes the different services
</div>

<div className="about-us-section">
  Who we are it illustartes all about our organisation
</div> */}

    <h2 className='service-h2'>Services we provide</h2>
<div className="our-services">
  
  <div className="loans">
    <div className="row">
      <div className="col-xxl col-xl col-md col-lg">
        <div className="loan-leads">
        <h2 className='cta-title-service'>Looking for a Loan?</h2>
    <p className='cta-line-service'>Whether you need funds for a new home, a car, or a personal project, we've got you covered. Our competitive rates and flexible terms make borrowing easy and affordable.</p>
    <Loan/>

        </div>
      </div>
    </div>
  </div>

  <div className="credit-cards">
  <div className="row">
  <div className="col-xxl col-xl col-md col-lg">
    <h2 className='cta-title-service'>Find the Perfect Credit Card for You</h2>
    <p className='cta-line-service'>Unlock the power of financial flexibility with our range of credit cards. Whether you're looking for cashback rewards, travel perks, or low interest rates, we have a card to suit your lifestyle and spending habits.</p>
    <CreditCard/>
  </div>
</div>

  </div>
  <div className="real-estate">
    <div className="row">
    <div className="col-xxl col-xl col-md col-lg">
  <h2  className='cta-title-service'>Discover Your Dream Home</h2>
  <p  className='cta-line-service'>Explore our wide range of properties and find the perfect one for you.</p>
  <Realestate/>
</div>
    </div>
  </div>
  <div className="savings">
    <div className="row">
    <div className="col-xxl col-xl col-md col-lg">
    <h2  className='cta-title-service'>Start Building Your Financial Future Today!</h2>
    <p  className='cta-line-service'>Explore a wide range of savings and investment options tailored to your needs.</p>
    <Savings/>

  </div>
  


    </div>
  
  
</div>
<div className="vechicle">

  <div className="row">
  <div className="col-xxl col-xl col-md col-lg">
  <h2 className='cta-title-service'>Get Your Vehicle Insured Today!</h2>
  <p className='cta-line-service'>Protect your vehicle with comprehensive insurance coverage tailored to your needs.</p>
  <VehicleInsurance/>

</div>
  </div>
 

 
</div>

<div className="otherinsurances">
  <div className="row">
    <div className="col-xxl col-xl col-md col-lg">
      <h2 className='cta-title-service'>Explore Other Insurance Options</h2>
      <p className='cta-line-service'>Discover a range of insurance policies to safeguard your assets and future.</p>
      <OtherInsurance/>

    </div>
  
  </div>
</div>

</div>





<div className="careers">
  <JobQuery/>
</div>
{/* <div className="cta-banner">
  <img src={CTA} alt="" />
  <div class="cta-content">
      <h2>Apply for Our Services</h2>
      <p>Take the first step towards benefiting from our premium services. Apply now to get started!</p>
      <button>Apply Now</button>
      </div>
  </div> */}
    </>
  )
}

export default Home