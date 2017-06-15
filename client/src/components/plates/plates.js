import React, {Component} from 'react';
import {Link} from 'react-router';
import DeletePlateFn from '../modals/deleteplate';
import UpdatePlate from '../modals/updateplate';

class Plate extends Component {

  render() {
    const {plate} = this.props;
    return (
      <li className="list-group-item">
        <div className="btn-group pull-right" role="group" aria-label="...">
          <DeletePlateFn plateId={plate.id} />
          <UpdatePlate
            id={plate.id}
            name={plate.name}
            ingredients={plate.ingredients}
            urlimage={plate.urlimage}
          />
        </div> {plate.name}
        <div className="clearfix" />
      </li>
    );
  }
}
export default Plate;
