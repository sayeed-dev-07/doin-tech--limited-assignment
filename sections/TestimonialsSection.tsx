'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonialsData } from '@/public/data/mockData';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);


export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from('.testi-header > *', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
        });

        gsap.from('.testimonial-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: '.testi-cards-container',
                start: 'top 85%',
            },
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative isolate w-full overflow-hidden bg-[#FAFAFA] px-4 py-16 sm:px-6 sm:py-24"
        >
            {/* Background Glows Container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Left Blue Glow */}
                <div className="absolute top-[20%] -left-[15%] w-[60%] md:w-[40%] max-w-[800px] -translate-y-1/2">
                    <Image
                        alt="Background glow left"
                        src={'/images/community/bg1.svg'}
                        width={800}
                        height={800}
                        className="w-full h-auto object-contain opacity-80"
                    />
                </div>

                {/* Top Right Green Glow */}
                <div className="absolute -bottom-[20%] -left-[15%] w-[70%] md:w-[50%] max-w-[1000px]">
                    <Image
                        alt="Background glow top right"
                        src={'/images/community/bg2.svg'}
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-contain opacity-80"
                    />
                </div>

                {/* Mid Right Green Glow */}
                <div className="absolute top-[20%] right-[-5%] w-[50%] md:w-[30%] max-w-[600px]">
                    <Image
                        alt="Background glow mid right"
                        src={'/images/community/bg3.svg'}
                        width={600}
                        height={600}
                        className="w-full h-auto object-contain opacity-80"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-12 sm:gap-[72px]">

                {/* Header Row */}
                <div className="testi-header flex flex-col lg:flex-row items-end gap-10 lg:gap-[43px] w-full">
                    <h2 className="w-full flex-1 font-poppins text-3xl font-semibold leading-[1.2] tracking-tight text-background sm:text-[44px] lg:max-w-[577px]">
                        Discover What Our Community Is Saying
                    </h2>
                    <p className="w-full flex-1 text-base leading-[1.6] text-[#4F4F4F] sm:text-[18px] lg:max-w-[580px]">
                        At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="testi-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[41px]">
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} data={testimonial} />
                    ))}
                </div>

            </div>
        </section>
    );
}
