import { FolderIcon, HomeIcon, DocumentIcon } from "@heroicons/react/24/solid";

const FREELANSER_SIDEBAR_DATA = [
  {
    id: 1,
    label: "داشبورد",
    path: "dashboard",
    icon: HomeIcon,
  },
  {
    id: 2,
    label: "پروژه ها",
    path: "projects",
    icon: FolderIcon,
  },
  {
    id: 3,
    label: "درخواست ها",
    path: "proposals",
    icon: DocumentIcon,
  },
];

export default FREELANSER_SIDEBAR_DATA;
