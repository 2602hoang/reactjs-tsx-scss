import React from "react";
import { Header } from "../component/Header";
import Fotter from "../component/Fotter";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="layout__main">
        <Header />
        {children}
        <Fotter />
      </main>
    </>
  );
};

export default Layout;
