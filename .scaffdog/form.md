---
name: "form"
root: "./src/atomic/components/organisms"
output: "*"
ignore: []
questions:
  name: "Please enter form name"
---

# `{{ inputs.name | pascal }}/index.tsx`

```jsx
import {memo, ReactNode} from 'react'
import {Controller, useForm} from 'react-hook-form'

import {BoxProps, Button, Input, Text, VStack} from '~/atomic/components/atoms'
import {useYupValidationResolver} from '~/atomic/hooks'

import { {{ inputs.name | pascal }}Validation} from './valid'

export type {{ inputs.name | pascal }}Inputs = {
  phone: string
}

export type {{ inputs.name | pascal }}Props = {
  defaultValues?: {{ inputs.name | pascal }}Inputs
  loading?: boolean
  onSubmit: (data: {{ inputs.name | pascal }}Inputs) => void
  testID?: string
} & BoxProps

const Component = ({defaultValues, loading, onSubmit, testID = '{{ inputs.name | pascal }}', ...props}: {{ inputs.name | pascal }}Props) => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<{{ inputs.name | pascal }}Inputs>({
    defaultValues,
    mode: 'onChange',
    resolver: useYupValidationResolver({{ inputs.name | pascal }}Validation),
  })

  return (
      <VStack flex={1} mb='2' mx={APP_PAGE_MARGIN_X} pt='3' space='4'>
        <VStack flex={1} height='100%' justifyContent='space-between' space='5'>
          <Controller
            control={control}
            name='phone'
            render={({field: {onBlur, onChange, value} }) => (
              <Input
                autoFocus
                accessibilityLabel='Celular com DDD'
                helperText={errors?.phone?.message}
                isInvalid={!!errors.phone}
                keyboardType='numeric'
                label='Celular com DDD'
                mask='PHONE'
                onBlur={onBlur}
                onChangeText={onChange}
                onSubmitEditing={handleSubmit(onSubmit)}
                returnKeyType='done'
                testID={`${testID}_phone`}
                value={value}
              />
            )}
          />
          <VStack>
            <Button
              accessibilityLabel={loading ? 'aguarde' : 'começar'}
              isLoading={loading}
              mb='3'
              onPress={handleSubmit(onSubmit)}
              testID={`${testID}_submit`}
            >
              {loading ? 'aguarde' : 'começar'}
            </Button>
          </VStack>
        </VStack>
      </VStack>
  )
}
export const {{ inputs.name | pascal }} = memo(Component)

export * from './valid'
```

# `{{ inputs.name | pascal }}/mock.tsx`

```jsx
import {useForm} from 'react-hook-form'

import { {{ inputs.name | pascal }}, {{ inputs.name | pascal }}Inputs, {{ inputs.name | pascal }}Props} from './'
import { {{ inputs.name | pascal }}Validation} from './valid'

export const {{ inputs.name | pascal }}Mock = (props: Omit<{{ inputs.name | pascal }}Props, 'formProps'>) => {
  const formProps = useForm<{{ inputs.name | pascal }}Inputs>({
    mode: 'onChange',
    resolver: {{ inputs.name | pascal }}Validation,
  })

  return <{{ inputs.name | pascal }} formProps={formProps} {...props} />
}


```

# `{{ inputs.name | pascal }}/valid.ts`

```jsx
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {formatOnlyNumbers, rangeNumber} from '~/atomic/utils'

export const DDD = rangeNumber(11, 99)

export const {{ inputs.name | pascal }}Validation = yupResolver(
  yup.object({
    phone: yup
      .string()
      .length(16, 'Número incompleto')
      .test('', 'O número deve iniciar com 9', number => !!number?.length && formatOnlyNumbers(number)?.[2] === '9')
      .test('', 'DDD inválido', number => !!number && DDD.includes(formatOnlyNumbers(number).substr(1, 2))),
  })
)

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```jsx
import {Meta} from '@storybook/react'

import {base} from '../base'
import { {{ inputs.name | pascal }}} from './'
import { {{ inputs.name | pascal }}Mock} from './mock'
export default {
  component: {{ inputs.name | pascal }},
  title: `${base.name}/{{ inputs.name | pascal }}`,
} as Meta

export const normal = () => {
  return <{{ inputs.name | pascal }}Mock onSubmit={console.log} />
}

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```jsx
import {act, fireEvent, mockTestID, render, wrapper} from '~/tests'

iimport { {{ inputs.name | pascal }}Props} from '~/atomic/components'
iimport { {{ inputs.name | pascal }}Mock} from '{{ inputs.name | pascal }}/mock'

describe(`{{ inputs.name | pascal }}`, () => {
  const props: Omit<{ {{ inputs.name | pascal }}Props, 'formProps'> = {
    onSubmit: jest.fn(),
    testID: '{ {{ inputs.name | pascal }}',
  }

  const el_input = mockTestID('TextInput', `${props.testID}_phone`)
  const el_button_submit = mockTestID('Button', `${props.testID}_submit`)

  it(`render submit form #${el_input}`, async () => {
    const {findByTestId, toJSON} = render(<{ {{ inputs.name | pascal }}Mock {...props} />, {
      wrapper,
    })
    props.onSubmit = jest.fn()

    const phone = await findByTestId(el_input)
    const submit = await findByTestId(el_button_submit)
    expect(phone).toBeTruthy()

    await act(async () => {
      fireEvent(phone, 'changeText', '21999999999')
    })
    await act(async () => {
      fireEvent(submit, 'press')
    })
    expect(toJSON()).toMatchSnapshot()
  })
})

```
