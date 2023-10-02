module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis', 'prettier'],
  plugins: ['sort-keys-fix', 'sort-destructure-keys', 'unused-imports'],

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  rules: {
    'no-console': [2, { allow: ['warn', 'error'] }]
  }
}
