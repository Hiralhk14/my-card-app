import React from "react";
import Sidebar from "../sidebar";
import Header from "../headers";
import Footer from "../footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 min-w-0 overflow-y-auto">
        <Header />
        <div className="min-h-full flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
