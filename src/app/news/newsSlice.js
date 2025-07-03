import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./newsInitialState";
import { getTopNewsThunk } from "./newsThunk";
const handlePending = (state) => {
    state.loading = true;
};
const handleFulfilled = (state, action) => {
    state.news = action.payload.articles;
    state.loading = false;
};
const handleRejected = (state, action) => {
    state.error = action.payload;
    state.loading = false;
};

const newSlice = createSlice({
    name: "news",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTopNewsThunk.pending, handlePending)
            .addCase(getTopNewsThunk.fulfilled, handleFulfilled)
            .addCase(getTopNewsThunk.rejected, handleRejected);
    },
});

export const newSliceReducer = newSlice.reducer;
