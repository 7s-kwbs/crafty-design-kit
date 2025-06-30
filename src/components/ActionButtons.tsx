
import React from 'react';
import { add as Plus, user as UserPlus, folder as Store, file-text as FileText } from 'lucide-react';

const actions = [
  { title: 'Add New Assets', icon: Plus, bgColor: 'bg-blue-200 hover:bg-blue-300' },
  { title: 'Add New User', icon: UserPlus, bgColor: 'bg-slate-200 hover:bg-slate-300' },
  { title: 'Add New Vendor', icon: Store, bgColor: 'bg-slate-200 hover:bg-slate-300' },
  { title: 'Generate Report', icon: FileText, bgColor: 'bg-slate-200 hover:bg-slate-300' },
];

export const ActionButtons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.title}
            className={`${action.bgColor} p-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Icon size={24} className="text-gray-700" />
              </div>
              <span className="font-medium text-gray-800">{action.title}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
