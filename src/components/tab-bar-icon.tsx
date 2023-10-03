import React from 'react'

import { Icon, IconName } from './icon'

type TabBarIconType = {
  color: string
  focused?: boolean
  name: IconName
  style?: any
}
export function TabBarIcon({ focused, ...props }: TabBarIconType) {
  let resolvedName: any = props.name
  if (focused) {
    resolvedName = props.name + '-active'
  }

  return (
    <Icon
      style={[{ height: 22, width: 22 }, props.style]}
      {...props}
      fill={props.color}
      name={resolvedName}
    />
  )
}
