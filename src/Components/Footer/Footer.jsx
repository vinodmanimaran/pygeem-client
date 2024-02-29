import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Footer = () => {
  const position = [51.505, -0.09];

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-xxl-4 col-xl-4  col-lg-4 col-md-6">
            <div className="footer-section">
              <h3 className="footer-heading">About Us</h3>
              <p className="footer-description">Welcome to PEEJIYEM, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <div className="services-footer">
              <h3 className="footer-heading">Our Services</h3>
              <ul className="service-list">
                <li><p>Loans</p></li>
                <li><p>Credit Cards</p></li>
                <li><p>Real Estate</p></li>
                <li><p>Savings & Investments</p></li>
                <li><p>Other Insurances</p></li>
                <li><p>Vehicle Insurances</p></li>
              </ul>
            </div>
              
            </div>
          </div>
          <div className=" col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="footer-section">
              <h3 className="footer-heading">Contact Us</h3>
              <p className="footer-info">Email: info@example.com</p>
              <p className="footer-info">Phone: 123-456-7890</p>

              <div className="map">
                <div className="map-container">
                  <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "200px", width: "100%", borderRadius: "10px" }}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      className='img'
                    />
                    <Marker position={position}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
           
          </div>
          <div className=" col-xxl-4 col-lg-4 col-xl-4 ">
            <div className="footer-section">
              <h3 className="footer-heading">Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaFacebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="newsletter">
                <div className="row">
                    <div className="col-12 col-xxl-12 col-xl-12 col-md-12 ">
                    <h3 className="footer-heading">Subscribe to Our Newsletter</h3>

                    </div>
                </div>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" className="newsletter-input" />
                <button type="submit" className="newsletter-button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="col text-center">
            <p className="copyright">&copy; {new Date().getFullYear()} PEEJIYEM. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
