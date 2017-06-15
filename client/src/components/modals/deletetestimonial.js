import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {deleteTestimonial} from '../../store/actions';


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
  deleteTestimonial: payload => dispatch(deleteTestimonial(payload)),
});

class DeleteTestimonial extends Component {

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

    const {deleteTestimonial, testimonialId} = this.props;

    const handleDeleteTestimonial = (e) => {
      e.preventDefault();
      this.closeModal();
      this.props.deleteTestimonial({
        testimonialId,
      });
    };

    return (
      <span className="btn btn-danger">
        <span
          type="submit"
          className="glyphicon glyphicon-trash"
          onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Delete plate"
        >
          <div className="container">
            <a className="glyphicon glyphicon-remove pull-right" role="button" onClick={this.closeModal} />
            <h4>Do you want to delete this testimonial?</h4>
            <span>
              <button type="submit" className="btn btn-danger" onClick={this.closeModal} style={{marginRight: '2%'}}>
                No
              </button>
              <button type="submit" className="btn btn-success" onClick={handleDeleteTestimonial}>Yes</button>
            </span>
          </div>
        </Modal>
      </span>
    );
  }
}

export default connect(null, mapDispatchToProps)(DeleteTestimonial);
