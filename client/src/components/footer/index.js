import React from 'react';

import {Notifications} from '../notifications';
import style from '../../css/style.css';

// <Notifications />
const Footer = () => (
  <footer className="row">
    <div className="col-md-4">
      <h4><span className="glyphicon glyphicon-globe" /> Were we are</h4>
      <div className={style.weare}>
        <p><span className="glyphicon glyphicon-home" /> Streat nowhere 13</p>
        <p><span className="glyphicon glyphicon-earphone" /> +34 912 010 010</p>
        <p><span className="glyphicon glyphicon-envelope" /> restaurant@foodplus.com</p>
      </div>
    </div>
  </footer>
);
export default Footer;
