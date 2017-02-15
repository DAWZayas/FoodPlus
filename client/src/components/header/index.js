// npm packages
import React from 'react';

import NavBar from '../navbar';

export default (props) => (
  <header>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <NavBar {...props} />
  </header>
);
