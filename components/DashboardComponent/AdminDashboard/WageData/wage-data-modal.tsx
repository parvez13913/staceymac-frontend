"use client";

import type React from "react";

import UploadIcon from "@/public/icon/UploadIcon";
import { X } from "lucide-react";
import { useState } from "react";

interface WageDataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WageDataModal({ isOpen, onClose }: WageDataModalProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [sourceName, setSourceName] = useState("");
  const [sourceType, setSourceType] = useState("");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = () => {
    console.log("[v0] Upload initiated with:", {
      fileName,
      sourceName,
      sourceType,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-6 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#1D1F2C] tracking-[-0.48px] leading-[128%]">
              Upload Wage Data File
            </h2>
            <p className="text-sm text-[#777980] mt-1 tracking-[-0.28px] leading-[128%]">
              Upload a CSV or Excel file containing wage data
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#777980] hover:text-[#777980]/90 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* File Upload Area */}
          <div>
            <div className="border-2 border-dashed border-[#A5A5AB] rounded-[12px] p-12 text-center cursor-pointer">
              <label htmlFor="file-input" className="cursor-pointer">
                <div className="flex flex-col items-center gap-3">
                  <UploadIcon />
                  <div>
                    <p className="text-sm text-gray-600">
                      {fileName ? (
                        <span className="font-semibold text-gray-900">
                          {fileName}
                        </span>
                      ) : (
                        <h2 className="text-[#777980] text-lg leading-[128%] tracking-[-0.36px]">
                          Drag and drop your file here, or click to browse
                        </h2>
                      )}
                    </p>
                    <p className="text-[#777980] text-[16px] leading-[128%] tracking-[-0.36px] mt-3">
                      Supports CSV, XLSX (max 10MB)
                    </p>
                  </div>
                </div>
              </label>
              <input
                id="file-input"
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button className="text-[#FFF] px-4 py-2 bg-[#1D1F2C] rounded-xl mt-6 cursor-pointer">
                Choose file
              </button>
            </div>
          </div>

          {/* Add New Data Source */}
          <div>
            <h3 className="text-[#1D1F2C] text-lg leading-[128%] tracking-[-0.36px] font-semibold">
              Add New Data Source
            </h3>
            <p className="text-sm text-[#777980] leading-[128%] tracking-[-0.36px] mt-1.5">
              Configure a new data source for automatic imports.
            </p>

            {/* Source Name */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Source Name
              </label>
              <input
                type="text"
                placeholder="e.g. Illinois DOL"
                value={sourceName}
                onChange={(e) => setSourceName(e.target.value)}
                className="w-full px-3 py-2 bg-[#F1F2F4] border border-[#E5E5EC] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-primary text-[#777980]"
              />
            </div>

            {/* Source Type */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Source Type
              </label>
              <select
                value={sourceType}
                onChange={(e) => setSourceType(e.target.value)}
                className="w-full px-3 py-2 bg-[#F1F2F4] border border-[#E5E5EC] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-primary text-[#777980]"
              >
                <option value="">Select type</option>
                <option value="csv">CSV Upload</option>
                <option value="excel">Excel Upload</option>
                <option value="database">Database Connection</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#1D1F2C] border border-[#DEDFE0] rounded-md font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90  font-medium cursor-pointer"
          >
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
}
