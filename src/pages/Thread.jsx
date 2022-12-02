import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';

import { asyncReceiveThreadDetail } from '@/states/thread-detail/action';
import { commentsCount, postedAt } from '@/utils';
import Layout from '@/components/Layout';
import CommentCard from '@/components/CommentCard';

const Thread = () => {
  const { threadId } = useParams();
  const { threadDetail } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

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
          <h3>{commentsCount(comments.length)}</h3>

          <div className='mt-8 flex flex-col gap-y-4'>
            {comments.map((props) => (
              <CommentCard key={props.id} {...props} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Thread;
