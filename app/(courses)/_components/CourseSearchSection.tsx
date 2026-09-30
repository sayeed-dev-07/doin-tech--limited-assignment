'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Search, ChevronDown } from 'lucide-react';

export default function CourseSearchSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { contextSafe } = useGSAP({ scope: sectionRef });

    useGSAP(() => {
        gsap.fromTo(
            '.search-animate',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.1,
            }
        );
    }, { scope: sectionRef });

    // GSAP Hover Handlers for the Input Field
    const handleInputEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            y: -2,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    const handleInputLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            y: 0,
            boxShadow: '0 0px 0px rgba(0, 0, 0, 0)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });



    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[360px] bg-[#003BE2] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
            style={{
                backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
        `,
                backgroundSize: '120px 120px',
                backgroundPosition: 'center top',
            }}
        >
            <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-[624px]">
                <h1 className="search-animate opacity-0 font-poppins font-semibold text-3xl md:text-[36px] leading-[1.2] tracking-tight text-[#F5F5F6] text-center">
                    Find Your Next Course
                </h1>


                <div className="search-animate opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">


                    <div
                        onMouseEnter={handleInputEnter}
                        onMouseLeave={handleInputLeave}
                        className="flex flex-row items-center bg-white rounded-full px-6 py-3 w-full sm:w-[461px] h-[52px]"
                    >
                        <Search className="text-[#82868E] shrink-0" size={24} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-transparent outline-none ml-3 text-[18px] text-[#242528] placeholder:text-[#82868E]"
                        />
                    </div>
                    <button
                        className="flex cursor-pointer flex-row justify-center items-center bg-[#D4FB20] rounded-full px-6 py-3 gap-2 h-[48px] shrink-0 w-full sm:w-auto"
                    >
                        <span className="font-medium text-[18px] text-[#242528]">Courses</span>
                        <ChevronDown className="text-[#242528]" size={24} />
                    </button>

                </div>
            </div>
        </section>
    );
}