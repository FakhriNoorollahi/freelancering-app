import { NavLink } from "react-router-dom";

function NavLinkItem({ label, icon, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "navlink__item  active__navlink__item" : "navlink__item"
      }
    >
      {icon} {label}
    </NavLink>
  );
}

export default NavLinkItem;
