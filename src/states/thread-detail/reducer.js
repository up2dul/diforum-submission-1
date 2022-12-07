import { ActionType } from './action';

function threadDetailReducer(threadDetail = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action?.payload?.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return {};
    case ActionType.ADD_THREAD_COMMENT:
      return {
        ...threadDetail,
        comments: [action?.payload?.comment, ...threadDetail.comments]
      };
    case ActionType.UP_VOTE_THREAD:
      return {
        ...threadDetail,
        upVotesBy: [...threadDetail.upVotesBy, action?.payload?.userId],
        downVotesBy: threadDetail.downVotesBy.filter((vote) => vote !== action?.payload?.userId)
      };
    case ActionType.DOWN_VOTE_THREAD:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((vote) => vote !== action?.payload?.userId),
        downVotesBy: [...threadDetail.downVotesBy, action?.payload?.userId]
      };
    case ActionType.NEUTRAL_VOTE_THREAD:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((vote) => vote !== action?.payload?.userId),
        downVotesBy: threadDetail.downVotesBy.filter((vote) => vote !== action?.payload?.userId)
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
