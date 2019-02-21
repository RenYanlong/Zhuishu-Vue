const path = require("path");
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      patterns: ["src/assets/less/color.less"],
      preProcessor: "less"
    }
  },
  lintOnSave: undefined
};
