// npm packages
import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router';
import {connect} from 'react-redux';
//import style from './style.js';

// our packages
import {getAllQuestions, answerQuestion} from '../../store/actions';
import Question from '../../components/question';

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: _.once(() => dispatch(getAllQuestions())),
  doAnswer: payload => dispatch(answerQuestion(payload)),
});


const Home = ({fetchQuestions, doAnswer, questions}) => {
  fetchQuestions();

  return (
    /*
    <div className="container">
    <ul>
      <li className="item" id="item1">1</li>
      <li className="item" id="item2">2</li>
      <li className="item" id="item3">3</li>
      <li className="item" id="item4">4</li>
      <li className="item" id="item5">5</li>
    </ul>
    </div>
    */
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="css/darkly.min.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">

  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <div class="container-fluid container-full-height">
        <div className="row"> 
        <div className="col-xs-12 breakfast">
          <div className="caption">
            Breakfast
            <small>For begin the day</small>
          </div>          
        </div>

        <div className="col-xs-12 lunch">
          <div className="caption">
            Lunch
            <small>To continue the day</small>
          </div>    
        </div>
        <div className="col-xs-12 snack">
          <div className="caption">
            Snack
            <small>frase del snack</small>
          </div>      
        </div>
        <div className="col-xs-12 dinner">
          <div class="caption">
          Dinner
          <small>To end the day</small>
          </div>      
        </div>
        <div className="col-xs-12 alergic">
          <div className="caption">
          Alergics
          <small>frase de alergicos</small>
          </div>    
      </div>    
      </div>
      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);