'use client';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';

const products = dataSite.services;
export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const { title, description, image } = products[current];

  return (
    <section
      id='services'
      className='relative bg-teal-900 text-white py-16 flex flex-col items-center overflow-hidden'
    >
      <h2 className='text-sm uppercase tracking-widest mb-4'>Our Services</h2>
      <h1 className='text-4xl font-semibold mb-6 text-center'>
        We are specialized in computer and IT consulting
      </h1>

      <div className='relative w-full max-w-4xl flex justify-center items-center'>
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className='absolute left-4 bg-white text-teal-900 rounded-full p-2 shadow hover:bg-gray-200'
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Product Image */}
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className='rounded-lg'
        />

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className='absolute right-4 bg-white text-teal-900 rounded-full p-2 shadow hover:bg-gray-200'
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      <div className='mt-8 text-center px-4 max-w-2xl'>
        <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-300'>{description}</p>
      </div>
    </section>
  );
}
