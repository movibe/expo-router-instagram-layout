/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/**/*.stories.tsx', '!src/**/*.mock.ts'],
  coverageDirectory: 'tests',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
    '<rootDir>/lib/',
    '<rootDir>/test/',
    '<rootDir>/dist/',
    'babel.config.js',
    'metro.config.js',
  ],
  coverageReporters: ['html'],
  maxWorkers: 2,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^react-native$': '<rootDir>/node_modules/react-native',
    '^react-native/(.*)': '<rootDir>/node_modules/react-native/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/e2e/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  preset: 'jest-expo',
  reporters: ['default'],
  roots: ['<rootDir>/src'],
  globalSetup: "<rootDir>/jest.global-setup.js",
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', '<rootDir>/jest.setup'],
  testPathIgnorePatterns: ['node_modules/', 'android/', 'ios/', 'reports/'],
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ]

}
