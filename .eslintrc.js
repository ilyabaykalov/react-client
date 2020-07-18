module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [ "eslint:recommended", "plugin:react/recommended" ],
  "rules": {
    "object-curly-spacing": "off",
    "comma-dangle": "off",
    "require-jsdoc": "off",
    "arrow-parens": "off",
    "operator-linebreak": "off",
    "no-extend-native": "off",
    "no-trailing-spaces": "off",
    "no-debugger": "off",
    "max-len": "off"
  },
  settings: {
    react:{
      version: 'detect'
    }
  }
}
