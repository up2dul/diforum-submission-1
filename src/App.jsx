import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { asyncPreloadProcess } from './states/is-preload/action';
import Home from '@/pages/Home';
import Leaderboard from '@/pages/Leaderboard';
import Profile from '@/pages/Profile';
import NotFound from '@/pages/NotFound';
import Thread from '@/pages/Thread';
import Login from '@/pages/Login';
import Register from './pages/Register';

const App = () => {
  const { authUser, isPreload } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/thread/:threadId' element={<Thread />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        {authUser ? (
          <Route path='/profile' element={<Profile />} />
        ) : (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </>
        )}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
