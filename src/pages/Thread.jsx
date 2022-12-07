import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import {
  asyncAddThreadComment,
  asyncReceiveThreadDetail,
  asyncVoteThread
} from '@/states/thread-detail/action';
import { asyncPreloadProcess } from '@/states/is-preload/action';
import { commentsCount, postedAt } from '@/utils';
import Layout from '@/components/Layout';
import AddComment from '@/components/AddComment';
import CommentCard from '@/components/CommentCard';
import VoteButton from '@/components/VoteButton';

const Thread = () => {
  const { threadId } = useParams();
  const { authUser = null, threadDetail } = useSelector((states) => states);
  const dispatch = useDispatch();
  const {
    title,
    body,
    createdAt,
    owner = {},
    category,
    comments = [],
    upVotesBy = [],
    downVotesBy = []
  } = threadDetail;

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const handleUpVote = () => dispatch(asyncVoteThread({ threadId, voteType: 'up-vote' }));
  const handleDownVote = () => dispatch(asyncVoteThread({ threadId, voteType: 'down-vote' }));
  const handleNeutralVote = () => dispatch(asyncVoteThread({ threadId, voteType: 'neutral-vote' }));

  const handleCommentSubmit = (content) => dispatch(asyncAddThreadComment(content, threadId));

  return (
    <Layout withBackButton>
      <div className='flex flex-col gap-y-6'>
        <h1>{title}</h1>

        <div className='flex items-center gap-3'>
          <img src={owner?.avatar} alt={`${owner?.name}'s avatar`} className='w-12 rounded-xl' />

          <div>
            <h3>{owner?.name}</h3>
            <p className='text-sm'>{postedAt(createdAt)}</p>
          </div>
        </div>

        <p className='border-t-2 border-dashed pt-2'>{body}</p>

        <div className='flex items-center justify-between gap-2'>
          <div className='flex gap-8'>
            <VoteButton
              options={{
                voteType: 'thread',
                upOrDown: 'up',
                isDisabled: !authUser,
                isVoted: upVotesBy.includes(authUser?.id)
              }}
              onVote={handleUpVote}
              onNeutral={handleNeutralVote}
            >
              {upVotesBy.length}
            </VoteButton>

            <VoteButton
              options={{
                voteType: 'thread',
                upOrDown: 'down',
                isDisabled: !authUser,
                isVoted: downVotesBy.includes(authUser?.id)
              }}
              onVote={handleDownVote}
              onNeutral={handleNeutralVote}
            >
              {downVotesBy.length}
            </VoteButton>
          </div>

          <h3>#{category}</h3>
        </div>

        <div className='mt-10'>
          {authUser ? (
            <AddComment onSubmit={handleCommentSubmit} />
          ) : (
            <p>
              <Link to='/login' className='text-link'>
                Log in
              </Link>{' '}
              to add your comment
            </p>
          )}

          <h3 className='mt-8 border-b-2 border-dashed pb-2'>{commentsCount(comments.length)}</h3>

          <div className='mt-5 flex flex-col gap-y-4'>
            {comments?.map((props) => (
              <CommentCard key={props.id} {...props} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Thread;
