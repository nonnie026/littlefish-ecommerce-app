import { createTheme } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF'
    },
    blue: {
      '100': '#D0D7F5',
      '200': '#A1B0EC',
      '300': '#7388E2',
      '400': '#4461D9',
      '500': '#0156FF',
      '600': '#112EA6',
      '700': '#0D227C',
      '800': '#081753',
      '900': '#040B29',
      main: '#0156FF'
    },
    error: {
      '50': '#F7F5F5',
      '100': '#F5E6E6',
      main: '#D9412B'
    },
    grey: {
      '50': '#F5F5F7',
      '100': '#E5E7EB',
      '200': '#E1E2E6',
      '300': '#C8C8CC',
      '400': '#ADAEB2',
      '500': '#949599',
      '600': '#7C7C80',
      '700': '#69696C',
      '800': '#363738',
      '900': '#101114'
    },
    mode: 'light',

    success: {
      '50': '#F5F7F4',
      '100': '#E7F0E3',
      main: '#78A962'
    },
    text: {
      primary: '#101114',
      secondary: '#69696C'
    },
    warning: {
      '50': '#FAF9F7',
      '100': '#F0EBE1',
      main: '#D9AD00'
    }
  },
  spacing: 8,
  typography: (palette) => ({
    color: palette.text.primary,
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 12.5,
    htmlFontSize: 16,
    fontWeightRegular: 400,
    body1: {
      fontSize: 14
    },
    body2: {
      fontSize: 14
    },
    body12: {
      fontSize: 12,
      lineHeight: 1.66667
    },
    body14: {
      fontSize: 14,
      lineHeight: 1.42857
    },
    body14B: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.42857
    },
    body16: {
      fontSize: 16,
      lineHeight: 1.5
    },
    body16B: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.5
    },
    body18: {
      fontSize: 18,
      lineHeight: 1.55556
    },
    body18B: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.55556
    },
    capitals10: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.4px',
      lineHeight: 1.6,
      textTransform: 'uppercase'
    },
    capitals10B: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.8px',
      lineHeight: 1.6,
      textTransform: 'uppercase'
    },
    capitals12: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.96px',
      lineHeight: 1.33333,
      textTransform: 'uppercase'
    },
    capitals12B: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.96px',
      lineHeight: 1.33333,
      textTransform: 'uppercase'
    },
    h1: {
      fontSize: 40,
      fontWeight: 350,
      letterSpacing: '-1.2px',
      lineHeight: 1
    },
    h2: {
      fontSize: 32,
      fontWeight: 350,
      letterSpacing: '-0.96px',
      lineHeight: 1
    },
    h3: {
      fontSize: 24,
      fontWeight: 350,
      letterSpacing: '-0.72px',
      lineHeight: 1.33333
    },
    h4: {
      fontSize: 20,
      fontWeight: 350,
      letterSpacing: '-0.6px',
      lineHeight: 1.2
    },
    label10: {
      fontSize: 10,
      lineHeight: 1.6
    },
    label10B: {
      fontSize: 10,
      fontWeight: 600,
      lineHeight: 1.6
    },
    label12: {
      fontSize: 12,
      lineHeight: 1.33333
    },
    label12B: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.33333
    },
    label14: {
      fontSize: 14,
      lineHeight: 1.14286
    },
    label14B: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.14286
    }
  })
})

theme = createTheme(theme, {
  palette: {
    primary: theme.palette.blue,
    secondary: { ...theme.palette.grey, main: theme.palette.grey[400] }
  }
})

theme = createTheme({
  ...theme,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          height: '100%'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body12: 'p',
          body14: 'p',
          body14B: 'p',
          body16: 'p',
          body16B: 'p',
          body18: 'p',
          body18B: 'p',
          capitals10: 'p',
          capitals10B: 'p',
          capitals12: 'p',
          capitals12B: 'p',
          label10: 'p',
          label10B: 'p',
          label12: 'p',
          label12B: 'p',
          label14: 'p',
          label14B: 'p'
        }
      }
    }
  }
})

export { theme }
