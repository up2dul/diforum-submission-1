import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return (
    <button className='rounded-xl border-2 border-dark bg-yellow py-2 px-4 hover:border-dashed'>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string
};

export default Button;
