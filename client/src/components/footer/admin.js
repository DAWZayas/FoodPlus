import React from 'react';
import {Link} from 'react-router';

// <Notifications />
const FooterAdmin = () => (
  <div className="footer-menu">
    <Link to="/createplate"><span className="fa fa-cutlery footer-menu-element" /></Link>
    <Link to="/controlpanel"><span className="fa fa-sliders footer-menu-element" /></Link>
  </div>
);
export default FooterAdmin;
