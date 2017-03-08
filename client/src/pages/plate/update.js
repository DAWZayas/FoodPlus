import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getThePlate} from '../../store/actions';

const mapStateToProps = state => ({
  plate: state.plates.plate,
});

const mapDispatchToProps = dispatch => ({
  fetchPlate: params => dispatch(getThePlate(params)),
});

class UpdatePlate extends Component {
  componentWillMount() {
    const {fetchPlate, params} = this.props;
    fetchPlate({id: params.id});
  }
  render() {
    const {plate} = this.props;
    return (
      <div className="row container-body">
        <div className="col-md-6">
          <a className="thumbnail">
            <img src={plate.urlimage} alt="plate" />
          </a>
          <div className="caption-f">Tab for change the image</div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="inputName">Plate name:</label>
            <input type="text" className="form-control" id="inputName" defaultValue={plate.name} />
          </div>
          <div className="form-group">
            <label htmlFor="inputingredients">Plate ingredients:</label>
            <input type="text" className="form-control" id="inputName" defaultValue={plate.ingredients} />
          </div>
          <button type="submit" className="btn btn-success">Update plate</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePlate);
