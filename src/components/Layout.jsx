import PropTypes from 'prop-types';

import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Header />

    <Navbar />

    <main className='x-fluid-container pb-32 pt-24'>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
