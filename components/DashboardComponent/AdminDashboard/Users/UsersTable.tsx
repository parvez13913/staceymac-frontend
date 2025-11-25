"use client";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import { TableRowItem } from "@/types/types";
import { ReactNode } from "react";

export const tableData = [
  {
    user: "John Smith",
    email: "john.smith@company.com",
    plan: "Basic",
    registered: "2024-08-15",
    status: "Completed",
    lastActive: "2 hours ago",
    searches: "1,247",
  },
  {
    user: "John Smith",
    email: "2024-11-08 02:00 PM",
    plan: "Pro",
    registered: "2024-08-15",
    status: "Completed",
    lastActive: "2 hours ago",
    searches: "1,247",
  },
  {
    user: "John Smith",
    email: "2024-11-09 05:00 AM",
    plan: "Premium",
    registered: "2024-08-15",
    status: "Completed",
    lastActive: "2 hours ago",
    searches: "1,247",
  },
  {
    user: "John Smith",
    email: "2024-11-09 07:30 AM",
    plan: "Pro",
    registered: "2024-08-15",
    status: "Completed",
    lastActive: "2 hours ago",
    searches: "1,247",
  },
  {
    user: "John Smith",
    email: "2024-11-08 10:00 AM",
    plan: "Premium",
    registered: "2024-08-15",
    status: "Completed",
    lastActive: "2 hours ago",
    searches: "1,247",
  },
];

const UsersTable = () => {
  const tableHeader = [
    "User",
    "Email",
    "Plan",
    "Registered Type",
    "Status",
    "Last Active",
    "Searches",
  ];

  const currentItems = tableData;

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#1D1F2C]">
        <span> {item?.user}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[142.857%] text-[#2E2E2E] tracking-[-0.084px]">
        {item?.email}
      </span>
    ),
    (item) => {
      return (
        <span
          className={`md:text-base text-[10px] leading-[160%] font-semibold px-4 py-1 rounded-xl
        ${
          item?.plan === "Pro"
            ? "bg-[#305cde33] text-primary"
            : item?.plan === "Premium"
            ? "bg-[#ffa50033] text-[#FFA500]"
            : "bg-[#F3F4F6] text-[#6C757D]"
        }
      `}
        >
          {item?.plan}
        </span>
      );
    },

    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#4A4C56]">
        <span>{item?.registered}</span>
      </span>
    ),
    (item) => {
      const isActive = item?.status === "Completed";

      return (
        <span
          className={`
        md:text-base text-[10px] leading-[160%] font-semibold 
        px-4 py-1 rounded-lg
        ${
          isActive
            ? "bg-[#E7F7EF] text-[#0CAF60]"
            : "bg-[#F3F4F6] text-[#6C757D]"
        }
      `}
        >
          {item?.status}
        </span>
      );
    },
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#4A4C56]">
        <span>{item?.lastActive}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#4A4C56]">
        <span>{item?.searches}</span>
      </span>
    ),
  ];

  const isLoading = false;
  return (
    <div className="bg-white rounded-md p-5 mt-4 border">
      <ReuseAbleTable
        allClientDataList={tableData}
        isLoadings={isLoading}
        currentItems={currentItems}
        tableHeader={tableHeader}
        tableRowDataRenderers={tableRowDataRenderers}
        isBg={false}
      />
    </div>
  );
};

export default UsersTable;
