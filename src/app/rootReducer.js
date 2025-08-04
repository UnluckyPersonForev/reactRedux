import { combineReducers } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook/phoneBookSlice";
import { newSliceReducer } from "./news/newsSlice";
import { authReducer } from "./auth/slice";
const rootReducer = combineReducers({
    phoneBook: phoneBookReducer,
    news: newSliceReducer,
    auth: authReducer,
});
export default rootReducer;
