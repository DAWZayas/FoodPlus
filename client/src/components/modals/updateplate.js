import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {updatePlate} from '../../store/actions';

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
  updatePlate: payload => dispatch(updatePlate(payload)),
});


class UpdatePlate extends Component {

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
    let modalName;
    let modalIngredients
    let modalImg;
    const {updatePlate, id, name, ingredients, urlimage} = this.props;

    const handleUpdatePlate = (e) => {
      e.preventDefault();
      this.closeModal();
      const name = modalName.value;
      const ingredients = modalIngredients.value;
      const urlimage = modalImg.value;
      this.props.updatePlate({id, name, ingredients, urlimage});
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
            <div className="form-group">
              <label htmlFor="inputName">Plate name:</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                defaultValue={name}
                ref={(n) => { modalName = n; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputName">Ingredients:</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                defaultValue={ingredients}
                ref={(i) => { modalIngredients = i; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputName">URL-Image</label>
              <input type="text" className="form-control" id="inputName" defaultValue={urlimage} ref={(img) => { modalImg = img; }}/>
            </div>
              <div style={{marginTop: '20px'}}>
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{marginRight: '2%'}}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success" onClick={handleUpdatePlate}
                >
                  Update
                </button>
              </div>
            </span>
          </div>
        </Modal>
      </span>
    );
  }
}

export default connect(null, mapDispatchToProps)(UpdatePlate);
