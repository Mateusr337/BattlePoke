import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import RegisterPage from "./pages/register";

import "./styles/reset.css";
import "./styles/app.css";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
