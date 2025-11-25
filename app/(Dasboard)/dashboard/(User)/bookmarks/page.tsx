"use client";

import BookmarkeCard from "@/components/DashboardComponent/UserDashboard/Bookmarked/BookmarkeCard";
import Filter2Icon from "@/public/icon/Filter2Icon";
import SortByIcon from "@/public/icon/SortByIcon";
import { Search } from "lucide-react";

const BookmarkData = [
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
  {
    title: "Millwright",
    constructionType: "Heavy",
    classificationId: "41654316",
    BookOrderType: "Annual Wage Order",
    BookOrderId: "GWO 69- Bollinger",
    location: "Cass, MO",
    rate: 64.46,
  },
];

const BookmarksPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-[#1D1F2C] tracking-[-0.48px] leading-[128%] font-semibold">
          Bookmarked Data
        </h1>
        <div className="flex items-center gap-x-3">
          <div className="relative">
            <input
              type="text"
              className="w-full rounded-lg border border-[#E0E0E0] pl-10 pr-4 py-2 focus:outline-0 placeholder:text-[#727272]"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#727272]" />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 rounded-lg border border-[#E0E0E0] cursor-pointer flex items-center space-x-1">
              <Filter2Icon />
              <span className="text-[#1D1F2C] text-[16px] leading-[125%]">
                Filter
              </span>
            </button>
            <button className="px-3 py-2 rounded-lg border border-[#E0E0E0] cursor-pointer flex items-center space-x-1">
              <SortByIcon />
              <span className="text-[#1D1F2C] text-[16px] leading-[125%]">
                Sort by
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-5">
        {BookmarkData.map((Book, index) => (
          <BookmarkeCard
            key={index}
            title={Book?.title}
            constructionType={Book?.constructionType}
            classificationId={Book?.classificationId}
            BookOrderType={Book?.BookOrderType}
            BookOrderId={Book?.BookOrderId}
            location={Book?.location}
            rate={Book?.rate}
            onDownload={() => console.log("Downloading:", Book.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarksPage;
