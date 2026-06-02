import AppLayout from "@/ui/AppLayout";
import FREELANSER_SIDEBAR_DATA from "../constants/freelancerSidebarData";
import NavLinkItem from "@/ui/NavLink";

function FreelancerLayout() {
  return (
    <AppLayout>
      <ul className="px-4 space-y-8">
        {FREELANSER_SIDEBAR_DATA.map((item) => {
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

export default FreelancerLayout;
