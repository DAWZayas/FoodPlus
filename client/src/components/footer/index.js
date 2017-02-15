import React from 'react';

import {Notifications} from '../notifications';
import style from '../../css/style.css';
import '../../css/font-awesome.css';

// <Notifications />
const Footer = () => (
  <footer className="row">
    <div className="col-md-4">
      <h4 className={style.dashedLink}><span className="glyphicon glyphicon-globe" /> Where we are</h4>
      <div className={style.weare}>
        <p><span className="glyphicon glyphicon-home" /> Street nowhere 13</p>
        <p><span className="glyphicon glyphicon-earphone" /> +34 912 010 010</p>
        <p><span className="glyphicon glyphicon-envelope" /> restaurant@foodplus.com</p>
      </div>
    </div>
    <div className="col-md-4">
      <h4 className={style.dashedLink}><span className="glyphicon glyphicon-link" /> Useful links</h4>
      <div className={style.weare}>
        <p><span className="glyphicon glyphicon-menu-right" /> Work with us</p>
        <p><span className="glyphicon glyphicon-menu-right" /> About us</p>
        <p><span className="glyphicon glyphicon-menu-right" /> Our season pass</p>
      </div>
    </div>
    <div className="col-md-4">
      <h4 className={style.dashedLink}>Follow us!</h4>
      Facebook Twitter Instagram
    </div>
  </footer>
);
export default Footer;
