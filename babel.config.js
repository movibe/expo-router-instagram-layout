module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      'react-native-reanimated/plugin',
      'expo-router/babel',
      [
        'module-resolver',
        {
          alias: {
            '@': './src'
          }
        }
      ],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods'
    ],
    presets: ['babel-preset-expo']
  }
}
