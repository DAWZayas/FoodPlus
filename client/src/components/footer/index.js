// npm packages
//import React from 'react';

import {Notifications} from '../notifications';
import React, {Component} from 'react';
import style from './style.js';
import UlCompany from './ulCompany';
import UlOther from './ulOther';
import UlLegal from './ulLegal';
import UlSocial from './ulSocial';

/*
const style = {
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
};

export default () => (
  <footer style={style.footer}>
    <div className="row">
      <div className="col-xs-11 col-sm-9 col-md-7">
        <Notifications />
      </div>
    </div>
  </footer>
);
*/

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer" style={style.footer}>
        <div className="container">
          <nav className="row">
            <div className="col-xs-12 col-md-2">
              <div className="footer-logo">
                <a href="./">
                  <img src="./logo.png" alt="LOGO" />
                </a>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <p className="nav-title">Company</p>
              <UlCompany style={style.a} />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <p className="nav-title">Otro</p>
              <UlOther style={style.a} />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <p className="nav-title">Privacy Statement</p>
              <UlLegal style={style.a} />
            </div>
            <div className="col-xs-12 col-md-4 col-social">
              <UlSocial style={style.a} />
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}
