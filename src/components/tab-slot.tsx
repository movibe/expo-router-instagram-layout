// Like <Slot /> from Expo Router but with stored tab history.
import { CommonActions } from '@react-navigation/native'
import { TabRouter } from '@react-navigation/routers'
import { Link, Navigator } from 'expo-router'
import { Screen as RouterScreen } from 'expo-router/src/views/Screen'
import * as React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { Screen, ScreenContainer } from 'react-native-screens'

function useNavigatorContext() {
  const context = Navigator.useContext()

  if (process.env.NODE_ENV !== 'production') {
    if (!(context.router.name === 'TabRouter' || context.router instanceof TabRouter)) {
      throw new Error(
        'useTabbedSlot must be used inside a Navigator with a tab router: <Navigator route={TabRouter} />'
      )
    }
  }

  return context
}

export function TabbedNavigator(props: React.ComponentProps<typeof Navigator>) {
  return <Navigator {...props} router={TabRouter} />
}

export function TabbedSlot({
  detachInactiveScreens = true,
  style
}: {
  detachInactiveScreens?: boolean
  style?: ViewStyle
}) {
  const { descriptors, state } = useNavigatorContext()
  const focusedRouteKey = state.routes[state.index].key
  const [loaded, setLoaded] = React.useState([focusedRouteKey])

  if (!loaded.includes(focusedRouteKey)) {
    setLoaded([...loaded, focusedRouteKey])
  }

  const { routes } = state

  return (
    <ScreenContainer hasTwoStates enabled={detachInactiveScreens} style={styles.container}>
      {routes.map((route, index) => {
        const descriptor = descriptors[route.key]
        const { lazy = true, unmountOnBlur } = descriptor.options
        const isFocused = state.index === index

        if (unmountOnBlur && !isFocused) {
          return null
        }

        if (lazy && !loaded.includes(route.key) && !isFocused) {
          // Don't render a lazy screen if we've never navigated to it
          return null
        }

        return (
          <Screen
            key={route.key}
            accessibilityElementsHidden={!isFocused}
            activityState={isFocused ? 2 : 0}
            enabled={detachInactiveScreens}
            freezeOnBlur={descriptor.options.freezeOnBlur}
            importantForAccessibility={isFocused ? 'auto' : 'no-hide-descendants'}
            style={[
              StyleSheet.absoluteFill,
              { overflow: 'hidden', zIndex: isFocused ? 0 : -1 },
              style
            ]}>
            {descriptor.render()}
          </Screen>
        )
      })}
    </ScreenContainer>
  )
}

function useContextRoute(name: string) {
  const context = Navigator.useContext()

  const { descriptors, navigation, state } = context

  const current = state.routes.find(route => route.name === name)

  if (!current) {
    console.warn(
      `Could not find route with name: ${name}. Options: ${state.routes
        .map(r => r.name)
        .join(', ')}`
    )
  }

  if (!current) {
    return null
  }

  return {
    descriptor: descriptors[current.key],
    navigation,
    route: current,
    target: state.key
  }
}

export function TabLink({
  name,
  ...props
}: { name: string } & Omit<React.ComponentProps<typeof Link>, 'href' | 'onPress' | 'onLongPress'>) {
  const ctxRoute = useContextRoute(name)

  if (!ctxRoute) {
    return null
  }

  const { navigation, route, target } = ctxRoute

  const onPress = e => {
    const event = navigation.emit({
      canPreventDefault: true,
      target: route.key,
      type: 'tabPress'
    })

    if (!event?.defaultPrevented) {
      e.preventDefault()
      navigation.dispatch({
        ...CommonActions.navigate({ merge: true, name: route.name }),
        target
      })
    }
  }

  const onLongPress = () => {
    navigation.emit({
      target: route.key,
      type: 'tabLongPress'
    })
  }

  return <Link {...props} href="/more" onLongPress={onLongPress} onPress={onPress} />
}

TabbedNavigator.Slot = TabbedSlot
TabbedNavigator.Link = TabLink
TabbedNavigator.Screen = RouterScreen
TabbedNavigator.useContext = useNavigatorContext

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  }
})
