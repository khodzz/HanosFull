import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Promotions from "../pages/Promotions/Promotions";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import Map from "../pages/Map/Map";
import OneProduct from "../pages/OneProduct/OneProduct";
import Admin from "../pages/Admin/Admin";

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
        path: "promotions",
        element: <Promotions />,
      },
      {
        path: "personalPage",
        element: <PersonalPage />,
      },
      {
        path: "product/:id",
        element: <OneProduct />,
      },
      {
        path: "map",
        element: <Map/>
      } ,
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);

export default router;
