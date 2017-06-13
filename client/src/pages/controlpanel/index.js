import React, {Component} from 'react';

import ControlPlates from '../../components/controlpanel/plates';
import ControlTestimonials from '../../components/controlpanel/testimonials';

class ControlPanel extends Component {

  render() {
    return (
      <div className="row main">
        <ControlPlates />
        <ControlTestimonials />
      </div>
    );
  }
}
export default ControlPanel;
