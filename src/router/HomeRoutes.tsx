import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/home",
    exact: true,
    children: <Home />
  },
  {
    path: "/home/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/home/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "/home/*",
    exact: false,
    children: <Page404 />
  },
];