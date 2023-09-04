/* eslint-disable node/no-missing-require */
/* eslint-disable @typescript-eslint/no-var-requires */
// app/Index.tsx
import React from 'react'
import {Text, View} from 'react-native'
import {useDeviceContext} from 'twrnc'

import {Button} from '@/components/Button'
import {storybookEnabled} from '@/config'
import {tw} from '@/lib/tailwind'

const Index = () => {
  useDeviceContext(tw)
  return (
    <View style={tw.style('flex-1 items-center justify-center bg-white dark:bg-slate-800')}>
      <View style={tw.style('flex-1 justify-center ')}>
        <Text style={tw.style('font-bold text-2xl dark:text-white')}>Home</Text>
        <Text style={tw.style('text-lg dark:text-white')}>Modify app/index.tsx</Text>
        <Button onPress={console.log}>Teste de botão</Button>
        <Button color='secondary' onPress={console.log}>
          Teste de botão
        </Button>
        <Button color='secondary' onPress={console.log} size='sm'>
          Teste de botão
        </Button>
      </View>
    </View>
  )
}

let EntryPoint = Index

if (storybookEnabled) {
  const StorybookUI = require('../../.storybook/native').default
  // eslint-disable-next-line react/display-name
  EntryPoint = () => {
    useDeviceContext(tw)
    return (
      <View style={{flex: 1}}>
        <StorybookUI />
      </View>
    )
  }
}

export default EntryPoint
