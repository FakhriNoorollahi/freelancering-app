import AppLayout from "../../../ui/AppLayout";
import NavLinkItem from "../../../ui/NavLink";
import ownerSidebarData from "../constants/ownerSidebarData";

function OwnerLayout() {
  return (
    <AppLayout>
      <ul className="px-4 space-y-8">
        {ownerSidebarData.map((item) => {
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

export default OwnerLayout;
