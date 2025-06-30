
import React from 'react';
import { Header } from '@/components/Header';
import { StatsCards } from '@/components/StatsCards';
import { ActionButtons } from '@/components/ActionButtons';
import { DataTable } from '@/components/DataTable';
import { NewsPanel } from '@/components/NewsPanel';

const Index = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-full">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
        
        <StatsCards />
        
        <ActionButtons />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <DataTable />
          </div>
          <div className="lg:col-span-1">
            <NewsPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
