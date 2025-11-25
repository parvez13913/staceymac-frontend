"use client";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import BookmarkIcon from "@/public/icon/BookmarkIcon";
import EyeIcon from "@/public/icon/EyeIcon";
import FileIcon from "@/public/icon/FileIcon";
import { TableRowItem } from "@/types/types";
import { ReactNode, useState } from "react";
import PrevailingDetailsModal from "./PrevailingDetailsModal";

const DashboardTable = () => {
  const tableData = [
    {
      classification: "Millwright",
      classificationId: "41654316",
      constructionType: "Heavy",
      wageOrderType: "Annual Wage Order",
      location: "Cass, MO",
      rate: 64.46,
    },
    {
      classification: "Millwright",
      classificationId: "41654316",
      constructionType: "Heavy",
      wageOrderType: "General Wage Order",
      location: "Cass, MO",
      rate: 64.46,
    },
    {
      classification: "Millwright",
      classificationId: "41654316",
      constructionType: "Heavy",
      wageOrderType: "Annual Wage Order",
      location: "Cass, MO",
      rate: 64.46,
    },
    {
      classification: "Millwright",
      classificationId: "41654316",
      constructionType: "Heavy",
      wageOrderType: "Service Contracts",
      location: "Cass, MO",
      rate: 64.46,
    },
    {
      classification: "Millwright",
      classificationId: "41654316",
      constructionType: "Heavy",
      wageOrderType: "Annual Wage Order",
      location: "Cass, MO",
      rate: 64.46,
    },
    {
      classification: "Millwright",
      classificationId: "41654316",
      constructionType: "Heavy",
      wageOrderType: "General Wage Order",
      location: "Cass, MO",
      rate: 64.46,
    },
    {
      classification: "Millwright",
      classificationId: "41654316",
      constructionType: "Heavy",
      wageOrderType: "Service Contracts",
      location: "Cass, MO",
      rate: 64.46,
    },
    {
      classification: "Millwright",
      classificationId: "41654316",
      constructionType: "Heavy",
      wageOrderType: "Annual Wage Order",
      location: "Cass, MO",
      rate: 64.46,
    },
  ];

  const tableHeader = [
    "CLASSIFICATION",
    "CLASSIFICATION ID",
    "CONSTRUCTION TYPE",
    "WAGE ORDER TYPE",
    "LOCATION",
    "RATE",
    "ACTION",
  ];

  const currentItems = tableData;

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#1D1F2C] font-semibold space-x-1">
        <span> {item?.classification}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[142.857%] text-[#2E2E2E] tracking-[-0.084px]">
        {item?.classificationId}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#0CAF60] font-semibold py-1 px-4 bg-[#E7F7EF] rounded-lg">
        <span>{item?.constructionType}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[1px] leading-[160%] text-[#4A4C56]  rounded-lg text-center">
        {item?.wageOrderType}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#2E2E2E]">
        <span>{item?.location}</span>
      </span>
    ),

    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#305CDE]">
        <span>$ {item?.rate}</span>
      </span>
    ),
    (item) => (
      <div className="space-x-2">
        <button
          onClick={() => setIsWageDetailsModalOpen(true)}
          className="bg-secondary rounded-lg p-2.5 cursor-pointer"
        >
          <EyeIcon className="text-[#FFF]" />
        </button>
        <button className="bg-primary rounded-lg p-2.5 cursor-pointer">
          <BookmarkIcon className="text-[#FFF]" />
        </button>
        <button className="bg-neutral rounded-lg p-2 cursor-pointer">
          <FileIcon className="text-[#FFF]" />
        </button>
      </div>
    ),
  ];

  const isLoading = false;
  const [isWageDetailsModalOpen, setIsWageDetailsModalOpen] = useState(false);

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
      <PrevailingDetailsModal
        isOpen={isWageDetailsModalOpen}
        onClose={() => setIsWageDetailsModalOpen(false)}
      />
    </div>
  );
};

export default DashboardTable;
