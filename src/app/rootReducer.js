import { combineReducers } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook/phoneBookSlice";
import { newSliceReducer } from "./news/newsSlice";
const rootReducer = combineReducers({
    phoneBook: phoneBookReducer,
    news: newSliceReducer,
});
export default rootReducer;
