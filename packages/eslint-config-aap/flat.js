const js = require('@eslint/js');
const { fixupPluginRules } = require('@eslint/compat');
const globals = require('globals');
const { rules, settings, overrides } = require('./base');
const reactPlugin = require('eslint-plugin-react');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
  js.configs.recommended,
  {
    plugins: { react: fixupPluginRules(reactPlugin) },
    rules: reactPlugin.configs.recommended.rules,
  },
  jsxA11yPlugin.flatConfigs.recommended,
  reactHooksPlugin.configs['recommended-latest'],
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      jest: jestPlugin,
    },
    rules,
    settings,
  },
  // overrides from base.js converted to flat config file-specific objects
  ...overrides.map(({ files, rules: overrideRules }) => ({ files, rules: overrideRules })),
];
