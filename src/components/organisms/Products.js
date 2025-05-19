import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

const eventsData = dataSite.products;

export default function ProductsSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='max-w-7xl mx-auto px-6 py-16'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h4 className='text-blue-600 uppercase tracking-wide mb-2'>Shop</h4>
          <h2 className='text-4xl font-bold'>Our Products</h2>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={handlePrev}
            className='border border-gray-400 rounded-full p-2 hover:bg-gray-100'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className='border border-gray-400 rounded-full p-2 hover:bg-gray-100'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {eventsData.slice(index, index + 3).map((event, idx) => {
          const isInCart = validateProductInCart(event.id);
          const handleAddToCart = () => {
            handleAddOrRemoveProduct(event.id);
          };
          return (
            <div
              id='pricing'
              key={idx}
              className='border rounded-lg overflow-hidden shadow-sm'
            >
              <img
                src={event.image}
                alt={event.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <div className='flex items-center mb-2 text-yellow-400'>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
                <h3 className='font-semibold text-lg mb-1'>{event.name}</h3>
                <div className='flex items-center text-sm text-white mb-2'>
                  $ {event.price}
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`${
                    isInCart ? 'text-red-500' : 'text-yellow-400'
                  } border border-yellow-400 rounded-full px-4 py-2 transition duration-300`}
                  //   className='text-white flex items-center gap-1 text-sm hover:underline'
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}{' '}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
