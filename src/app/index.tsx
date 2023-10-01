import React from 'react';
import { Text, View } from 'react-native';
import { useDeviceContext } from 'twrnc';

import { Button } from '@/components/Button';
import { storybookEnabled } from '@/config';
import { tailwind, tw } from '@/lib/tailwind';

const Index = () => {
  useDeviceContext(tw);
  return (
    <View style={tailwind('flex-1 items-center justify-center bg-white dark:bg-slate-800')}>
      <View style={tailwind('flex-1 justify-center ')}>
        <Text style={tailwind('font-bold text-29xl dark:text-white')}>Home</Text>
        <Text style={tailwind('text-lg dark:text-white')}>Modify app/index.tsx</Text>

        <Button onPress={console.log}>Teste de botão</Button>
        <Button color="secondary" onPress={console.log}>
          Teste de botão
        </Button>
        <Button color="secondary" onPress={console.log} size="sm">
          Teste de botão
        </Button>
      </View>
    </View>
  );
};

let EntryPoint = Index;

if (storybookEnabled) {
  const StorybookUI = require('../../.storybook/native').default;
  EntryPoint = () => {
    useDeviceContext(tw);
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  };
}

export default EntryPoint;
