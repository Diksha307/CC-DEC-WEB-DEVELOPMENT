import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Ori from "./ori"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Ori/>
      <Outlet />
    </>
  );
};

export default Layout;