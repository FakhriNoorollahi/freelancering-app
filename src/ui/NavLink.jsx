import { NavLink } from "react-router-dom";

function NavLinkItem({ label, icon, path }) {
  const navLinkItem =
    "flex items-center font-medium gap-x-2 text-font-secondary py-3 px-3 rounded-2xl hover:text-brand-primary w-full transition duration-300";
  const activeNavLinkItem =
    "focus:text-brand-primary focus:bg-gray-100 focus:font-bold";

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${navLinkItem} ${activeNavLinkItem}` : `${navLinkItem}`
      }
    >
      {icon} {label}
    </NavLink>
  );
}

export default NavLinkItem;
