export interface StatsCardType {
  id: number;
  label: string;
  value: string;
  change: string;
  changeType: string;
}

interface StatsCardProps {
  statsData: StatsCardType;
}

const StatsCard = ({ statsData }: StatsCardProps) => {
  return (
    <div className="p-4 bg-[#FFF] border border-[#E9E9EA] rounded-xl">
      <p className="text-sm text-[#1D1F2C] tracking-[-0.28px] leading-[150%] font-medium mb-4">
        {statsData.label}
      </p>

      <div className="flex items-center justify-between gap-3">
        <span className="text-[32px] leading-[160%] font-semibold">
          {statsData.value}
        </span>

        <span
          className={`px-2 py-1 ${
            statsData.changeType === "positive"
              ? "text-[#56843B] bg-[#F2F7EF] rounded-lg"
              : "text-[#EB3D4D] bg-[#FEECEE] rounded-lg"
          }`}
        >
          {statsData.change}
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
