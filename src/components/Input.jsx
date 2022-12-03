import PropTypes from 'prop-types';

const Input = ({ title, type, id, placeholder }) => (
  <label htmlFor={id}>
    {title}
    <input
      type={type}
      id={id}
      className='mt-2 block rounded-xl border py-1 px-2'
      placeholder={placeholder}
      autoComplete='off'
      required
    />
  </label>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default Input;
