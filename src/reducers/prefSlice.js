import { createSlice } from '@reduxjs/toolkit';
import * as COL from '../globals/ColConstants';

const initialState = {
  sortBy: COL.vfm,
  makes: [],
};

const prefSlice = createSlice({
  name: 'prefFilter',
  initialState,
  reducers: {
    setPrefFilters(state, action) {
      return action.payload;
    },
  },
});

export const { setPrefFilters } = prefSlice.actions;
export default prefSlice.reducer;
