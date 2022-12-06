/* eslint-disable react/forbid-prop-types */
import { useSelector } from 'react-redux';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';
import PropTypes from 'prop-types';

import { postedAt } from '@/utils';

const CommentCard = ({ content, createdAt, owner, upVotesBy, downVotesBy }) => {
  const { authUser } = useSelector((states) => states);

  return (
    <article className='flex flex-col gap-3 rounded-xl border py-3 px-4'>
      <div className='flex items-center gap-3'>
        <img src={owner.avatar} alt={`${owner.name}'s avatar`} className='w-12 rounded-xl' />

        <div className='overflow-auto'>
          <h3>{owner.name}</h3>
          <p className='text-sm'>{postedAt(createdAt)}</p>
        </div>
      </div>

      <p className='break-words pt-2'>{content}</p>

      <div className='flex items-center justify-between gap-2 pt-2'>
        <div className='flex gap-8'>
          <button
            type='button'
            title={authUser ? 'Up vote comment' : 'Log in to up vote'}
            disabled={!authUser}
          >
            <HiArrowUp className='mr-1 inline' /> {upVotesBy.length}
          </button>

          <button
            type='button'
            title={authUser ? 'Down vote comment' : 'Log in to down vote'}
            disabled={!authUser}
          >
            <HiArrowDown className='mr-1 inline' /> {downVotesBy.length}
          </button>
        </div>
      </div>
    </article>
  );
};

CommentCard.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired
};

export default CommentCard;
