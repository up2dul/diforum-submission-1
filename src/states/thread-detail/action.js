import api from '@/utils/api';

// #region ActionType
const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRAL_VOTE_THREAD: 'NEUTRAL_VOTE_THREAD',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRAL_VOTE_COMMENT: 'NEUTRAL_VOTE_COMMENT'
};
// #endregion ActionType

// #region Thread detail
function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail
    }
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL
  };
}
// #endregion Thread detail

// #region Thread comment
function addThreadCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      comment
    }
  };
}
// #endregion Thread comment

// #region Thread vote
function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  };
}

function neutralVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD,
    payload: {
      threadId,
      userId
    }
  };
}
// #endregion Thread vote

// #region Thread comment vote
function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId
    }
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId
    }
  };
}

function neutralVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT,
    payload: {
      commentId,
      userId
    }
  };
}
// #endregion Thread comment vote

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (err) {
      console.log('error:', err.message);
    }
  };
}

function asyncAddThreadComment(content, threadId) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment(content, threadId);
      dispatch(addThreadCommentActionCreator(comment));
    } catch (err) {
      console.log('error:', err.message);
    }
  };
}

function asyncVoteThread({ threadId, voteType }) {
  return async (dispatch) => {
    try {
      const vote = await api.addThreadVote(threadId, voteType);

      if (voteType === 'up-vote') dispatch(upVoteThreadActionCreator(vote));
      if (voteType === 'down-vote') dispatch(downVoteThreadActionCreator(vote));
      if (voteType === 'neutral-vote') dispatch(neutralVoteThreadActionCreator(vote));
    } catch (err) {
      console.log('error:', err.message);
    }
  };
}

function asyncVoteComment({ threadId, commentId, voteType }) {
  return async (dispatch) => {
    try {
      const vote = await api.addCommentVote(threadId, commentId, voteType);

      if (voteType === 'up-vote') dispatch(upVoteCommentActionCreator(vote));
      if (voteType === 'down-vote') dispatch(downVoteCommentActionCreator(vote));
      if (voteType === 'neutral-vote') dispatch(neutralVoteCommentActionCreator(vote));
    } catch (err) {
      console.log('error', err.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  addThreadCommentActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralVoteThreadActionCreator,
  asyncReceiveThreadDetail,
  asyncAddThreadComment,
  asyncVoteThread,
  asyncVoteComment
};
