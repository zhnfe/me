
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    'object-curly-spacing': ['error', 'always'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    // vue
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2
      },      
      multiline: {
        max: 1
      }
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }]
  }
}