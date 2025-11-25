import React, { useState } from 'react';
import { CreditCard, CheckCircle } from 'lucide-react';
import { BsStripe } from 'react-icons/bs';
const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    email: '',
    cardNumber: '',
    expires: '',
    cvv: '',
    country: '',
    state: '',
    saveCard: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = 'checked' in e.target ? e.target.checked : false;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const features = [
    '3 User/License',
    'Guides and Materials Quick Reference',
    '3 States',
    'AWD & GWD Coverage',
    '10 Countries',
    'View and Print Access',
  ];

  return (
    <div className=" bg-gray-50 rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 w-full!">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
          Payment Details
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Select your preferred payment method for ShopSwift.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          {/* Payment Form Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 lg:p-8">
            {/* Payment Options Section */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 md:mb-3">
                Pay with Your Card
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4">
                Select a Payment option
              </p>

              {/* Card Options */}
              <div className="flex gap-2 sm:gap-3 mb-4 md:mb-6">
                <button className="flex items-center justify-center w-14 sm:w-16 h-9 sm:h-10 border-2 border-gray-200 bg-white rounded cursor-pointer">
                  <span className="text-primary font-bold text-xs sm:text-sm">
                    VISA
                  </span>
                </button>
                <button className="flex items-center justify-center w-14 sm:w-16 h-9 sm:h-10 border border-gray-300 rounded hover:border-gray-400 cursor-pointer">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary rounded-sm flex items-center justify-center ">
                    <BsStripe className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                </button>
                <button className="flex items-center justify-center w-14 sm:w-16 h-9 sm:h-10 border border-gray-300 rounded hover:border-gray-400 cursor-pointer">
                  <div className="flex gap-1">
                    <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-red-500"></div>
                    <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-orange-400"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-3 md:space-y-4">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                    Cardholders name
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 2: Card Number */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                  Card number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Row 3: Expires and CVV */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                    Expires
                  </label>
                  <input
                    type="text"
                    name="expires"
                    value={formData.expires}
                    onChange={handleInputChange}
                    placeholder="mm/yyyy"
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    maxLength={4}
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 4: Country and State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                    Country/Region
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 md:mb-1.5">
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option>Select a state</option>
                    <option>California</option>
                    <option>New York</option>
                    <option>Texas</option>
                    <option>Florida</option>
                  </select>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 pt-1 md:pt-2">
                <input
                  type="checkbox"
                  id="saveCard"
                  name="saveCard"
                  checked={formData.saveCard}
                  onChange={handleInputChange}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="saveCard"
                  className="text-xs sm:text-sm text-gray-700 cursor-pointer"
                >
                  Save this card for future payments
                </label>
              </div>
            </div>
          </div>

          {/* Purchase Summary Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 md:p-6 lg:p-8">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
              Purchase Summary
            </h2>

            {/* Plan Box */}
            <div className="border rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 md:mb-6 bg-white">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Premium Plan
              </h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-base sm:text-lg font-semibold text-gray-900">
                  $124.99
                </span>
                <span className="text-xs sm:text-sm text-gray-600">
                  / month
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-3 md:mb-4">
                Everything you need for a growing business
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-2 mb-3 md:mb-4 border border-gray-200 p-6 rounded-xl">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-700">Service Fee</span>
                <span className="font-medium text-gray-900">$75.00</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-700">Tax Fee</span>
                <span className="font-medium text-gray-900">$0.00</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-700">Processing Fee</span>
                <span className="font-medium text-gray-900">$2.25</span>
              </div>
            </div>

            <div className="border-t pt-3 mb-4 md:mb-6">
              <div className="flex justify-between text-sm sm:text-base font-semibold text-gray-900">
                <span>Total you will pay</span>
                <span>$77.25</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="w-full px-4 py-2.5 sm:py-3 bg-primary text-white text-sm sm:text-base font-medium rounded-lg cursor-pointer transition-colors">
                Confirm & Pay
              </button>
              <button className="w-full px-4 py-2.5 sm:py-3 cursor-pointer bg-white border border-gray-300 text-gray-700 text-sm sm:text-base font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
