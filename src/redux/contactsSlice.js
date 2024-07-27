// redux/contactsSlice.js
import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import toast from "react-hot-toast";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, setPending);
    builder.addCase(fetchContacts.fulfilled, (state, actions) => {
      state.error = false;
      state.loading = false;
      state.items = actions.payload;
    });
    builder.addCase(fetchContacts.rejected, setRejected);
    builder.addCase(addContact.pending, setPending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      toast.success("New contact added");
      state.items.push(action.payload);
    });
    builder.addCase(deleteContact.pending, setPending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      toast.success("Contact deleted");
    });
  },
});

// Pending & Rejected
function setPending(state) {
  state.error = false;
  state.loading = true;
}
function setRejected(state) {
  state.loading = false;
  state.error = true;
  toast.error("Something went wrong!");
}

// Reducer
export const contactsReducer = contactsSlice.reducer;

// Selectors
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterValue) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }
);
