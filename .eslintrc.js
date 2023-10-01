module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis', 'prettier'],
  plugins: ['prettier', 'sort-keys-fix', 'sort-destructure-keys', 'unused-imports'],

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {},
};
