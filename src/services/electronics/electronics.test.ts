import * as SUT from '.'
import { mockProducts } from '../../../jest/__mocks__/mockProducts'
import { Product } from '../../types/product'

describe('fetchElectronics', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should fetch and return products on a successful response', async () => {
    const products: Product[] = mockProducts

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(products)
      } as Response)
    )

    const result = await SUT.fetchElectronics()
    expect(result).toEqual(products)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://fakestoreapi.com/products/category/electronics'
    )
  })

  it('should throw an error on a failed response', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false
      } as Response)
    )

    await expect(SUT.fetchElectronics()).rejects.toThrow(
      'Failed to fetch products. Please try to reload the page.'
    )
  })
})
