import js from '@eslint/js';
import { baseRules } from './base';

export default [
  ...js.configs.recommended,
  {
    plugins: { react: 'eslint-plugin-react' },
    rules: require('eslint-plugin-react').configs.recommended.rules,
  },
  {
    plugins: { 'jsx-a11y': 'eslint-plugin-jsx-a11y' },
    rules: require('eslint-plugin-jsx-a11y').configs.recommended.rules,
  },
  {
    plugins: { 'react-hooks': 'eslint-plugin-react-hooks' },
    rules: require('eslint-plugin-react-hooks').configs.recommended.rules,
  },
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: 'eslint-plugin-react',
      '@typescript-eslint': '@typescript-eslint/eslint-plugin',
      jest: 'eslint-plugin-jest',
    },
    ...baseRules,
  },
];
