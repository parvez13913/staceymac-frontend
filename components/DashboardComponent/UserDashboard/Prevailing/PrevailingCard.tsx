"use client";

import DateIcon from "@/public/icon/DateIcon";
import FileIcon from "@/public/icon/FileIcon";

interface PrevailingCardProps {
  date: string;
  title: string;
  description: string;
  onDownload?: () => void;
}

export function PrevailingCard({
  date,
  title,
  description,
  onDownload,
}: PrevailingCardProps) {
  return (
    <div className="bg-[#FFF] p-4 border border-[#E9E9EA] rounded-3xl">
      {/* Date */}
      <div className="flex items-center gap-x-2 mb-4">
        <DateIcon className="w-5 h-5" />
        <span className="text-[16px] font-semibold leading-[160%] text-[#777980]">
          {date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold leading-[160%] text-[#1D1F2C] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#4A4C56] text-[16px] font-normal leading-[160%] mb-6">
        {description}
      </p>

      {/* Download Button */}
      <button
        onClick={onDownload}
        className="w-full bg-primary hover:bg-primary/90 text-[#FFF] font-medium py-2 px-4 rounded-[12px] flex items-center justify-center gap-2 cursor-pointer"
      >
        <FileIcon className="w-4 h-4" />
        <span className="text-[16px]">Download PDF</span>
      </button>
    </div>
  );
}
