import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getMorePlates} from '../../store/actions';
import Plate from '../plates/plates';

const mapStateToProps = state => ({
  hasMore: state.plates.hasMore,
  loadingMore: state.plates.status === 'loading',
  plates: state.plates.plates,
});

const mapDispatchToProps = dispatch => ({
  loadMore: payload => dispatch(getMorePlates(payload)),
});

class ControlPlates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plateIndex: 0,
    };
  }
  componentDidMount() {
    const {plates, loadMore, filtered} = this.props;
    loadMore({
      skip: plates.length,
      limit: 5,
    });
  }

  render() {
    const {plates, filtered, hasMore, loadMore, loadingMore} = this.props;
    const {plateIndex} = this.state;
    const plate = plates[plateIndex];

    const handleClick = (inc) => {
      if (hasMore && plateIndex + inc >= plates.length) {
        loadMore({
          skip: plates.length,
          limit: 5,
        });
      }
      this.setState({
        plateIndex: plateIndex + inc,
      });

      return false;
    };
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

                 {plates.length >= 1 ?
                    loadingMore ? 'Cargando' : plate ?
                      <Plate key={plate.id} plate={plate} />
                    : plates.length > 0 ? 'No more plates' : null
                : <span>There is not plates</span>}

              </ul>
              <button
                type="button"
                className="btn btn-default"
                disabled={plateIndex === 0}
                onClick={() => handleClick(-1)}
              >
                <span className="glyphicon glyphicon-arrow-left" />
              </button>
              <button
                type="button"
                className="btn btn-default"
                disabled={loadingMore || (!hasMore && plateIndex >= plates.length)}
                onClick={() => handleClick(+1)}
              >
                <span className="glyphicon glyphicon-arrow-right" />
              </button>
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
