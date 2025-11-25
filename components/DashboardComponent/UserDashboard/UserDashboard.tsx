"use client";
import Pagination from "@/components/reusable/Pagination";
import { useState } from "react";
import DashboardTable from "./DashboardTable";
import FilterPanel from "./FilterPanel";

const UserDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  // Total number of entries (your screenshot says 69)
  const totalItems = 69;
  return (
    <div className="p-6 bg-[#FFF] rounded-[12px]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#1D1F2C] leading-[128%] tracking-[-0.48px]">
          Prevailing Wage Portal
        </h2>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-[#E5E5EC] rounded-[12px] text-[#1D1F2C] leading-[150%] font-medium text-[16px] cursor-pointer">
            Reset Filters
          </button>
          <button className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-[12px] text-[#FFF] leading-[150%] font-medium text-[16px] cursor-pointer">
            Search
          </button>
        </div>
      </div>
      <div>
        <FilterPanel />
      </div>

      <div className="mt-12">
        <div className="flex items-center space-x-5">
          <h2 className="text-2xl font-semibold text-[#1D1F2C] leading-[128%] tracking-[-0.48px]">
            Prevailing Wage
          </h2>
          <span className="text-xs leading-[160%] font-medium text-[#777980]">
            69 results
          </span>
        </div>
        <div>
          <DashboardTable />
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1);
          }}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
