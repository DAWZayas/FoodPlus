import * as ActionTypes from '../actionTypes';

const initialState = {plates: [], status: 'initied', hasMore: true};

export const plates = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_PLATE_SUCCESS: {
      const newPlates = [...state.plates, action.payload];
      return {
        ...state,
        plates: newPlates,
      };
    }
    case ActionTypes.RESET_PLATES:
      return {plates: [], status: 'loading', hasMore: true, error: null};
    case ActionTypes.GET_MORE_PLATES:
      return {...state, status: 'loading', error: null};
    case ActionTypes.GET_MORE_PLATES_SUCCESS: {
      const hasMore = action.payload.plates.length === 5;
      return {
        ...state,
        plates: action.payload.reset ? action.payload.plates : state.plates.concat(action.payload.plates),
        status: 'done',
        hasMore,
      };
    }
    case ActionTypes.GET_ALL_PLATES:
    case ActionTypes.GET_THE_PLATE:
    case ActionTypes.DELETE_PLATE:
    case ActionTypes.UPDATE_PLATE:
      return {
        plates: [],
        status: 'loading...',
      };
    case ActionTypes.GET_ALL_PLATES_SUCCESS:
    case ActionTypes.GET_THE_PLATE_SUCCESS:
      return {
        ...state,
        plates: action.payload.plates,
        status: 'done',
      };
    case ActionTypes.DELETE_PLATE_SUCCESS: {
      const filter = state.plates.filter(plate => plate.id !== action.payload.plateId);
      return {
        ...state,
        plates: filter,
        status: 'done',
      };
    }
    case ActionTypes.UPDATE_PLATE_ERROR:
    case ActionTypes.GET_THE_PLATE_ERROR:
    case ActionTypes.GET_PLATE_ERROR:
    case ActionTypes.GET_ALL_PLATES_ERROR:
    case ActionTypes.DELETE_PLATE_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    default:
      return state;
  }
};
