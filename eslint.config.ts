import eslintJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import eslintReact from '@eslint-react/eslint-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    // Extend recommended rule sets from:
    // 1. ESLint JS's recommended rules
    // 2. TypeScript ESLint recommended rules
    // 3. ESLint React's recommended-typescript rules
    extends: [
      eslintJs.configs.recommended,
      ...tseslint.configs.recommended,
      eslintReact.configs["recommended-typescript"],
      betterTailwindcss.configs.recommended,
      betterTailwindcss.configs.stylistic,
    ],

    plugins: {
      '@stylistic': stylistic,
    },

    // Configure language/parsing options
    languageOptions: {
      // Use TypeScript ESLint parser for TypeScript files
      parser: tseslint.parser,
      parserOptions: {
        // Enable project service for better TypeScript integration
        projectService: true,
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },

    // Custom rule overrides (modify rule levels or disable rules)
    rules: {
      "@eslint-react/no-missing-key": "warn",
    },
    settings: {
      "better-tailwindcss": {
        cwd: dirname(fileURLToPath(import.meta.url)),
        entryPoint: 'global.css',
      },
    },
  },
]);
