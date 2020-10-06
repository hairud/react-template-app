const config = {
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;
