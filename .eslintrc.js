module.exports = {
  extends: [
    'eslint:recommended',
    'universe/native',
    'universe/shared/typescript-analysis',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/*.test.ts*', 'src/test/**/*', 'jest.setup.ts'],
      rules: {
        'node/no-missing-require': 'off',
        'node/no-unpublished-import': 'off'
      }
    },
    {
      files: ['src/app/**/*', 'src/**/*.stories.tsx', 'src/lib/**/*'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-default-export': 'off',
        'node/no-unpublished-import': 'off'
      }
    },
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      parserOptions: {
        project: ['tsconfig.json']
      },
      plugins: ['jsx-expressions'],
      rules: {
        'jsx-expressions/strict-logical-expressions': 'error'
      }
    }
  ],
  parser: '@typescript-eslint/parser',

  plugins: [
    'sort-keys-fix',
    'sort-destructure-keys',
    'jest',
    '@typescript-eslint',
    'testing-library',
    'import',
    'react',
    'simple-import-sort',
    'prettier'
  ],

  root: true,
  rules: {
    '@typescript-eslint/member-ordering': ['error', { default: { order: 'alphabetically' } }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'import/no-default-export': ['error'],
    'no-console': [2, { allow: ['warn', 'error'] }],
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': ['warn'],
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'object-shorthand': ['error', 'always'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
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
        shorthandLast: false
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/style-prop-object': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    'sort-keys-fix/sort-keys-fix': 'error'
  },

  settings: {
    'import/ignore': ['react-native'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'babel-module': {}, // eslint-import-resolver-babel-module
      typescript: true // eslint-import-resolver-typescript
    },
    react: {
      version: 'detect' // eslint-plugin-react
    }
  }
}
