'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Play } from 'lucide-react';
import type { CourseDetailsProps, CourseTab } from '@/types';
import CourseHero from './CourseHero';
import CourseSidebar from './CourseSidebar';
import CourseAbout from './CourseAbout';
import CourseLessons from './CourseLessons';
import CourseReviews from './CourseReviews';
import Link from 'next/link';

export default function CourseDetails({ course }: CourseDetailsProps) {
    const [activeTab, setActiveTab] = useState<CourseTab>('About');
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    useGSAP(() => {
        // stagger the entrance of the main elements
        gsap.from('.course-animate', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.1
        });
    }, { scope: containerRef });

    // gsap hover handlers
    const handleTabEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
    });

    const handleTabLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: 'power2.out' });
    });

    const handleVideoEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to('.play-btn-inner', { scale: 1.1, backgroundColor: '#D4FB20', duration: 0.3, ease: 'power2.out' });
    });

    const handleVideoLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to('.play-btn-inner', { scale: 1, backgroundColor: '#F5F2FF', duration: 0.3, ease: 'power2.out' });
    });

    return (
        <main ref={containerRef} className="relative w-full min-h-screen bg-[#FFFFFF]">

            {/* background wrapper matched exactly to figma dimensions */}
            <div
                className="absolute top-0 left-0 w-full h-[700px] md:h-[957px] bg-[#003BE2] z-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.12) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
          `,
                    backgroundSize: '120px 120px',
                    backgroundPosition: 'center top',
                }}
            />

            {/* main content container constrained by exact padding and max-widths */}
            <div className="relative z-10 w-full pb-[80px] max-w-[1440px] mx-auto pt-[172px] px-4 2xl:px-[120px] ">

                {/* hero component strictly spanning top section */}
                <CourseHero course={course} />

                {/* layout grid matching exact left/right widths and gap */}
                <div className="flex flex-col 2xl:flex-row items-start gap-[63px] mt-[60px] w-full">

                    {/* left column (video + tabs + content) */}
                    <div className="flex flex-col items-start gap-[40px] w-full max-w-[725px]">

                        {/* video player exact figma box */}
                        <div
                            onMouseEnter={handleVideoEnter}
                            onMouseLeave={handleVideoLeave}
                            className="course-animate w-full lg:w-[720px] h-auto lg:h-[479px] aspect-video lg:aspect-auto bg-[#443131] rounded-[24px] relative overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={course.previewVideo.thumbnail}
                                alt="Course Video"
                                fill
                                className="object-cover opacity-80"
                            />

                            {/* play button overlay */}
                            <Link href={course.previewVideo.videoUrl} target='_blank' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[104px] h-[104px] bg-[#4F4F4F] border border-[#4F4F4F] backdrop-blur-[40px] rounded-[24px] flex items-center justify-center">
                                <div className="play-btn-inner w-[60px] h-[60px] bg-[#F5F2FF] rounded-[16px] flex items-center justify-center">
                                    <Play size={28} className=" ml-1" fill="currentColor" />
                                </div>
                            </Link>
                        </div>

                        {/* tabs layout */}
                        <div className="course-animate  md:mt-[5vh] flex flex-row items-start gap-[16px] w-full">
                            {(['About', 'Lessons', 'Reviews'] as CourseTab[]).map((tab) => (
                                <div
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    onMouseEnter={handleTabEnter}
                                    onMouseLeave={handleTabLeave}
                                    className={`flex flex-col justify-center items-center px-[16px] py-[12px] h-[43px] rounded-[24px] cursor-pointer ${activeTab === tab
                                        ? 'bg-[#D4FB20]'
                                        : 'bg-[#F5F5F6]'
                                        }`}
                                >
                                    <span className={`font-satoshi font-medium text-[16px] leading-[120%] text-center ${activeTab === tab ? 'text-[#242528]' : 'text-[#4B4C53]'
                                        }`}>
                                        {tab}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* dynamic tab content area */}
                        <div className="course-animate w-full">
                            {activeTab === 'About' && <CourseAbout course={course} />}
                            {activeTab === 'Lessons' && <CourseLessons course={course} />}
                            {activeTab === 'Reviews' && <CourseReviews course={course} />}
                        </div>

                    </div>

                    {/* right column (sidebar) absolute fit */}
                    <div className="w-full 2xl:w-[412px] shrink-0">
                        <CourseSidebar course={course} onShowLessons={() => setActiveTab('Lessons')} />
                    </div>

                </div>
            </div>
        </main>
    );
}
