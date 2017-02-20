import * as ActionTypes from '../actionTypes';

const initialState = {plates: [], status: 'initied'};

export const plates = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_PLATE_SUCCESS: {
      const newPlates = [...state.plates, action.payload];
      return {
        ...state,
        plates: newPlates
      };
    }

    case ActionTypes.GET_ALL_PLATES:
      return {
        plates: [],
        status: 'loading...',
      };
    case ActionTypes.GET_ALL_PLATES_SUCCESS:
      return {
        ...state,
        plates: action.payload.plates,
        status: 'done',
      };
    case ActionTypes.GET_THE_PLATE:
      return {
        ...state,
        plates: [],
        status: 'loading...',
      };
    case ActionTypes.GET_THE_PLATE_SUCCESS:
      return {
        ...state,
        plates: action.payload.thePlate,
        status: 'done',
      };
    case ActionTypes.UPDATE_PLATE:
      return {
        ...state,
        status: 'loading...',
      };
    case ActionTypes.DELETE_PLATE_SUCCESS:
      const plateWillDeleted = state.plates.filter(obj => obj.id !== action.payload.id)
      return {
        ...state,
        plates: plateWillDeleted,
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
