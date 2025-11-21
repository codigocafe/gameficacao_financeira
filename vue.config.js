module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCurrentElement: (tag) => tag.startsWith("cc-"),
        },
      }));
  },
};
