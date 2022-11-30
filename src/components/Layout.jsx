import PropTypes from 'prop-types';

import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ isFluidContainer, children }) => {
  const containerClass = isFluidContainer ? 'x-fluid-container' : 'x-container';

  return (
    <>
      <Header />

      <Navbar />

      <main className={containerClass + ' pb-32 pt-24'}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  isFluidContainer: PropTypes.bool,
  children: PropTypes.node
};

export default Layout;
