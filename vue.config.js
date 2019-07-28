const path = require("path");

module.exports = {
  // 调整webpack配置
  configureWebpack: {
    plugins: [
      
    ]
  },
  pluginOptions: {
    "style-resources-loader": {
      patterns: ["src/assets/less/color.less"],
      preProcessor: "less"
    }
  },

  lintOnSave: undefined
};
