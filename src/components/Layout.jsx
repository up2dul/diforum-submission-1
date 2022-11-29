import PropTypes from 'prop-types';

import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />

    <main className='bg-sky pb-[74px] md:pt-[94px]'>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
