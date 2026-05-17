import { FolderIcon, HomeIcon, DocumentIcon } from "@heroicons/react/24/solid";
import AppLayout from "../../ui/AppLayout";
import NavLinkItem from "../../ui/NavLink";

const sidebarItems = [
  {
    id: 1,
    label: "داشبورد",
    path: "dashboard",
    icon: <HomeIcon className="size-5" />,
  },
  {
    id: 2,
    label: "پروژه ها",
    path: "projects",
    icon: <FolderIcon className="size-5" />,
  },
  {
    id: 3,
    label: "درخواست ها",
    path: "proposals",
    icon: <DocumentIcon className="size-5" />,
  },
];

function FreelancerLayout() {
  return (
    <AppLayout>
      <ul className="px-4 space-y-8">
        {sidebarItems.map((item) => (
          <li key={item.id}>
            <NavLinkItem label={item.label} path={item.path} icon={item.icon} />
          </li>
        ))}
      </ul>
    </AppLayout>
  );
}

export default FreelancerLayout;
