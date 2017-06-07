import React from 'react';
import Modal from 'react-modal';
import {doCloseQuestion} from '../../store/actions';
import {connect} from 'react-redux';


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
  doCloseQuestion: payload => dispatch(doCloseQuestion(payload)),
});


class LockQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
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

    const {doCloseQuestion, questionId} = this.props;

    const handleLockQuestion = (e) => {
      e.preventDefault();
      this.closeModal();
      this.props.doCloseQuestion({
        questionId,
      });
      //accion de bloquear la pregunta
    };

    return (
      <span>
        <button
          type="submit"
          style={{marginLeft: '10px'}}
          className="btn glyphicon glyphicon-lock"
          onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="container">
          <a className="glyphicon glyphicon-remove pull-right" role="button" onClick={this.closeModal} />
          <h4> Are you sure that you want to lock the question? </h4>
          <span>
            <button type="submit" className="btn btn-danger" onClick={this.closeModal} style={{marginRight: '2%'}}>No</button>
            <button type="submit" className="btn btn-success" onClick={handleLockQuestion}>Yes</button>
          </span>
        </div>
        </Modal>
      </span>
    );
  }
}

export default connect(null, mapDispatchToProps)(LockQuestion);
