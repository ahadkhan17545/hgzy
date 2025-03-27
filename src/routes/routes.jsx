import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import Activity from "../Pages/Activity";
import Wallet from "../Pages/Wallet";
import Promotion from "../Pages/Promotion";
import AdminLogin from "../admin/pages/Adminlogin";
import AdminLayout from "../Layouts/Adminlaout";
import Overview from "../admin/pages/Overview";
import AddSlider from "../admin/pages/slider/Addslider";
import Sliderlist from "../admin/pages/slider/Sliderlist";
import Addsectiongame from "../admin/pages/gamelist/Addsectiongame";
import Sectiongame from "../admin/pages/gamelist/Sectiongame";
import Deposit from "../Pages/Deposit";
import Withdraw from "../Pages/Withdraw";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "/dashboard", element: <Overview /> },
      { path: "/dashboard/add-slider", element: <AddSlider /> },
      { path: "/dashboard/slider-list", element: <Sliderlist /> },
      { path: "/dashboard/add-game", element: <Addsectiongame /> },
      { path: "/dashboard/all-games", element: <Sectiongame /> },
    ],
  },
  { path: "/promotion", element: <Promotion /> },
  { path: "/activity", element: <Activity /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/deposit", element: <Deposit /> },
  { path: "/withdraw", element: <Withdraw /> },
  { path: "/login", element: <Login /> },
  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <ForgotPassword /> },
]);

export default router;
