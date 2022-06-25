import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import { Login } from "./components/Login";
import { Chat } from "./components/Chat";

type Route = {
  path: string;
  Component: () => JSX.Element;
};

export const publicRoutes: Route[] = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes: Route[] = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
