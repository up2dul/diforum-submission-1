import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { asyncUnsetAuthUser } from '@/states/auth-user/action';
import { asyncPreloadProcess } from '@/states/is-preload/action';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Profile = () => {
  const { authUser, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { avatar, name, email } = authUser;

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) return null;

  const handleLogOut = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/login');
  };

  return (
    <Layout>
      <h2>🙂 Profile</h2>

      <div className='mt-8 flex flex-col items-center'>
        <img src={avatar} alt='My avatar' className='mb-3 w-16 rounded-xl' />

        <h2>{name}</h2>

        <h3 className='mb-8'>{email}</h3>

        <Button onClick={handleLogOut}>Log out</Button>
      </div>
    </Layout>
  );
};

export default Profile;
