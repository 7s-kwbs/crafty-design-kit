
import React from 'react';
import { Bell, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-slate-700 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-full relative">
            <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Himalaya Drashan College</h1>
          <p className="text-sm text-gray-300">Fixed Asset Tracking System</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-slate-600 rounded-full transition-colors">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-slate-600 rounded-full transition-colors">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};
