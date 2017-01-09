// npm packages
import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router';
import {connect} from 'react-redux';

// our packages
//import {getAllQuestions, answerQuestion} from '../../store/actions';

import Menus from '../../components/menus';

const Menu = ({Menus}) =>{
  return (    
      <div className="container-fluid container-full-height">
      //<Menus />
      <div className="col-xs-12 lunch">
          <div className="caption">
            <br>Lunch</br>
            <small>To continue the day</small>
          </div>    
        </div>      
      <ul>
        <li className="item" id="item1">1</li>
        <li className="item" id="item2">2</li>
        <li className="item" id="item3">3</li>
        <li className="item" id="item4">4</li>
        <li className="item" id="item5">5</li>
      </ul>      
      </div>   
    
  );
};
