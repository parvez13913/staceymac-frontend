import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function PurchaseSummary() {
  return (
    
      <Card className="w-full border shadow-[0_2px_8px_rgba(0,0,0,0.05)] rounded-xl">
        <CardContent className="py-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Purchase Summary
          </h2>

          {/* PLAN BOX */}
          <div className="border rounded-xl p-4 mb-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">
              Premium Plan
            </h3>
            <p className="text-gray-700 font-medium mt-1">$124.99 / month</p>
            <p className="text-sm text-gray-500 mt-1">
              Everything you need for a growing business
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-y-2 mt-4">
              {[
                '3 Users/License',
                '3 States',
                '10 Countries',
                'Guides and Materials',
                'AWD & SOW Coverage',
                'View and Print Access',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <CheckCircle size={16} className="text-blue-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* COST BREAKDOWN */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Service Fee</span>
              <span className="font-medium">$75.00</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Tax Fee</span>
              <span className="font-medium">$0.00</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Processing Fee</span>
              <span className="font-medium">$2.25</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-sm font-semibold text-gray-900">
              <span>Total you’ll pay</span>
              <span>$77.25</span>
            </div>
          </div>
        </CardContent>
      </Card>
    
  );
}
