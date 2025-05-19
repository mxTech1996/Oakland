'use client';

import AboutConsulting from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import InfoSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import ProductsSection from '@/components/organisms/Products';
import Services from '@/components/organisms/Services';
import TestimonialCarousel from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main className='bg-[#1f2d2d] text-white '>
      <Navbar />
      <HeroSection />
      <Services />
      <AboutConsulting />
      <InfoSection />
      <ProductsSection />
      <TestimonialCarousel />
      <Footer />
    </main>
  );
}
