
import React from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { StatsCards } from '@/components/StatsCards';
import { ActionButtons } from '@/components/ActionButtons';
import { DataTable } from '@/components/DataTable';
import { NewsPanel } from '@/components/NewsPanel';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
            
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
        </main>
      </div>
    </div>
  );
};

export default Index;
