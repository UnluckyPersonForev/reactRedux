import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "./phoneBookInitialState";

const phoneBookSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        number: number,
                    },
                };
            },
        },
        setFilter(state, action) {
            state.filterQuery = action.payload;
        },
    },
});

export const { addContact, setFilter } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
