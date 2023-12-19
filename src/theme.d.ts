import '@material-ui/core/styles'

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary']
    grey: Palette['primary']
  }

  interface PaletteOptions {
    blue?: PaletteOptions['primary']
    grey?: PaletteOptions['primary']
  }

  interface TypographyVariants {
    body18: React.CSSProperties
    body18B: React.CSSProperties
    body16: React.CSSProperties
    body16B: React.CSSProperties
    body14: React.CSSProperties
    body14B: React.CSSProperties
    body12: React.CSSProperties
    capitals12: React.CSSProperties
    capitals12B: React.CSSProperties
    capitals10: React.CSSProperties
    capitals10B: React.CSSProperties
    label14: React.CSSProperties
    label14B: React.CSSProperties
    label12: React.CSSProperties
    label12B: React.CSSProperties
    label10: React.CSSProperties
    label10B: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    body18?: React.CSSProperties
    body18B?: React.CSSProperties
    body16?: React.CSSProperties
    body16B?: React.CSSProperties
    body14?: React.CSSProperties
    body14B?: React.CSSProperties
    body12?: React.CSSProperties
    capitals12?: React.CSSProperties
    capitals12B?: React.CSSProperties
    capitals10?: React.CSSProperties
    capitals10B?: React.CSSProperties
    label14?: React.CSSProperties
    label14B?: React.CSSProperties
    label12?: React.CSSProperties
    label12B?: React.CSSProperties
    label10?: React.CSSProperties
    label10B?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body18: true
    body18B: true
    body16: true
    body16B: true
    body14: true
    body14B: true
    body12: true
    capitals12: true
    capitals12B: true
    capitals10: true
    capitals10B: true
    label14: true
    label14B: true
    label12: true
    label12B: true
    label10: true
    label10B: true
  }
}
