import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { asyncAddThread } from '@/states/threads/action';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import Input from '@/components/Input';

const CreateThread = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = formRef.current[0].value;
    const category = formRef.current[1].value;
    const body = formRef.current[2].value;

    dispatch(asyncAddThread({ title, body, category }));
    Swal.fire('Success added thread!', 'Well done', 'success');
    navigate('/');
  };

  return (
    <Layout>
      <h2>✍️ Create a new thread</h2>

      <form
        ref={formRef}
        className='mx-auto mt-8 flex max-w-sm flex-col items-center justify-center gap-y-6'
        onSubmit={handleSubmit}
      >
        <Input title='Title' type='text' placeholder='e.g. Hello world!' id='titleInput' max={50} />

        <Input
          title='Category'
          type='text'
          placeholder='e.g. technology'
          id='categoryInput'
          max={20}
        />

        <Input
          title='Thread content'
          type='textarea'
          placeholder='Your thread content here...'
          id='threadContentInput'
        />

        <Button type='submit'>Create thread</Button>
      </form>
    </Layout>
  );
};

export default CreateThread;
