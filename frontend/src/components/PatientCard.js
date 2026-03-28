import React from 'react';
import { useDispatch } from 'react-redux';
import { setEditingPatient, deletePatient } from '../store/patientSlice';
import { User, Phone, Trash2, Edit } from 'lucide-react';

const PatientCard = ({ patient }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this patient record?')) {
      dispatch(deletePatient(patient._id));
    }
  };

  return (
    <div className="card hover:shadow-md hover:border-blue-100 group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <User size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {patient.name}
            </h3>
            <p className="text-sm text-gray-500">{patient.gender} • {patient.age} years old</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => dispatch(setEditingPatient(patient))}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit size={18} />
          </button>
          <button 
            onClick={handleDelete}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Phone size={14} className="text-gray-400" />
        <span>{patient.phoneNumber || 'Not provided'}</span>
      </div>
    </div>
  );
};

export default PatientCard;
