// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {loginAction} from '../../store/actions';

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: params => dispatch(loginAction(params)),
  navToHome: () => dispatch(push('/')),
});

const Login = ({onLoginClick, navToHome, token}) => {
  let usernameInput;
  let passwordInput;
  let rememberInput;

  const handleClick = (e) => {
    e.preventDefault();

    onLoginClick({
      login: usernameInput.value,
      password: passwordInput.value,
      remember: rememberInput.checked,
    });
  };

  if (token) {
    // TODO: figure out a better way to do nav
    setImmediate(() => navToHome());
  }

  return (
    <div className="jumbotron">
      <h2>FoodPlus portal:</h2>
      <p>Puedes identificarte aquí o <Link to="/register">registrarte</Link> si aún no eres miembro de nuestro restaurante.</p>

      <form>
        <div className="form-group">
          <label htmlFor="inputUsername">Usuario:</label>
          <input type="text" className="form-control" id="inputUsername" placeholder="Usuario" ref={(i) => { usernameInput = i; }} />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Contraseña:</label>
          <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña" ref={(i) => { passwordInput = i; }} />
        </div>
        <div className="checkbox">
          <label htmlFor="inputRemember">
            <input type="checkbox" id="inputRemember" ref={(i) => { rememberInput = i; }} />
            Recuérdame
          </label>
        </div>
        <button type="submit" className="btn btn-default" onClick={handleClick}>Login</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
