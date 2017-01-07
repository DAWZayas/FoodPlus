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
    <div className="container">
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);