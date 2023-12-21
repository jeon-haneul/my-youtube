import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// style.scss 연동
import "./assets/scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* src파일에 있는 App.js를 가져온다. */}
        <App />
    </React.StrictMode>
);
