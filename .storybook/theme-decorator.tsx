// .storybook/ThemeDecorator.tsx
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

// Import your custom theme
import { theme } from '../src/utils/mui/theme' // Adjust the path to your theme file

const ThemeDecorator = (storyFn: () => React.ReactNode) => (
  <ThemeProvider theme={createTheme(theme)}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator
