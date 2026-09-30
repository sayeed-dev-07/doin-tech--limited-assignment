import CourseGrid from '@/components/CourseGrid';
import DiscoverSection from '@/components/DiscoverSection';
import Hero from '@/components/Hero';
import HeroBottom from '@/components/HeroBottom';
import ProfessionalPathSection from '@/components/ProfessionalPathSection';
import Navbar from '@/components/shared/Navbar';

import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen bg-[#8a48488a]'>
      <Navbar />
      <Hero />
      <HeroBottom />
      <DiscoverSection />
      <CourseGrid />
      <ProfessionalPathSection />
    </div>
  );
};

export default page;