interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Luxe Formulations',
    description: 'Crafted with the finest ingredients to elevate your beauty ritual.',
  },
  {
    title: 'Exquisite Packaging',
    description: 'Our cosmetic line comes in elegantly designed packages embodying luxury.',
  },
  {
    title: 'Cruelty-Free & Vegan',
    description: 'Ethically made cosmetics that care for you and the planet.',
  },
]
const Page: React.FC = () => {
  return (<>
<div className="bg-white text-pink-600 min-h-screen">
      <header className="flex justify-between items-center p-6 shadow-lg">
        <h1 className="text-4xl font-bold">FashionTV</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-pink-700 transition duration-200">Home</li>
            <li className="hover:text-pink-700 transition duration-200">About</li>
            <li className="hover:text-pink-700 transition duration-200">Shop</li>
            <li className="hover:text-pink-700 transition duration-200">Contact</li>
          </ul>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-white">
        <div
          className="text-6xl font-extrabold text-center"
         }
         }
         }

          Elevate Your Beauty with FashionTV
        </div>
      </section>

      <section className="py-16 flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
             }

              <h3 className="text-3xl font-semibold text-pink-600">{feature.title}</h3>
              <p className="mt-4 text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-pink-600 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} FashionTV. All rights reserved.</p>
      </footer>
    </div>
</>)
}
export default Page
)
