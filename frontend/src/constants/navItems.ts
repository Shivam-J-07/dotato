import { ReactComponent as DashIcon } from "../assets/Icons/DashIcon.svg";
import { ReactComponent as ExpenseIcon } from "../assets/Icons/ExpenseIcon.svg";
import { ReactComponent as UploadIcon } from "../assets/Icons/UploadIcon.svg";
import { ReactComponent as SettingsIcon } from "../assets/Icons/SettingsIcon.svg";

import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import Uploader from "../pages/Upload";
import Settings from "../pages/Settings";

export const NAVLABELS = {
  DASHBOARD: "Dashboard",
  EXPENSES: "Expenses",
  UPLOAD: "Upload",
};

type NavItems = {
  label: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  path: string;
  element: JSX.Element;
}

export const NAV_ITEMS: NavItems[] = [
  {
    label: "Dashboard",
    icon: DashIcon,
    path: "",
    element: Dashboard(),
  },
  {
    label: "Expenses",
    icon: ExpenseIcon,
    path: "expenses",
    element: Expenses(),
  },
  {
    label: "Upload",
    icon: UploadIcon,
    path: "upload",
    element: Uploader(),
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    path: "settings",
    element: Settings()
  },
];
