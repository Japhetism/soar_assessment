import React from "react";
import SideMenu from "../../components/sidemenu";
import Header from "../header";
import { ILayout } from "../../interfaces";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <div className="flex h-full">
        <SideMenu aria-label="Main Navigation" />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 lg:p-8 p-2 overflow-y-auto bg-slate-100">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
