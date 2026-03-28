import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPatient, updatePatient, clearEditingPatient } from '../store/patientSlice';

const PatientForm = () => {
  const dispatch = useDispatch();
  const { editingPatient, error } = useSelector((state) => state.patients);

  const initialFormState = {
    name: '',
    age: '',
    gender: '',
    phoneNumber: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (editingPatient) {
      setFormData({
        name: editingPatient.name,
        age: editingPatient.age,
        gender: editingPatient.gender,
        phoneNumber: editingPatient.phoneNumber !== null && editingPatient.phoneNumber !== undefined
          ? String(editingPatient.phoneNumber)
          : '',
      });
    } else {
      setFormData(initialFormState);
    }
  }, [editingPatient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Validation
    if (!formData.name || !formData.age || !formData.gender) {
      setFormError('Name, age, and gender are required');
      return;
    }

    const ageValue = parseInt(formData.age);
    if (isNaN(ageValue) || ageValue < 0 || ageValue > 120) {
      setFormError('Age must be between 0 and 120');
      return;
    }

    const submissionData = {
      ...formData,
      phoneNumber: String(formData.phoneNumber || '').trim() === '' ? null : formData.phoneNumber,
    };

    if (editingPatient) {
      dispatch(updatePatient({ id: editingPatient._id, data: submissionData }));
    } else {
      dispatch(addPatient(submissionData));
      setFormData(initialFormState);
    }
  };

  const handleCancel = () => {
    dispatch(clearEditingPatient());
    setFormData(initialFormState);
  };

  return (
    <div className="card mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        {editingPatient ? 'Edit Patient' : 'Register New Patient'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {(formError || error) && (
          <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
            {formError || error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              className="input"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
            <input
              type="number"
              className="input"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
            <select
              className="input"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
            <input
              type="text"
              className="input"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 15); // Only allow 15 digits
                setFormData({ ...formData, phoneNumber: value });
              }}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end mt-6">
          {editingPatient && (
            <button type="button" onClick={handleCancel} className="btn-secondary">
              Cancel
            </button>
          )}
          <button type="submit" className="btn-primary">
            {editingPatient ? 'Save Changes' : 'Register Patient'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
