import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { TopBar } from '../index'

describe('TopBart', () => {
  const view = () => render(<TopBar />)

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders snapshot', () => {
    const { asFragment } = view()

    expect(asFragment()).toMatchSnapshot()
  })
})
