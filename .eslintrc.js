module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "react/sort-comp": 0,
    "react/no-multi-comp": 0,
    "react/require-extension": 0,
    "react/jsx-uses-react": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 0
  }
};
