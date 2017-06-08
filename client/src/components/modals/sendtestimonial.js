import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';

import {sendTestimonial} from '../../store/actions';

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
  sendTestimonial: payload => dispatch(sendTestimonial(payload)),
});


class SendTestimonial extends React.Component {

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
    let modalText;
    const {sendTestimonial} = this.props;

    const handleSendTestimonial = (e) => {
      e.preventDefault();
      this.closeModal();
      const text = modalText.value;
      this.props.sendTestimonial({text});
    };

    return (
      <span>
        <button
          type="submit"
          style={{marginLeft: '10px'}}
          onClick={this.openModal}
          className="btn btn-success testimonial-button-send"
        >
          Send new testimonial
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Testimonial Modal"
        >
          <div className="container">
            <a className="glyphicon glyphicon-remove pull-right" role="button" onClick={this.closeModal} />
            <h4>What do you think about our service?</h4>
            <span>
              <textarea
                className="form-control textarea-testimonial"
                placeholder="Write here what you want"
                id="text"
                ref={(t) => { modalText = t; }}
              />
              <button
                type="submit"
                className="btn btn-danger"
                onClick={this.closeModal}
                style={{marginRight: '2%'}}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success" onClick={handleSendTestimonial}>Send</button>
            </span>
          </div>
        </Modal>
      </span>
    );
  }
}

export default connect(null, mapDispatchToProps)(SendTestimonial);
