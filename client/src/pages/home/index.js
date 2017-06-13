// npm packages
import React from 'react';
import {Link} from 'react-router';

const Home = () => (
  <div className="row main">
    <div className="col-xs-12 col-md-12 col-lg-12">
      <div className="deliver">
        <Link to="/booking" className="transparent-button">Booking</Link>
        <Link to="/login" className="transparent-button">Login</Link>
      </div>
      <div className="testimonial">
        <div className="caption-f">
          <h3><Link className="home-title" to="/testimonials">Testimonial</Link></h3>
          <p>What our customer think about us</p>
        </div>
      </div>
      <div className="reservation">
        <div className="caption-f">
          <h3><Link className="home-title "to="/reservation">Book a table</Link></h3>
          <p>Choose the best table to eat at any time you want</p>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
