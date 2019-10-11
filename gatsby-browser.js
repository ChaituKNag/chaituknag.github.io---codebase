// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import "./node_modules/prismjs/themes/prism-okaidia.css";

import { isBrowser } from "./src/utils";

if (isBrowser()) {
  const mode = window.localStorage.getItem("theme");
  document.documentElement.style.setProperty(
    "--theme-background",
    mode === "dark" ? "#333" : "#fff"
  );
}
