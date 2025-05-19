'use client';
// import shopping from react icons
import { FaShoppingCart } from 'react-icons/fa';

export default function StickyNavbar() {
  return (
    <header className='sticky top-4 z-50 flex justify-center '>
      <nav className='bg-[#1f2d2d] px-6 py-3 rounded-full border border-gray-700 flex items-center justify-between w-full max-w-7xl'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
            <span className='font-bold text-white'>B</span>
          </div>
          <span className='font-bold text-white'>Oukland</span>
        </div>

        {/* Navigation Links */}
        <ul className='flex items-center gap-6 text-white'>
          <li>
            <a href='#about' className='hover:underline'>
              About
            </a>
          </li>
          <li>
            <a href='#pricing' className='hover:underline'>
              Pricing
            </a>
          </li>

          <li>
            <a href='#testimonials' className='hover:underline'>
              Testimonials
            </a>
          </li>
          <li>
            <a href='#services' className='hover:underline'>
              Service
            </a>
          </li>
        </ul>

        {/* Cart & Contact Button */}
        <div className='flex items-center gap-4'>
          <button className='relative'>
            <FaShoppingCart className='text-white w-5 h-5' />
            <span className='absolute -top-2 -right-2 bg-white text-black rounded-full text-xs w-4 h-4 flex items-center justify-center'>
              0
            </span>
          </button>
          <button className='bg-[#004c5c] text-white px-5 py-2 rounded-full hover:bg-[#036b87] transition'>
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
}
