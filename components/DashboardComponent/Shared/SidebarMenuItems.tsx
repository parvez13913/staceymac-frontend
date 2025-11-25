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
    href: "/dashboard",
    hasChild: false,
    icon: <DashboardIcon className="h-5 w-5" />,
  },
  {
    id: "wage-data",
    label: "Wage Data",
    href: "/dashboard/wage-data",
    hasChild: false,
    icon: <DataIcon className="h-5 w-5" />,
  },
  {
    id: "subscriptions",
    label: "Subscriptions",
    href: "/dashboard/subscriptions",
    hasChild: false,
    icon: <SubscriptionIcon className="h-5 w-5" />,
  },
  {
    id: "data-imports",
    label: "Data Imports",
    href: "/dashboard/data-imports",
    hasChild: false,
    icon: <DataImportIcon className="h-5 w-5" />,
  },
  {
    id: "users",
    label: "Users",
    href: "/dashboard/users",
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
    href: "/dashboard/settings",
    icon: <SettingsIcon />,
  },
  {
    id: "help-center",
    label: "Help & Center",
    href: "/dashboard/help-center",
    icon: <HelpCenterIcon />,
  },
  {
    id: "logout",
    label: "Logout",
    href: "/dashboard/logout",
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
