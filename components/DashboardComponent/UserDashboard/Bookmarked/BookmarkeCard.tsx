"use client";

import BookmarkIcon from "@/public/icon/BookmarkIcon";
import DollerIcon from "@/public/icon/DollerIcon";
import FileIcon from "@/public/icon/FileIcon";
import LoactionIcon from "@/public/icon/LoactionIcon";

interface BookCardProps {
  title: string;
  constructionType: string;
  classificationId: string;
  BookOrderType: string;
  BookOrderId: string;
  location: string;
  rate: number;
  onDownload?: () => void;
}

const BookmarkeCard = ({
  title,
  constructionType,
  classificationId,
  BookOrderType,
  BookOrderId,
  location,
  rate,
  onDownload,
}: BookCardProps) => {
  return (
    <div className="p-4 rounded-3xl bg-[#FFF] border boredr-[#E9E9EA]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-[#1D1F2C] leading-[160%]">
          {title}
        </h3>
        <button className="p-2.5 rounded-full border border-[#DFE1E7] cursor-pointer">
          <BookmarkIcon className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Construction Type with Badge */}
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <p className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
            Construction Type:
          </p>
          <span className="px-4 py-1 rounded-xl text-[10px] font-bold leading-[160%] bg-[#E7F7EF] text-[#0CAF60]">
            {constructionType}
          </span>
        </div>
      </div>

      {/* Details Grid */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex justify-between">
          <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
            Classification ID:
          </span>
          <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
            {classificationId}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
            Wage Order Type:
          </span>
          <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
            {BookOrderType}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
            Wage Order ID:
          </span>
          <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
            {BookOrderId}
          </span>
        </div>
      </div>

      {/* Location and Rate */}
      <div className="flex items-center justify-between mb-4 border-t border-gray-200">
        <div className="flex items-center gap-1 text-[#4A4C56] mt-4">
          <LoactionIcon className="h-8 w-8" />
          <span className="text-lg font-semibold leading-[160%]">
            {location}
          </span>
        </div>
        <div className="flex items-center gap-1 text-blue-600 font-semibold">
          <DollerIcon className="w-6 h-6 text-[#4A4C56]" />
          <span className="text-lg leading-[160%] font-semibold text-primary">
            ${rate.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={onDownload}
        className="w-full bg-primary hover:bg-primary/90 px-4 py-2 text-[#FFF] text-[16px] font-medium leading-[150%] rounded-[12px] cursor-pointer flex items-center justify-center space-x-2.5"
      >
        <FileIcon className="w-6 h-6" />
        <span>Download Data</span>
      </button>
    </div>
  );
};

export default BookmarkeCard;
