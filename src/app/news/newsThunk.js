import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopNews } from "../../services/getTopNews";

export const getTopNewsThunk = createAsyncThunk("news/topNews", async () => {
    return getTopNews();
});
