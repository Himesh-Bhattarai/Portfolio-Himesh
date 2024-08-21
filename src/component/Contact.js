import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useState, useEffect, } from 'react';
import Preloader from './Preloader';
import MyLocMap from './MyLocMap';

export default function Contact({ profileImage, intervalforpp} ) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
               <Preloader isLoading={loading} />

         <div className="whole-container" style={{ display: "flex" }}>
        {/* Left-side menu */}
        <div className="menu-container">
        <Menu profileImage={profileImage} intervalforpp={intervalforpp} />
        </div>
        {/* Main content area */}
        <div className="content-container" >
        <section id="contact" className="contact section dark-background">
  <div className="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <p>If you have any questions or need further information, feel free to reach out to me through any of the methods below.</p>
  </div>
  
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="row gy-4">
      
      <div className="col-lg-5">
        <div className="info-wrap">
          
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Address</h3>
              <p>Kathmandu, New Baneshwor</p>
            </div>
          </div>
          
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Phone</h3>
              <p>+977 9806352021</p>
            </div>
          </div>
          
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email</h3>
              <p>himesh.hcb@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div>
              <h3>My Location</h3>
              <MyLocMap />
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="col-lg-7">
        <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-4">
            
            <div className="col-md-6">
              <label htmlFor="name-field" className="pb-2">Your Name</label>
              <input type="text" name="name" id="name-field" className="form-control" required />
            </div>
            
            <div className="col-md-6">
              <label htmlFor="email-field" className="pb-2">Your Email</label>
              <input type="email" className="form-control" name="email" id="email-field" required />
            </div>
            
            <div className="col-md-12">
              <label htmlFor="subject-field" className="pb-2">Subject</label>
              <input type="text" className="form-control" name="subject" id="subject-field" required />
            </div>
            
            <div className="col-md-12">
              <label htmlFor="message-field" className="pb-2">Message</label>
              <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
            </div>
            
            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
            
          </div>
        </form>
      </div>
      
    </div>
  </div>
  
  <div>
    <Link to="/" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"></i>
    </Link>
  </div>
  
</section>

        </div>
      </div>
    </>
  );
}
