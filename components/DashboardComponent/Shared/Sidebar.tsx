/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { commonSidebarItems, getMenuItemsByRole } from "./SidebarMenuItems";

const Sidebar = () => {
  const type = "USER";
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="xl:hidden fixed top-3 left-0 z-50 p-2"
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon size={22} />
      </button>

      {/* SIDEBAR */}
      <div
        className={`
          fixed p-4 bg-white xl:w-[245px] lg:w-[230px] w-[220px] h-screen
          border-r border-[#EAECF0] z-50 transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* MOBILE CLOSE BUTTON */}
          <button
            className="xl:hidden absolute top-4 right-2 z-50 p-2"
            onClick={() => setMobileOpen(false)}
          >
            <X size={22} />
          </button>

          {/* LOGO */}
          <h1 className="text-[16px] font-bold text-[#1D1F2C] mb-4 mt-2">
            Logo
          </h1>

          {/* PROFILE */}
          <div className="p-3 bg-white border border-[#F1F1F5] rounded-[10px] flex items-center space-x-2">
            <img
              src="/admin.png"
              alt="admin-photo"
              className="rounded-full object-cover h-10 w-10"
            />
            <div>
              <h6 className="text-[14px] font-semibold text-[#1D1F2C]">
                Ripon Mia
              </h6>
              <p className="text-[#5B5A64] text-xs">erlexotech@gmail.com</p>
            </div>
          </div>

          {/* MAIN MENU ITEMS */}
          <nav className="flex flex-col gap-2 mt-6">
            {getMenuItemsByRole(type)?.map((item: any, index: number) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer text-nowrap
                    ${
                      isActive
                        ? "bg-primary text-white font-medium"
                        : "text-[#1D1F2C] hover:bg-primary/10"
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* others */}
          <div className="flex flex-col gap-1 mb-4 mt-auto">
            {commonSidebarItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer
                    ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-[#1D1F2C] hover:bg-primary/10"
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
