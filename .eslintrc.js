module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-restricted-syntax': 'off',
    'max-len': ['error', 100, 2, { ignoreUrls: true, ignoreComments: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  extends: ['airbnb-base', 'prettier'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
