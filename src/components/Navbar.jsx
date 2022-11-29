import { Link } from 'react-router-dom';

import { navItemList } from '@/utils';
import Button from './Button';
import NavItem from './NavItem';

const Navbar = () => (
  <nav className='x-container fixed bottom-0 z-30 w-full border-y-2 border-b-dark bg-light py-6 md:bottom-auto'>
    <div className='hidden w-full items-center justify-between md:flex'>
      <Link to='/'>
        <h1 className='text-2xl font-medium text-dark'>Diforum</h1>
      </Link>

      <Button>My profile</Button>
    </div>

    <div className='flex items-center justify-between text-2xl text-dark md:hidden'>
      {navItemList.map((props, idx) => (
        <NavItem key={idx} {...props} />
      ))}
    </div>
  </nav>
);

export default Navbar;
