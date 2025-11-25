import { useState } from "react";

const notificationOptions = [
  {
    key: "subscription",
    title: "Subscription Confirmation",
    desc: "Receive confirmation notification after placing the Subscription.",
  },
  {
    key: "reminders",
    title: "Reminders and Events",
    desc: "Receive push notification whenever the platform requires your attentions",
  },
  {
    key: "promotions",
    title: "Promotions and Offers",
    desc: "Receive push notification whenever the platform requires your attentions",
  },
  {
    key: "email",
    title: "Email Notifications",
    desc: "Receive push notification via E-mail",
  },
];

const Notification = () => {
  const [settings, setSettings] = useState({
    subscription: true,
    reminders: false,
    promotions: true,
    email: false,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className="p-6 bg-[#FFF] rounded-3xl">
      <h1 className="text-lg text-[#0D0D12] font-semibold leading-[135%]">
        Push Notifications
      </h1>
      <p className="text-sm text-[#666D80] leading-[150%]">
        Get alerts for newly posted wages, confirmations when payments go
        through successfully, and notifications whenever any fresh update is
        available.
      </p>

      <div className="w-full space-y-6 mt-8">
        {notificationOptions.map((item) => (
          <div key={item.key} className="flex items-center justify-between">
            {/* TEXT SECTION */}
            <div>
              <h3 className="font-semibold text-lg text-[#0D0D12] leading-[135%]">
                {item.title}
              </h3>
              <p className="text-sm text-[#666D80] leading-[150%] font-medium">
                {item.desc}
              </p>
            </div>

            {/* TOGGLE SWITCH */}
            <button
              onClick={() => toggle(item.key as keyof typeof settings)}
              className={`w-11 h-6 flex items-center rounded-full px-1 transition cursor-pointer
            ${
              settings[item.key as keyof typeof settings]
                ? "bg-primary"
                : "bg-[#ECEFF3]"
            }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow transform transition
              ${
                settings[item.key as keyof typeof settings]
                  ? "translate-x-5"
                  : "translate-x-0"
              }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
