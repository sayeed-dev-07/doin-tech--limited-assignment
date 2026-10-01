'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Video } from 'lucide-react';
import type { CourseLessonsProps } from '@/types';

export default function CourseLessons({ course }: CourseLessonsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // gsap hover handlers
    const handleModuleEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { x: 8, backgroundColor: '#F9F9F9', borderRadius: '16px', duration: 0.3, ease: 'power2.out' });
    });

    const handleModuleLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { x: 0, backgroundColor: 'transparent', duration: 0.3, ease: 'power2.out' });
    });

    return (
        <div ref={containerRef} className="flex flex-col items-start gap-[24px] w-full max-w-[723px]">

            <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background">
                Explore the Modules
            </h2>

            <p className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                {course.lessonsData.introText}
            </p>

            <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background mt-4">
                Lesson List
            </h2>

            {/* module list[cite: 19, 20] */}
            <div className="flex flex-col gap-2 w-full">
                {course.lessonsData.modules.map((module) => (
                    <div
                        key={module.id}
                        onMouseEnter={handleModuleEnter}
                        onMouseLeave={handleModuleLeave}
                        className="flex flex-row items-center flex-wrap sm:flex-nowrap gap-[13px] w-full p-2 cursor-pointer"
                    >
                        <div className="flex justify-center items-center w-[72px] h-[72px] bg-[#D4FB20] rounded-[24px] shrink-0">
                            <Video size={32} className="text-background" />
                        </div>
                        <div className="flex flex-col items-start gap-[4px]">
                            <span className="font-satoshi font-medium text-[16px] leading-[1.2] text-background">
                                {module.title}
                            </span>
                            <p className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                                {module.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background mt-4">
                Lesson Content
            </h2>
            <p className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                {course.lessonsData.contentDescription}
            </p>

            <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background mt-4">
                Lesson Progress Tracking
            </h2>
            <p className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
            </p>

            {/* progress box[cite: 19, 20] */}
            <div className="flex flex-col items-start p-[16px] gap-[8px] w-full bg-foreground border border-[#CED0D3] rounded-[16px] backdrop-blur-[10px]">
                <span className="font-satoshi font-medium text-[14px] leading-[1.2] text-background">
                    Learning Progress
                </span>
                <span className="font-poppins font-semibold text-[36px] leading-[1.2] tracking-[-0.01em] text-background">
                    {course.lessonsData.progressPercentage}%
                </span>
                <div className="relative w-full h-[8px] bg-[#E5E6E8] rounded-[24px] mt-1 overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-[#D4FB20] rounded-[24px]"
                        style={{ width: `${course.lessonsData.progressPercentage}%` }}
                    />
                </div>
            </div>

        </div>
    );
}
