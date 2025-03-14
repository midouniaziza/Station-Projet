import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Employees } from './pages/Employees';
import { EmployeeDetails } from './pages/EmployeeDetails';
import { EmployeePresence } from './pages/EmployeePresence';
import { EmployeeAbsence } from './pages/EmployeeAbsence';
import { EmployeePlanning } from './pages/EmployeePlanning';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employee/details" element={<EmployeeDetails />} />
              <Route path="/employee/presence" element={<EmployeePresence />} />
              <Route path="/employee/absence" element={<EmployeeAbsence />} />
              <Route path="/employee/planning" element={<EmployeePlanning />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;