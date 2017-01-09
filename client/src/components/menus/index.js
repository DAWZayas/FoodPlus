//hay que crear aqui el componentes que vayta pìntando las cajhas de flexbox con los menus, hay queue importarlos y exportarlos 
// npm packages
import {Notifications} from '../notifications';
import React, {Component} from 'react';
import style from './style.js';


export default class Menus extends Component{
	render(){
		return(			
			<div className="row" style={style.flexcontainer}>	
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
			</div>				
			);
		}
}
//export default connect(mapStateToProps)(Menu);
