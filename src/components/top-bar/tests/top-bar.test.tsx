import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { theme } from '../../../utils/mui/theme'
import { TopBar } from '../index'

describe('TopBart', () => {
  const view = () =>
    render(
      <ThemeProvider theme={theme}>
        <TopBar />
      </ThemeProvider>
    )

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders snapshot', () => {
    const { asFragment } = view()

    expect(asFragment()).toMatchSnapshot()
  })
})
