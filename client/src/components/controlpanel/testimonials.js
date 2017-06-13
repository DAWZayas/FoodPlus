import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTestimonial} from '../../store/actions';
import UpdateTestimonial from '../modals/updatetestimonial';
import DeleteTestimonial from '../modals/deletetestimonial';

const mapStateToProps = state => ({
  testimonials: state.testimonials.testimonials,
});

const mapDispatchToProps = dispatch => ({
  fetchTestimonials: () => dispatch(getTestimonial()),
});

class ControlTestimonials extends Component {

  componentWillMount() {
    this.props.fetchTestimonials();
  }

  render() {
    const {testimonials} = this.props;
    return (
      <section>
        <div className="col-md-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="fa fa-commenting-o" /> Manage Testimonials
              </h3>
            </div>
            <div className="panel-body">
              <ul className="list-group">
                { testimonials.length >= 1 ?
                    testimonials.map((testimonial, index) => (
                      <li
                        key={index}
                        className="list-group-item"
                      >
                        <div className="btn-group pull-right" role="group" aria-label="...">
                          <UpdateTestimonial
                            testimonialId={testimonial.id}
                            text={testimonial.text}
                          />
                          <DeleteTestimonial testimonialId={testimonial.id} />
                        </div>
                        {testimonial.state === 'pending' ? <span className="label label-info">Pending</span> : null}
                        {testimonial.state === 'accepted' ? <span className="label label-success">Accepted</span> : null}
                        {testimonial.state === 'denied' ? <span className="label label-danger">Denied</span> : null} From {testimonial.ownerName}
                        <div className="clearfix" />
                      </li>
                    ))
                : <span>There is not testimonials to show</span> }
              </ul>
              <button className="btn btn-default">&lt;</button> <button className="btn btn-default">&gt;</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlTestimonials);
