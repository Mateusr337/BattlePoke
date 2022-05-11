import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import RegisterPage from "./pages/register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
