const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/WillMBP/Documents/personalSite/gatsby-starter-mate/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/WillMBP/Documents/personalSite/gatsby-starter-mate/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/WillMBP/Documents/personalSite/gatsby-starter-mate/src/pages/index.js")))
}

