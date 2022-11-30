import { configureStore } from '@reduxjs/toolkit';

import authUserReducer from './auth-user/reducer';
import isPreloadReducer from './is-preload/reducer';
import leaderboardReducer from './leaderboard/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    leaderboard: leaderboardReducer
  }
});

export default store;
