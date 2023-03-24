import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Landing, Register, ErrorPage } from "./pages/export";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
