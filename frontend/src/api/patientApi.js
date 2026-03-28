import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/patients';
// const API_URL = 'https://test-1-jnnp.onrender.com/api/patients';
const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://test-1-jnnp.onrender.com/api/patients'
    : 'http://localhost:5000/api/patients';


export const getPatients = () => axios.get(API_URL);
export const createPatient = (patient) => axios.post(API_URL, patient);
export const updatePatient = (id, patient) => axios.put(`${API_URL}/${id}`, patient);
export const deletePatient = (id) => axios.delete(`${API_URL}/${id}`);
