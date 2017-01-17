// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import NavbarLink from './navbarLink';
import Logout from './logout';
import Login from './login';

const navBarStyle = {
      color: 'red',
      backgroundColor: 'black',
      bottom: 0,
      margin: "2% 0 0 0",
    };
const textStyle = {
  fontSize: '15',
  color:'white',
}

const mapStateToProps = state => ({
  actualPath: state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.pathname,
  user: state.auth.user
});

const NavBar = ({actualPath, user}) => (
  <nav className="navbar navbar-default" style={navBarStyle}>
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
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">FoodPlus</Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <NavbarLink path="/" actualPath={actualPath}>
            <a style={textStyle}>Ver preguntas</a>
          </NavbarLink>
          <NavbarLink path="/create" actualPath={actualPath}>
            <a style={textStyle}>Nueva pregunta</a>
          </NavbarLink>
          <NavbarLink path="/plate" actualPath={actualPath}>
            <a style={textStyle}>Platos</a>
          </NavbarLink>
          <NavbarLink path="/menu" actualPath={actualPath}>
            <a style={textStyle}>Menú</a>
          </NavbarLink>
        </ul>
        { user ? <ul className="nav navbar-nav navbar-right">
         <li><a>¡Bienvenido {user.login}!</a></li>
          <Logout />
        </ul> :<Login /> }
      </div>
    </div>
  </nav>
);

export default connect(mapStateToProps)(NavBar);
