// npm packages
import React from 'react';
import {Link} from 'react-router';

const Home = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="deliver">
        <Link to="/delivery" className="transparent-button">Delivery</Link>
        <Link to="/reservation" className="transparent-button">Reservation</Link>
      </div>
      <div className="testimonial">
        <div className="caption-f">
          <h3><Link className="home-title" to="/testimonials">Testimonial</Link></h3>
          <p>What our customer think about of us</p>
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
