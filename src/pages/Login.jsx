import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { asyncPreloadProcess } from '@/states/is-preload/action';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import Button from '@/components/Button';

const Login = () => {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (authUser) navigate('/profile');

  return (
    <Layout>
      <h2>📲 Log in to your account</h2>

      <form className='mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-y-6'>
        <Input
          title='Email address'
          type='email'
          placeholder='e.g. guntur@gmail.com'
          id='emailInput'
        />

        <Input title='Password' type='password' id='passwordInput' />

        <Button type='submit'>Log in</Button>

        <p className='mt-3'>
          New in here?{' '}
          <Link to='/register' className='text-link'>
            Register
          </Link>{' '}
          now!
        </p>
      </form>
    </Layout>
  );
};

export default Login;
