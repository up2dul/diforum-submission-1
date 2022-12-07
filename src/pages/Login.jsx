import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { asyncSetAuthUser } from '@/states/auth-user/action';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import Button from '@/components/Button';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = formRef.current[0].value;
    const password = formRef.current[1].value;

    dispatch(asyncSetAuthUser({ email, password }));
    Swal.fire('Log in success!', 'Now you can interact with other', 'success');
    navigate('/');
  };

  return (
    <Layout>
      <h2>📲 Log in to your account</h2>

      <form
        ref={formRef}
        className='mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-y-6'
        onSubmit={handleLogin}
      >
        <Input
          title='Email address'
          type='email'
          placeholder='e.g. guntur@gmail.com'
          id='emailInput'
        />

        <Input title='Password' type='password' placeholder='******' id='passwordInput' />

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
