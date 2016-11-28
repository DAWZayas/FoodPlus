import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs/Observable';
import * as ActionTypes from './actionTypes';

const heloWorld = action$ => action$
  .ofType(ActionTypes.HELLO_WORLD)
  .switchMap(()=> Observable
    .timer(500)
    .map(()=>({
      type: ActionTypes.HELLO_WORLD_END,
      payload:{
        world: 'world',
      },
    }))
  );
export default combineEpics(
  helloWorld,
);
