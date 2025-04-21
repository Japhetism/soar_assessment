import React, { ReactNode } from "react";
import SideMenu from "../../components/sidemenu";
import Header from "../header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-full">
        <SideMenu />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 lg:p-8 p-4 overflow-auto bg-slate-100">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
