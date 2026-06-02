import AppLayout from "@/ui/AppLayout";
import NavLinkItem from "@/ui/NavLink";
import ADMIN_SIDEBAR_DATA from "../constants/adminSidebarData";

function AdminLayout() {
  return (
    <AppLayout>
      <ul className="px-4 space-y-8">
        {ADMIN_SIDEBAR_DATA.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.id}>
              <NavLinkItem to={item.path}>
                <IconComponent className="size-5" />
                <span>{item.label}</span>
              </NavLinkItem>
            </li>
          );
        })}
      </ul>
    </AppLayout>
  );
}

export default AdminLayout;
