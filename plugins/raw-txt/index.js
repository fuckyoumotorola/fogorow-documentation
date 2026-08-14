module.exports = function rawTxtPlugin() {
  return {
    name: "raw-txt",

    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.txt$/,
              type: "asset/source",
            },
          ],
        },
      };
    },
  };
};