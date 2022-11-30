import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { commentsCount, postedAt } from '@/utils';

const ThreadCard = ({ id, title, body, category, user, createdAt, totalComments }) => (
  <Link to={'thread/' + id}>
    <article className='overflow-hidden rounded-xl border border-dark hover:outline outline-2'>
      <div className='border-b border-dashed border-dark bg-sky p-5 pb-3'>
        <h1 className='truncate font-medium'>{title}</h1>
      </div>

      <p className='mx-5 my-3 truncate'>{body}</p>

      <div className='mx-5 mb-5 flex flex-wrap justify-between gap-x-4 gap-y-2 text-sm'>
        <p>{commentsCount(totalComments)}</p>

        <p>
          Posted by <span className='font-medium'>{user}</span>
        </p>

        <p>{postedAt(createdAt)}</p>

        <p className='font-medium'>#{category}</p>
      </div>
    </article>
  </Link>
);

ThreadCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired
};

export default ThreadCard;
