import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Flights from "../pages/Flights";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Packages from "../pages/Packages";
import Apartments from "../pages/Apartments";
import NotFound from "../pages/NotFound";

const Header = () => {
  return (
    <>
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

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="flights" element={<Flights />} />

        <Route path="hotels" element={<Hotels />}>
          <Route path=":apartmentsId" element={<Apartments />} />
        </Route>

        <Route path="packages" element={<Packages />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Header;
