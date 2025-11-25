import { statsCards } from "@/constant/statsCards";
import DataSourceChart from "./DataSourceChart";
import RecentActivityCard from "./RecentActivityCard";
import RecentDataTable from "./RecentDataTable";
import RevenueChart from "./RevenueChart";
import StatsCard from "./StatsCard";
import SubscriptionPlanChart from "./SubscriptionPlanChart";

const AdminDashboard = () => {
  return (
    <div className="w-full px-3 md:px-0">
      {/* TOP STATS CARDS */}
      <div
        className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-[18px]
      "
      >
        {statsCards?.map((item) => (
          <StatsCard key={item?.id} statsData={item} />
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-4 gap-[18px]">
        {/* LEFT SIDE */}
        <div className="col-span-1 xl:col-span-3 w-full">
          <RevenueChart />

          <div className="mt-6">
            <RecentDataTable />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-1 w-full">
          <SubscriptionPlanChart />

          <div className="mt-6">
            <DataSourceChart />
          </div>

          <div className="mt-6">
            <RecentActivityCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
