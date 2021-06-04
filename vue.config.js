module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  lintOnSave: false,
  //css
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/main.scss";`,
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            //要转换的属性列表，包括边框等等
            propList: ['*'],
          }),
        ],
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
  },
};
