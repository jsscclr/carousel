module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [ "eslint:recommended" ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    sourceType: "module"
  },
  plugins: [ "compat", "promise" ],
  rules: {
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "comma-dangle": "error",
    "complexity": "error",
    "consistent-return": "error",
    "curly": "error",
    "default-case": "error",
    "dot-location": [ "error", "property" ],
    "dot-notation": "error",
    "eqeqeq": [ "error", "smart" ],
    "no-alert": "error",
    "no-caller": "error",
    "no-console": "warn",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [ "warn", { ignore: [ 0, 1 ] } ],
    "no-multi-spaces": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "radix": "error",
    "require-await": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "yoda": "error",
    "init-declarations": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undefined": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-path-concat": "error",
    "array-bracket-spacing": [ "error", "always" ],
    "block-spacing": "error",
    "brace-style": "error",
    "capitalized-comments": "warn",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "eol-last": [ "error", "always" ],
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "id-length": "error",
    "indent": [ "error", 2, { SwitchCase: 1 } ],
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "line-comment-position": "error",
    "linebreak-style": "error",
    "lines-around-comment": "warn",
    "max-len": "warn",
    "max-statements-per-line": "error",
    "newline-after-var": "error",
    "newline-before-return": "error",
    "newline-per-chained-call": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "warn",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [ "error", "always" ],
    "one-var": [ "error", "never" ],
    "operator-assignment": "error",
    "padded-blocks": [ "error", { blocks: "never" } ],
    "quotes": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "semi": "error",
    "sort-keys": "error",
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": [ "error", "never" ],
    "space-in-parens": "error",
    "spaced-comment": "error",
    "compat/compat": "warn",
    "promise/no-promise-in-callback": "error",
    "promise/param-names": "error"
  }
};
