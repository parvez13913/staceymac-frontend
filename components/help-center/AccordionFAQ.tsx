"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

interface AccordionFAQProps {
  items?: AccordionItem[];
}

const defaultItems: AccordionItem[] = [
  {
    id: 1,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function AccordionFAQ({ items }: AccordionFAQProps) {
  const faqItems = items || defaultItems;
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set([1]));

  const toggleExpand = (id: number) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-4">
          {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item) => (
            <div
              key={item.id}
              className="p-4 border border-[#DFE1E7] bg-[#FFF] rounded-2xl"
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left"
              >
                <h3 className="text-[16px] font-semibold text-[#0D0D12] leading-[150%]">
                  {item.title}
                </h3>
                <div
                  className={`shrink-0 transition-transform duration-300 ${
                    expandedIds.has(item.id) ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDownIcon className="w-5 h-5 text-[#0D0D12]" />
                </div>
              </button>

              {expandedIds.has(item.id) && (
                <div>
                  <p className="text-sm text-[#666D80] leading-[150%]">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item) => (
            <div
              key={item.id}
              className="p-4 border border-[#DFE1E7] bg-[#FFF] rounded-2xl"
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left"
              >
                <h3 className="text-base font-semibold text-gray-900 leading-relaxed">
                  {item.title}
                </h3>
                <div
                  className={`shrink-0 transition-transform duration-300 ${
                    expandedIds.has(item.id) ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDownIcon className="w-5 h-5 text-[#0D0D12]" />
                </div>
              </button>

              {expandedIds.has(item.id) && (
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
