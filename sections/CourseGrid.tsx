'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CourseCard from '../components/DiscoverMini/CourseCard';
import { courses, logoData } from '@/public/data/mockData';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);


export default function CourseGrid() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.course-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',

            },
        });
    }, { scope: containerRef });

    return (
        <section className="w-full bg-foreground px-4 py-12 sm:py-16 md:px-6">
            <div className="flex items-center justify-center w-full">
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 w-full max-w-[1200px] items-center justify-center md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
                >
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
            <div className='max-w-[1200px] mx-auto'>
                <div className='my-12 flex flex-col items-center justify-center gap-4 sm:my-16'>
                    <p className='font-poppins text-3xl font-semibold text-center text-[#040819] sm:text-[36px]'>Explore Diverse Learning Paths at Bytespace</p>
                    <p className='max-w-[920px] text-center text-base text-[#82868E] sm:text-[18px]'>
                        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                    </p>
                </div>
                {/* logo section  */}
                <div className='flex flex-wrap gap-[10px] sm:gap-[20px] items-center justify-center '>
                    {
                        logoData.map((logo) => (
                            <div className='flex w-[140px] aspect-square flex-col items-center justify-center rounded-[20px] border border-[#CED0D3] sm:w-[167px] sm:rounded-[24px]' key={`L${logo.id}`}>
                                <Image src={logo.link} alt={logo.alt} className='inline-block mx-4 my-2' width={60} height={60} />
                                <p className='text-[16px] font-medium text-[#242528] sm:text-[20px]'>
                                    {logo.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
