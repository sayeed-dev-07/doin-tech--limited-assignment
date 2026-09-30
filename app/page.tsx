import CourseGrid from '@/sections/CourseGrid';
import DiscoverSection from '@/sections/DiscoverSection';
import Hero from '@/sections/Hero';
import HeroBottom from '@/sections/HeroBottom';
import ProfessionalPathSection from '@/sections/ProfessionalPathSection';
import Navbar from '@/components/shared/Navbar';

import React from 'react';
import CreatorSection from '@/sections/CreatorSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import Footer from '@/sections/Footer';

const page = () => {
  return (
    <div className='min-h-screen bg-foreground'>
      <Navbar />
      <Hero />
      <HeroBottom />
      <DiscoverSection />
      <CourseGrid />
      <ProfessionalPathSection />
      <CreatorSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default page;