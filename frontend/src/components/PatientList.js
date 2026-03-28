import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients, selectFilteredPatients } from '../store/patientSlice';
import PatientCard from './PatientCard';
import { Search, Loader2, UserPlus } from 'lucide-react';
import { setSearchQuery } from '../store/patientSlice';

const PatientList = () => {
  const dispatch = useDispatch();
  const filteredPatients = useSelector(selectFilteredPatients);
  const { loading, error, searchQuery } = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);

  if (loading && filteredPatients.length === 0) {
    return (
      <div className="flex justify-center items-center h-48">
        <Loader2 className="animate-spin text-blue-600" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          className="input pr-10 h-12"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {filteredPatients.length === 0 ? (
        <div className="text-center py-12 px-4 bg-white rounded-xl border-2 border-dashed border-gray-100">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
            <UserPlus size={32} />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No patients found</h3>
          <p className="text-gray-500">
            {searchQuery ? `No results for "${searchQuery}"` : "Get started by adding your first patient."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredPatients.map((patient) => (
            <PatientCard key={patient._id} patient={patient} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientList;
