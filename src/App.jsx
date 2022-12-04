import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { asyncPreloadProcess } from './states/is-preload/action';
import Loader from '@/components/Loader';

const Home = lazy(() => import('@/pages/Home'));
const Leaderboard = lazy(() => import('@/pages/Leaderboard'));
const Profile = lazy(() => import('@/pages/Profile'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Thread = lazy(() => import('@/pages/Thread'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const CreateThread = lazy(() => import('@/pages/CreateThread'));

const App = () => {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) return null;

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/thread/:threadId' element={<Thread />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          {authUser ? (
            <>
              <Route path='/profile' element={<Profile />} />
              <Route path='/create-thread' element={<CreateThread />} />
            </>
          ) : (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </>
          )}
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
