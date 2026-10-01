/* eslint-disable react-hooks/refs */
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Star, BarChart, BookOpen, Clock, MessageCircle } from 'lucide-react';
import { CourseCardProps } from '@/types';

export default function CourseCard({ course }: CourseCardProps) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP({ scope: cardRef });

    // GSAP Hover Handlers for Cards
    const handleMouseEnter = contextSafe(() => {
        gsap.to(cardRef.current, {
            y: -8,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            duration: 0.4,
            ease: 'power3.out',
        });
        // Animate the image wrapper instead of the Next.js Image component directly
        gsap.to(imageWrapperRef.current, {
            scale: 1.08,
            duration: 0.4,
            ease: 'power3.out',
        });
    });

    const handleMouseLeave = contextSafe(() => {
        gsap.to(cardRef.current, {
            y: 0,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            duration: 0.4,
            ease: 'power3.out',
        });
        gsap.to(imageWrapperRef.current, {
            scale: 1,
            duration: 0.4,
            ease: 'power3.out',
        });
    });

    return (
        <Link
            href={`/courses/${course.id}`}
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="course-card  border border-[#CED0D3] w-full max-w-[550px] rounded-3xl p-4 bg-foreground shadow-sm flex flex-col gap-4"
        >
            {/* Thumbnail Area */}
            <div className="relative w-full h-[220px] rounded-[12px] overflow-hidden bg-foreground">
                {/* Wrapper for GSAP scaling */}
                <div ref={imageWrapperRef} className="relative w-full h-full">
                    <Image
                        src={course.imgSrc}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                {/* Floating Stat Pills */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center flex-wrap justify-start gap-[12px]">
                    <div className="flex items-center gap-1 bg-[#F6F6F699]  px-2.5 py-1.5 rounded-full text-[12px] backdrop-blur-sm text-[#4F4F4F]">
                        {course.lessons} lessons
                    </div>
                    <div className="flex items-center gap-1 bg-[#F6F6F699]  px-2.5 py-1.5 rounded-full text-[12px] text-[#4F4F4F] backdrop-blur-sm">

                        {course.duration}
                    </div>
                    <div className="flex items-center gap-1 bg-[#F6F6F699]  px-2.5 py-1.5 rounded-full text-[12px] text-[#4F4F4F] backdrop-blur-sm">

                        {course.comments} Comments
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col gap-1 px-1">
                <div className="flex justify-between items-start">
                    <h3 className="font-poppins font-bold text-background text-lg leading-tight truncate pr-4">
                        {course.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-800 shrink-0">
                        {course.rating}
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
                <p className="text-[13px] text-gray-400">by {course.author}</p>
            </div>

            {/* Footer Area */}
            <div className="mt-auto flex items-center gap-[12px] px-1 pt-2">
                <div className="flex items-center rounded-[24px] px-[12px] py-[6px] bg-[#F5F5F6] gap-1 text-xs text-[#4B4C53]">
                    <BarChart size={14} />
                    {course.level}
                </div>

                <Image
                    className="rounded-full border-2 border-foreground relative z-0 object-cover"
                    src={`/images/course/smallLogos.png`}
                    alt="Student avatar"
                    width={128}
                    height={32}
                />
            </div>

            {/* Price */}
            <div className="px-1 pt-2 pb-1">
                <span className="text-[#003BE2] font-semibold text-[20px]">${course.price}</span>
                <span className="text-[#4F4F4F]  text-xs ml-1">/course</span>
            </div>
        </Link>
    );
}
