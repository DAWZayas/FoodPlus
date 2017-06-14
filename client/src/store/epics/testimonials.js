import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';

export const getTestimonial = action$ => action$
  .ofType(ActionTypes.GET_TESTIMONIAL)
  .map(signRequest)
  .switchMap(({headers}) => Observable
  .ajax.get('http://localhost:8080/api/testimonial', headers)
  .map(res => res.response)
  .map(testimonials => ({
    type: ActionTypes.GET_TESTIMONIAL_SUCCESS,
    payload: {testimonials},
  }))
  .catch(error => Observable.of(
    {
      type: ActionTypes.GET_TESTIMONIAL_ERROR,
      payload: {error},
    },
    Actions.addNotificationAction(
      {text: `[Getting testimonial] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
    ),
  )),
);

export const sendTestimonial = action$ => action$
  .ofType(ActionTypes.SEND_TESTIMONIAL)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/testimonial', payload, headers)
    .map(res => res.response)
    .mergeMap(testimonial => Observable.of(
      {
        type: ActionTypes.GET_TESTIMONIAL,
        payload: testimonial,
      },
      Actions.addNotificationAction(
        {text: 'Testimonial was successfully sent', alertType: 'info'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.SEND_TESTIMONIAL_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction(
        {text: `[Sending testimonial] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
      ),
    )),
  );

export const deleteTestimonial = action$ => action$
  .ofType(ActionTypes.DELETE_TESTIMONIAL)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.delete(`http://localhost:8080/api/testimonial/${payload.testimonialId}`, headers)
    .map(res => res.response)
    .mergeMap(() => Observable.of({
      type: ActionTypes.GET_TESTIMONIAL,
      payload,
    },
      Actions.addNotificationAction({
        text: 'Testimonial was successfully deleted', alertType: 'success',
      }),
  ))
  .catch(error => Observable.of({
    type: ActionTypes.DELETE_TESTIMONIAL_ERROR,
    payload: error,
  },
  Actions.addNotificationAction({
    text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
  }),
)),
);

export const updateTestimonial = action$ => action$
  .ofType(ActionTypes.UPDATE_TESTIMONIAL)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/testimonial/${payload.testimonialId}/${payload.state}`, payload, headers)
    .map(res => res.response)
    .mergeMap(testimonial => Observable.of(
      {
        type: ActionTypes.GET_TESTIMONIAL,
        payload: testimonial,
      },
      Actions.addNotificationAction(
        {text: 'Testimonial was succefully updated', alertType: 'info'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.UPDATE_TESTIMONIAL_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction(
        {text: `[Updating testimonial] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
      ),
    )),
  );
