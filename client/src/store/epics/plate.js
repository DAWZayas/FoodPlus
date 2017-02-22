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
      {text: `[get all plates] Error: ${ajaxErrorToMessage(error)}`, alerType: 'danger'},
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
        {text: `Plate with name "${plate.name}" created`, alerType: 'info'},
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
export const getThePlate = action$ => action$
  .ofType(ActionTypes.GET_THE_PLATE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.get(`http://localhost:8080/api/plate/${payload.id}`, headers)
    .map(res => res.response)
    .mergeMap(thePlate => Observable.of({
      type: ActionTypes.GET_THE_PLATE_SUCCESS,
      payload: {thePlate},
    }))
    .catch(error => Observable.of({
      type: ActionTypes.GET_THE_PLATE_ERROR,
      payload: {error},
    },
    Actions.addNotificationAction({
      text: `error: ${ajaxErrorToMessage(error)}`, alerType: 'danger',
    }),
  )),
);
export const deletePlate = action$ => action$
  .ofType(ActionTypes.DELETE_PLATE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://localhost:8080/api/plate/${payload.id}`, headers)
    .map(res => res.response)
    .mergeMap(response => Observable.of({
      type: ActionTypes.DELETE_PLATE_SUCCESS,
      payload: response,
    },
      Actions.addNotificationAction({
        text: 'Plate deleted', alerType: 'success',
      }),
  ))
  .catch(error => Observable.of({
    type: ActionTypes.DELETE_PLATE_ERROR,
    payload: error,
  },
  Actions.addNotificationAction({
    text: `error: ${ajaxErrorToMessage(error)}`, alerType: 'danger',
  }),
)));
