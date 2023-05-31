import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu"; 
import Order from "../pages/oder/Order";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import SignIn from "../pages/login/SignIn";
import Secret from "../pages/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import AllUsers from "../layouts/AllUsers";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"menu",
        element:<Menu />
      },
      {
        path:"order/:category",
        element:<Order />
      }
      ,
      {
        path:"login",
        element:<Login />
      }
      ,
      {
        path:"signin",
        element:<SignIn />
      },
       
      {
        path:"register",
        element:<Register />
      },
      {
        path:"secret",
        element:<PrivateRoute><Secret /></PrivateRoute>
      }
      
    ]
  },
  {
    path:"dashboard",
    element:<PrivateRoute><Dashboard /></PrivateRoute>,
    children:[
      {
        path:"mycart",
        element:<MyCart />,
      },
      {
        path:"users",
        element:<AllUsers />
      }
    ]
  }
])