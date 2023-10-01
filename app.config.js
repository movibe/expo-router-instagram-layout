export default ({ config }) => ({
  ...config,
  android: {
    adaptiveIcon: {
      backgroundColor: '#FFFFFF',
      foregroundImage: './assets/adaptive-icon.png',
    },
  },

  assetBundlePatterns: ['**/*'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  icon: './assets/icon.png',
  ios: {
    supportsTablet: true,
  },
  name: 'instagram-layout',

  orientation: 'portrait',
  plugins: ['expo-router'],
  scheme: 'acme',
  slug: 'instagram-layout',
  splash: {
    backgroundColor: '#ffffff',
    image: './assets/splash.png',
    resizeMode: 'contain',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  userInterfaceStyle: 'automatic',
  version: '1.0.0',
  web: {
    bundler: 'metro',
    favicon: './assets/favicon.png',
    output: 'static',
  },
});
