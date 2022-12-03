import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { asyncPopulate } from '@/states/shared/action';
import { showGreeting } from '@/utils';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import ThreadCard from '@/components/ThreadCard';
import { asyncPreloadProcess } from '@/states/is-preload/action';

const Home = () => {
  const { authUser, threads, users } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulate());
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const threadWithUser = threads.map((thread) => ({
    ...thread,
    user: users.find(({ id }) => id === thread.ownerId).name
  }));

  return (
    <Layout isFluidContainer>
      <div className='mb-14 flex flex-wrap items-center justify-between gap-4'>
        <h2>{showGreeting()}, {authUser.name}</h2>

        <Button onClick={() => console.log('clicked')}>Write a thread</Button>
      </div>

      <div className='flex flex-col gap-10'>
        {threadWithUser.map((props) => (
          <ThreadCard key={props.id} {...props} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
