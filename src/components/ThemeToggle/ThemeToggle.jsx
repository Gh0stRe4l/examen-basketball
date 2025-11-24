// src/components/ThemeToggle/ThemeToggle.jsx

import React, { useEffect, useState } from "react";
import "../../styles/bem/theme.css";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
    >
      {dark ? "Modo Claro ☀️" : "Modo Oscuro 🌙"}
    </button>
  );
}
