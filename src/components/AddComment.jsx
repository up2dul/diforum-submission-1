import Button from './Button';
import Input from './Input';

const AddComment = () => (
  <form>
    <Input
      title='Add your comment'
      type='textarea'
      placeholder='Your comment here...'
      id='commentInput'
    />

    <Button type='submit'>Add comment</Button>
  </form>
);

export default AddComment;
