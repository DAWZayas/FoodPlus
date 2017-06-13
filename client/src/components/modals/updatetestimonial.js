import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {updateTestimonial} from '../../store/actions';

const customStyles = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(40, 39, 39, 0.7)',
    zIndex            : 4,
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


const mapDispatchToProps = dispatch => ({
  updateTestimonial: payload => dispatch(updateTestimonial(payload)),
});


class UpdateTestimonial extends Component {

  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const {updateTestimonial, testimonialId, text} = this.props;

    const handleUpdateTestimonial = (e) => {
      e.preventDefault();
      this.closeModal();
      this.props.updateTestimonial({testimonialId, state: 'accepted'});
    };
    const handleDeniedTestimonial = (e) => {
      e.preventDefault();
      this.closeModal();
      this.props.updateTestimonial({testimonialId, state: 'denied'});
    };

    return (
      <span className="btn btn-success">
        <span
          type="submit"
          className="fa fa-pencil-square-o"
          onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Testimonial Modal"
        >
          <div className="container">
            <span
              className="glyphicon glyphicon-remove pull-right"
              role="button"
              onClick={this.closeModal}
            />
            <h4>Do you wanna accept this testimonial?</h4>
            <span>
              {text}
              <div style={{marginTop: '20px'}}>
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{marginRight: '2%'}}
                  onClick={handleDeniedTestimonial}
                >
                  Denied
                </button>
                <button
                  type="submit"
                  className="btn btn-success" onClick={handleUpdateTestimonial}
                >
                  Accept
                </button>
              </div>
            </span>
          </div>
        </Modal>
      </span>
    );
  }
}

export default connect(null, mapDispatchToProps)(UpdateTestimonial);
