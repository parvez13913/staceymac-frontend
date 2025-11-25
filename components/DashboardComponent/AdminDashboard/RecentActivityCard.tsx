import ProPlanIcon from "@/public/icon/ProPlanIcon";
import UserIcon from "@/public/icon/UserIcon";
import UsersIcon from "@/public/icon/UsersIcon";

const RecentActivityCard = () => {
  return (
    <div className="p-4 bg-[#FFF] rounded-xl">
      <h1 className="text-xl leading-[128%] tracking-[-0.4px] text-[#1D1F2C] font-medium">
        Recent System Activity
      </h1>
      <div className="space-y-4 mt-3">
        <div className="flex space-x-1.5">
          <ProPlanIcon />
          <span className="text-sm font-medium leading-[160%] text-[#4A4C56]">
            12 users upgraded to Pro plan
          </span>
        </div>
        <div className="flex space-x-1.5">
          <UsersIcon />
          <span className="text-sm font-medium leading-[160%] text-[#4A4C56]">
            25 new users registered
          </span>
        </div>
        <div className="flex space-x-1.5">
          <UserIcon />
          <span className="text-sm font-medium leading-[160%] text-[#4A4C56]">
            John Smith bought the Pro plan
          </span>
        </div>
        <div className="flex space-x-1.5">
          <UserIcon />
          <span className="text-sm font-medium leading-[160%] text-[#4A4C56]">
            Emily Davis bought the basic plan
          </span>
        </div>
        <div className="flex space-x-1.5">
          <ProPlanIcon />
          <span className="text-sm font-medium leading-[160%] text-[#4A4C56]">
            12 users upgraded to Pro plan
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;
