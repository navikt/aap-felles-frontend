const config = require('@navikt/eslint-config-aap/flat');

module.exports = [
  { ignores: ['cjs/**', 'esm/**'] },
  {
    files: ['eslint.config.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  ...config,
];
