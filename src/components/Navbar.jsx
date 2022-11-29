import Button from './Button';

const Navbar = () => (
  <nav className='fixed bottom-0 z-30 w-full border-y border-b-dark bg-light px-12 py-6 sm:px-24 md:bottom-auto md:px-52 lg:px-64 xl:px-80'>
    <div className='hidden w-full items-center justify-between md:flex'>
      <h1 className='text-2xl font-medium text-dark'>Diforum</h1>

      <Button>Login</Button>
    </div>

    <ul className='flex items-center justify-between md:hidden'>
      <li>Home</li>
      <li>Leaderboard</li>
      <li>Login</li>
    </ul>
  </nav>
);

export default Navbar;
