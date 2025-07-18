import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import createStore from "./app/store";
import App from "./components/App";

import "./index.css";

const { store, persistor } = createStore();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
