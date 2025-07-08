import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    addContacts,
    deleteContacts,
    getContacts,
} from "../../services/getContacts";

export const fetchContact = createAsyncThunk("contacts/fetchAll", async () => {
    return getContacts();
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact) => {
        return addContacts(contact);
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id) => {
        return deleteContacts(id);
    }
);
