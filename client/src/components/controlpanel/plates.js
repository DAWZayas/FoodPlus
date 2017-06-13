import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getAllPlates} from '../../store/actions';
import DeletePlateFn from '../modals/deleteplate';

const mapStateToProps = state => ({
  plates: state.plates.plates,
});

const mapDispatchToProps = dispatch => ({
  fetchPlates: () => dispatch(getAllPlates()),
});

class ControlPlates extends Component {

  componentWillMount() {
    this.props.fetchPlates();
  }

  render() {
    const {plates} = this.props;
    return (
      <section>
        <div className="col-md-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="fa fa-cutlery" /> Manage Plates
              </h3>
            </div>
            <div className="panel-body">
              <ul className="list-group">
                { plates.length >= 1 ?
                    plates.map((plate, index) => (
                      <li key={index} className="list-group-item">
                        <div className="btn-group pull-right" role="group" aria-label="...">
                          <DeletePlateFn plateId={plate.id} />
                          <Link className="btn btn-success" to={`/updateplate/${plate.id}`}>
                            <span className="fa fa-pencil-square-o" />
                          </Link>
                        </div> {plate.name}
                        <div className="clearfix" />
                      </li>
                    ))
                : <span>There is not plates</span> }
              </ul>
              <button className="btn btn-default">&lt;</button>
              <button className="btn btn-default">&gt;</button>
              <Link className="pull-right" to="/createplate">
                <span className="btn btn-success">
                  Add new plate
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlPlates);
