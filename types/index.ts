import { Color } from './colors'; // Assuming colors are defined in a separate file

/
 * Represents a cosmetic product in the FashionTV luxury cosmetics line.
 * @interface CosmeticProduct
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - The name of the cosmetic product.
 * @property {string} description - A brief description highlighting the luxury features of the product.
 * @property {number} price - The retail price of the product.
 * @property {Color} primaryColor - The primary color associated with the product, which should align with FashionTV branding.
 * @property {boolean} isLimitedEdition - Indicates if the product is a limited edition item.
 */
export interface CosmeticProduct {
  id: string
  name: string
  description: string
  price: number
  primaryColor: Color
  isLimitedEdition: boolean
}

/
 * Represents a category of cosmetic products.
 * @interface Category
 * @property {string} id - Unique identifier for the category.
 * @property {string} name - The name of the category (e.g., "Lipsticks", "Foundations").
 * @property {CosmeticProduct[]} products - List of products under this category.
 */
export interface Category {
  id: string
  name: string
  products: CosmeticProduct[]
}

/
 * Represents a customer order for FashionTV products.
 * @interface Order
 * @property {string} orderId - Unique identifier for the order.
 * @property {string} customerId - Identifier for the customer placing the order.
 * @property {CosmeticProduct[]} products - List of products included in the order.
 * @property {number} totalAmount - Total cost of the order.
 * @property {Date} orderDate - The date when the order was placed.
 */
export interface Order {
  orderId: string
  customerId: string
  products: CosmeticProduct[]
  totalAmount: number
  orderDate: Date
}

/
 * Represents a customer in the FashionTV luxury cosmetics ecosystem.
 * @interface Customer
 * @property {string} id - Unique identifier for the customer.
 * @property {string} name - The name of the customer.
 * @property {string} email - Contact email of the customer.
 * @property {string} phone - Contact phone number of the customer.
 * @property {string} shippingAddress - The shipping address of the customer.
 */
export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  shippingAddress: string
}

/
 * Represents the overall FashionTV application state containing various entities.
 * @interface FashionTVState
 * @property {Category[]} categories - List of product categories available.
 * @property {CosmeticProduct[]} allProducts - List of all available products.
 * @property {Customer | null} currentCustomer - Currently logged-in customer, if any.
 * @property {Order[]} orderHistory - Historical orders placed by the customer.
 */
export interface FashionTVState {
  categories: Category[]
  allProducts: CosmeticProduct[]
  currentCustomer: Customer | null
  orderHistory: Order[]
}