const config = require('./flat');

module.exports = [
  // this package's own files are CJS
  {
    files: ['*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  ...config,
];
