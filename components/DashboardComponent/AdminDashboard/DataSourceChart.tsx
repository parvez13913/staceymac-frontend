"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

const DataSourceChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: any;
    let mounted = false;

    const renderChart = async () => {
      if (mounted) return;
      mounted = true;

      const ApexChartsLib = (await import("apexcharts")).default;

      const options: ApexCharts.ApexOptions = {
        series: [1243, 628, 608],
        chart: { type: "donut" },

        plotOptions: {
          pie: { startAngle: -90, endAngle: 90, offsetY: 10 },
        },
        grid: { padding: { bottom: -100 } },
        labels: ["AWO", "GWO", "FEDWO"],
        legend: { position: "bottom", show: false },
        fill: { colors: ["#F34147", "#FFBE4C", "#40C4AA"] },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: { width: 200 },
              legend: { position: "bottom" },
            },
          },
        ],
      };

      if (chartRef.current) {
        chartRef.current.innerHTML = "";
        chart = new ApexChartsLib(chartRef.current, options);
        chart.render();
      }
    };

    renderChart();

    return () => {
      if (chart) chart.destroy();
    };
  }, []);

  return (
    <div className="p-4 bg-[#FFF] rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-[#0E121B] leading-[160%]">
          Data Source
        </h2>
        <button className="text-[#0E121B] hover:text-[#0E121B]/90 transition-colors cursor-pointer">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>
      </div>
      <div ref={chartRef} id="chart" />

      <div className="space-y-1">
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-sm bg-[#F5595E]" />
            <span className="text-[16px] leading-[160%] text-[#0E121B] font-medium">
              AWO
            </span>
          </div>
          <span className="text-sm leading-[160%] text-[#0E121B] font-medium">
            1243
          </span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-sm bg-[#FFBE4C]" />
            <span className="text-[16px] leading-[160%] text-[#0E121B] font-medium">
              GWO
            </span>
          </div>
          <span className="text-sm leading-[160%] text-[#0E121B] font-medium">
            628
          </span>
        </div>
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-sm bg-[#40C4AA]" />
            <span className="text-[16px] leading-[160%] text-[#0E121B] font-medium">
              FEDWO
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

export default DataSourceChart;
