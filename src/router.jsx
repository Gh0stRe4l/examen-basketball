// src/router.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PlayerDetail from "./pages/PlayerDetail"; // lo crearemos en el siguiente paso

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players/:id" element={<PlayerDetail />} />
        {/* Redirección a Home si la ruta no existe */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
