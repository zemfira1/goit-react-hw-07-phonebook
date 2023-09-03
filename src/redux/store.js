import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsListReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contactsList: contactsListReducer,
    filter: filterReducer,
  },
});
