import { NavLink } from "react-router-dom";

function NavLinkItem({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "navlink__item  active__navlink__item" : "navlink__item"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavLinkItem;
