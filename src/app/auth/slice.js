import { createSlice } from "@reduxjs/toolkit";
import { logOut, register } from "./operations";
import { act } from "react";
import { logIn } from "./operations";
const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    IsRefreshing: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(register.pending, (state, action) => state)
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(register.rejected, (state) => {
                return state;
            })
            .addCase(logIn.pending, (state, action) => state)
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(logIn.rejected, (state) => state)
            .addCase(logOut.pending, (state, action) => state)
            .addCase(logOut.fulfilled, (state, action) => {
                if (action.payload?.includes("401")) {
                    state.user = { name: null, email: null };
                    state.token = null;
                    state.isLoggedIn = false;
                }
                return state;
            })
            .addCase(logOut.rejected, (state) => state),
});
export const authReducer = authSlice.reducer;
