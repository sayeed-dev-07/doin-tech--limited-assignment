import Navbar from '@/components/shared/Navbar';
import React from 'react';
import CourseSearchSection from '../_components/CourseSearchSection';
import Courses from '../_components/Courses';
import Footer from '@/sections/Footer';

const page = () => {
    return (
        <div className='bg-foreground'>
            <Navbar />
            <CourseSearchSection />
            <Courses />
            <Footer />
        </div>
    );
};

export default page;