import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
<<<<<<< HEAD
import Promotions from "../pages/Promotions/Promotions";
=======
import PersonalPage from "../pages/PersonalPage/PersonalPage";
>>>>>>> 68591d6b067929a52f914b07fcb4545d6112591c

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
<<<<<<< HEAD
        path: "promotions",
        element:<Promotions/>
      }
=======
        path: "personalPage",
        element: <PersonalPage />,
      },
>>>>>>> 68591d6b067929a52f914b07fcb4545d6112591c
    ],
  },
]);

export default router;
