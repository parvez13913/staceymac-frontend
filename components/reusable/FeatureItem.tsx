// Reusable Feature Item Component

import React from 'react';
import { Check } from 'lucide-react';

// Types
interface Feature {
  label: string;
  value: string | number;
}

// Feature Item Component

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => {
  const valueStr = String(feature.value);
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Check className="w-4 h-4 text-blue-500 shrink-0" />
      <span>
        {valueStr !== 'Quick Reference' &&
        valueStr !== 'Coverage' &&
        valueStr !== 'Access'
          ? `${valueStr} ${feature.label}`
          : `${feature.label} ${valueStr}`}
      </span>
    </div>
  );
};

export default FeatureItem;
