import { HiArrowDown, HiArrowUp } from 'react-icons/hi';
import PropTypes from 'prop-types';

const VoteButton = ({ voteType, upOrDown, isDisabled, isVoted = false, onVote, onNeutral, children }) => {
  const title = isDisabled
    ? `Log in to ${upOrDown} vote`
    : `${isVoted ? 'Undo' : ''} ${upOrDown} vote this ${voteType}`;
  const iconClasses = `mr-1 inline ${isVoted && 'text-green'}`;

  const handleClick = () => {
    if (isVoted) {
      onNeutral();
    } else {
      onVote();
    }
  }

  return (
    <button type='button' title={title} disabled={isDisabled} onClick={handleClick}>
      {upOrDown === 'up' ? (
        <HiArrowUp className={iconClasses} />
      ) : (
        <HiArrowDown className={iconClasses} />
      )}
      {children}
    </button>
  );
};

VoteButton.propTypes = {
  voteType: PropTypes.oneOf(['thread', 'comment']).isRequired,
  upOrDown: PropTypes.oneOf(['up', 'down']).isRequired,
  isDisabled: PropTypes.bool,
  isVoted: PropTypes.bool,
  onVote: PropTypes.func,
  onNeutral: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default VoteButton;
