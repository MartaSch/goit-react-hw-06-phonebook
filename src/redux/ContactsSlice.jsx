import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const { addContact, deleteContacts, changeFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
