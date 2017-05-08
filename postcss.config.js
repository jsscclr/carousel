const stylelintRules = require("./stylelint.config.js");

module.exports = () => ({
  plugins: [
    require("stylelint")(stylelintRules),
    require("postcss-cssnext")()
  ]
});
