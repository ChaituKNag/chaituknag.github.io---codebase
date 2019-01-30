import Typography from 'typography';
import Alton from 'typography-theme-alton';

Alton.overrideThemeStyles = () => {
  return {
    'a': {
      color: "#470FF4",
      background: "linear-gradient(to top,#CEBBC9,#CEBBC9 100%,#0000 100%,#0000)",
      backgroundSize: "100% 30%",
      backgroundPosition: "center 100%",
      backgroundRepeat: "no-repeat"
    },
    'a:hover': {
      backgroundSize: "100% 100%"
    },
    'a.no-underline': {
      background: "none"
    },
    'a.no-underline:hover': {
      background: "none"
    },
    'p': {
      lineHeight: 1.6
    }
  }
}

// const typography = new Typography(Wordpress2016)
const typography = new Typography(Alton);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
