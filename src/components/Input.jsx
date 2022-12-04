import PropTypes from 'prop-types';

const Input = ({ title, type = 'text', id, placeholder, min }) => (
  <label htmlFor={id} className='w-full'>
    {title}
    {type === 'textarea' ? (
      <textarea id={id} rows='4' className='mt-2 w-full' placeholder={placeholder} required />
    ) : (
      <input
        type={type}
        id={id}
        className='mt-2 w-full'
        placeholder={placeholder}
        autoComplete='off'
        minLength={min}
        required
      />
    )}
  </label>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  min: PropTypes.number
};

export default Input;
