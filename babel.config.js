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
      ]
    ],
    presets: ['babel-preset-expo']
  }
}
