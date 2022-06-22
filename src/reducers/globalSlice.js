import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cars from '../api/cars';

const initialState = {
  cars: [],
  searchTerm: '',
  wizardMode: true,
};

export const loadCars = createAsyncThunk('global/loadCars', async () => {
  const response = await cars.get('/carData.json');
  return response.data;
});

const globalSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      return { ...state, searchTerm: action.payload };
    },
    setWizardMode(state, action) {
      return { ...state, wizardMode: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCars.fulfilled, (state, action) => ({ ...state, cars: action.payload }));
  },
});

export const { setSearchTerm, setWizardMode } = globalSlice.actions;
export default globalSlice.reducer;
