
import React, { useState } from 'react';
import { 
  Database, 
  Folder, 
  User, 
  FileText,
  FolderOpen
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: Database, active: true },
  { name: 'Asset Management', icon: FolderOpen },
  { name: 'User Management', icon: User },
  { name: 'Vendor Management', icon: Folder },
  { name: 'Report', icon: FileText },
  { name: 'Maintenance', icon: Database },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className="w-64 bg-slate-300 shadow-lg">
      <div className="p-4 border-b border-slate-400">
        <h2 className="text-xl font-bold text-slate-800">Dashboard</h2>
      </div>
      
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;
          
          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                isActive 
                  ? 'bg-slate-400 text-slate-900 border-r-4 border-blue-600' 
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Icon size={20} className="mr-3" />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
