import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./Components/Pages/Contact";
import PInfo from "./Components/Pages/PInfo";
import Privacy from "./Components/Pages/Privacy";
import Terms from "./Components/Pages/Terms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Pages/Contact" element={<Contact />} />
        <Route path="/Pages/PInfo" element={<PInfo />} />
        <Route path="/Pages/Privacy" element={<Privacy />} />
        <Route path="/Pages/Terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
