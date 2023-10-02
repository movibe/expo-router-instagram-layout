import { Pressable, StyleSheet } from '@bacons/react-views'
import { Link } from 'expo-router'
import React from 'react'
import { Platform, Text, useWindowDimensions, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Icon } from '@/components/icon'
import { makeIcon, TabBarIcon } from '@/components/tab-bar-icon'
import { TabbedNavigator } from '@/components/tab-slot'
import cssStyles from '@/styles/root-layout.module.scss'

const cns = (...classes: (string | false | undefined | null)[]): Record<string, any> => ({
  $$css: true,
  _: classes.filter(Boolean).join(' ') as unknown as string[]
})

function HeaderLogo() {
  const isLargeHorizontal = useWidth(1264)
  const isSmallHorizontal = useWidth(768)

  return (
    <Link
      asChild
      href="/"
      style={[
        { alignItems: 'flex-start', paddingVertical: 20 },
        Platform.select({
          default:
            isSmallHorizontal && !isLargeHorizontal
              ? {
                  height: 96,
                  marginTop: 12,
                  minHeight: 96,
                  paddingBottom: 23,
                  paddingTop: 0
                }
              : {},
          web: cns(cssStyles.headerLink)
        })
      ]}>
      <Pressable accessibilityRole="button">
        {({ hovered }) => (
          <Text
            style={[
              // jsStyles.headerLogo,
              {
                backgroundColor: hovered ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
              }
            ]}>
            <Icon
              fill={Colors.dark}
              name="logo"
              style={Platform.select({
                default: !isLargeHorizontal ? { display: 'none' } : {},
                web: cns(cssStyles.wideVisible)
              })}
            />
            <Icon
              fill={Colors.dark}
              name="logo-small"
              style={Platform.select({
                default: isLargeHorizontal ? { display: 'none' } : {},
                web: cns(cssStyles.wideHidden)
              })}
            />
          </Text>
        )}
      </Pressable>
    </Link>
  )
}

function useWidth(size: number | string) {
  const { width } = useWindowDimensions()
  if (typeof window === 'undefined') {
    return true
  }
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    return false
  }
  return width >= Number(size)
}

function SideBar({ visible }) {
  const isLarge = useWidth(1265)

  return (
    <View
      style={[
        jsStyles.sideBar,

        ...Platform.select({
          default: [
            !visible && {
              display: 'none'
            },
            isLarge && {
              minWidth: NAV_MEDIUM_WIDTH
            }
          ],

          web: [cns(cssStyles.largeVisible, cssStyles.sideBar)]
        })
      ]}>
      <View
        style={[
          jsStyles.sidebarInner,
          ...Platform.select({
            default: [
              isLarge &&
                ({
                  alignItems: 'flex-start',
                  minWidth: NAV_MEDIUM_WIDTH,
                  width: NAV_MEDIUM_WIDTH
                } as const)
            ],
            web: [cns(cssStyles.sideBarInner)]
          })
        ]}>
        <View
          style={[
            jsStyles.sidebarInner2,
            Platform.select({
              default: !isLarge
                ? {
                    alignItems: 'center'
                  }
                : {},
              web: cns(cssStyles.sideBarHeader)
            })
          ]}>
          <HeaderLogo />

          <View style={{ flex: 1, gap: 4 }}>
            <SideBarTabItem icon={makeIcon('home')} name="index">
              Home
            </SideBarTabItem>
            <SideBarTabItem icon={makeIcon('explore')} name="explore">
              Explore
            </SideBarTabItem>
            {/* Divider */}
          </View>
          <View>
            <SideBarTabItem icon={makeIcon('more')} name="/more">
              More
            </SideBarTabItem>
          </View>
        </View>
      </View>
    </View>
  )
}

function TabBar({ visible }) {
  return (
    <View
      style={[
        {
          paddingBottom: useSafeAreaInsets().bottom
        },
        Platform.select({
          default: {
            display: visible ? 'flex' : 'none'
          },
          web: cns(cssStyles.smallVisible)
        })
      ]}>
      <View style={jsStyles.nav}>
        {[
          { icon: 'home', id: 'index', name: 'index' },
          { icon: 'explore', id: 'explore', name: 'explore' },
          { icon: 'more', id: 'more', name: '/more' }
        ].map(tab => (
          <TabBarItem key={tab.id} id={tab.id} name={tab.name}>
            {({ focused, hovered, pressed }) => (
              <TabBarIcon
                color="black"
                focused={focused}
                name={tab.icon}
                style={[
                  {
                    paddingHorizontal: 8
                  },
                  Platform.select({
                    web: {
                      transform: hovered ? [{ scale: 1.1 }] : [{ scale: 1 }],
                      transitionDuration: '100ms'
                    }
                  }),
                  pressed && {
                    opacity: 0.8,
                    transform: [{ scale: 0.9 }]
                  }
                ]}
              />
            )}
          </TabBarItem>
        ))}
      </View>
    </View>
  )
}

