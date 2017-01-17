import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '..actionTypes';
import {signRequest} from '../../util';

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
