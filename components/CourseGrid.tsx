'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CourseCard from './DiscoverMini/CourseCard';
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
        <section className="w-full bg-foreground py-16 px-6">
            <div className="flex items-center justify-center w-full">
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 w-full max-w-[1286px] items-center justify-center md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
                >
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
            <div className='max-w-[1286px] mx-auto'>
                <div className='flex flex-col items-center justify-center gap-4 my-16 '>
                    <p className='font-poppins text-[36px] text-[#040819] font-semibold text-center'>Explore Diverse Learning Paths at Bytespace</p>
                    <p className='max-w-[920px] text-center text-[#82868E] text-[18px]'>
                        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                    </p>
                </div>
                {/* logo section  */}
                <div className='flex flex-wrap gap-[20px] sm:gap-[40px] items-center justify-center '>
                    {
                        logoData.map((logo) => (
                            <div className='flex flex-col border border-[#CED0D3] rounded-[24px] w-[140px] sm:w-[167px] aspect-square items-center justify-center' key={`L${logo.id}`}>
                                <Image src={logo.link} alt={logo.alt} className='inline-block mx-4 my-2' width={60} height={60} />
                                <p className='text-[#242528] text-[20px] font-medium'>
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