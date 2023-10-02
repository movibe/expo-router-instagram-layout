import { StyleSheet, Text, View } from 'react-native'

import { tailwind } from '@/lib/tailwind'

export default function Page() {
  return (
    <View style={styles.container}>
      <View
        style={tailwind(
          'flex-row  justify-center items-center flex w-full pt-[18px] pr-4 pb-[18px] pl-4 gap-x-2.5 rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px] rotate-0 opacity-100 bg-[#1bac4b] relative'
        )}>
        <Text
          style={tailwind(
            'w-full h-[22px] rotate-0 opacity-100 text-center text-base font-bold relative text-white'
          )}>
          Sign in with Phone Number
        </Text>
      </View>
      <Text
        style={tailwind(
          'text-center text-5xl font-bold relative text-[#212121] leading-[120.00000476837158%]'
        )}>
        Let’s you in
      </Text>
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
