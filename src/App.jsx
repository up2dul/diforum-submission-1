import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home';
import Leaderboard from '@/pages/Leaderboard';
import Profile from '@/pages/Profile';
import NotFound from '@/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
    path: '/*',
    element: <NotFound />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
