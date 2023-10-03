import { Text, View } from 'react-native'
import { useDeviceContext } from 'twrnc'

import { tailwind, tw } from '@/lib/tailwind'

export default function Page() {
  useDeviceContext(tw)
  return (
    <View style={tailwind('flex-1 items-center justify-center bg-white dark:bg-slate-800 p-4')}>
      <View
        style={tailwind(
          'flex-row  justify-center items-center flex w-full pt-[18px] pr-4 pb-[18px] pl-4 gap-x-2.5 rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px] opacity-100 bg-[#1bac4b] relative'
        )}>
        <Text
          style={tailwind(
            'w-full opacity-100 text-center text-base font-bold relative text-white'
          )}>
          Sign in with Phone Number
        </Text>
      </View>
      <Text style={tailwind('text-center font-bold relative text-gray-800 py-4')}>
        Let’s you in
      </Text>
    </View>
  )
}
