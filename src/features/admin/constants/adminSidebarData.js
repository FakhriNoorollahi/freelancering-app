import {
  FolderIcon,
  HomeIcon,
  DocumentIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const ADMIN_SIDEBAR_DATA = [
  {
    id: 1,
    label: "داشبورد",
    path: "dashboard",
    icon: HomeIcon,
  },
  {
    id: 2,
    label: "کاربران",
    path: "users",
    icon: UsersIcon,
  },
  {
    id: 3,
    label: "پروژه ها",
    path: "projects",
    icon: FolderIcon,
  },
  {
    id: 4,
    label: "درخواست ها",
    path: "proposals",
    icon: DocumentIcon,
  },
];

export default ADMIN_SIDEBAR_DATA;
