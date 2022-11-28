import api from '@/utils/api';
import { receiveThreadsActionCreator } from '@/states/threads/action';
import { receiveUsersActionCreator } from '@/states/users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (err) {
      console.log('error:', err.message);
    }
  };
}

export { asyncPopulateUsersAndThreads };
