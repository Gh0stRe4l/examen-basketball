import React from "react";
import "../../styles/bem/theme.css";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme__toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
