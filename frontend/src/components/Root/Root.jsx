import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeadertTop from "../HeaderTop/HeaderTop";
import HeaderCenter from "../HeaderCenter/HeaderCenter";
import HeaderBottom from "../HeaderBottom/HeaderBottom";

const Root = () => {
  return (
    <>
      <HeadertTop />
      <HeaderCenter />
      <HeaderBottom />

      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
