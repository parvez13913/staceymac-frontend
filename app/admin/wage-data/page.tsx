"use client";
import StatsCard from "@/components/DashboardComponent/AdminDashboard/StatsCard";
import AddWageRecordModal from "@/components/DashboardComponent/AdminDashboard/WageData/add-wage-record-modal";
import WageDataTable from "@/components/DashboardComponent/AdminDashboard/WageData/WageDataTable";
import Pagination from "@/components/reusable/Pagination";
import { statsCards } from "@/constant/statsCards";
import AddIcon from "@/public/icon/AddIcon";
import FileIcon from "@/public/icon/FileIcon";
import FilterIcon from "@/public/icon/FilterIcon";
import { Search } from "lucide-react";
import { useState } from "react";

const WageDataPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[18px]">
        {statsCards?.map((item) => (
          <StatsCard key={item?.id} statsData={item} />
        ))}
      </div>

      <div className="p-6 bg-[#FFF] rounded-2xl mt-[27px]">
        <h2 className="text-[24px] font-semibold text-[#0E121B] leading-[150%]">
          Wage Data List
        </h2>
        <div className="mt-2 flex items-center justify-between">
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-[#E0E0E0] pl-10 pr-4 py-2 focus:outline-0 placeholder:text-[#727272]"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#727272]" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 rounded-lg bg-[#FFF] border border-[#E0E0E0] cursor-pointer flex items-center space-x-1">
              <span className="text-[#1D1F2C] text-[16px] leading-[125%]">
                Filter
              </span>
              <FilterIcon />
            </button>
            <button className="px-3 py-2 rounded-lg bg-[#FFF] border border-[#E0E0E0] cursor-pointer flex items-center space-x-1">
              <span className="text-[#1D1F2C] text-[16px] leading-[125%]">
                Export
              </span>
              <FileIcon />
            </button>
            <button
              className="px-3 py-2 rounded-lg bg-primary hover:bg-primary/90 border border-[#E0E0E0] cursor-pointer flex items-center space-x-1"
              onClick={() => setIsModalOpen(true)}
            >
              <AddIcon />
              <span className="text-[#FFF] text-[16px] leading-[150%]">
                Add Record
              </span>
            </button>
          </div>
        </div>
        <div className="mt-6">
          <WageDataTable />
          <Pagination
            currentPage={0}
            totalItems={0}
            pageSize={0}
            onPageChange={function (page: number): void {
              throw new Error("Function not implemented.");
            }}
            onPageSizeChange={function (size: number): void {
              throw new Error("Function not implemented.");
            }}
          />
          <AddWageRecordModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default WageDataPage;
