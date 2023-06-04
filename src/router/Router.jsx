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
import AddItem from "../layouts/Dashboard/AddItem";
import AdminPrivateRoute from "./AdminPrivateRoute";
import ManageItem from "../layouts/Dashboard/ManageItem/ManageItem";
import Payment from "../layouts/Dashboard/Payment/Payment";
import UserHome from "../layouts/Dashboard/UserHome/UserHome";
import AddminHome from "../layouts/Dashboard/AddMinHome/AddminHome";

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
        path:'userhome',
        element:<UserHome />,
      },
      {
        path:"adminhome",
        element:<AdminPrivateRoute><AddminHome></AddminHome></AdminPrivateRoute>
      },
      {
        path:"mycart",
        element:<MyCart />,
      },
      {
        path:"payment",
        element:<Payment />
      },
      {
        path:"allusers",
        element:<AllUsers />
      },
      {
        path:"addItem",
        element:<AdminPrivateRoute><AddItem /></AdminPrivateRoute>
      },
      {
        path:"manageItem",
        element:<AdminPrivateRoute><ManageItem /></AdminPrivateRoute>
      }
    ]
  }
])