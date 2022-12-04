import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { asyncRegisterUser } from '@/states/users/action';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import Button from '@/components/Button';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = formRef.current[0].value;
    const email = formRef.current[1].value;
    const password = formRef.current[2].value;

    dispatch(asyncRegisterUser({ name, email, password }));
    Swal.fire('Register success!', 'Now you can log in', 'success');
    navigate('/login');
  };

  return (
    <Layout>
      <h2>📲 Register for your account</h2>

      <form
        ref={formRef}
        className='mx-auto mt-8 flex max-w-md flex-col items-center justify-center gap-y-6'
        onSubmit={handleRegister}
      >
        <Input title='Full name' type='text' placeholder='e.g. Guntur hidayat' id='fullNameInput' />

        <Input
          title='Email address'
          type='email'
          placeholder='e.g. guntur@gmail.com'
          id='emailInput'
        />

        <Input
          title='Password'
          type='password'
          placeholder='min. 6 char'
          min={6}
          id='passwordInput'
        />

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
