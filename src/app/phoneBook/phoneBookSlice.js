import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "./phoneBookInitialState";
import { addContact, deleteContact, fetchContact } from "./phoneBookThunk";

const handlePending = (state) => {
    state.contacts.isLoading = true;
    state.contacts.error = null;
};
const handleRejected = (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
};

const fetchContactFulfiled = (state, action) => {
    state.contacts.items = action.payload;
    state.contacts.isLoading = false;
};
const addContactFulfiled = (state, action) => {
    state.contacts.items.push(action.payload);
    state.contacts.isLoading = false;
};
const deleteContactFulfiled = (state, action) => {
    state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
    );
    state.contacts.isLoading = false;
};

const phoneBookSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContact.pending, handlePending)
            .addCase(addContact.pending, handlePending)
            .addCase(deleteContact.pending, handlePending)
            .addCase(fetchContact.rejected, handleRejected)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(fetchContact.fulfilled, fetchContactFulfiled)
            .addCase(addContact.fulfilled, addContactFulfiled)
            .addCase(deleteContact.fulfilled, deleteContactFulfiled);
    },
});

export const { setFilter } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
