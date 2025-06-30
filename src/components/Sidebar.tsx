
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Database, 
  Folder, 
  User, 
  FileText,
  FolderOpen
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: Database, path: '/' },
  { name: 'Asset Management', icon: FolderOpen, path: '/asset-management' },
  { name: 'User Management', icon: User, path: '/user-management' },
  { name: 'Vendor Management', icon: Folder, path: '/vendor-management' },
  { name: 'Report', icon: FileText, path: '/report' },
  { name: 'Maintenance', icon: Database, path: '/maintenance' },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-64 bg-slate-300 shadow-lg">
      <div className="p-4 border-b border-slate-400">
        <h2 className="text-xl font-bold text-slate-800">Dashboard</h2>
      </div>
      
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
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
