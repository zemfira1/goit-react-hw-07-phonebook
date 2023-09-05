import { createSlice } from '@reduxjs/toolkit';
import { initialFilterState } from './constants';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    toFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { toFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
