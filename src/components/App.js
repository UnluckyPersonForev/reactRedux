import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import PhoneBook from "./PhoneBook/PhoneBook";
import { getTopNewsThunk } from "../app/news/newsThunk";
import NewsList from "./News/NewsList";

function App() {
    const dispatch = useDispatch();
    return (
        <>
            <PhoneBook />
            <button onClick={() => dispatch(getTopNewsThunk())}>news</button>
            <NewsList />
        </>
    );
}

export default App;
