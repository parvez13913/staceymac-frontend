"use client";
import { X } from "lucide-react";
import { useState } from "react";

interface WageDataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddWageRecordModal = ({ isOpen, onClose }: WageDataModalProps) => {
  const [formData, setFormData] = useState({
    classificationId: "41654316",
    classification: "Millwright",
    constructionType: "",
    wageOrderType: "",
    location: "Cass, Missouri",
    rate: "$64.46",
    effectiveDate: "12/10/2025",
    status: "Active",
  });

  const handleInputChange = (field: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddRecord = () => {
    console.log("Adding record:", formData);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center p-6 z-50">
      <div className="bg-[#FFF] rounded-3xl shadow-lg max-w-xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#1D1F2C] tracking-[-0.48px] leading-[128%]">
              Add New Wage Record
            </h2>
            <p className="text-sm text-[#777980] mt-1 tracking-[-0.28px] leading-[128%]">
              Enter the details for the new prevailing wage record.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#777980] hover:text-[#777980]/90 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Classification ID */}
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Classification ID
              </label>
              <input
                type="text"
                value={formData.classificationId}
                onChange={(e) =>
                  handleInputChange("classificationId", e.target.value)
                }
                className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
              />
            </div>

            {/* Classification */}
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Classification
              </label>
              <input
                type="text"
                value={formData.classification}
                onChange={(e) =>
                  handleInputChange("classification", e.target.value)
                }
                className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
              />
            </div>

            {/* Construction Type */}
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Construction Type
              </label>
              <div>
                <select
                  value={formData.constructionType}
                  onChange={(e) =>
                    handleInputChange("constructionType", e.target.value)
                  }
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                >
                  <option value="">Select type</option>
                  <option value="commercial">Commercial</option>
                  <option value="residential">Residential</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
            </div>

            {/* Wage Order Type */}
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Wage Order Type
              </label>
              <div>
                <select
                  value={formData.wageOrderType}
                  onChange={(e) =>
                    handleInputChange("wageOrderType", e.target.value)
                  }
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                >
                  <option value="">Select type</option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Location
              </label>
              <div>
                <input
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                />
              </div>
            </div>

            {/* Rate */}
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Rate
              </label>
              <div>
                <input
                  value={formData.rate}
                  onChange={(e) => handleInputChange("rate", e.target.value)}
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                />
              </div>
            </div>

            {/* Effective Date */}
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Effective Date
              </label>
              <div>
                <input
                  type="text"
                  value={formData.effectiveDate}
                  onChange={(e) =>
                    handleInputChange("effectiveDate", e.target.value)
                  }
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                />
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Status
              </label>
              <div>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex gap-3 p-6 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#1D1F2C] border border-[#DEDFE0] rounded-md font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90  font-medium cursor-pointer"
            onClick={() => handleAddRecord}
          >
            Add Record
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWageRecordModal;
