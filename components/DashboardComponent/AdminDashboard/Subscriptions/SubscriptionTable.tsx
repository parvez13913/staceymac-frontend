"use client";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import { TableRowItem } from "@/types/types";
import { ReactNode } from "react";

export const tableData = [
  {
    user: "John Smith",
    email: "john.smith@company.com",
    plan: "Basic",
    startDate: "2024-11-01",
    nextBilling: "2024-12-01",
    amount: "$64.46",
  },
  {
    user: "Sarah Johnson",
    email: "sarah.j@business.com",
    plan: "Pro",
    startDate: "2024-11-01",
    nextBilling: "2024-12-01",
    amount: "$64.46",
  },
  {
    user: "Michael Brown",
    email: "mbrown@enterprise.com",
    plan: "Premium",
    startDate: "2024-11-01",
    nextBilling: "2024-12-01",
    amount: "$64.46",
  },
  {
    user: "Emily Davis",
    email: "emily.davis@gmail.com",
    plan: "Basic",
    startDate: "2024-11-01",
    nextBilling: "2024-12-01",
    amount: "$64.46",
  },
  {
    user: "Emily Davis",
    email: "emily.davis@gmail.com",
    plan: "Premium",
    startDate: "2024-11-01",
    nextBilling: "2024-12-01",
    amount: "$64.46",
  },
];

const SubscriptionTable = () => {
  const tableHeader = [
    "User",
    "Email",
    "Plan",
    "Start Date",
    "Next Billing",
    "Amount",
  ];

  const currentItems = tableData;

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#1D1F2C] font-semibold space-x-1">
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
          className={`
        md:text-base text-[10px] leading-[160%] font-semibold 
        px-4 py-1 rounded-lg
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
      <span className="md:text-base text-[14px] leading-[160%] text-[#2E2E2E]">
        <span>{item?.startDate}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#4A4C56]">
        <span>{item?.nextBilling}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-primary">
        <span>{item?.amount}</span>
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

export default SubscriptionTable;
