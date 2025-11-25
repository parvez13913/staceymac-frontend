// Reusable Status Badge Component
import React from 'react';
import { Badge } from '@/components/ui/badge';

type Status = 'downgrade' | 'current' | 'trial' | 'upgrade';

const StatusBadge: React.FC<{ status: Status; trialDays?: number }> = ({
  status,
  trialDays,
}) => {
  const variants: Record<string, { label: string; className: string }> = {
    downgrade: {
      label: 'Downgrade',
      className:
        'border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100 py-1 px-3 bg-white',
    },
    current: {
      label: 'Current Plan',
      className:
        'bg-gray-200 text-gray-700 hover:bg-gray-100 py-1 px-3 rounded-md ',
    },
    trial: {
      label: `Free Trial-${trialDays} Days`,
      className: 'bg-primary text-white  py-1 px-4 rounded-md ',
    },
    upgrade: {
      label: 'Upgrade',
      className: 'bg-primary   py-1 px-3 bg-white',
    },
  };
  const v = variants[status];
  return (
    <Badge className={`${v.className} font-medium px-2 py-1`}>{v.label}</Badge>
  );
};

export default StatusBadge;
