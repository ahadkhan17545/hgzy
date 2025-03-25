import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";

import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";


const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout/>,
        children:[
        //    { path:'/',element:<Home/>},
        
        
        ]
            
    },
    { path:'/login',element:<Login/>},
    {path:"/register",element:<Register/>},
    {path:"/forgot",element:<ForgotPassword/>},
    
])  

export default router;

import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/login", element: <Login /> },
]);

export default router;

