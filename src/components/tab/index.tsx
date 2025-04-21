import React, { useState } from "react";
import { ITab, ITabSelector } from "../../interfaces";

const TabSelector: React.FC<ITabSelector> = ({ tabs, initialRoute }) => {
  const [activeTab, setActiveTab] = useState<string>(initialRoute);

  const renderContent = () => {
    if (activeTab) {
      return tabs.find((tab: ITab) => tab.route === activeTab)?.content;
    }
    return null;
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-[#F4F5F7] mb-6">
        {tabs.map((tab: ITab) => (
          <button
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
        {renderContent()}
      </div>
    </div>
  );
};

export default TabSelector;
