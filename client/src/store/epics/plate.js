import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';
import * as Actions from '../actions';
import {signRequest, ajaxErrorToMessage} from '../../util';

export const createPlate = action$ => action$
  .ofType(ActionTypes.CREATE_PLATE)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post('http://localhost:8080/api/plate', payload, headers)
    .map(res => res.response)
    .map(plate => ({
      type: ActionTypes.CREATE_PLATE_SUCCESS,
      payload: plate,
    }))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_PLATE_ERROR,
      payload: {error},
    })),
  );

export const getAllPlates = action$ => action$
  .ofType(ActionTypes.GET_ALL_PLATES)
  .map(signRequest)
  .switchMap(({headers}) => Observable
  .ajax.get('http://localhost:8080/api/plate', headers)
  .map(res => res.response)
  .map(plate => ({
    type: ActionTypes.GET_ALL_PLATES_SUCCESS,
    payload: {plate},
  }))
  .catch(error => Observable.of(
    {
      type: ActionTypes.GET_ALL_PLATES_ERROR,
      payload: {error},
    },
    Action.addNotificationAction(
      {text: `[get all plates] Error: ${ajaxErrorToMessage(error)}`, alerType: 'danger'},
    ),
  )),
);
