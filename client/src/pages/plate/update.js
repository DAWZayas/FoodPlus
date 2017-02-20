import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getThePlate} from '../../store/actions';

const mapStateToProps = state => ({
  plate: state.plates.thePlate,
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
    console.log(plate);
    return (
      <div className="row">
        <div className="form-group">
          <label htmlFor="inputName">Plate name:</label>
          <input type="text" className="form-control" id="inputName" defaultValue="{plate.name}" />
        </div>
        <div className="form-group">
          <label htmlFor="inputingredients">Plate ingredients:</label>
          <input type="text" className="form-control" id="inputName" defaultValue="{plate.ingredients}" />
        </div>
        <button type="submit" className="btn btn-success">Update this plate</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePlate);
