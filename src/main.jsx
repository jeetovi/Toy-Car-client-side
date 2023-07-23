import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Regester from "./components/Regester";
import AuthProvider from "./Provider/AuthProvider";
import AllToy from "./components/AllToy";
import PrivetRoute from "./Routes/PrivetRoute";
import UserProfile from "./components/UserProfile";
import AToy from "./components/AToy";
import MyToy from "./components/MyToy";
import Blog from "./components/Home/Blog";
import ChackOut from "./components/ChackOut";
// import ChackOut from "./components/ChackOut";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
     {
      path:'/login',
      element:<Login></Login>
     },
     {

      path:'/regestation',
      element:<Regester></Regester>
     }
,
{
  path:'/alltoy',
  element:<PrivetRoute>  <AllToy></AllToy> </PrivetRoute> 
},
{
  path:'/profile',
  element: <PrivetRoute><UserProfile></UserProfile></PrivetRoute>
},
{
path:'/blog',
element:<Blog></Blog>
},
{
  path:'/atoy',
  element:<PrivetRoute> <AToy></AToy> </PrivetRoute>
},
{
  path:'/mytoy',
  element:<PrivetRoute> <MyToy></MyToy> </PrivetRoute>
},
{
  path:'chackout',
  element: <ChackOut></ChackOut>,
 
}

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
 <div className="max-w-6xl mx-auto">
 <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />

  </AuthProvider>

  
   
  </React.StrictMode>
 </div>

);