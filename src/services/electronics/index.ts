// src/services/productService.ts
import { Product } from '../../types/product'

const API_URL = 'https://fakestoreapi.com/products/category/electronics'

export const fetchElectronics = async (): Promise<Product[]> => {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return response.json()
}
