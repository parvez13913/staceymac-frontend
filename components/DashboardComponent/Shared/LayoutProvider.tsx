"use client";

import type React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface LayoutProviderProps {
  children?: React.ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <div className="flex bg-[#F6F6F6] h-screen">
      <Sidebar />

      <div className="flex-1   lg:ml-[230px] xl:ml-[245px] ">
        <TopBar />
        <div>{children}</div>
      </div>
    </div>
  );
}
