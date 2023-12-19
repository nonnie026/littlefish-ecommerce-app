import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Loader } from '../index'

describe('Loader', () => {
  const view = () => render(<Loader />)

  it('renders snapshot', () => {
    const { asFragment } = view()

    expect(asFragment()).toMatchSnapshot()
  })
})
