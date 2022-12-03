import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { asyncPreloadProcess } from '@/states/is-preload/action';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import Button from '@/components/Button';

const Register = () => {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (authUser) navigate('/profile');

  return (
    <Layout>
      <h2>📲 Register for your account</h2>

      <form className='mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-y-6'>
        <Input
          title='Full name'
          type='text'
          placeholder='e.g. Guntur hidayat'
          id='fullNameInput'
        />

        <Input
          title='Email address'
          type='email'
          placeholder='e.g. guntur@gmail.com'
          id='emailInput'
        />

        <Input title='Password' type='password' id='passwordInput' />

        <Button type='submit'>Register</Button>

        <p className='mt-3'>
          Already have an account? Log in{' '}
          <Link to='/login' className='text-link'>
            here
          </Link>{' '}
        </p>
      </form>
    </Layout>
  );
};

export default Register;
