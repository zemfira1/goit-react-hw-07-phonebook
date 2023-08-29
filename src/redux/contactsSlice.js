import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsListSlice.actions;

const contactsListReducer = contactsListSlice.reducer;

const persistConfig = {
  key: 'contactsList',
  storage,
};

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsListReducer
);
