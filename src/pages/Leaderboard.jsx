import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { asyncPopulate } from '@/states/shared/action';
import Layout from '@/components/Layout';

const Leaderboard = () => {
  const { leaderboard } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulate());
  }, [dispatch]);

  return (
    <Layout>
      <h2>🏆 Active users leaderboard</h2>

      <div className='mt-8 flex flex-col gap-y-4'>
        <div className='flex justify-between border-b border-dashed pb-2'>
          <h2>User</h2>

          <h2>Score</h2>
        </div>

        {leaderboard.map(({ user: { name, avatar }, score }) => (
          <article key={avatar} className='flex justify-between'>
            <div className='flex items-center gap-5'>
              <img src={avatar} alt={`${name} ava`} className='w-11 rounded-xl' />

              <h2 className='truncate'>{name}</h2>
            </div>

            <h2>{score}</h2>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default Leaderboard;
