"use client";
import { X } from "lucide-react";
import { useState } from "react";

interface SubscriptionPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateNewSubscriptionPlanModal = ({
  isOpen,
  onClose,
}: SubscriptionPlanModalProps) => {
  const [formData, setFormData] = useState({
    planName: "planName",
    price: "2000",
    duration: "",
    Description: "A comprehensive plan for growing businesses...",
  });

  const handleInputChange = (field: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddNewPlan = () => {
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
              Create New Subscription Plan
            </h2>
            <p className="text-sm text-[#777980] mt-1 tracking-[-0.28px] leading-[128%]">
              Add a new subscription plan for your users.
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
          <div>
            <div className="grid grid-cols-2 gap-4">
              {/* planName */}
              <div>
                <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                  Plan Name
                </label>
                <input
                  type="text"
                  value={formData.planName}
                  onChange={(e) =>
                    handleInputChange("planName", e.target.value)
                  }
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                />
              </div>

              {/* Price */}
              <div>
                <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                  Price (S)
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                />
              </div>
            </div>

            {/* Duration */}
            <div className="my-2">
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Duration
              </label>
              <div>
                <select
                  value={formData.duration}
                  onChange={(e) =>
                    handleInputChange("duration", e.target.value)
                  }
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                >
                  <option value="">Select</option>
                  <option value="commercial">Monthly</option>
                  <option value="residential">Yearly</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Description
              </label>
              <div>
                <textarea
                  value={formData.duration}
                  onChange={(e) =>
                    handleInputChange("duration", e.target.value)
                  }
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                  placeholder="A comprehensive plan for growing businesses..."
                />
              </div>
            </div>
            <div>
              <label className="text-[16px] font-medium text-[#1D1F2C] leading-[128%] tracking-[-0.32px]">
                Features (one per line)
              </label>
              <div>
                <textarea
                  value={formData.duration}
                  onChange={(e) =>
                    handleInputChange("duration", e.target.value)
                  }
                  className="w-full p-3 bg-[#F1F2F4] border border-[#E5E5EC] rounded-xl text-[#777980] text-sm focus:outline-none focus:ring-1 focus:ring-primary mt-2"
                  placeholder="Unlimited searches"
                />
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
            onClick={() => handleAddNewPlan}
          >
            Create Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewSubscriptionPlanModal;
