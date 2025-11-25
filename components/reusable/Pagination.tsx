"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const Pagination = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const paginationRange = () => {
    if (!totalPages || totalPages < 1) return [1];
    const dots = "...";
    if (totalPages <= 5) {
      return [...Array(totalPages).keys()].map((n) => n + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, dots, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, dots, totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      dots,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      dots,
      totalPages,
    ];
  };

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex items-center justify-between w-full mt-6">
      {/* Pagination */}
      <div className="flex items-center space-x-2">
        {/* Prev Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="p-2 rounded-lg border border-gray-300 disabled:opacity-40 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Numbers */}
        {paginationRange()?.map((page, idx) => (
          <button
            key={idx}
            disabled={page === "..."}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`px-3 py-1 rounded-lg cursor-pointer ${
              page === currentPage
                ? "bg-[#F3F3F3] text-black"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="p-2 rounded-lg border border-gray-300 disabled:opacity-40 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Right Text + Page Size Dropdown */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">
          Showing {startItem} to {endItem} of {totalItems} entries
        </span>

        <div className="relative">
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="border rounded-lg px-4 py-2 text-sm cursor-pointer"
          >
            {[8, 10, 20, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
