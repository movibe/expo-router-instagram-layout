---
name: "component"
root: "./src/components"
output: "*"
ignore: []
questions:
  name: "Please enter name"
---

# `{{ inputs.name | pascal }}/index.tsx`

```jsx
import { memo } from "react";
import { Box, Text } from '@/components'

export type {{ inputs.name | pascal }}Props = {
  testID?: string
}

 const Component =  ({
  testID = '{{ inputs.name | pascal }}',
  ...props
}: {{ inputs.name | pascal }}Props) => {

  return (<Box testID={testID} {...props}>
    <Text testID={testID}>This is a Div</Text>
  </Box>)
}

export const {{ inputs.name | pascal }} = memo(Component)
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```jsx
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {  {{ inputs.name | pascal }}, {{ inputs.name | pascal }}Props } from './'
import { base } from '../base'

export default {
  title: `${base.name}/{{ inputs.name | pascal }}`,
  component: {{ inputs.name | pascal }},

} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

const Template: ComponentStory<typeof  {{ inputs.name | pascal }}> = (args) => <{{ inputs.name | pascal }} {...args} />;

export const Default = Template.bind({});

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```jsx
import {render, mockTestID, wrapper} from '~/tests'
import { {{ inputs.name | pascal }}Props, {{ inputs.name | pascal }}} from '@/components'

describe(`{{ inputs.name | pascal }}`, () => {

  const props: {{ inputs.name | pascal }}Props = {
    testID: '{{ inputs.name | pascal }}',
  }

  const el_container = mockTestID('View', props.testID!)

  it(`render component #${el_container}`, async () => {
    const { toJSON, findByTestId } = render(
      <{{ inputs.name | pascal }} {...props} />, { wrapper }
    )
    const sut = await findByTestId(el_container)
    expect(sut).toBeTruthy()
    expect(toJSON()).toMatchSnapshot()
  })
})

```
