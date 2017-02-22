import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {push} from 'react-router-redux';

import {getAllPlates, deletePlate} from '../../store/actions';

const mapStateToProps = state => ({
  plates: state.plates.plates,
});

const mapDispatchToProps = dispatch => ({
  fetchPlates: () => dispatch(getAllPlates()),
  deletePlate: payload => dispatch(deletePlate(payload)),
  backToBack: () => dispatch(push('/controlpanel')),
});

const handleDelete = (e) => {
  e.preventDefault();
  deletePlate({
    id: plates.id,
  });
  setInmediate(() => backToBack());
};
class ControlPanel extends Component {

  componentWillMount() {
    this.props.fetchPlates();

  }

  render() {
    const {plates} = this.props;
    return (
      <section className="row">
        <div className="container-body">
          <div className="col-md-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Manage Plates | <Link to="/createplate">
                  <span className="fa fa-plus-square" /> Add new plate
                  </Link>
                </h3>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  { plates.length >= 1 ?
                      plates.map(plate => (
                        <li key={plate.id} className="list-group-item">
                          <div className="btn-group" role="group" aria-label="...">
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>
                              <span className="fa fa-trash" />
                            </button>
                              <Link className="btn btn-success" to={`/updateplate/${plate.id}`}><span className="fa fa-pencil-square-o" /></Link>
                          </div> {plate.name}
                        </li>
                      ))
                  : <span>No hay platos</span> }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
