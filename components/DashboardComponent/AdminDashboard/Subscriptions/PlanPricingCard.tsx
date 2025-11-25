"use client";

import CheckIcon from "@/public/icon/CheckIcon";
import CopyIcon from "@/public/icon/CopyIcon";
import TrashIcon from "@/public/icon/TrashIcon";
import { Check } from "lucide-react";
import { useState } from "react";

interface PricingCardProps {
  name: string;
  price: number;
  description: string;
  users: number;
  revenue: number;
  features: string[];
}

const PlanPricingCard = ({
  name,
  price,
  description,
  users,
  revenue,
  features,
}: PricingCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = () => {
    console.log(`Delete ${name}`);
  };

  return (
    <div className="p-4 border border-[#DFE1E7] bg-[#FFF] rounded-xl">
      {/* Header with Actions */}
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-[16px] font-semibold text-[#0D0D12] leading-[150%] tracking-[0.32px]">
          {name}
        </h3>
        <div>
          <button
            onClick={handleCopy}
            className="p-2 cursor-pointer"
            title="Copy plan"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <CopyIcon className="w-4 h-4 text-[#1D1F2C]" />
            )}
          </button>

          <button
            onClick={handleDelete}
            className="p-2 cursor-pointer text-[#EB3D4D]"
            title="Delete plan"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <hr />

      {/* Price */}
      <div className="mt-4">
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-2xl font-semibold text-[#0D0D12] leading-[130%]">
            ${price.toFixed(2)}
          </span>
          <span className="text-[#666D80] leading-[150%] tracking-[0.28px] text-sm font-medium">
            /month
          </span>
        </div>
        <p className="text-[#666D80] leading-[150%] tracking-[0.28px] text-sm font-medium text-nowrap">
          {description}
        </p>
      </div>

      {/* Users and Revenue */}
      <div className="flex items-center justify-between mt-4 mb-5">
        <div className="flex items-center space-x-1.5">
          <p className="text-sm text-[#666D80] tracking-[0.28px] leading-[150%] font-medium">
            Users:
          </p>
          <p className="text-lg font-semibold text-primary">
            ${users.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center space-x-1.5">
          <p className="text-sm text-[#666D80] tracking-[0.28px] leading-[150%] font-medium">
            Revenue:
          </p>
          <p className="text-lg font-semibold text-primary">
            ${revenue.toLocaleString()}
          </p>
        </div>
      </div>

      <hr />

      {/* Features List */}
      <div className="space-y-3 mt-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-primary mt-0.5" />
            <span className="text-[12px] text-[#0D0D12] leading-[150%] tracking-[0.24px] font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanPricingCard;
