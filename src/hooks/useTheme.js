import { useState, useEffect } from "react";
export default function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme") || "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  return [theme, toggleTheme];
}
