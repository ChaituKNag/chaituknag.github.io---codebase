import { useState, useEffect } from "react";
import { isBrowser } from "../utils/";
export default function useTheme() {
  const localTheme = isBrowser() && window.localStorage.getItem("theme");
  console.log("localTheme", localTheme);
  const [theme, setTheme] = useState(
    localTheme ? window.localStorage.getItem("theme") : "light"
  );
  console.log("actualTheme", theme);

  const toggleBodyClass = mode =>
    mode === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");

  useEffect(() => {
    const mode = window.localStorage.getItem("theme");
    setTheme(mode || "light");
    toggleBodyClass(mode);
  }, []);

  const toggleTheme = () => {
    const mode = theme === "dark" ? "light" : "dark";
    setTheme(mode);
    window.localStorage.setItem("theme", mode);
    toggleBodyClass(mode);
  };

  return [theme, toggleTheme];
}
