// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our packages
import {getAllPlates} from '../../store/actions';

const mapStateToProps = state => ({
  plates: state.plates.plates,
});

const mapDispatchToProps = dispatch => ({
  fetchPlates: () => dispatch(getAllPlates()),
});

class Plate extends React.Component {

  componentWillMount() {
    this.props.fetchPlates();
  }

  render() {
    // ¿De quién está cogiendo estas propiedades?
    const {plates} = this.props;
    return (
      <div className="row">
        {plates.map(plate => (
          <div key={plate.id} className="col-sm-4">
            <div className="thumbnail">
              <img src={plate.urlimage} alt={plate.name} />
              <div className="caption">
                <h3>{plate.name}</h3>
                <p>{plate.ingredients}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Plate);
