import React from 'react';
import { Calendar, Plus } from 'lucide-react';

export const EmployeePlanning = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Employee Planning</h2>
        <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          <Plus className="w-5 h-5 mr-2" />
          Add Planning
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-6">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="text-center">
            <div className="text-sm font-medium text-gray-500 mb-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}
            </div>
            <div className={`h-32 rounded-lg border ${
              index === 2 ? 'bg-purple-50 border-purple-200' : 'border-gray-200'
            } p-2`}>
              <div className="text-sm">{index + 1}</div>
              {index === 2 && (
                <div className="mt-2 text-xs text-purple-600 bg-white rounded p-1">
                  Station Duty
                  <br />
                  8:00 AM - 4:00 PM
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Upcoming Shifts</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-gray-500" />
              <div className="ml-4">
                <p className="font-medium">Morning Shift</p>
                <p className="text-sm text-gray-500">Station: Expo 22</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">8:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};