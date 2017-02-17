import React from 'react';

import {Notifications} from '../notifications';

// <Notifications />
const Footer = () => (
  <footer className="row">
    <Notifications />
    <div className="col-md-4">
      <h4 className="dashed-link"><span className="glyphicon glyphicon-globe" /> Where we are</h4>
      <div className="we-are">
        <p><span className="glyphicon glyphicon-home" /> Street nowhere 13</p>
        <p><span className="glyphicon glyphicon-earphone" /> +34 912 010 010</p>
        <p><span className="glyphicon glyphicon-envelope" /> restaurant@foodplus.com</p>
      </div>
    </div>
    <div className="col-md-4">
      <h4 className="dashed-link"><span className="glyphicon glyphicon-link" /> Useful links</h4>
      <div className="we-are">
        <p><span className="glyphicon glyphicon-menu-right" /> Work with us</p>
        <p><span className="glyphicon glyphicon-menu-right" /> About us</p>
        <p><span className="glyphicon glyphicon-menu-right" /> Our season pass</p>
      </div>
    </div>
    <div className="col-md-4">
      <h4 className="dashed-link"><span className="fa fa-star" /> Follow us!</h4>
        <ul className="social-networks">
          <li><a href="#"><span className="fa fa-twitter" /></a></li>
          <li><a href="#"><span className="fa fa-instagram" /></a></li>
          <li><a href="#"><span className="fa fa-facebook" /></a></li>
        </ul>
    </div>
  </footer>
);
export default Footer;
