import api from '@/utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREADS: 'ADD_THREADS'
};

function receiveThreadsActionCreator(users) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      users
    }
  };
}

function addThreadActionCreator(talk) {
  return {
    type: ActionType.ADD_THREADS,
    payload: {
      talk
    }
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const talk = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(talk));
    } catch (err) {
      if (err instanceof Error) {
        console.log('error:', err.message);
      }
    }
  };
}

export { ActionType, receiveThreadsActionCreator, asyncAddThread };
