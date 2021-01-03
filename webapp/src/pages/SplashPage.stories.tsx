import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { SplashPage } from './SplashPage'

export default {
  title: 'SplashPage',
  component: SplashPage
}

const Template: Story<ComponentProps<typeof SplashPage>> = (args) => <SplashPage {...args} />

export const Basic = Template.bind({})

Basic.parameters = {
  controls: { hideNoControlsWarning: true }
}
