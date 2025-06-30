
import React from 'react';

export const NewsPanel = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-fit">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">News/Messages</h3>
      </div>
      
      <div className="p-6">
        <div className="space-y-4 text-center text-gray-500">
          <div className="text-4xl">📢</div>
          <p className="text-sm">No new messages</p>
          <p className="text-xs text-gray-400">Check back later for updates</p>
        </div>
      </div>
    </div>
  );
};
