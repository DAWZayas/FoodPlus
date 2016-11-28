// npm packages
import React from 'react';
import {Notifications} from '../components/notifications';

const style = {
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
};

export default ({children}) => (
  <div className="container">
    {children}
    <footer style={style.footer}>
      <div className="row">
        <div className="col-md-10">
          <Notifications />
        </div>
      </div>
    </footer>
  </div>
);
