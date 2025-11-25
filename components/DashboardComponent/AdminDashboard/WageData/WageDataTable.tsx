"use client";
import ReuseAbleTable from "@/components/reusable/reuseable-table";
import { Checkbox } from "@/components/ui/checkbox";
import { TableRowItem } from "@/types/types";
import { ReactNode } from "react";

const tableData = [
  {
    classificationId: "41654316",
    classification: "Millwright",
    wageOrderType: "Annual Wage Order",
    location: "Cass, Missouri",
    constructionType: "Heavy",
    rate: 64.46,
    effectiveDate: "01/02/2025",
    status: "Active",
  },
  {
    classificationId: "41654316",
    classification: "Millwright",
    wageOrderType: "General Wage Order",
    location: "Cass, Missouri",
    constructionType: "Heavy",
    rate: 64.46,
    effectiveDate: "01/02/2025",
    status: "Active",
  },
  {
    classificationId: "41654316",
    classification: "Millwright",
    wageOrderType: "Annual Wage Order",
    location: "Cass, Missouri",
    constructionType: "Heavy",
    rate: 64.46,
    effectiveDate: "01/02/2025",
    status: "Active",
  },
  {
    classificationId: "41654316",
    classification: "Millwright",
    wageOrderType: "Service Contracts",
    location: "Cass, Missouri",
    constructionType: "Heavy",
    rate: 64.46,
    effectiveDate: "01/02/2025",
    status: "Active",
  },
  {
    classificationId: "41654316",
    classification: "Millwright",
    wageOrderType: "Annual Wage Order",
    location: "Cass, Missouri",
    constructionType: "Heavy",
    rate: 64.46,
    effectiveDate: "01/02/2025",
    status: "Active",
  },
  {
    classificationId: "41654316",
    classification: "Millwright",
    wageOrderType: "General Wage Order",
    location: "Cass, Missouri",
    constructionType: "Heavy",
    rate: 64.46,
    effectiveDate: "01/02/2025",
    status: "Active",
  },
  {
    classificationId: "41654316",
    classification: "Millwright",
    wageOrderType: "Service Contracts",
    location: "Cass, Missouri",
    constructionType: "Heavy",
    rate: 64.46,
    effectiveDate: "01/02/2025",
    status: "Active",
  },
  {
    classificationId: "41654316",
    classification: "Millwright",
    wageOrderType: "Annual Wage Order",
    location: "Cass, Missouri",
    constructionType: "Heavy",
    rate: 64.46,
    effectiveDate: "01/02/2025",
    status: "Active",
  },
];

const WageDataTable = () => {
  const tableHeader = [
    "Classification ID",
    "Classification",
    "Wage Order Type",
    "Location",
    "Construction Type",
    "Rate",
    "RateEffective Date",
    "Action",
  ];

  const currentItems = tableData;

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#1D1F2C] font-semibold space-x-1">
        <Checkbox />
        <span> {item?.classificationId}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[142.857%] text-[#2E2E2E] tracking-[-0.084px]">
        {item?.classification}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[1px] leading-[160%] text-[#0CAF60] font-semibold py-1 px-4 bg-[#E7F7EF] rounded-xl text-center">
        {item?.wageOrderType}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#2E2E2E]">
        <span>{item?.location}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#4A4C56]">
        <span>{item?.constructionType}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#305CDE]">
        <span>$ {item?.rate}</span>
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[14px] leading-[160%] text-[#2E2E2E]">
        <span>{item?.effectiveDate}</span>
      </span>
    ),
    (item) => {
      const isActive = item?.status === "Active";

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

export default WageDataTable;
