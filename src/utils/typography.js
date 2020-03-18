import Typography from "typography"

import judahTheme from "typography-theme-judah"

const typography = new Typography(judahTheme)
// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: 1.45,
//   headerFontFamily: ["Playfair Display", "serif"],
//   bodyFontFamily: ["Roboto", "sans-serif"],
// })

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
