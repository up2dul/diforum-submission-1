import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home';
import Leaderboard from '@/pages/Leaderboard';
import Profile from '@/pages/Profile';

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
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
