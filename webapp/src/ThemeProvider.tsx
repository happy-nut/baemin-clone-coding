import React from 'react'
import { createMuiTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@material-ui/core'
import BmhannaProEot from './assets/fonts/BMHANNAPro.eot'
import BmhannaProTtf from './assets/fonts/BMHANNAPro.ttf'
import BmhannaProWoff from './assets/fonts/BMHANNAPro.woff'

const palette = {
  primary: {
    main: '#6FB7BF'
  }
}

const BmhannaPro = {
  fontFamily: 'BMHANNAPro',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    url(${BmhannaProEot}) format('eot'),
    url(${BmhannaProTtf}) format('ttf'),
    url(${BmhannaProWoff}) format('woff')
  `,
}

// TODO: Find a way to provide 2 and more fonts properly by theming.
const typography = {
  // TODO: This is temporary code.
  subtitle1: {
    fontSize: 22,
    fontFamily: 'BMHANNAPro'
  }
}

const overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [BmhannaPro]
    }
  }
}

const theme = responsiveFontSizes(createMuiTheme({
  palette,
  typography,
  overrides
}))

const CustomThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

export default CustomThemeProvider
