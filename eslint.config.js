import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { ESLint } from 'eslint';

export default {
  ignores: ['dist'],
  extends: [
    js.configs.recommended,
    'plugin:react/recommended', // Extend React recommended rules
    'plugin:react-hooks/recommended', // React hooks linting rules
  ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: '@typescript-eslint/parser', // Use TypeScript parser
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: 'module',
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': 'off', // Disable @typescript-eslint plugin as it may conflict with react-hooks
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-uses-react': 'off', // React 17+ no longer requires React import in JSX
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in JSX scope
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Avoid unused variables in TypeScript
  },
};
