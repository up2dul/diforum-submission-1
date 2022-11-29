import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ to, title, icon }) => (
  <NavLink
    to={to}
    title={title}
    className={({ isActive }) => `nav-link ${isActive && 'nav-link-active'}`}
  >
    {icon}
  </NavLink>
);

NavItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element
};

export default NavItem;
