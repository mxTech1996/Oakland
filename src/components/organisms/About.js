import { dataSite } from '@/data';
import Image from 'next/image';

export default function AboutConsulting() {
  return (
    <section
      id='about'
      className='max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'
    >
      {/* Left Side Image */}
      <div className='space-y-4'>
        <Image
          src={dataSite.image_hero2}
          alt='Consulting Office'
          width={600}
          height={800}
          className='rounded-xl object-cover'
        />
      </div>

      {/* Right Side Text */}
      <div>
        <p className='text-sm uppercase tracking-wide text-white mb-2'>
          Our Story
        </p>
        <h2 className='text-4xl font-semibold mb-4'>
          Empowering Your Business with Computer Consulting Services
        </h2>
        <p className='text-white mb-6'>
          We provide expert guidance in IT infrastructure, cloud solutions,
          cybersecurity, and digital transformation. Our team is dedicated to
          helping businesses optimize their technology strategy for sustained
          growth and innovation.
        </p>
        {/* <button className='border border-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition'>
          About Us
        </button> */}
      </div>
    </section>
  );
}
