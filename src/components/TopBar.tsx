import React from 'react';
import { Bell } from 'lucide-react';

export const TopBar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">Welcome to Expro Fuel!</h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=random"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};