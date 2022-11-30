import { navItemList } from '@/utils';
import NavItem from './NavItem';

const Navbar = () => (
  <nav className='x-container fixed bottom-0 z-30 w-full border-t-2 border-b-dark bg-light py-5'>
    <div className='flex items-center justify-between text-2xl text-dark'>
      {navItemList.map((props, idx) => (
        <NavItem key={idx} {...props} />
      ))}
    </div>
  </nav>
);

export default Navbar;
