// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import NavbarLink from './navbarLink';
import Logout from './logout';
import Login from './login';

const mapStateToProps = state => ({
  actualPath: state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.pathname,
  user: state.auth.user
});

const NavBar = ({actualPath, user}) => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
        </button>
        <Link to="/" className="navbar-brand">FoodPlus</Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <NavbarLink path="/" actualPath={actualPath}>
            <a>Inicio</a>
          </NavbarLink>
          <NavbarLink path="/create" actualPath={actualPath}>
            <a>Nueva pregunta</a>
          </NavbarLink>
          <li className="dropdown">
            { user ?
              <a>
                <span className="dropdown-toggle" data-toggle="dropdown" role="button">¡Bienvenido {user.login}!</span>
                <ul className="dropdown-menu">
                  <NavbarLink path="/plate" actualPath={actualPath}>
                    <li><a>Platos</a></li>
                  </NavbarLink>
                  <li><Logout /></li>
                </ul>
              </a>
              : <Login />}
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default connect(mapStateToProps)(NavBar);
