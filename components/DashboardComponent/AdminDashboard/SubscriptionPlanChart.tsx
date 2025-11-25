/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SubscriptionPlanChart = () => {
  const donutChartData = {
    series: [1243, 628, 604],
    labels: ["Premium Plan", "Standard Plan", "Basic Plan"],
  };

  const donutChartOptions = {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    colors: ["#155DFC", "#FB6D26", "#E1E4EA"],
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    labels: donutChartData.labels,
    legend: {
      show: false,
      position: "top" as const,
      markers: {
        width: 12,
        height: 12,
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };

  return (
    <div className="p-4 bg-[#FFF] border border-[#E0E0E0] rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-[#0E121B] leading-[160%]">
          Subscription Plans
        </h2>
        <button className="text-[#0E121B] hover:text-[#0E121B]/90 transition-colors cursor-pointer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </div>

      {/* Chart Container */}
      <div>
        <Chart
          options={donutChartOptions as any}
          series={donutChartData.series}
          type="donut"
          height="100%"
        />
      </div>

      {/* Legend with counts */}
      <div className="space-y-1 mt-4">
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-sm bg-[#155DFC]" />
            <span className="text-[16px] leading-[160%] text-[#0E121B] font-medium">
              Premium plan
            </span>
          </div>
          <span className="text-sm leading-[160%] text-[#0E121B] font-medium">
            1243
          </span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-sm bg-[#FB6D26]" />
            <span className="text-[16px] leading-[160%] text-[#0E121B] font-medium">
              Standard plan
            </span>
          </div>
          <span className="text-sm leading-[160%] text-[#0E121B] font-medium">
            628
          </span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-sm bg-[#E1E4EA]" />
            <span className="text-[16px] leading-[160%] text-[#0E121B] font-medium">
              Basic plan
            </span>
          </div>
          <span className="text-sm leading-[160%] text-[#0E121B] font-medium">
            604
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanChart;
