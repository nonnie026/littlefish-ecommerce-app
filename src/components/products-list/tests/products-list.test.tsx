import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { mockProducts } from '../../../../jest/__mocks__/mockProducts'
import { ProductsList } from '../index'

describe('ProductsList', () => {
  const mockHandleAddToCart = jest.fn()

  it('renders correctly with products', () => {
    const { asFragment } = render(
      <ProductsList
        products={mockProducts}
        handleAddToCart={mockHandleAddToCart}
      />
    )

    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText('All Products')).toBeInTheDocument()
  })

  it('calls handleAddToCart when "Add To Cart" button is clicked', () => {
    render(
      <ProductsList
        products={mockProducts}
        handleAddToCart={mockHandleAddToCart}
      />
    )

    const firstProductAddButton = screen.getAllByText('Add To Cart')[0]
    fireEvent.click(firstProductAddButton)
    expect(mockHandleAddToCart).toHaveBeenCalledWith(mockProducts[0])
  })

  // Additional tests can be added as needed
})
