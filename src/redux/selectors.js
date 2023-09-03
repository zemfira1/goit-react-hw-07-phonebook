import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsList.contacts.items;
export const selectIsLoading = state => state.contactsList.contacts.isLoading;
export const selectError = state => state.contactsList.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
