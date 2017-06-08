import * as ActionTypes from '../actionTypes';

const initialState = {testimonials: [], status: 'initied'};

export const testimonials = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEND_TESTIMONIAL_SUCCESS: {
      const newTestimonial = [...state.testimonials, action.payload];
      return {
        ...state,
        testimonials: newTestimonial,
      };
    }
    case ActionTypes.GET_TESTIMONIAL:
    case ActionTypes.SEND_TESTIMONIAL:
    case ActionTypes.DELETE_TESTIMONIAL:
    case ActionTypes.UPDATE_TESTIMONIAL:
      return {
        plates: [],
        status: 'loading...',
      };
    case ActionTypes.GET_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        plates: action.payload.plates,
        status: 'done',
      };
    case ActionTypes.DELETE_TESTIMONIAL_SUCCESS: {
      const filter = state.testimonials.filter(testimonial => testimonial.id !== action.payload.testimonialId);
      return {
        ...state,
        testimonials: filter,
        status: 'done',
      };
    }
    case ActionTypes.GET_TESTIMONIAL_ERROR:
    case ActionTypes.SEND_TESTIMONIAL_ERROR:
    case ActionTypes.UPDATE_TESTIMONIAL_ERROR:
    case ActionTypes.DELETE_TESTIMONIAL_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    default:
      return state;
  }
};
