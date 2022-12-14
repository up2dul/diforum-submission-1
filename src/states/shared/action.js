import api from '@/utils/api';
import { receiveThreadsActionCreator } from '@/states/threads/action';
import { receiveUsersActionCreator } from '@/states/users/action';
import { receiveLeaderboardActionCreator } from '@/states/leaderboard/action';

function asyncPopulate() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const leaderboard = await api.getLeaderboard();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveLeaderboardActionCreator(leaderboard));
    } catch (err) {
      console.log('error:', err.message);
    }
  };
}

export { asyncPopulate };
