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

      <a onClick={handleLoginClick}> Login</a>

  );
};

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
