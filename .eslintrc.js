module.exports = {
  parser: "babel-eslint",

  env: {
    es6: true,
    browser: true
  },
  plugins: [
    "react-hooks", 'standard', "prettier"
  ],
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "error", // 检查 effect 的依赖
    "prettier/prettier": "error",
    "semi": "error",
    "react/prop-types": 0
  }
}
