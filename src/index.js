import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* src파일에 있는 App.js를 가져온다. */}
        <App />
    </React.StrictMode>
);
