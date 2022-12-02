import PropTypes from 'prop-types';

const Button = ({ title = 'Button', children, onClick }) => (
  <button type='button' title={title} className='button' onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
