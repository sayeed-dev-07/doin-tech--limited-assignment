import React from 'react';
import CourseFilters from './CourseFilters';
import { courses } from '@/public/data/mockData';
import CourseCard from '@/components/DiscoverMini/CourseCard';
import Pagination from './Pagination';

const Courses = () => {
    return (
        <div className='pb-10'>
            <CourseFilters />
            <div className='grid grid-cols-1 w-full max-w-[1200px] items-center justify-center md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mx-auto px-4 pb-20 sm:px-6'>
                {
                    courses.concat(courses).map((item, idx) => {
                        return <div key={idx}>
                            <CourseCard course={item} />
                        </div>
                    })
                }
            </div>
            <Pagination />
        </div>
    );
};

export default Courses;