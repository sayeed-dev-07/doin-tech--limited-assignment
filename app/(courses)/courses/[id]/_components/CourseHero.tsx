'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Share2, BarChart, Star, Users } from 'lucide-react';
import type { CourseHeroProps } from '@/types';

export default function CourseHero({ course }: CourseHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // gsap hover handlers
    const handleTagEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });

    const handleTagLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });

    return (
        <div ref={containerRef} className="course-animate flex w-full max-w-[1283px] flex-col items-start gap-5 sm:gap-[24px]">

            {/* title and share section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-6">
                <div className="flex flex-col items-start gap-[8px]">
                    <h1 className="font-poppins text-3xl font-semibold capitalize leading-[120%] tracking-[-0.01em] text-[#F5F5F6] sm:text-[36px]">
                        {course.title}
                    </h1>
                    <p className="font-poppins text-base font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6] sm:text-[20px]">
                        {course.subtitle}
                    </p>
                </div>

                {/* share button */}
                <button
                    onMouseEnter={handleTagEnter}
                    onMouseLeave={handleTagLeave}
                    className="flex flex-row justify-center items-center px-[24px] py-[8px] gap-[8px] w-[122px] h-[40px] bg-[#D4FB20] rounded-[24px] cursor-pointer shrink-0"
                >
                    <Share2 size={24} className="text-[#242528]" />
                    <span className="font-satoshi font-medium text-[16px] leading-[150%] text-[#242528]">
                        Share
                    </span>
                </button>
            </div>

            {/* author */}
            <p className="font-satoshi text-base font-medium leading-[120%] text-[#F1F4FE] sm:text-[18px]">
                by <span className="text-[#D4FB20] cursor-pointer">{course.author}</span>
            </p>

            {/* tags container */}
            <div className="flex flex-row flex-wrap items-start gap-2 sm:gap-[16px]">
                <div
                    onMouseEnter={handleTagEnter}
                    onMouseLeave={handleTagLeave}
                    className="flex flex-row justify-center items-center px-[24px] py-[8px] gap-[8px] h-[40px] bg-[#FFFFFF] rounded-[24px] cursor-pointer"
                >
                    <BarChart size={24} className="text-[#003BE2]" />
                    <span className="font-satoshi font-medium text-[16px] leading-[120%] text-[#242528]">
                        {course.level}
                    </span>
                </div>

                <div
                    onMouseEnter={handleTagEnter}
                    onMouseLeave={handleTagLeave}
                    className="flex flex-row justify-center items-center px-[24px] py-[8px] gap-[8px] h-[40px] bg-[#FFFFFF] rounded-[24px] cursor-pointer"
                >
                    <Star size={24} className="text-[#003BE2] fill-transparent" />
                    <span className="font-satoshi font-medium text-[16px] leading-[120%] text-[#242528]">
                        {course.rating} ({course.reviewsCount} reviews)
                    </span>
                </div>

                <div
                    onMouseEnter={handleTagEnter}
                    onMouseLeave={handleTagLeave}
                    className="flex flex-row justify-center items-center px-[24px] py-[8px] gap-[8px] h-[40px] bg-[#FFFFFF] rounded-[24px] cursor-pointer"
                >
                    <Users size={24} className="text-[#003BE2]" />
                    <span className="font-satoshi font-medium text-[16px] leading-[120%] text-[#242528]">
                        {course.studentsCount} Students
                    </span>
                </div>
            </div>

        </div>
    );
}
