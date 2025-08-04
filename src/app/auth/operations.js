import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import useAuth from "../../hoocks/useAuth";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
    "auth/register",
    async (creditentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/signup", creditentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const logIn = createAsyncThunk(
    "auth/login",
    async (creditentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", creditentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    console.log("Current token:", token); // Check DevTools Console
    try {
        const res = await axios.post("/users/logout");
        clearAuthHeader();
    } catch (error) {
        clearAuthHeader();
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return;

    setAuthHeader(token);
    try {
        const res = await axios.get("/users/current");

        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
