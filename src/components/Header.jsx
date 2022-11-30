import { Link } from 'react-router-dom';

const Header = () => (
  <header className='fixed top-0 z-30 flex w-full items-center justify-center border-b-2 border-dark bg-light py-3'>
    <Link to='/'>
      <h1 className='font-medium text-dark'>Diforum</h1>
    </Link>
  </header>
);

export default Header;
