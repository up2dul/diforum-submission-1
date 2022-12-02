const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD'
};

function receiveLeaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard
    }
  };
}

export { ActionType, receiveLeaderboardActionCreator };
