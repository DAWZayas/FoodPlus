import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import FooterUser from './user';
import FooterAdmin from './admin';
import {Notifications} from '../notifications';

const mapStateToProps = state => ({
  user: state.auth.user,
});

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
    };
  }

  render() {
    const {user} = this.props;
    return (
      <div>
        <Notifications />
        {user !== null ?
          <footer className="row">
            {user.level === 'admin' ?
              <FooterAdmin />
            :
              <FooterUser />
            }
          </footer>
        : null}
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(Footer);
