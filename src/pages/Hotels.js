import { NavLink, Outlet } from "react-router-dom";

const Hotels = () => {
  return (
    <>
      <h1>Hotels page</h1>

      <ul className="menu__list">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "navlink")}
            to="/hotels/villas"
          >
            VILLAS
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "navlink")}
            to="/hotels/bungalows"
          >
            BUNGALOWS
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "navlink")}
            to="/hotels/tiny"
          >
            TINY
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Hotels;
