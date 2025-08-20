import { createElement } from 'react'
/
 * Utility functions for FashionTV application.
 * This file contains commonly used functions and type definitions specific to the FashionTV cosmetics website.
 */

type ClassName = string | string[]
/
 * Combines multiple class names into a single string.
 * @param classes An array or string of class names to be combined.
 * @returns A single string with all class names joined.
 */
export const cn = (...classes: ClassName[]): string => {
  return classes.filter(Boolean).join(' ')
}
/
 * Formatter for converting currency into a luxury format.
 * @param amount The numerical value to format.
 * @returns A formatted currency string with a luxury feel.
 */
export const formatCurrency = (amount: number): string => {
  return €${amount.toFixed(2).replace('.', ',')}
}
/
 * Interface representing a product in the FashionTV cosmetics line.
 */
export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  categories: string[]
}

/
 * Example function that returns sample products for FashionTV cosmetics.
 * @returns An array of Product objects representing luxury cosmetics items.
 */
export const getLuxuryCosmetics = (): Product[] => {
  return [
    {
      id: '1',
      name: 'Silk Radiance Foundation',
      description: 'A lightweight, luminous foundation that enhances your natural glow, perfect for that high-end look.',
      price: 49.99,
      imageUrl: '/images/products/silk-radiance-foundation.jpg',
      categories: ['Foundation', 'Makeup'],
    },
    {
      id: '2',
      name: 'Velvet Matte Lipstick',
      description: 'Experience the richness of our Velvet Matte collection, designed for a luxurious finish and long-lasting wear.',
      price: 29.99,
      imageUrl: '/images/products/velvet-matte-lipstick.jpg',
      categories: ['Lipstick', 'Makeup'],
    },
    {
      id: '3',
      name: 'Crystal Glow Highlighter',
      description: 'Elevate your look with our Crystal Glow Highlighter, crafted to give you a luminous, ethereal finish.',
      price: 35.00,
      imageUrl: '/images/products/crystal-glow-highlighter.jpg',
      categories: ['Highlighter', 'Makeup'],
    },
  ]
}
/
 * Example function demonstrating luxury packaging options for FashionTV.
 * @returns An array of strings representing luxury packaging themes.
 */
export const getLuxuryPackagingOptions = (): string[] => {
  return [
    'Rose Gold Embossed Box',
    'Premium matte finish with embossed logo',
    'Eco-friendly luxury wrapping options',
  ]
};