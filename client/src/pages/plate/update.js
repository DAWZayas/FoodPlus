import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updatePlate} from '../../store/actions';

const mapStateToProps = state => ({
  plate: state.plates.plates,
});

const mapDispatchToProps = dispatch => ({
  sendUpdate: params => dispatch(updatePlate(params)),
});

const updateThePlate = ({sendUpdate, plate}) => {
  let nameInput;
  let ingredientsInput;

  const handleClick = (e) => {
    e.preventDefault();
    sendUpdate({
      name: nameInput.value,
      ingredients: ingredientsInput.value,
    });
  };

  return (
    <div className="row">
      <div className="form-group">
        <label htmlFor="inputName">Plate name:</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          defaultValue={plate.name}
          ref={(n) => { nameInput = n; }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputingredients">Plate ingredients:</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          defaultValue={plate.ingredients}
          ref={(i) => { nameInput = i; }}
        />
        <button type="submit" className="btn btn-default" onClick={handleClick}>Update this plate</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(updateThePlate);
