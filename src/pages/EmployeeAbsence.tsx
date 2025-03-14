import React from 'react';
import { Calendar } from 'lucide-react';

export const EmployeeAbsence = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Employee Absence</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          Request Absence
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Current Status</h3>
          <div className="flex items-center">
            <img
              src="https://ui-avatars.com/api/?name=Andrew+Bjorgles&background=random"
              alt="Employee"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <p className="font-medium">Andrew Bjorgles</p>
              <p className="text-sm text-gray-500">Available</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Absence Overview</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Vacation Days Used</span>
              <span className="font-medium">5/20</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Sick Days Used</span>
              <span className="font-medium">2/10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Upcoming Absences</h3>
        <div className="space-y-4">
          <div className="flex items-center p-4 bg-purple-50 rounded-lg">
            <Calendar className="w-6 h-6 text-purple-600" />
            <div className="ml-4">
              <p className="font-medium">Vacation</p>
              <p className="text-sm text-gray-500">March 15-20, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};