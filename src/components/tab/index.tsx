import React, { useState } from "react";
import { ITab, ITabSelector } from "../../interfaces";

const TabSelector: React.FC<ITabSelector> = ({ tabs, initialRoute }) => {
  const [activeTab, setActiveTab] = useState<string>(initialRoute);

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Tab Navigation"
        className="flex border-b border-[#F4F5F7] mb-6"
      >
        {tabs.map((tab: ITab) => (
          <button
            id={`tab-${tab.route}`}
            role="tab"
            aria-selected={activeTab === tab.route}
            aria-controls={`tabpanel-${tab.route}`}
            aria-labelledby={`tab-${tab.route}`}
            key={tab.route}
            className={`px-4 sm:px-6 py-2 -mb-px mr-2 sm:mr-4 text-sm sm:text-base font-inter font-medium transition-colors duration-200 ${
              activeTab === tab.route
                ? 'border-b-4 border-[#232323] text-[#232323] rounded-tl-[10px] rounded-tr-[10px]'
                : 'text-[#718EBF] hover:text-blue-600'
            } whitespace-nowrap flex-shrink-0`}
            onClick={() => setActiveTab(tab.route)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="p-4">
        {tabs.map((tab: ITab) => (
          <div
            id={`tabpanel-${tab.route}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.route}`}
            hidden={activeTab !== tab.route}
            key={`tabpanel-${tab.route}`}
          >
            {tab.route === activeTab && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
