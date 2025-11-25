import React from 'react';
import PricingCard from '../reusable/PricingCard';

// JSON Data for pricing plans
const pricingData = {
  title: 'Plan & Pricing',
  description:
    'Manage your subscription plans. Choose a plan that best suits your needs, compare features, and adjust your subscription as needed.',
  plans: [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 99.99,
      period: 'month',
      tagline: 'All the basics for starting a new business',
      status: 'downgrade' as const,
      features: [
        { label: 'Guides and Materials', value: 'Quick Reference' },
        { label: 'AWO & GWO', value: 'Coverage' },
        { label: 'View and Print', value: 'Access' },
        { label: 'User/License', value: '1' },
        { label: 'States', value: '1' },
        { label: 'Countries', value: '5' },
      ],
    },
    {
      id: 'standard',
      name: 'Standard Plan',
      price: 124.99,
      period: 'month',
      tagline: 'Everything you need for a growing business',
      status: 'current' as const,
      features: [
        { label: 'User/License', value: '3' },
        { label: 'States', value: '3' },
        { label: 'Countries', value: '10' },
        { label: 'Guides and Materials', value: 'Quick Reference' },
        { label: 'AWO & GWO', value: 'Coverage' },
        { label: 'View and Print', value: 'Access' },
      ],
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 179.99,
      period: 'month',
      tagline: 'Advanced features for scaling your business',
      status: 'trial' as const,
      trialDays: 30,
      features: [
        { label: 'User/License', value: '8' },
        { label: 'States', value: 'All' },
        { label: 'Countries', value: 'All' },
        { label: 'Guides and Materials', value: 'Quick Reference' },
        { label: 'AWO & GWO', value: 'Coverage' },
        { label: 'View and Print', value: 'Access' },
      ],
    },
  ],
};

// Main Pricing Component
const PricingPlans: React.FC<{ data?: typeof pricingData }> = ({
  data = pricingData,
}) => {
  const handleSelect = (planId: string) =>
    console.log(`Selected plan: ${planId}`);

  return (
    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
      <div className="my-3">
        <h1 className="text-lg font-bold text-gray-900 mb-1">{data.title}</h1>
        <p className="text-gray-500 text-xs">{data.description}</p>
      </div>
      <div className="space-y-2">
        {data.plans.map(plan => (
          <PricingCard key={plan.id} plan={plan} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
