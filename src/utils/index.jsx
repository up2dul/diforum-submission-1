import { HiChartBar, HiOutlineHome, HiOutlineUser } from 'react-icons/hi';

function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} days ago`;
  }
  if (diffHours > 0) {
    return `${diffHours} hours ago`;
  }
  if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`;
  }
  if (diffSeconds > 0) {
    return `${diffSeconds} seconds ago`;
  }
  return 'just now';
}

function commentsCount(totalComment) {
  if (totalComment > 1) return `${totalComment} comments`;
  if (totalComment === 1) return `${totalComment} comment`;
  return 'No comment';
}

function showGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 4 && currentHour <= 10) return '⛅️ Good morning';
  if (currentHour >= 11 && currentHour <= 15) return '☀️ Good afternoon';
  if (currentHour >= 16 && currentHour <= 18) return '⛅️ Good evening';
  return '🌙 Good night';
}

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

export { postedAt, commentsCount, showGreeting, navItemList };
