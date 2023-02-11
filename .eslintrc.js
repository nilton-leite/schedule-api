module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/eslint-recommended', 'prettier'],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],

    '@typescript-eslint/no-var-requires': 'off',
  },
};
