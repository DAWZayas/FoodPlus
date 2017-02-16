import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({

});

const ControlPanel = ({user}) => (
  <section className="row">
    <div className="col-md-12">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Your profile {user.login}</h3>
        </div>
        <div className="panel-body">
          <div className="btn-group btn-group-lg" role="group" aria-label="...">
            <button type="button" className="btn btn-default"><Link to="/createplate">Create</Link></button>
            <button type="button" className="btn btn-default"><Link to="/updateplate">Update</Link></button>
            <button type="button" className="btn btn-default"><Link to="/deleteplate">Delete</Link></button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Manage Plates</h3>
        </div>
        <div className="panel-body">
          <div className="btn-group btn-group-lg" role="group" aria-label="...">
            <button type="button" className="btn btn-default"><Link to="/createplate">Create</Link></button>
            <button type="button" className="btn btn-default"><Link to="/updateplate">Update</Link></button>
            <button type="button" className="btn btn-default"><Link to="/deleteplate">Delete</Link></button>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
