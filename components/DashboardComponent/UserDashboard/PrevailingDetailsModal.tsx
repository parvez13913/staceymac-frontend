"use client";

import BookmarkIcon from "@/public/icon/BookmarkIcon";
import FileIcon from "@/public/icon/FileIcon";
import { X } from "lucide-react";

interface WageDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrevailingDetailsModal = ({ isOpen, onClose }: WageDetailsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-6">
      <div className="bg-[#FFF] rounded-[12px] shadow-xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold leading-[128%] tracking-[-0.36px] text-[#1D1F2C]">
            Millwright Wage&apos;s Details
          </h2>
          <div className="flex items-center gap-2">
            <button className="p-2.5 bg-[#FFF] border border-[#DFE1E7] hover:bg-[#FFF]/90 rounded-full cursor-pointer">
              <BookmarkIcon className="w-5 h-5 text-gray-[#777980]" />
            </button>
            <button className="p-2.5 bg-[#FFF] border border-[#DFE1E7] hover:bg-[#FFF]/90 rounded-full cursor-pointer">
              <FileIcon className="w-5 h-5 text-[#777980]" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 bg-[#FFF] border border-[#DFE1E7] hover:bg-[#FFF]/90 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5 text-[#777980]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Wage Title */}
          <h3 className="text-lg font-semibold leading-[160%] text-[#1D1F2C] mb-2">
            Millwright
          </h3>

          {/* Details Section */}
          <div className="space-y-4 mb-8">
            {/* Construction Type */}
            <div className="flex items-center justify-between">
              <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
                Construction Type:
              </span>
              <div className="flex items-center gap-2">
                <span className="px-4 py-1 rounded-xl text-[10px] font-bold leading-[160%] bg-[#E7F7EF] text-[#0CAF60]">
                  Heavy
                </span>
              </div>
            </div>

            {/* Classification ID */}
            <div className="flex items-center justify-between">
              <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
                Classification ID:
              </span>
              <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
                41654316
              </span>
            </div>

            {/* Wage Order Type */}
            <div className="flex items-center justify-between">
              <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
                Wage Order Type:
              </span>
              <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
                Annual Wage Order
              </span>
            </div>

            {/* County */}
            <div className="flex items-center justify-between">
              <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
                County:
              </span>
              <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
                MO
              </span>
            </div>

            {/* State */}
            <div className="flex items-center justify-between">
              <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
                State:
              </span>
              <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
                Cass
              </span>
            </div>

            {/* Rate */}
            <div className="flex items-center justify-between">
              <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
                Rate:
              </span>
              <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
                $64.46
              </span>
            </div>
          </div>

          {/* Wage Order Source Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold leading-[128%] tracking-[-0.36px] text-[#1D1F2C]">
              Wage Order Source
            </h4>

            {/* Source */}
            <div className="flex items-center justify-between">
              <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
                Source:
              </span>
              <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
                GWO 69- Bollinger
              </span>
            </div>

            {/* Issued */}
            <div className="flex items-center justify-between">
              <span className="text-xs leading-[160%] tracking-[0.2px] font-semibold text-[#777980]">
                Issued:
              </span>
              <span className="text-xs font-semibold text-[#1D1F2C] leading-[160%]">
                Jan 2025
              </span>
            </div>

            {/* Link */}
            <a
              href="#"
              className="text-xs font-semibold leading-[160%] text-primary hover:text-primary/90 underline mt-4"
            >
              View Official Wage Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevailingDetailsModal;
