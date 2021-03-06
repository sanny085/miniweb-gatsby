
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("A:\\Project\\Samespace\\miniweb\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("A:\\Project\\Samespace\\miniweb\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("A:\\Project\\Samespace\\miniweb\\src\\pages\\index.js")),
  "component---src-pages-projects-index-js": preferDefault(require("A:\\Project\\Samespace\\miniweb\\src\\pages\\projects\\index.js")),
  "component---src-templates-project-details-js": preferDefault(require("A:\\Project\\Samespace\\miniweb\\src\\templates\\project-details.js"))
}

