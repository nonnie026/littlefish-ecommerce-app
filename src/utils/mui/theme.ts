import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(',')
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          height: '100%'
        }
      }
    }
  }
})

export default theme
