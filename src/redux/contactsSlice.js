import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialContactsState} from './constants';
import axios from 'axios';

const BASE_URL = 'https://64f134190e1e60602d23a37d.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/contacts`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/contacts`, newContact);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState: initialContactsState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
      }),
});

export const contactsListReducer = contactsListSlice.reducer;
