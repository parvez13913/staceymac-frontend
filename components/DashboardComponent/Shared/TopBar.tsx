import NotificationIcon from "@/public/icon/NotificationIcon";

const TopBar = () => {
  return (
    <div className="sticky top-0 z-40 bg-[#FFFFFF] px-4 md:px-6 py-3.5 w-full border-b border-[#EAECF0]">
      <nav className="flex items-start justify-between gap-3 md:gap-0">
        {/* LEFT: TITLE */}
        <div className="ml-5 lg:ml-0">
          <h1 className="text-[14px] md:text-[16px] leading-[150%] tracking-[-0.32px] text-[#1D1F2C] font-semibold">
            Dashboard
          </h1>
          <p className="text-[11px] md:text-[12px] leading-[150%] tracking-[0.24px]text-[#777980]">
            Welcome back! Here&apos;s what’s happening today.
          </p>
        </div>

        {/* RIGHT: BUTTON */}
        <button className="bg-[#FFF] border border-[#E5E5EC] rounded-lg shadow-[0_1px_2px_0_rgba(82,88,102,0.06)] flex items-center space-x-2 h-8 px-4 md:px-6 cursor-pointer py-[21px] text-nowrap">
          <NotificationIcon className="w-5 h-5 text-[#1D1F2C]" />
          <span className="text-[11px] md:text-[12px] text-[#1D1F2C] font-semibold tracking-[-0.24px]">
            Notifications
          </span>
        </button>
      </nav>
    </div>
  );
};

export default TopBar;
