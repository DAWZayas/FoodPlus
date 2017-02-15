// npm packages
import React from 'react';
import {Link} from 'react-router';

import style from '../../css/style.css';

const Home = () => (
  <div className="row">
    <div className="col-md-12">
      <div className={style.deliver}>
        <Link to="/delivery" className={style.transparentButtons}>Delivery</Link>
        <Link to="/reservation" className={style.transparentButtons}>Reservation</Link>
      </div>
      <div className={style.testimonial}>
        <div className={style.caption}>
          <h3><Link className={style.homeTitle} to="/testimonials">Testimonial</Link></h3>
          <p>What our customer think about of us</p>
        </div>
      </div>
      <div className={style.reservation}>
        <div className={style.caption}>
          <h3><Link className={style.homeTitle} to="/reservation">Book a table</Link></h3>
          <p>Choose the best table to eat at any time you want</p>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
