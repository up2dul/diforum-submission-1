import { HiChartBar, HiOutlineHome, HiOutlineUser } from 'react-icons/hi';

const navItemList = [
  {
    to: '/',
    title: 'Home',
    icon: <HiOutlineHome />
  },
  {
    to: '/leaderboard',
    title: 'Leaderboard',
    icon: <HiChartBar />
  },
  {
    to: '/profile',
    title: 'My profile',
    icon: <HiOutlineUser />
  }
];

export { navItemList };
