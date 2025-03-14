import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Calendar, Clock, UserCheck, CalendarClock } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="bg-white w-64 flex flex-col shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Expro Fuel</h1>
      </div>
      <nav className="flex-1 px-2 py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 text-gray-700 rounded-lg ${
              isActive ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
            }`
          }
        >
          <Home className="w-5 h-5 mr-3" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-2 text-gray-700 rounded-lg ${
              isActive ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
            }`
          }
        >
          <Users className="w-5 h-5 mr-3" />
          <span>Employees</span>
        </NavLink>
        <NavLink
          to="/employee/details"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-2 text-gray-700 rounded-lg ${
              isActive ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
            }`
          }
        >
          <UserCheck className="w-5 h-5 mr-3" />
          <span>Employee Details</span>
        </NavLink>
        <NavLink
          to="/employee/presence"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-2 text-gray-700 rounded-lg ${
              isActive ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
            }`
          }
        >
          <Clock className="w-5 h-5 mr-3" />
          <span>Presence</span>
        </NavLink>
        <NavLink
          to="/employee/absence"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-2 text-gray-700 rounded-lg ${
              isActive ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
            }`
          }
        >
          <Calendar className="w-5 h-5 mr-3" />
          <span>Absence</span>
        </NavLink>
        <NavLink
          to="/employee/planning"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-2 text-gray-700 rounded-lg ${
              isActive ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'
            }`
          }
        >
          <CalendarClock className="w-5 h-5 mr-3" />
          <span>Planning</span>
        </NavLink>
      </nav>
    </div>
  );
};