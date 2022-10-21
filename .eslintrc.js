// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    // 'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
  },
};
