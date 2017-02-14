// npm packages
import React from 'react';
import {connect} from 'react-redux';

// our packages
import {getAllPlates} from '../../store/actions';
import {Plates} from '../../components/plate';

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
      <div>
        <Plates plates={plates} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Plate);
