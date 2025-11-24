// src/components/ThemeToggle/ThemeToggle.jsx

import React from "react";
import "../../styles/bem/theme.css";

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {darkMode ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
}
