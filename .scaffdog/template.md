---
name: "template"
root: "./src/atomic/components/templates"
output: "*"
ignore: []
questions:
  name: "Please enter name"
---

# `{{ inputs.name | pascal }}Template/index.tsx`

```jsx
import {memo} from 'react'

import {AppPage, AppPageProps} from '~/atomic/components/organisms/AppPage/index'

export type {{ inputs.name | pascal }}TemplateProps = {
  testID?: string
} & AppPageProps

const Component = ({ testID = '{{ inputs.name | pascal }}Template', ...props}: {{ inputs.name | pascal }}TemplateProps) => {
  return (
    <AppPage pb={4} testID={testID} {...props}>

    </AppPage>
  )
}

export const {{ inputs.name | pascal }}Template = memo(Component)

```

# `{{ inputs.name | pascal }}Template/{{ inputs.name | pascal }}Template.stories.tsx`

```jsx
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {  {{ inputs.name | pascal }}Template, {{ inputs.name | pascal }}TemplateProps } from './'
import { base } from '../base'

export default {
  title: `${base.name}/{{ inputs.name | pascal }}Template`,
  component: {{ inputs.name | pascal }}Template,

} as ComponentMeta<typeof {{ inputs.name | pascal }}Template>;

const Template: ComponentStory<typeof  {{ inputs.name | pascal }}Template> = (args) => <{{ inputs.name | pascal }}Template {...args} />;

export const Default = Template.bind({});

```

# `{{ inputs.name | pascal }}Template/{{ inputs.name | pascal }}Template.test.tsx`

```jsx
import {render, mockTestID, wrapper} from '~/tests'
import { {{ inputs.name | pascal }}TemplateProps, {{ inputs.name | pascal }}Template} from '~/atomic/components'

describe(`{{ inputs.name | pascal }}Template`, () => {

  const props: {{ inputs.name | pascal }}TemplateProps = {
    testID: '{{ inputs.name | pascal }}Template',
  }

  const el_container = mockTestID('View', props.testID!)

  it(`render component #${el_container}`, async () => {
    const { toJSON, findByTestId } = render(
      <{{ inputs.name | pascal }}Template {...props} />, { wrapper }
    )
    const sut = await findByTestId(el_container)
    expect(sut).toBeTruthy()
    expect(toJSON()).toMatchSnapshot()
  })
})

```
