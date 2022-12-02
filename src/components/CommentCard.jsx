/* eslint-disable react/forbid-prop-types */
import { HiArrowDown, HiArrowUp } from 'react-icons/hi';
import PropTypes from 'prop-types';

import { postedAt } from '@/utils';

const CommentCard = ({ content, createdAt, owner, upVotesBy, downVotesBy }) => (
  <article className='flex flex-col gap-3 border-y-2 border-dashed py-3'>
    <div className='flex items-center gap-3'>
      <img src={owner.avatar} alt={`${owner.name}'s avatar`} className='w-12 rounded-xl' />

      <div>
        <h3>{owner.name}</h3>
        <p className='text-sm'>{postedAt(createdAt)}</p>
      </div>
    </div>

    <p className='pt-2'>{content}</p>

    <div className='flex items-center justify-between gap-2 pt-2'>
      <div className='flex gap-8'>
        <button type='button' title='Up vote thread'>
          <HiArrowUp className='mr-1 inline' /> {upVotesBy.length}
        </button>

        <button type='button' title='Down vote thread'>
          <HiArrowDown className='mr-1 inline' /> {downVotesBy.length}
        </button>
      </div>
    </div>
  </article>
);

CommentCard.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired
};

export default CommentCard;
