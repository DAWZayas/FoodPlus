// npm packages
import React from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';

// our packages
import {getAllPlates} from '../../store/actions';
import {Plate} from '../../components/plate';

const mapStateToProps = state => ({
  plate: state.plates,
});

const mapDispatchToProps = dispatch => ({
  fetchPlates: () => dispatch(getAllPlates())
});
const viewPlates = ({plate}) => {
  return (
    <div className="container">
      <MediaQuery query="(min-width: 992px)">
        {(matches) => {
          if (matches) {
            return <Plate plates={plate} />;
          }
        }}
      </MediaQuery>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(viewPlates);
