import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';


export const getAllPlates = action$ => action$
  .ofType(ActionTypes.GET_ALL_PLATES)
  .map(signRequest)
  .switchMap(({headers}) => Observable
  .ajax.get('http://localhost:8080/api/plate', headers)
  .map(res => res.response)
  .map(plates => ({
    type: ActionTypes.GET_ALL_PLATES_SUCCESS,
    payload: {plates},
  }))
  .catch(error => Observable.of(
    {
      type: ActionTypes.GET_ALL_PLATES_ERROR,
      payload: {error},
    },
    Actions.addNotificationAction(
      {text: `[Getting plates] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
    ),
  )),
);

export const createPlate = action$ => action$
  .ofType(ActionTypes.CREATE_PLATE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/plate', payload, headers)
    .map(res => res.response)
    .mergeMap(plate => Observable.of(
      {
        type: ActionTypes.CREATE_PLATE_SUCCESS,
        payload: plate,
      },
      Actions.addNotificationAction(
        {text: `Plate "${plate.name}" was succefully created`, alertType: 'info'},
      ),
    ))
    .catch(error => Observable.of(
      {
        type: ActionTypes.CREATE_PLATE_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction(
        {text: `[Plate create] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
      ),
    )),
  );
export const deletePlate = action$ => action$
  .ofType(ActionTypes.DELETE_PLATE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.delete(`http://localhost:8080/api/plate/${payload.plateId}`, headers)
    .map(res => res.response)
    .mergeMap(() => Observable.of(
      {
        type: ActionTypes.DELETE_PLATE_SUCCESS,
        payload,
      },
      {
        type: ActionTypes.GET_MORE_PLATES,
      },
      Actions.addNotificationAction({
        text: 'Plate was succefully deleted', alertType: 'success',
      }),
  ))
  .catch(error => Observable.of({
    type: ActionTypes.DELETE_PLATE_ERROR,
    payload: error,
  },
  Actions.addNotificationAction({
    text: `error: ${ajaxErrorToMessage(error)}`, alertType: 'danger',
  }),
)),
);
export const updatePlate = action$ => action$
  .ofType(ActionTypes.UPDATE_PLATE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/plate/${payload.id}`, payload, headers)
    .map(res => res.response)
    .mergeMap(plate => Observable.of(
      {
        type: ActionTypes.UPDATE_PLATE_SUCCESS,
        payload: plate,
      },
      {
        type: ActionTypes.GET_MORE_PLATES,
      },
      Actions.addNotificationAction(
        {text: 'Plate was succefully updated', alertType: 'info'},
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
export const getMorePlates = action$ => action$
  .ofType(ActionTypes.GET_MORE_PLATES)
  .map(signRequest)
  .mergeMap(({headers, payload}) => Observable
    .ajax.get(`http://localhost:8080/api/plate?skip=${payload.skip || 0}&limit=${payload.limit || 10}`, headers)
    .map(res => res.response)
    .map(plates => ({
      type: ActionTypes.GET_MORE_PLATES_SUCCESS,
      payload: {plates, reset: payload.reset},
    }))
    .catch(error => Observable.of(
      {
        type: ActionTypes.GET_MORE_PLATES_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction(
        {text: `[get more plates] Error: ${ajaxErrorToMessage(error)}`, alertType: 'danger'},
      ),
    )),
  );
