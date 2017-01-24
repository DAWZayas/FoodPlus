import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  plate: state.plates
});

const viewAllPlates = ({plate}) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="thumbnail">
          <img src="..." alt="..." />
          <div className="caption">
            <h3>{plate.name}</h3>
            <p>{plate.ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(viewAllPlates);
