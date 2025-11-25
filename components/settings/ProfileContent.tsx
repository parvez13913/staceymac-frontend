import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Camera, Copy } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  country: string;
  state: string;
}

interface ProfileContentProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const ProfileContent: React.FC<ProfileContentProps> = ({
  formData,
  onChange,
  onSave,
  onCancel,
}) => {
  // Image Upload States
  const [preview, setPreview] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only PNG or JPEG images are allowed');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex-1 p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border border-gray-200 font-[inter] mx-auto w-full ">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        My Profile
      </h1>

      {/* Profile Photo Section */}
      <div className="mb-4 pb-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="relative">
            {/* Preview Image OR Default Circle */}
            {preview ? (
              <Image
                src={preview}
                alt="Profile"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                width={80}
                height={80}
              />
            ) : (
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                R
              </div>
            )}

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/png, image/jpeg"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Camera Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full border border-gray-200 hover:bg-gray-50"
            >
              <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 cursor-pointer" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-6 text-xs text-center sm:text-left">
            <div>
              <p className="font-medium text-lg text-gray-900 font-[inter]">
                Profile Photo
              </p>
              <p className="text-gray-600 text-xs">
                Min 400x400px, PNG or JPEG formats.
              </p>
            </div>

            {/* Change Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-white border border-gray-200 px-6 py-1 cursor-pointer rounded-md text-black text-xs  sm:mt-0"
            >
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100">
        <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
          Personal Information
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
          Please enter your personal information
        </p>

        <div className="space-y-4 sm:space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <Input
                value={formData.firstName}
                onChange={e => onChange('firstName', e.target.value)}
                placeholder="First Name"
                className="border-gray-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <Input
                value={formData.lastName}
                onChange={e => onChange('lastName', e.target.value)}
                placeholder="Last Name"
                className="border-gray-300 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {/* Phone Number */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex gap-2">
                <Select defaultValue="us">
                  <SelectTrigger className="w-20 sm:w-24 border-gray-300 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">🇺🇸 +1</SelectItem>
                    <SelectItem value="uk">🇬🇧 +44</SelectItem>
                    <SelectItem value="ca">🇨🇦 +1</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  value={formData.phoneNumber}
                  onChange={e => onChange('phoneNumber', e.target.value)}
                  placeholder="(555) 000-0000"
                  className="flex-1 border-gray-300 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Input
                  value={formData.email}
                  onChange={e => onChange('email', e.target.value)}
                  placeholder="email@example.com"
                  className="border-gray-300 text-sm"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Country and State Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="w-full">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Country/Region
              </label>
              <Select
                defaultValue="us"
                onValueChange={value => onChange('country', value)}
              >
                <SelectTrigger className="border-gray-300 w-full text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <Select
                defaultValue=""
                onValueChange={value => onChange('state', value)}
              >
                <SelectTrigger className="border-gray-300 w-full text-sm">
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                  <SelectItem value="fl">Florida</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={onSave}
            className="bg-primary py-2 text-white px-8 sm:px-12 cursor-pointer  rounded-md text-sm sm:text-base w-full sm:w-auto"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="border border-gray-300 cursor-pointer py-2 px-8 sm:px-12 rounded-md text-sm sm:text-base w-full sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
