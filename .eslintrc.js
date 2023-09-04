module.exports = {
  env: {browser: true, es6: true},

  extends: [
    'eslint:recommended',
    'eslint-config-prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // "plugin:jest/recommended",
    // "plugin:jest/style",
    'plugin:testing-library/react',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],

  globals: {Atomics: 'readonly', SharedArrayBuffer: 'readonly'},

  overrides: [
    {
      files: ['**/*.test.ts*', 'src/test/**/*', 'jest.setup.ts'],
      rules: {
        'node/no-missing-require': 'off',
        'node/no-unpublished-import': 'off',
      },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
      plugins: ['jsx-expressions'],
      rules: {
        'jsx-expressions/strict-logical-expressions': 'error',
      },
    },
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint',
    // "jest",
    'testing-library',
    'node',
    'import',
    'react',
    'simple-import-sort',
    'sort-keys-fix',
    'sort-destructure-keys',
    'unused-imports',
    'prettier', // prettier must be the last
  ],

  root: true,

  rules: {
    '@typescript-eslint/member-ordering': ['error', {default: {order: 'alphabetically'}}],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': [2, {allow: ['warn', 'error']}],
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': ['warn'],
    'node/no-unsupported-features/es-syntax': 0,
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: false,
        jsxSingleQuote: true,
        parser: 'typescript',
        printWidth: 120,
        quoteProps: 'as-needed',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', {children: 'never', props: 'never'}],
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx', '.jsx']}],
    'react/jsx-fragments': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ['key'],
        shorthandFirst: true,
        shorthandLast: false,
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/style-prop-object': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': ['error', {caseSensitive: false}],
    'sort-keys-fix/sort-keys-fix': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },

  settings: {
    'import/ignore': ['react-native'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'babel-module': {}, // eslint-import-resolver-babel-module
      typescript: true, // eslint-import-resolver-typescript
    },
    react: {
      version: 'detect', // eslint-plugin-react
    },
  },
}
