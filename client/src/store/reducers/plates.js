import * as ActionTypes from '../actionTypes';

const initialState = {plates: [], status: 'initied'};

export const plates = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_PLATE_SUCCESS: {
      const newPlates = [...state.plates, action.payload];
      return {...state, plates: newPlates};
    }

    case ActionTypes.GET_ALL_PLATES:
      return {
        plates: [],
        status: 'loading...',
      };
    case ActionTypes.GET_ALL_PLATES_SUCCESS:
      return {
        plates: action.payload.plates,
        status: 'done',
      };
    case ActionTypes.GET_THE_PLATE:
      return {
        ...state,
        status: 'loading...',
      };
    case ActionTypes.GET_THE_PLATE_SUCCESS:
      return {
        ...state,
        status: 'done',
      };
    case ActionTypes.UPDATE_PLATE:
      return {
        ...state,
        status: 'loading',
      };
    case ActionTypes.UPDATE_PLATE_ERROR:
    case ActionTypes.GET_THE_PLATE_ERROR:
    case ActionTypes.GET_PLATE_ERROR:
    case ActionTypes.GET_ALL_PLATES_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    default:
      return state;
  }
};
