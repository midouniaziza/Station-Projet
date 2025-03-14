import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export const EmployeePresence = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Employee Presence</h2>
        <div className="flex space-x-2">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Mark Attendance
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-6">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="text-center">
            <div className="text-sm font-medium text-gray-500 mb-1">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}
            </div>
            <div className={`h-24 rounded-lg border ${index === 3 ? 'bg-red-100 border-red-200' : 'border-gray-200'} p-2`}>
              <div className="text-sm">{index + 1}</div>
              {index === 3 && (
                <div className="mt-2 text-xs text-red-600">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Absent
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-gray-600">Check-in:</span>
            <span className="ml-2 font-medium">8:00 AM</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span className="text-gray-600">Check-out:</span>
            <span className="ml-2 font-medium">5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};