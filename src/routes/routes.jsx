import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import Activity from "../Pages/Activity";
import Wallet from "../Pages/Wallet";
import Promotion from "../Pages/Promotion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/promotion", element: <Promotion /> },
  { path: "/activity", element: <Activity /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <ForgotPassword /> },
]);

export default router;
