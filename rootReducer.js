import { combineReducers } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook/phoneBookSlice";
const rootReducer = combineReducers({ phoneBook: phoneBookReducer });
export default rootReducer;
