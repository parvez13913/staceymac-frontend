"use client";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import { Checkbox } from "@/components/ui/checkbox";
import { TableRowItem } from "@/types/types";
import { ReactNode } from "react";

export const tableData = [
  {
    source: "Federal DOL - Davis Bacon",
    startTime: "2024-11-09 08:00 AM",
    endTime: "2024-11-09 08:00 AM",
    constructionType: "Annual Wage Order",
    status: "Completed",
  },
  {
    source: "California DIR",
    startTime: "2024-11-08 02:00 PM",
    endTime: "2024-11-08 02:00 PM",
    constructionType: "General Wage Order",
    status: "Completed",
  },
  {
    source: "Texas TWC",
    startTime: "2024-11-09 05:00 AM",
    endTime: "2024-11-08 02:00 PM",
    constructionType: "Service Contracts",
    status: "Completed",
  },
  {
    source: "New York DOL",
    startTime: "2024-11-09 07:30 AM",
    endTime: "2024-11-08 02:00 PM",
    constructionType: "Annual Wage Order",
    status: "Completed",
  },
  {
    source: "Florida DEO",
    startTime: "2024-11-08 10:00 AM",
    endTime: "2024-11-08 02:00 PM",
    constructionType: "General Wage Order",
    status: "Completed",
  },
];

const DataImportsTable = () => {
  const tableHeader = [
    "Source",
    "Statr Time",
    "End Time",
    "Construction Type",
    "Status",
  ];

  const currentItems = tableData;

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#1D1F2C] font-semibold space-x-1">
        <Checkbox />
        <span> {item?.source}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[142.857%] text-[#2E2E2E] tracking-[-0.084px]">
        {item?.startTime}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[142.857%] text-[#2E2E2E] tracking-[-0.084px]">
        {item?.endTime}
      </span>
    ),

    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#4A4C56]">
        <span>{item?.constructionType}</span>
      </span>
    ),
    (item) => {
      const isActive = item?.status === "Completed";

      return (
        <span
          className={`
        md:text-base text-[10px] leading-[160%] font-semibold 
        px-4 py-1 rounded-xl
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

export default DataImportsTable;
