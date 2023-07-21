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

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />

  </AuthProvider>

  
   
  </React.StrictMode>
);