import * as ActionTypes from '../actionTypes';

let nextNotificationId = 0;

export const helloWorldAction = () => ({
  type: ActionTypes.HELLO_WORLD,
});

export const loginAction = payload => ({
  type: ActionTypes.DO_LOGIN,
  payload,
});
export const logoutAction = () => ({
  type: ActionTypes.DO_LOGOUT,
});
export const registerAction = payload => ({
  type: ActionTypes.DO_REGISTER,
  payload,
});

/**
 * Add a notification to the store.
 * @param {String} text - text to display
 * @param {String} alertType - Bootstrap alert style: success | info | warning | danger
*/
export const addNotificationAction = ({text, alertType}) => ({
  type: ActionTypes.ADD_NOTIFICATION,
  payload: {
    id: nextNotificationId++,
    text,
    alertType,
  },
});

/**
 * Remove a notification from the store.
 * @param {String} notificationId
*/

export const removeNotificationAction = notificationId => ({
  type: ActionTypes.REMOVE_NOTIFICATION,
  payload: {notificationId},
});

export const getAllQuestions = () => ({
  type: ActionTypes.GET_ALL_QUESTIONS,
});

export const answerQuestion = payload => ({
  type: ActionTypes.ANSWER_QUESTION,
  payload,
});

export const createQuestion = payload => ({
  type: ActionTypes.CREATE_QUESTION,
  payload,
});

/*
    All actions about PLATES
*/
export const createPlate = payload => ({
  type: ActionTypes.CREATE_PLATE,
  payload,
});

export const getAllPlates = () => ({
  type: ActionTypes.GET_ALL_PLATES,
});

export const getThePlate = payload => ({
  type: ActionTypes.GET_THE_PLATE,
  payload,
});

export const updatePlate = payload => ({
  type: ActionTypes.UPDATE_PLATE,
  payload,
});

export const deletePlate = payload => ({
  type: ActionTypes.DELETE_PLATE,
  payload,
});

export const getTestimonial = payload => ({
  type: ActionTypes.GET_TESTIMONIAL,
  payload,
});

export const sendTestimonial = payload => ({
  type: ActionTypes.SEND_TESTIMONIAL,
  payload,
});

export const updateTestimonial = payload => ({
  type: ActionTypes.UPDATE_TESTIMONIAL,
  payload,
});

export const deleteTestimonial = payload => ({
  type: ActionTypes.DELETE_TESTIMONIAL,
  payload,
});
