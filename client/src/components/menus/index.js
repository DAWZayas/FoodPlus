//hay que crear aqui el componentes que vayta pìntando las cajhas de flexbox con los menus, hay queue importarlos y exportarlos 
// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  user: state.auth.user
});
/*
const Menu = ({}) => (

	<div className="container-fluid container-full-height">
	<div className="row">	
	<div className="col-xs-12 breakfast">
		<div className="caption">
			<br>Breakfast</br>
			<small>For begin the day</small>
		</div>		
	</div>
	<div className="col-xs-12 lunch">
		<div className="caption">
			<br>Lunch</br>
			<small>To continue the day</small>
		</div>		
	</div>
	<div className="col-xs-12 snack">
		<div className="caption">
			<br>Snack</br>
			<small>frase del snack</small>
		</div>			
	</div>
	<div className="col-xs-12 dinner">
		<div className="caption">
		<br>Dinner</br>
		<small>To end the day</small>
		</div>			
	</div>
	<div className="col-xs-12 alergic">
		<div className="caption">
		<br>Alergics</br>
		<small>frase de alergicos</small>
		</div>		
	</div>		
	</div>
	</div>
	

);

export default connect(mapStateToProps)(Menu);
*/