import { render } from '@testing-library/react'
import { BannerImage } from '../index'

describe('BannerImage', () => {
  it('renders correctly and matches snapshot', () => {
    const { asFragment } = render(<BannerImage />)

    expect(asFragment()).toMatchSnapshot()
  })
})
