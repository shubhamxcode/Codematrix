import React from "react";
import Header from "./components/Header/Header";
import Fotter from "./components/Footer/Fotter";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky z-50 top-0 bg-slate-600">
        <Header />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Fotter />
    </div>
  );
}

export default Layout;