import {login, register, logout} from './auth';
import {addNotification} from './notifications';
import {helloWorld} from './helloworld';
import {getAllQuestions, answerQuestion, createQuestion} from './questions';
import {createPlate, getAllPlates, getThePlate, deletePlate} from './plate';

export default [
  // auth
  login,
  register,
  logout,
  addNotification,
  // hello world
  helloWorld,
  // questions
  getAllQuestions,
  answerQuestion,
  createQuestion,
  // Plates
  createPlate,
  getAllPlates,
  getThePlate,
  deletePlate,
];
