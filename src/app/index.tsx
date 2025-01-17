/* eslint-disable react/display-name */
import { Text, View } from 'react-native'
import { useDeviceContext } from 'twrnc'

import { Button } from '@/components/atomic/atoms/Button'
import { storybookEnabled } from '@/config'
import { translate } from '@/lib/location'
import { tailwind, tw } from '@/lib/tailwind'

const Index = () => {
  useDeviceContext(tw)

  return (
    <View style={tailwind('flex-1 items-center justify-center bg-white dark:bg-slate-800')}>
      <Text style={tailwind('font-bold text-29xl dark:text-white')}>Home</Text>
      <Text style={tailwind('text-lg dark:text-white')}>Modify app/index.tsx</Text>
      <Text style={tailwind('text-lg dark:text-white')}>{translate('welcome')}</Text>

      <Button>Normal button</Button>
      <Button color="secondary">Teste de botão</Button>
      <Button color="secondary" size="sm">
        Teste de botão
      </Button>
    </View>
  )
}

let EntryPoint = Index

if (storybookEnabled) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const StorybookUI = require('../../.storybook/native').default
  EntryPoint = () => {
    useDeviceContext(tw)
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    )
  }
}

export default EntryPoint
