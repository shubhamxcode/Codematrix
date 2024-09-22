import React from "react";
import Header from "./components/Header/Header";
import Fotter from "./components/Footer/Fotter";
import { Outlet } from "react-router";
function Layout() {
  return (
    <div className=" container mx-auto space-y-12">
      <div className=" sticky z-50 top-0 bg-black">
        <Header />
      </div>
      <Outlet />
      <Fotter />
    </div>
  );
}

export default Layout;