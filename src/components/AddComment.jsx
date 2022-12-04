import Button from './Button';

const AddComment = () => (
  <form>
    <h3>Add your comment</h3>
    <textarea rows='4' className='mt-2 mb-4 w-full' placeholder='Your comment here...' required />
    <Button type='submit'>Add comment</Button>
  </form>
);

export default AddComment;
