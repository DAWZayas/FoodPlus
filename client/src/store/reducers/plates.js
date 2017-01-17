import * as ActionTypes from '../actionTypes';

const initialState = {plate: [], status: 'initied'};

export const plates = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_PLATE_SUCCESS: {
      const newPlates = [...state.plates, action.payload];
      return {...state, questions: newPlates};
    }
    default:
      return state;
  }
};
