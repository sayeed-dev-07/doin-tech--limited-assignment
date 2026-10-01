'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Check } from 'lucide-react';
import type { CourseAboutProps } from '@/types';

export default function CourseAbout({ course }: CourseAboutProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // gsap hover handlers
    const handleItemEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { x: 8, duration: 0.3, ease: 'power2.out' });
    });

    const handleItemLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { x: 0, duration: 0.3, ease: 'power2.out' });
    });

    const handleImageEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)', duration: 0.4, ease: 'power2.out' });
    });

    const handleImageLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1, boxShadow: 'none', duration: 0.4, ease: 'power2.out' });
    });

    return (
        <div ref={containerRef} className="flex flex-col items-start gap-[40px] w-full max-w-[725px]">

            {/* description section */}
            <div className="flex flex-col gap-6 w-full">
                <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background">
                    Description
                </h2>
                <div className="flex flex-col gap-4">
                    {course.aboutData.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            {/* sneak peak section */}
            <div className="flex flex-col gap-6 w-full">
                <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background">
                    Sneak Peak
                </h2>
                <div className="flex flex-row flex-wrap lg:flex-nowrap justify-start items-start gap-[20px] sm:gap-[40px] w-full">
                    {course.aboutData.sneakPeakImages.map((img) => (
                        <div
                            key={img.id}
                            onMouseEnter={handleImageEnter}
                            onMouseLeave={handleImageLeave}
                            className="w-[167px] h-[125px] rounded-[16px] bg-[#D9D9D9] relative overflow-hidden shrink-0 cursor-pointer"
                        >
                            <Image
                                src={img.imgSrc}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* key points section */}
            <div className="flex flex-col gap-[24px] w-full">
                <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background">
                    Key Points
                </h2>
                <div className="flex flex-col items-start gap-[12px]">
                    {course.aboutData.keyPoints.map((point, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={handleItemEnter}
                            onMouseLeave={handleItemLeave}
                            className="flex flex-row items-center gap-[8px] cursor-pointer"
                        >
                            <div className="w-[24px] h-[24px] rounded-full bg-[#003BE2] flex items-center justify-center shrink-0">
                                <Check size={14} className="text-foreground" strokeWidth={3} />
                            </div>
                            <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                                {point}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
