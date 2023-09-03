import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    toFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { toFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
