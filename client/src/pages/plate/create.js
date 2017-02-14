// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import moment from 'moment';

// our packages
import {createPlate} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  doCreatePlate: payload => dispatch(createPlate(payload)),
});

const CreatePlate = ({doCreatePlate}) => {
  let plateName;
  let plateIngredients;

  const handleCreate = (e) => {
    e.preventDefault();

    const name = plateName.value;
    const ingredients = plateIngredients.value;

    doCreatePlate({name, ingredients});

    return false;
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="plateName">Plate name</label>
          <input type="text" className="form-control" id="plateName" placeholder="Plate name" ref={(n) => { plateName = n; }} />
        </div>

        <div className="form-group">
          <label htmlFor="plateIngredients">Ingredientes</label>
          <input type="text" className="form-control" id="plateIngredients" placeholder="Plate ingredients" ref={(i) => { plateIngredients = i; }} />
        </div>
        <button type="submit" className="btn btn-default" onClick={handleCreate}>Crea a new plate</button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CreatePlate);
