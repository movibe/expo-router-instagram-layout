import React from 'react'
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import {VariantProps} from 'tailwind-variants'

import {tw} from '@/lib/tailwind'

import {buttonVariant} from './variants'

export type ButtonProps = TouchableOpacityProps & {
  children: string
  onPress?: () => void
} & VariantProps<typeof buttonVariant>

export const Button = ({children, color, onPress, size, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={tw.style(buttonVariant({color, size}))} {...props}>
      <Text style={tw.style('text-lg font-bold text-gray-50')}>{children}</Text>
    </TouchableOpacity>
  )
}
