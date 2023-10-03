import '../styles/global.css'

import { Slot } from 'expo-router'
import Head from 'expo-router/head'
import { useDeviceContext } from 'twrnc'

import { ResponsiveNavigator } from '@/components/navigator'
import { storybookEnabled } from '@/config'
import { tw } from '@/lib/tailwind'

export default function Layout() {
  useDeviceContext(tw)

  if (storybookEnabled) return <Slot />

  return (
    <>
      <Head>
        <title>Expogram</title>
        <meta
          content="Expo Router Instagram responsive layout demo using SCSS"
          name="description"
        />
      </Head>
      <ResponsiveNavigator />
    </>
  )
}
