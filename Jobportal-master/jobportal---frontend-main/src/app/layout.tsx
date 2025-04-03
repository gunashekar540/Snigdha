"use client";
import "./globals.css";
import { useState, useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <html lang="en" className={theme}>
      <body>
        <button onClick={toggleTheme} className="p-2 bg-gray-300 dark:bg-gray-700">
          Toggle Dark Mode
        </button>
        {children}
      </body>
    </html>
  );
}
