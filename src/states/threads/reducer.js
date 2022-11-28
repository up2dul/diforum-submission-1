import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action?.payload?.users;
    case ActionType.ADD_THREADS:
      return [...threads, action.payload?.users];
    default:
      return threads;
  }
}

export default threadsReducer;
