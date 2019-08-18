import Typography from "typography";
import Alton from "typography-theme-alton";
import { css } from "styled-components";

Alton.overrideThemeStyles = () => {
  return {
    a: {
      color: "#1c87ff",
      // background: "linear-gradient(to top,#e896bf,#fff 100%,#0000 100%,#0000)",
      backgroundSize: "100% 30%",
      backgroundPosition: "center 100%",
      backgroundRepeat: "no-repeat",
      transition: "background-size 250ms ease",
      fontWeight: "bold"
    },
    "a:hover": {
      backgroundSize: "100% 100%"
    },
    p: {
      lineHeight: 1.6
    }
  };
};

Alton.googleFonts = [
  {
    name: "Passero One",
    styles: ["400"]
  },
  {
    name: "Ubuntu",
    styles: ["400", "400i", "700", "700i"]
  }
];
Alton.headerFontFamily = ["Passero One", "serif"];
Alton.bodyFontFamily = ["Ubuntu", "sans-serif"];
Alton.baseLineHeight = 2;

// const typography = new Typography(Wordpress2016)
const typography = new Typography(Alton);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

// common theme settings
export const themedAnchorUnderline = theme => css`
  background-image: ${theme === "dark"
    ? `linear-gradient(
  to top,
  #f03b95,
  #333 100%,
  #0000 100%,
  #0000
);`
    : `linear-gradient(to top,#e896bf,#fff 100%,#0000 100%,#0000)`};
`;
