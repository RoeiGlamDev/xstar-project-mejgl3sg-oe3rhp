const BRAND_NAME = "FashionTV"; // The name of our luxury fashion brand
const PRIMARY_COLOR = "#FFC0CB"; // Pink color, representing elegance and luxury
const SECONDARY_COLOR = "#FFFFFF"; // White color, representing purity and sophistication

// FashionTV configuration constants
const CONFIG = {
    brandName: BRAND_NAME,
    themeColors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
    },
    industry: "Fashion",
    style: "Luxury",
    slogan: "Elevate Your Beauty with FashionTV",
    welcomeMessage: "Welcome to FashionTV, where luxury and beauty meet.",
}
// Defining types and interfaces for FashionTV
interface FashionTVProduct {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    category: string
}

interface FashionTVOrder {
    orderId: number
    products: FashionTVProduct[]
    totalAmount: number
    orderDate: Date
    customerName: string
}

/
 * Gets a formatted welcome message for the website.
 * @returns {string} - The formatted welcome message.
 */
function getWelcomeMessage(): string {
    return ${CONFIG.welcomeMessage} Discover our exquisite range of luxury cosmetics.
}

/
 * Function to calculate the total amount for an order.
 * @param {FashionTVOrder} order - The order object containing product details.
 * @returns {number} - The total amount for the order.
 */
function calculateOrderTotal(order: FashionTVOrder): number {
    return order.products.reduce((total, product) => total + product.price, 0)
}

// Exporting constants and functions for use in other parts of the application
export { CONFIG, getWelcomeMessage, calculateOrderTotal, FashionTVProduct, FashionTVOrder };