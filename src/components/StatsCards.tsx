
import React from 'react';
import { Database, Folder, User, Bell } from 'lucide-react';

const stats = [
  { title: 'Total Assets', value: '1000', icon: Database, color: 'bg-blue-100 text-blue-600' },
  { title: 'Department', value: '1000', icon: Folder, color: 'bg-green-100 text-green-600' },
  { title: 'Active User', value: '1000', icon: User, color: 'bg-purple-100 text-purple-600' },
  { title: 'Pending Request', value: '1000', icon: Bell, color: 'bg-orange-100 text-orange-600' },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
