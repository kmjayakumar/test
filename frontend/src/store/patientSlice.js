import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/patientApi';

export const fetchPatients = createAsyncThunk('patients/fetchAll', async () => {
  const response = await api.getPatients();
  return response.data;
});

export const addPatient = createAsyncThunk('patients/add', async (patient) => {
  const response = await api.createPatient(patient);
  return response.data;
});

export const updatePatient = createAsyncThunk('patients/update', async ({ id, data }) => {
  const response = await api.updatePatient(id, data);
  return response.data;
});

export const deletePatient = createAsyncThunk('patients/delete', async (id) => {
  await api.deletePatient(id);
  return id;
});

const initialState = {
  items: [],
  loading: false,
  error: null,
  searchQuery: '',
  editingPatient: null,
};

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setEditingPatient: (state, action) => {
      state.editingPatient = action.payload;
    },
    clearEditingPatient: (state) => {
      state.editingPatient = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addPatient.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addPatient.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updatePatient.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.editingPatient = null;
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p._id !== action.payload);
      });
  },
});

export const { setSearchQuery, setEditingPatient, clearEditingPatient } = patientSlice.actions;

export const selectFilteredPatients = (state) => {
  const { items, searchQuery } = state.patients;
  if (!searchQuery) return items;
  return items.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export default patientSlice.reducer;
