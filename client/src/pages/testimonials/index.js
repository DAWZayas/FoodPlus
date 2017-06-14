import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTestimonial} from '../../store/actions';
import SendTestimonial from '../../components/modals/sendtestimonial';

const mapStateToProps = state => ({
  testimonials: state.testimonials.testimonials,
});

const mapDispatchToProps = dispatch => ({
  fetchTestimonial: () => dispatch(getTestimonial()),
});

class Testimonials extends Component {

  componentWillMount() {
    this.props.fetchTestimonial();
  }

  render() {

    const {sendTestimonial, testimonials} = this.props;

    return (
      <div className="row main">
        {testimonials.length >= 1 ?
          testimonials.map((testimonial, index) => (
            testimonial.state === 'accepted' ?
              <div key={index} className="col-xs-12 col-md-6 col-lg-6">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="profile-image" />
                    <h4>{testimonial.ownerName}</h4>
                    <p className="justify-text">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            : null
          ))
        :
            <div className="alert alert-info">
              <h4><span className="glyphicon glyphicon-info-sign" />There are not testimonials to show.</h4>
            </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
