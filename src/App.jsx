import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home';
import Leaderboard from '@/pages/Leaderboard';
import Profile from '@/pages/Profile';
import NotFound from '@/pages/NotFound';
import Thread from '@/pages/Thread';
import Login from '@/pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/thread/:threadId',
    element: <Thread />
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/*',
    element: <NotFound />
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
