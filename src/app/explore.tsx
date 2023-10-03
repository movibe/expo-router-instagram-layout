import { StyleSheet, Text, View } from 'react-native'
import { useDeviceContext } from 'twrnc'

import { tailwind, tw } from '@/lib/tailwind'

export default function Page() {
  useDeviceContext(tw)
  return (
    <View style={tailwind('flex-1 items-center justify-center bg-white dark:bg-slate-800')}>
      <View style={styles.main}>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Modify app/explore.tsx</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 24
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 'auto',
    maxWidth: 960
  },
  subtitle: {
    color: '#38434D',
    fontSize: 36
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold'
  }
})
