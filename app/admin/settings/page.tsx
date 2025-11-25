"use client";

import { useState } from "react";

import Notification from "@/components/settings/Notification";
import Password from "@/components/settings/Password";
import PaymentAndBilling from "@/components/settings/PaymentAndBilling";
import PricingPlans from "@/components/settings/PricingPlans";
import ProfileContent from "@/components/settings/ProfileContent";
import Sidebar from "@/components/settings/Sidebar";
import { TimeAndLanguage } from "@/components/settings/TimeAndLanguage";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  country: string;
  state: string;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    country: "",
    state: "",
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving profile:", formData);
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <ProfileContent
            formData={formData}
            onChange={handleChange}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        );
      case "plan":
        return <PricingPlans />;
      case "billing":
        return <PaymentAndBilling />;
      case "time":
        return (
          <TimeAndLanguage
            defaultTimeZone="pst"
            defaultLanguage="en-us"
            onTimeZoneChange={(tz) => console.log("Timezone:", tz)}
            onLanguageChange={(lang) => console.log("Language:", lang)}
          />
        );
      case "password":
        return <Password />;
      case "notifications":
        return <Notification />;
      default:
        return null;
    }
  };

  return (
    <div className="md:flex gap-6 overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 p-0">{renderContent()}</div>
    </div>
  );
}
