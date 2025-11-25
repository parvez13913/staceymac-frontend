import ReuseAbleTable from "@/components/reusable/reuseable-table";
import LoactionIcon from "@/public/icon/LoactionIcon";
import { TableRowItem } from "@/types/types";
import { ReactNode } from "react";

const tableData = [
  {
    classification: "Millwright",
    constructionType: "Heavy",
    wageOrderType: "Annual Wage Order",
    source: "AWO 32 - Adair",
    location: "Cass, MO",
  },
  {
    classification: "Millwright",
    constructionType: "Heavy",
    wageOrderType: "Annual Wage Order",
    source: "GWO 69 - Bollinger",
    location: "Cass, MO",
  },
  {
    classification: "Millwright",
    constructionType: "Heavy",
    wageOrderType: "Annual Wage Order",
    source: "AWO 32 - Adair",
    location: "Cass, MO",
  },
  {
    classification: "Millwright",
    constructionType: "Heavy",
    wageOrderType: "Annual Wage Order",
    source: "GWO 69 - Bollinger",
    location: "Cass, MO",
  },
  {
    classification: "Millwright",
    constructionType: "Heavy",
    wageOrderType: "Annual Wage Order",
    source: "AWO 32 - Adair",
    location: "Cass, MO",
  },
  {
    classification: "Millwright",
    constructionType: "Heavy",
    wageOrderType: "Annual Wage Order",
    source: "AWO 32 - Adair",
    location: "Cass, MO",
  },
  {
    classification: "Millwright",
    constructionType: "Heavy",
    wageOrderType: "Annual Wage Order",
    source: "AWO 32 - Adair",
    location: "Cass, MO",
  },
];

const RecentDataTable = () => {
  const tableHeader = [
    "CLASSIFICATION",
    "CONSTRUCTION TYPE",
    "WAGE ORDER TYPE",
    "SOURCE",
    "LOCATION",
  ];

  const currentItems = tableData;

  const tableRowDataRenderers: ((
    item: TableRowItem,
    index: number
  ) => ReactNode)[] = [
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#1D1F2C] font-semibold">
        {item?.classification}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[10px] leading-[160%] text-[#0CAF60] font-bold py-1 px-4 bg-[#E7F7EF] rounded-xl text-center">
        {item?.constructionType}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#4A4C56] font-medium">
        {item?.wageOrderType}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#4A4C56] font-medium">
        {item?.source}
      </span>
    ),
    (item) => (
      <span className="md:text-base text-[12px] leading-[160%] text-[#4A4C56] font-medium flex items-center space-x-1 justify-end">
        <LoactionIcon />
        <span>{item?.location}</span>
      </span>
    ),
  ];

  const isLoading = false;

  return (
    <div className="p-6 bg-[#FFF] rounded-2xl">
      <h1 className="text-2xl tracking-[-0.48px] leading-[128%] text-[#1D1F2C] font-semibold">
        Recent Data Imports
      </h1>
      <div className="bg-white rounded-md p-5 mt-4">
        <ReuseAbleTable
          allClientDataList={tableData}
          isLoadings={isLoading}
          currentItems={currentItems}
          tableHeader={tableHeader}
          tableRowDataRenderers={tableRowDataRenderers}
          isBg={false}
        />
      </div>
    </div>
  );
};

export default RecentDataTable;
