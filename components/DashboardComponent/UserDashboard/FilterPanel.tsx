"use client";

import { useState } from "react";

const filterOptions = {
  wageOrderType: ["All types", "Type 1", "Type 2", "Type 3"],
  state: ["All States", "California", "Texas", "New York", "Florida"],
  county: ["All Counties", "Los Angeles", "Cook", "Harris", "Maricopa"],
  constructionType: ["All types", "Commercial", "Residential", "Industrial"],
  classification: [
    "All Crafts",
    "Carpenter",
    "Electrician",
    "Plumber",
    "Laborer",
  ],
  classificationId: ["All Titles", "Title A", "Title B", "Title C"],
};

export default function FilterPanel() {
  const [filters, setFilters] = useState({
    wageOrderType: "All types",
    state: "All States",
    county: "All Counties",
    constructionType: "All types",
    classification: "All Crafts",
    classificationId: "All Titles",
  });

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wage Order Type */}
        <div>
          <label className="text-[16px] font-medium text-[#1D1F2C] tracking-[-0.32px] leading-[128%]">
            Wage Order Type
          </label>
          <select
            value={filters.wageOrderType}
            onChange={(e) =>
              handleFilterChange("wageOrderType", e.target.value)
            }
            className="w-full px-4 py-2 bg-[#F1F2F4] text-[#777980] rounded-[12px] border border-[#E5E5EC] focus:outline-none focus:ring-2 focus:ring-primary mt-2"
          >
            {filterOptions.wageOrderType.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div>
          <label className="text-[16px] font-medium text-[#1D1F2C] tracking-[-0.32px] leading-[128%]">
            State
          </label>
          <select
            value={filters.state}
            onChange={(e) => handleFilterChange("state", e.target.value)}
            className="w-full px-4 py-2 bg-[#F1F2F4] text-[#777980] rounded-[12px] border border-[#E5E5EC] focus:outline-none focus:ring-2 focus:ring-primary mt-2"
          >
            {filterOptions.state.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* County */}
        <div>
          <label className="text-[16px] font-medium text-[#1D1F2C] tracking-[-0.32px] leading-[128%]">
            County
          </label>
          <select
            value={filters.county}
            onChange={(e) => handleFilterChange("county", e.target.value)}
            className="w-full px-4 py-2 bg-[#F1F2F4] text-[#777980] rounded-[12px] border border-[#E5E5EC] focus:outline-none focus:ring-2 focus:ring-primary mt-2"
          >
            {filterOptions.county.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Construction Type */}
        <div>
          <label className="text-[16px] font-medium text-[#1D1F2C] tracking-[-0.32px] leading-[128%]">
            Construction type
          </label>
          <select
            value={filters.constructionType}
            onChange={(e) =>
              handleFilterChange("constructionType", e.target.value)
            }
            className="w-full px-4 py-2 bg-[#F1F2F4] text-[#777980] rounded-[12px] border border-[#E5E5EC] focus:outline-none focus:ring-2 focus:ring-primary mt-2"
          >
            {filterOptions.constructionType.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Classification */}
        <div>
          <label className="text-[16px] font-medium text-[#1D1F2C] tracking-[-0.32px] leading-[128%]">
            Classification
          </label>
          <select
            value={filters.classification}
            onChange={(e) =>
              handleFilterChange("classification", e.target.value)
            }
            className="w-full px-4 py-2 bg-[#F1F2F4] text-[#777980] rounded-[12px] border border-[#E5E5EC] focus:outline-none focus:ring-2 focus:ring-primary mt-2"
          >
            {filterOptions.classification.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Classification ID */}
        <div>
          <label className="text-[16px] font-medium text-[#1D1F2C] tracking-[-0.32px] leading-[128%]">
            Classification ID
          </label>
          <select
            value={filters.classificationId}
            onChange={(e) =>
              handleFilterChange("classificationId", e.target.value)
            }
            className="w-full px-4 py-2 bg-[#F1F2F4] text-[#777980] rounded-[12px] border border-[#E5E5EC] focus:outline-none focus:ring-2 focus:ring-primary mt-2"
          >
            {filterOptions.classificationId.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
