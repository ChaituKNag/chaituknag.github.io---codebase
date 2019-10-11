import { useState, useEffect } from "react";
import { isBrowser } from "../utils/";
export default function useTheme() {
  const localTheme = isBrowser() && window.localStorage.getItem("theme");
  console.log("localTheme", localTheme);
  const [theme, setTheme] = useState(
    localTheme ? window.localStorage.getItem("theme") : "light"
  );
  console.log("actualTheme", theme);

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
