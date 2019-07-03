import merge from "lodash.merge"
import baseTheme from "gatsby-theme-theme-ui-example/src/gatsby-plugin-theme-ui"

export default merge({}, baseTheme, {
  colors: {
    background: "cornflowerblue",
  },
})
