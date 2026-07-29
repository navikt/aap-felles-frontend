const config = require('@navikt/eslint-config-aap/flat');

module.exports = [
  {
    files: ['*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  ...config,
];
