'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // gsap hover handlers for chevron buttons
    const handleButtonEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            scale: 1.05,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    const handleButtonLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            boxShadow: '0 0px 0px rgba(0,0,0,0)',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    // gsap hover handlers for active page numbers
    const handleNumEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            y: -2,
            color: '#003BE2',
            duration: 0.2,
            ease: 'power2.out',
        });
    });

    const handleNumLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            y: 0,
            color: '#242528',
            duration: 0.2,
            ease: 'power2.out',
        });
    });

    const pages = [1, 2, 3, 4, 5];

    return (
        <div
            ref={containerRef}
            className="flex flex-row justify-center items-center gap-4 sm:gap-6 py-8 w-full"
        >
            {/* previous button */}
            <button
                onMouseEnter={handleButtonEnter}
                onMouseLeave={handleButtonLeave}
                className="flex justify-center items-center px-4 py-3 gap-1 w-[56px] h-[48px] bg-white border border-[#CED0D3] cursor-pointer rounded-[24px]"
            >
                <ChevronLeft className="text-[#4B4C53]" size={24} />
            </button>

            {/* page numbers */}
            <div className="flex flex-row items-center gap-4 sm:gap-6">
                {pages.map((num) => {
                    // styling based on the provided css where '1' is inactive/greyed out
                    const isInactive = num === 1;

                    // hide numbers greater than 3 on screens smaller than sm
                    const visibilityClass = num > 3 ? 'hidden sm:block' : 'block';

                    return (
                        <button
                            key={num}
                            onMouseEnter={(e) => !isInactive && handleNumEnter(e)}
                            onMouseLeave={(e) => !isInactive && handleNumLeave(e)}
                            className={`font-poppins font-semibold text-[20px] leading-[28px] tracking-[-0.01em] ${visibilityClass} ${isInactive ? 'text-[#CED0D3] cursor-default' : 'text-[#242528] cursor-pointer'
                                }`}
                        >
                            {num}
                        </button>
                    );
                })}
            </div>

            {/* next button */}
            <button
                onMouseEnter={handleButtonEnter}
                onMouseLeave={handleButtonLeave}
                className="flex justify-center items-center px-4 py-3 gap-1 w-[56px] cursor-pointer h-[48px] bg-white border border-[#CED0D3] rounded-[24px]"
            >
                <ChevronRight className="text-[#242528]" size={24} />
            </button>
        </div>
    );
}