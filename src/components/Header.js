import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="menu">
        <ul className="menu__list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="/"
            >
              HOME PAGE
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="flights"
            >
              FLIGHTS
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="hotels"
            >
              HOTELS
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "navlink")}
              to="packages"
            >
              PACKAGES
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
