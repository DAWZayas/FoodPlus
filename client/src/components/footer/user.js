import React from 'react';
import {Link} from 'react-router';
import SendTestimonial from '../modals/sendtestimonial';

const FooterUser = () => (
  <div className="footer-menu">
    <Link to="booking"><span className="fa fa-address-book-o footer-menu-element" /></Link>
    <SendTestimonial />
  </div>
);
export default FooterUser;
