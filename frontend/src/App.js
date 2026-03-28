import React from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import { LayoutDashboard } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <LayoutDashboard size={24} />
            </div>
            <h1 className="text-xl font-extrabold text-blue-900 tracking-tight leading-none uppercase">
              Patient Care
            </h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (Stick on large screens) */}
          <div className="lg:col-span-12 xl:col-span-4 lg:sticky lg:top-24">
            <PatientForm />
          </div>

          {/* Right Column: List & Search */}
          <div className="lg:col-span-12 xl:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Patient Database</h2>
            </div>
            <PatientList />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-12 text-center text-gray-400 text-sm">
        <p>&copy; 2026 Patient Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
