let Gzip = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

module.exports = {
  pluginOptions: {
    i18n: {
      locale: "zh",
      fallbackLocale: "zh",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new Gzip({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
  },
  publicPath: "/vuer",
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  lintOnSave: undefined
};
