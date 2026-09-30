'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { categories } from '@/public/data/mockData';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


export default function DiscoverSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // Entrance Animations
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } });


        tl.from('.animate-title', {
            y: 30,
            opacity: 0,
            duration: 0.8,
        })
            .from('.animate-desc', {
                y: 20,
                opacity: 0,
                duration: 0.8,
            }, '-=0.5')
            .from('.animate-tag', {
                scale: 0.8,
                opacity: 0,
                y: 10,
                duration: 0.4,
                stagger: 0.04,
                ease: 'back.out(1.5)',
            }, '-=0.4');
    });

    // GSAP Hover Handlers for Categories
    const handleMouseEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            scale: 1.08,
            y: -2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    const handleMouseLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            y: 0,
            boxShadow: '0 0px 0px rgba(0,0,0,0)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    return (
        <section
            ref={containerRef}
            className="flex flex-col items-center justify-center px-6 py-20 bg-foreground"
        >
            <div className="max-w-4xl font-poppins text-center mb-10">
                <h1 className="animate-title text-4xl md:text-5xl font-semibold text-background mb-4 tracking-tight leading-tight">
                    Discover Your Passion, <br className="hidden md:block" />
                    Build Your Skills
                </h1>

                <p className="animate-desc text-gray-500 text-[15px] md:text-base max-w-3xl mx-auto leading-relaxed">
                    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-[1086px]">
                {categories.map((category) => {
                    const isFeatured = category === 'Featured';

                    return (
                        <button
                            key={category}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`animate-tag px-[16px] py-[12px] cursor-pointer rounded-[24px] text-[16px] font-medium ${isFeatured
                                ? 'bg-[#D4FB20] text-[#242528] '
                                : 'bg-[#F5F5F6] text-[#4F4F4F]'
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}

                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="animate-tag px-5 py-2.5 rounded-full text-sm font-medium text-blue-600 bg-transparent"
                >
                    + More
                </button>
            </div>
        </section>
    );
}