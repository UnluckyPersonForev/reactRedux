import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import PhoneBook from "./PhoneBook/PhoneBook";
import { getTopNewsThunk } from "../app/news/newsThunk";
import NewsList from "./News/NewsList";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Layout from "./Layout";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

import News from "./pages/News";
import useAuth from "../hoocks/useAuth";
import { refresh } from "../app/auth/operations";

function App() {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();
    useEffect(() => {
        dispatch(refresh);
    }, [dispatch]);

    return isRefreshing ? (
        "loading..."
    ) : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="logIn" element={<LogIn />} />
                <Route path="register" element={<Register />} />
                <Route path="phoneBook" element={<PhoneBook />} />
                <Route path="news" element={<News />} />
            </Route>
        </Routes>
    );
}

export default App;
