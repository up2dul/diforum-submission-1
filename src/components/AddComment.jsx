import { useRef } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Input from './Input';

const AddComment = ({ onSubmit }) => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = formRef.current[0];

    onSubmit(comment.value);
    comment.value = '';
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Input
        title='Add your comment'
        type='textarea'
        placeholder='Your comment here...'
        id='commentInput'
      />

      <br />

      <Button type='submit'>Add comment</Button>
    </form>
  );
};

AddComment.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddComment;
