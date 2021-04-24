module.exports = {
  plugins: {
    "postcss-plugin-px2rem": {
      rootValue: 16,// 配合 rem.js 使用 750 的设计稿
      unitPrecision: 5,
      mediaQuery: true,
      exclude: /(node_module)/i,
      selectorBlackList: ['html', 'mp-', 'calendar', 'iconfont'], // 在 rem.js 全局作用下，排除指定的文件的影响
      propBlackList: ['border'] // 过滤属性
    }
  }
}
