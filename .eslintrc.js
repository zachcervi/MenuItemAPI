module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
  ],
  rules: {
    // Place any additional custom rules here
    'prettier/prettier': 'error', // Enforces Prettier formatting as ESLint errors
  },
};
