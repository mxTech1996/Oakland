import { dataSite } from '@/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HeroSection() {
  const url = dataSite.image_hero;
  return (
    <section className='relative bg-black text-white min-h-[90vh] flex items-center justify-center'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-40'
        style={{ backgroundImage: `url(${url})` }} // Replace with your image path
      ></div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl w-full px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10'>
        {/* Text Section */}
        <div>
          <h1 className='text-5xl font-bold mb-6'>
            Find Your Trusted <br /> IT Consulting Partner
          </h1>
          <p className='text-lg mb-8 max-w-lg'>
            At Tech Consulting Experts, we deliver tailored IT strategies that
            exceed your business expectations with professional, scalable, and
            secure solutions.
          </p>
          <div className='flex gap-4'>
            <button className='bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600 transition'>
              Book a Consultation
            </button>
            <button className='border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition'>
              Discover Services
            </button>
          </div>
        </div>

        {/* Featured Services Slider */}
        <div className='flex flex-col items-start'>
          <h2 className='text-lg mb-4'>Our Popular IT Solutions</h2>
          <div className='flex items-center gap-4'>
            <div className='bg-white/10 p-4 rounded-lg max-w-xs'>
              <h3 className='font-semibold text-xl'>
                {dataSite.products[0].name}
              </h3>
              <p className='text-sm mt-2'>
                {dataSite.products[0].description.slice(0, 50)}...
              </p>
              <button className='text-yellow-400 mt-4 flex items-center gap-1 hover:underline'>
                Service Info <FaChevronRight size={12} />
              </button>
            </div>

            <div className='bg-white/10 p-4 rounded-lg max-w-xs'>
              <h3 className='font-semibold text-xl'>
                {dataSite.products[1].name}
              </h3>
              <p className='text-sm mt-2'>
                {dataSite.products[1].description.slice(0, 50)}...
              </p>
              <button
                onClick={() => {
                  window.location.href = '#services';
                }}
                className='text-yellow-400 mt-4 flex items-center gap-1 hover:underline'
              >
                Service Info <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
