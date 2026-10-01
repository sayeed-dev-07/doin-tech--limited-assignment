'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FileText, Video, Award, Phone } from 'lucide-react';
import type { CourseSidebarProps } from '@/types';
import Link from 'next/link';

export default function CourseSidebar({ course, onShowLessons }: CourseSidebarProps) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: sidebarRef });

    // gsap hover handlers
    const handleBtnEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.1)', duration: 0.3, ease: 'power2.out' });
    });

    const handleBtnLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1, boxShadow: 'none', duration: 0.3, ease: 'power2.out' });
    });

    const handleLessonEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { x: 4, color: '#003BE2', duration: 0.2, ease: 'power1.out' });
    });

    const handleLessonLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { x: 0, color: '#242528', duration: 0.2, ease: 'power1.out' });
    });

    return (
        <div
            ref={sidebarRef}
            className="course-animate flex flex-col items-start p-4 sm:p-[40px] gap-[24px] w-full xl:w-[412px] bg-[#FFFFFF] border border-[#CED0D3] rounded-[24px] sticky top-[120px] shadow-lg z-20"
        >

            {/* lessons preview section */}
            <div className="flex flex-col items-start gap-[24px] w-full">
                <h3 className="font-poppins font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#242528]">
                    {course.sidebar.lessonsSummary}
                </h3>

                <div className="flex flex-col items-start gap-[12px] w-full">
                    {course.sidebar.previewLessons.map((lesson, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={handleLessonEnter}
                            onMouseLeave={handleLessonLeave}
                            onClick={onShowLessons}
                            className="flex flex-row justify-between items-start w-full cursor-pointer text-[#242528]"
                        >
                            <div className="flex flex-row items-start gap-[8px]">
                                <span className="font-satoshi font-medium text-[16px] leading-[120%]">
                                    {lesson.num}
                                </span>
                                <span className="font-satoshi font-medium text-[16px] leading-[120%] max-w-[190px]">
                                    {lesson.title}
                                </span>
                            </div>
                            <span className="font-satoshi text-[16px] leading-[160%] text-[#003BE2]">
                                {lesson.duration}
                            </span>
                        </div>
                    ))}
                    <p
                        onClick={onShowLessons}
                        onMouseEnter={handleLessonEnter}
                        onMouseLeave={handleLessonLeave}
                        className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53] cursor-pointer mt-2"
                    >
                        {course.sidebar.moreVideosCount} more videos
                    </p>
                </div>
            </div>

            {/* enroll section */}
            <div className="flex flex-col items-start gap-[24px] w-full">
                <p className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                    {course.sidebar.ctaMessage}
                </p>

                <div className="flex flex-row items-end w-full">
                    <span className="font-poppins font-semibold text-[36px] leading-[120%] tracking-[-0.01em] text-[#003BE2]">
                        ${course.price}
                    </span>
                    <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53] mb-2 ml-1">
                        {course.billingPeriod}
                    </span>
                </div>

                <button
                    onMouseEnter={handleBtnEnter}
                    onMouseLeave={handleBtnLeave}
                    className="flex flex-row justify-center items-center px-[24px] py-[12px] w-full h-[46px] bg-[#D4FB20] rounded-[24px] cursor-pointer"
                >
                    <span className="font-satoshi font-medium text-[18px] leading-[120%] text-[#242528]">
                        Enroll Now
                    </span>
                </button>
            </div>

            {/* course includes */}
            <div className="flex flex-col items-start gap-[12px] w-full">
                <h4 className="font-poppins font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#242528] mb-1">
                    This course include
                </h4>

                <div className="flex flex-row items-center gap-[8px] w-full">
                    <FileText size={24} className="text-[#003BE2] shrink-0" />
                    <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">Learning Resources</span>
                </div>
                <div className="flex flex-row items-center gap-[8px] w-full">
                    <Video size={24} className="text-[#003BE2] shrink-0" />
                    <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">Quality Lesson Videos</span>
                </div>
                <div className="flex flex-row items-center gap-[8px] w-full">
                    <Award size={24} className="text-[#003BE2] shrink-0" />
                    <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">Certificate of Completion</span>
                </div>
                <div className="flex flex-row items-center gap-[8px] w-full">
                    <Phone size={24} className="text-[#003BE2] shrink-0" />
                    <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">Private Consultation</span>
                </div>
            </div>

            {/* divider */}
            <div className="w-full h-px bg-[#D1D1D1]"></div>

            {/* instructor section */}
            <div className="flex flex-col items-start gap-[24px] w-full">
                <div className="flex flex-row items-center gap-[12px] w-full cursor-pointer">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#D9D9D9] relative overflow-hidden shrink-0">
                        <Image src={course.sidebar.instructor.avatar || "https://i.pravatar.cc/100?img=12"} alt={course.sidebar.instructor.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <span className="font-satoshi font-medium text-[18px] leading-[120%] text-[#242528]">
                            {course.sidebar.instructor.name}
                        </span>
                        <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                            {course.sidebar.instructor.role}
                        </span>
                    </div>
                </div>

                <p className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                    {course.sidebar.instructor.bio}
                </p>

                <Link href={`/creators/${course.sidebar.instructor.creatorId}`}
                    onMouseEnter={handleBtnEnter}
                    onMouseLeave={handleBtnLeave}
                    className="flex flex-row justify-center items-center px-[16px] py-[8px] h-[35px] border border-[#CED0D3] rounded-[24px] cursor-pointer"
                >
                    <span className="font-satoshi font-medium text-[16px] leading-[120%] text-[#4B4C53]">
                        See Full Profile
                    </span>
                </Link>
            </div>

        </div>
    );
}
