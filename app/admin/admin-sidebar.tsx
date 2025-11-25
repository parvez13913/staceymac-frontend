/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import BookmarkIcon from "@/public/icon/BookmarkIcon";
import DashboardIcon from "@/public/icon/DashboardIcon";
import DataIcon from "@/public/icon/DataIcon";
import DataImportIcon from "@/public/icon/DataImportIcon";
import HelpCenterIcon from "@/public/icon/HelpCenterIcon";
import LogOutIcon from "@/public/icon/LogoutIcon";
import PrevailingIcon from "@/public/icon/PrevailingIcon";
import SettingsIcon from "@/public/icon/SettingIcon";
import SubscriptionIcon from "@/public/icon/SubscriptionIcon";
import UsersIcon from "@/public/icon/UsersIcon";
import { ReactNode } from "react";

interface MenuProps {
  id?: string;
  label?: string;
  href?: string;
  icon?: ReactNode | string;
  subMenu?: {
    id?: string;
    subLabel?: string;
    subHref?: string;
    iconTwo?: ReactNode;
    children?: MenuProps[];
  }[];
  iconTwo?: ReactNode;
  children?: MenuProps[];
  hasChild?: boolean;
}

export const adminMenuItems: MenuProps[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/admin",
    hasChild: false,
    icon: <DashboardIcon className="h-5 w-5" />,
  },
  {
    id: "wage-data",
    label: "Wage Data",
    href: "/admin/wage-data",
    hasChild: false,
    icon: <DataIcon className="h-5 w-5" />,
  },
  {
    id: "subscriptions",
    label: "Subscriptions",
    href: "/admin/subscriptions",
    hasChild: false,
    icon: <SubscriptionIcon className="h-5 w-5" />,
  },
  {
    id: "data-imports",
    label: "Data Imports",
    href: "/admin/data-imports",
    hasChild: false,
    icon: <DataImportIcon className="h-5 w-5" />,
  },
  {
    id: "users",
    label: "Users",
    href: "/admin/users",
    hasChild: false,
    icon: <UsersIcon className="h-5 w-5" />,
  },
];
export const userMenuItems: MenuProps[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    hasChild: false,
    icon: <DashboardIcon className="xl:size-6 size-5" />,
  },
  {
    id: "bookmarks",
    label: "Bookmarks",
    href: "/dashboard/bookmarks",
    hasChild: false,
    icon: <BookmarkIcon className="xl:size-6 size-5" />,
  },
  {
    id: "prevailing-wage-policie",
    label: "Prevailing Wage Policie",
    href: "/dashboard/prevailing-wage-policie",
    hasChild: false,
    icon: <PrevailingIcon className="xl:size-6 size-5" />,
  },
];

export const commonSidebarItems = [
  {
    id: "settings",
    label: "Settings",
    href: "/admin/settings",
    icon: <SettingsIcon />,
  },
  {
    id: "help-center",
    label: "Help & Center",
    href: "/admin/help-center",
    icon: <HelpCenterIcon />,
  },
  {
    id: "logout",
    label: "Logout",
    href: "/login",
    icon: <LogOutIcon />,
  },
];

export function getMenuItemsByRole(role: string): MenuProps[] {
  switch (role) {
    case "ADMIN":
      return adminMenuItems;
    case "USER":
      return userMenuItems;
    default:
      return [];
  }
}

const Sidebar = () => {
  const type = "ADMIN";
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
          <div className="cursor-pointer mb-4">
            <img src="/images/logo.png" alt="logo" className="object-cover" />
          </div>

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
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer
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
