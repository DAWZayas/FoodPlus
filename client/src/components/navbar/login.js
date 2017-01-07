import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {loginAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  onLoginClick: () => dispatch(loginAction()),
});

const Login = ({onLoginClick}) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    onLoginClick();
  };

  return (
    <li>
      <p className="navbar-btn">
        <a className="btn btn-default" onClick={handleLoginClick}>Login</a>
      </p>
    </li>
  );
};

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);