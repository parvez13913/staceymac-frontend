// Reusable Pricing Card Component
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FeatureItem from './FeatureItem';
import StatusBadge from './StatusBadge';

interface Feature {
  label: string;
  value: string | number;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  tagline: string;
  status: 'current' | 'trial' | 'downgrade' | 'upgrade';
  trialDays?: number;
  features: Feature[];
}

interface PricingCardProps {
  plan: Plan;
  onSelect?: (planId: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const half = Math.ceil(plan.features.length / 2);
  const leftFeatures = plan.features.slice(0, half);
  const rightFeatures = plan.features.slice(half);

  return (
    <Card className="border w-full border-gray-200 shadow-sm hover:shadow-md transition-shadow font-[inter] cursor-pointer">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-gray-200">
        <CardTitle className="text-md md:text-lg font-semibold text-gray-900">
          {plan.name}
        </CardTitle>
        <StatusBadge status={plan.status} trialDays={plan.trialDays} />
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-1 border-b border-gray-200">
          <span className="text-xl md:text-2xl font-bold text-gray-900">
            ${plan.price}
          </span>
          <span className="text-gray-500 text-xs md:text-sm">
            / {plan.period}
          </span>
        <p className="text-gray-500 text-xs md:text-sm mb-4">{plan.tagline}</p>
        </div>


        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <div className="space-y-2">
            {leftFeatures.map((f, i) => (
              <FeatureItem key={i} feature={f} />
            ))}
          </div>

          <div className="space-y-2">
            {rightFeatures.map((f, i) => (
              <FeatureItem key={i} feature={f} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
