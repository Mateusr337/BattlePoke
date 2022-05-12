import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import RegisterPage from "./pages/register";

import "./styles/reset.css";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
