import Hero from '@/components/Hero';
import HeroBottom from '@/components/HeroBottom';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen bg-[#8a48488a]'>
      <Navbar />
      <Hero />
      <HeroBottom/>
    </div>
  );
};

export default page;