import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';

import { asyncAddThreadComment, asyncReceiveThreadDetail } from '@/states/thread-detail/action';
import { commentsCount, postedAt } from '@/utils';
import Layout from '@/components/Layout';
import AddComment from '@/components/AddComment';
import CommentCard from '@/components/CommentCard';

const Thread = () => {
  const { threadId } = useParams();
  const { authUser, threadDetail } = useSelector((states) => states);
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
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const handleCommentSubmit = (content) => {
    dispatch(asyncAddThreadComment(content, threadId));
    console.log('new comment:', content);
  };

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
            <button type='button' title='Up vote thread'>
              <HiArrowUp className='mr-1 inline' /> {upVotesBy.length}
            </button>

            <button type='button' title='Down vote thread'>
              <HiArrowDown className='mr-1 inline' /> {downVotesBy.length}
            </button>
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
            {comments?.map((comment) => (
              <CommentCard key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Thread;
