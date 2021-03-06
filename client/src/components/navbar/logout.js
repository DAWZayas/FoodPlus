import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {logoutAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
  onLogoutClick: () => dispatch(logoutAction()),
});

const Logout = ({onLogoutClick}) => {
  const handleLogoutClick = (e) => {
    e.preventDefault();
    onLogoutClick();
  };

  return (
    <a href="#" onClick={handleLogoutClick}>
      <span className="glyphicon glyphicon-off" /> Logout
    </a>
  );
};

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Logout);
