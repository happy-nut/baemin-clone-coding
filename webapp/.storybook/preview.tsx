import ThemeProvider from '../src/ThemeProvider'
import * as React from 'react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
]
