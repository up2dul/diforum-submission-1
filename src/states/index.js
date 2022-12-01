import { configureStore } from '@reduxjs/toolkit';

import authUserReducer from './auth-user/reducer';
import isPreloadReducer from './is-preload/reducer';
import leaderboardReducer from './leaderboard/reducer';
import threadDetailReducer from './thread-detail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer
  }
});

export default store;
