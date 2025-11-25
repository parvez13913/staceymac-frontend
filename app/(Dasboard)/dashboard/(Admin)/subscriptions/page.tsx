"use client";
import StatsCard from "@/components/DashboardComponent/AdminDashboard/StatsCard";
import CreateNewSubscriptionPlanModal from "@/components/DashboardComponent/AdminDashboard/Subscriptions/CreateNewSubscriptionPlanModal";
import PlanPricingCard from "@/components/DashboardComponent/AdminDashboard/Subscriptions/PlanPricingCard";
import SubscriptionTable from "@/components/DashboardComponent/AdminDashboard/Subscriptions/SubscriptionTable";
import { statsCards } from "@/constant/statsCards";
import AddIcon from "@/public/icon/AddIcon";
import { Search } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic Plan",
    price: 99.99,
    description: "All the basics for starting a new business",
    users: 99.99,
    revenue: 21168,
    features: [
      "Guides and Materials Quick Reference",
      "AWS & GWO Coverage",
      "View and Print Access",
      "1 User/License",
      "1 States",
      "5 Countries",
    ],
  },
  {
    name: "Standard Plan",
    price: 99.99,
    description: "All the basics for starting a new business",
    users: 99.99,
    revenue: 21168,
    features: [
      "Guides and Materials Quick Reference",
      "AWS & GWO Coverage",
      "View and Print Access",
      "1 User/License",
      "1 States",
      "5 Countries",
    ],
  },
  {
    name: "Premium Plan",
    price: 99.99,
    description: "All the basics for starting a new business",
    users: 99.99,
    revenue: 21168,
    features: [
      "Guides and Materials Quick Reference",
      "AWS & GWO Coverage",
      "View and Print Access",
      "1 User/License",
      "1 States",
      "3 Countries",
    ],
  },
];

const SubscriptionsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[18px]">
        {statsCards?.map((item) => (
          <StatsCard key={item?.id} statsData={item} />
        ))}
      </div>

      <div className="mt-[26px] flex items-center justify-between">
        <h1 className="text-2xl text-[#1D1F2C] leading-[150%] font-semibold">
          Subscription Plans
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3 py-2 rounded-lg bg-primary hover:bg-primary/90 border border-[#E0E0E0] cursor-pointer flex items-center space-x-1"
        >
          <AddIcon />
          <span className="text-[#FFF] text-[16px] leading-[150%]">
            Add New Plan
          </span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6 mt-[18px]">
        {plans.map((plan, index) => (
          <PlanPricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            users={plan.users}
            revenue={plan.revenue}
            features={plan.features}
          />
        ))}
      </div>

      <div className="p-6 bg-[#FFF] rounded-3xl mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] font-semibold text-[#0E121B] leading-[150%]">
            Recent Subscriptions
          </h1>
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
        </div>
        <div>
          <SubscriptionTable />
          <CreateNewSubscriptionPlanModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionsPage;
