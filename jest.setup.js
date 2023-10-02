import 'react-native-gesture-handler/jestSetup'

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual('react-native/Libraries/Utilities/Platform')
  Platform.constants.reactNativeVersion = { major: 0, minor: 66, patch: 0 }
  return Platform
})
