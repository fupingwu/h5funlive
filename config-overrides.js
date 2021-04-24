
const { override, fixBabelImports,addPostcssPlugins } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
    addPostcssPlugins([require('postcss-plugin-px2rem')({
        rootValue: 16,
        propList: ['*']
        // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
        // propWhiteList: []
    }),]))
