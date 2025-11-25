import React from 'react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'general', label: 'General' },
    { id: 'plan', label: 'Plan & Pricing' },
    { id: 'billing', label: 'Payment & Billing' },
    { id: 'time', label: 'Time & Language' },
    { id: 'password', label: 'Password' },
    { id: 'notifications', label: 'Notifications' },
  ];

  return (
    <div className="md:w-54 md:h-200 bg-white border border-gray-200  p-6 rounded-2xl font-[inter]">
      <nav className="space-y-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              activeTab === item.id
                ? 'bg-white text-primary border border-gray-200'
                : 'text-gray-700 hover:bg-white hover:bg-opacity-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
export default Sidebar;