function useIsTabSelected(name: string): boolean {
  const { navigation } = TabbedNavigator.useContext()

  const state = navigation.getState()
  const current = state.routes.find((route, i) => state.index === i)

  return current?.name === name
}

function TabBarItem({
  children,
  id,
  name,
  style
}: {
  children?: any
  id: string
  name: string
  style?: ViewStyle
}) {
  const focused = useIsTabSelected(id)

  if (name.startsWith('/') || name.startsWith('.')) {
    return (
      <Link asChild href={name} style={style}>
        <Pressable accessibilityRole="button">{props => children({ ...props, focused })}</Pressable>
      </Link>
    )
  }

  return (
    <TabbedNavigator.Link asChild name={id} style={style}>
      <Pressable accessibilityRole="button">{props => children({ ...props, focused })}</Pressable>
    </TabbedNavigator.Link>
  )
}

function SideBarTabItem({
  children,
  icon,
  name
}: {
  children: string
  icon: (props: { color: string; focused?: boolean }) => JSX.Element
  name: string
}) {
  const isLarge = useWidth(1265)

  return (
    <TabBarItem
      id={name}
      name={name}
      style={{
        paddingVertical: 4,
        width: '100%'
      }}>
      {({ focused, hovered }) => (
        <View
          style={[
            {
              alignItems: 'center',
              borderRadius: 999,
              flexDirection: 'row',
              padding: 12,
              transitionDuration: '200ms',
              transitionProperty: ['background-color', 'box-shadow']
            },
            hovered && {
              backgroundColor: 'rgba(0, 0, 0, 0.1)'
            }
          ]}>
          <View
            style={[
              {
                transitionDuration: '150ms',
                transitionProperty: ['transform'],
                transitionTimingFunction: 'cubic-bezier(0.17, 0.17, 0, 1)'
              },
              hovered && {
                transform: [{ scale: 1.1 }]
              }
            ]}>
            {icon({
              color: '#000',
              focused
            })}
          </View>

          <Text
            style={[
              {
                color: '#000',
                fontSize: 16,
                lineHeight: 24,
                marginLeft: 16,
                marginRight: 16
              },
              Platform.select({
                default: {
                  display: isLarge ? 'flex' : 'none'
                },
                web: cns(cssStyles.sideBarTabItemText)
              }),
              focused && {
                fontWeight: 'bold'
              }
            ]}>
            {children}
          </Text>
        </View>
      )}
    </TabBarItem>
  )
}

export function ResponsiveNavigator() {
  const isRowLayout = useWidth(768)

  return (
    <TabbedNavigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false
      }}>
      <View
        style={[
          jsStyles.flex1,
          Platform.select({
            default: {
              flexDirection: isRowLayout ? 'row' : 'column'
            },
            web: cns(cssStyles.container)
          })
        ]}>
        <SideBar visible={isRowLayout} />
        <AppHeader visible={!isRowLayout} />
        <TabbedNavigator.Slot />
        <TabBar visible={!isRowLayout} />
      </View>
    </TabbedNavigator>
  )
}

function AppHeader({ visible }: { visible: boolean }) {
  const { top } = useSafeAreaInsets()
  const height = 60 + top
  return (
    <>
      <View style={{ height }} />
      <View
        style={[
          Platform.select({
            default: !visible && {
              display: 'none'
            },
            web: cns(cssStyles.smallVisible)
          }),
          { height, paddingTop: top },
          jsStyles.appHeader
        ]}>
        <Icon fill={Colors.dark} name="logo" />
      </View>
    </>
  )
}

const Colors = {
  dark: 'rgba(41, 41, 41, 1)',
  lightGray: 'rgba(230, 230, 230, 1)'
}

const NAV_MEDIUM_WIDTH = 244

const jsStyles = StyleSheet.create({
  appHeader: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 16,
    position: Platform.select({ default: 'absolute', web: 'fixed' }),
    right: 0,
    top: 0,
    zIndex: 10
  },
  flex1: { flex: 1 },
  headerLogo: {
    // flex: 1,
    alignItems: 'center',

    borderRadius: 4,

    display: 'flex',
    margin: 0,
    marginVertical: 4,
    padding: 12,
    transitionDuration: '200ms',
    transitionProperty: ['background-color', 'box-shadow']
  },
  nav: {
    alignItems: 'center',
    borderTopColor: Colors.lightGray,
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 49,
    justifyContent: 'space-around',
    paddingHorizontal: 16
  },
  sideBar: {
    minWidth: 72,
    width: 72
  },
  sidebarInner: {
    alignItems: 'stretch',
    borderRightColor: Colors.lightGray,
    borderRightWidth: 1,
    height: '100%',
    maxHeight: '100%',
    minWidth: 72,
    paddingBottom: 20,
    paddingHorizontal: 12,
    paddingTop: 8,
    position: Platform.select({ default: 'absolute', web: 'fixed' }),
    width: 72
  },
  sidebarInner2: {
    alignItems: 'stretch',
    flex: 1,
    height: '100%',
    justifyContent: 'space-between'
  }
})
