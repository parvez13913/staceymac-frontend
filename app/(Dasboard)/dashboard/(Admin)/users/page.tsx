import StatsCard from "@/components/DashboardComponent/AdminDashboard/StatsCard";
import UsersTable from "@/components/DashboardComponent/AdminDashboard/Users/UsersTable";
import { statsCards } from "@/constant/statsCards";
import FilterIcon from "@/public/icon/FilterIcon";
import { Search } from "lucide-react";

const UsersPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[18px]">
        {statsCards?.map((item) => (
          <StatsCard key={item?.id} statsData={item} />
        ))}
      </div>

      <div className="p-6 bg-[#FFF] rounded-2xl mt-[27px]">
        <h2 className="text-[24px] font-semibold text-[#0E121B] leading-[150%]">
          Users list
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
          <div className="flex justify-end">
            <button className="px-3 py-2 rounded-lg bg-[#FFF] border border-[#E0E0E0] cursor-pointer flex items-center space-x-1">
              <span className="text-[#1D1F2C] text-[16px] leading-[125%]">
                Filter
              </span>
              <FilterIcon />
            </button>
          </div>
        </div>
        <div className="mt-6">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
