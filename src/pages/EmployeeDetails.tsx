import React from 'react';
import { PencilIcon } from 'lucide-react';

export const EmployeeDetails = () => {
  const employee = {
    name: 'Andrew Bjorgles',
    email: 'andrew@expro.com',
    city: 'Casablanca',
    station: 'Expo 22',
    address: '123 Fuel Station, Casablanca'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Employee Details</h2>
        <button className="flex items-center text-purple-600 hover:text-purple-700">
          <PencilIcon className="w-5 h-5 mr-2" />
          Edit
        </button>
      </div>
      
      <div className="flex items-center mb-6">
        <img
          src={`https://ui-avatars.com/api/?name=${employee.name}&size=128&background=random`}
          alt={employee.name}
          className="w-32 h-32 rounded-full"
        />
        <div className="ml-6">
          <h3 className="text-xl font-semibold">{employee.name}</h3>
          <p className="text-gray-600">{employee.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-1">City</h4>
          <p className="text-gray-900">{employee.city}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-1">Station</h4>
          <p className="text-gray-900">{employee.station}</p>
        </div>
        <div className="col-span-2">
          <h4 className="text-sm font-medium text-gray-500 mb-1">Address</h4>
          <p className="text-gray-900">{employee.address}</p>
        </div>
      </div>
    </div>
  );
};