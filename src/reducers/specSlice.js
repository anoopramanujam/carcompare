import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  price: 50,
  hatch: true,
  sedan: true,
  suv: true,
  petrol: true,
  diesel: true,
  electric: true,
  manual: true,
  auto: true,
};

const specSlice = createSlice({
  name: 'specFilter',
  initialState,
  reducers: {
    setSpecFilters(state, action) {
      return action.payload;
    },
  },
});

export const { setSpecFilters } = specSlice.actions;
export default specSlice.reducer;
