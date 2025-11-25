"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface PreferencesProps {
  defaultTimeZone?: string;
  defaultLanguage?: string;
  onTimeZoneChange?: (value: string) => void;
  onLanguageChange?: (value: string) => void;
}

const TIMEZONES = [
  { value: "pst", label: "Pacific Standard Time (PST)" },
  { value: "est", label: "Eastern Standard Time (EST)" },
  { value: "cst", label: "Central Standard Time (CST)" },
  { value: "mst", label: "Mountain Standard Time (MST)" },
  { value: "gmt", label: "Greenwich Mean Time (GMT)" },
  { value: "cet", label: "Central European Time (CET)" },
  { value: "ist", label: "Indian Standard Time (IST)" },
  { value: "jst", label: "Japan Standard Time (JST)" },
];

const LANGUAGES = [
  { value: "en-us", label: "English (United States)" },
  { value: "en-gb", label: "English (United Kingdom)" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "ja", label: "Japanese" },
  { value: "zh", label: "Chinese" },
];

const getCurrentTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export function TimeAndLanguage({
  defaultTimeZone = "pst",
  defaultLanguage = "en-us",
  onTimeZoneChange,
  onLanguageChange,
}: PreferencesProps) {
  const [timeZone, setTimeZone] = useState(defaultTimeZone);
  const [language, setLanguage] = useState(defaultLanguage);
  const currentTime = getCurrentTime();

  const handleTimeZoneChange = (value: string) => {
    setTimeZone(value);
    onTimeZoneChange?.(value);
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    onLanguageChange?.(value);
  };

  return (
    <div className="w-full max-w-full space-y-8 bg-gray-50 p-6 rounded-xl">
      {/* Time Zone Section */}
      <div className="space-y-4 md:flex items-center md:gap-44 border-b border-gray-200 py-4 ">
        <div className="space-y-2">
          <h2 className="text-[18px] font-semibold text-gray-900">Time</h2>
          <p className="text-sm text-gray-500">
            Set your preferred time zone to ensure <br /> that all activities
            align with your local time.
          </p>
        </div>

        <div className="space-y-2 ">
          <label className="text-xs font-medium text-gray-500">Time Zone</label>
          <Select value={timeZone} onValueChange={handleTimeZoneChange}>
            <SelectTrigger className="md:w-120 bg-white">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              {TIMEZONES.map((tz) => (
                <SelectItem key={tz.value} value={tz.value}>
                  {tz.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-gray-600">
            The current time is {currentTime}.
          </p>
        </div>
      </div>

      {/* Language Section */}
      <div className="space-y-4 md:flex md:gap-50 items-center mb-10">
        <div className="space-y-2">
          <h2 className="text-[18px] font-semibold text-gray-900">
            Set you language
          </h2>
          <p className="text-sm text-gray-400">
            Choose the language. All text and <br /> communication will be
            displayed in the <br />
            language you select.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-gray-500">Language</label>
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="md:w-120 bg-white">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
