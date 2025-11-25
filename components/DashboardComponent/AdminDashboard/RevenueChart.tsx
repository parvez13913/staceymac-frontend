"use client";

import { ChevronDown } from "lucide-react";
/* eslint-disable @typescript-eslint/no-explicit-any */

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueChart = () => {
  const chartData = {
    series: [
      {
        name: "Revenue",
        data: [
          0, 78, 5000, 1200, 1500, 1200, 2223, 1777, 1455, 2600, 1200, 5200,
        ],
      },
      {
        name: "User",
        data: [0, 400, 40, 407, 520, 510, 540, 600, 400, 500, 460, 5100],
      },
    ],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const chartOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: false,
      },
    },
    colors: ["#3b82f6", "#a855f7"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    xaxis: {
      categories: chartData.categories,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#6b7280",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        style: {
          colors: "#6b7280",
          fontSize: "12px",
        },
        formatter: (value: number) => {
          return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;
        },
      },
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: (value: number) => {
          if (chartData.series[0].data.indexOf(value) !== -1) {
            return `$${value.toLocaleString()}`;
          }
          return value.toLocaleString();
        },
      },
    },
    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
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
    <div>
      <div className="p-5 bg-[#FFF] border border-[#E0E0E0] rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl leading-[133.333%] text-[#2E2E2E] font-medium">
            Revenue & User Growth
          </h2>
          <div>
            <button className="flex items-center gap-2 cursor-pointer px-2.5 py-1.5 bg-[#FFF] rounded-lg border border-[#E0E0E0]">
              Last Month
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chart Container */}
        <div>
          <Chart
            options={chartOptions as any}
            series={chartData.series}
            type="area"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
