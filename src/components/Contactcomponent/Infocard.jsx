

import React from "react";
import * as LucideIcons from "lucide-react"; 

const Infocard = ({ title, items, customContent }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {items ? (
      <div className="space-y-4">
        {items.map((item, i) => {
          const Icon = LucideIcons[item.icon]; 
          return (
            <div 
              key={i} 
              className="flex items-start sm:items-center space-x-3"
            >
              <div className="w-10 h-10 flex-shrink-0 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                {Icon && <Icon size={20} />}
              </div>

              <div className="min-w-0"> 
                <p className="font-medium">{item.label}</p>
                <p className="text-gray-600 break-words break-all text-sm sm:text-base">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      customContent
    )}
  </div>
);

export default Infocard;
