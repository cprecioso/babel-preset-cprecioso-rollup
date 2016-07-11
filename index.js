var modify = require("modify-babel-preset")

const preset = modify("es2015-loose", {
  "transform-es2015-modules-commonjs": false,
  "external-helpers": true
})

preset.plugins.concat(require("babel-preset-es2016").plugins)

module.exports = preset
