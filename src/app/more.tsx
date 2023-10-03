import { Text, View } from 'react-native'

import { tailwind } from '@/lib/tailwind'

export default function Page() {
  return (
    <View style={tailwind('items-center flex-1 p-4 ')}>
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
