import { dataSite } from '@/data';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = dataSite.references;

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const { rating, description, name } = testimonials[current];

  const url = dataSite.services[2].image;
  return (
    <section
      id='testimonials'
      className='relative bg-cover bg-center text-white py-24 px-8'
      style={{
        backgroundImage: `url(${url})`, // Replace with your image path
      }}
    >
      <div className='max-w-3xl mx-auto text-center'>
        <p className='text-xl md:text-2xl font-semibold mb-6'>
          &quot;{description}&quot;
        </p>
        <div className='flex items-center justify-center mt-6'>
          <div className='text-left'>
            <p className='font-semibold'>{name}</p>
          </div>
        </div>
      </div>

      <div className='absolute right-8 bottom-8 flex gap-4'>
        <button
          onClick={prev}
          className='w-12 h-12 flex items-center justify-center bg-white/30 rounded-full hover:bg-white/50'
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className='w-12 h-12 flex items-center justify-center bg-white/30 rounded-full hover:bg-white/50'
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
