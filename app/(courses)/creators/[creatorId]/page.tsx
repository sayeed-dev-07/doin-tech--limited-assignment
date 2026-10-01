import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/sections/Footer';
import CreatorHero from './_components/CreatorHero';
import CreatorFilters from './_components/CreatorFilters';
import { coursesData, getCreatorById } from '@/public/data/mockData';
import Pagination from '../../_components/Pagination';
import CourseCard from '@/components/DiscoverMini/CourseCard';
import type { CreatorPageProps } from '@/types';

export default async function CreatorPage({ params }: CreatorPageProps) {
    const { creatorId } = await params;

    const creator = getCreatorById(creatorId);
    if (!creator) notFound();

    const creatorCourses = coursesData.filter((course) => course.sidebar.instructor.creatorId === creatorId);

    const coursesToRender = creatorCourses.length > 0 ? creatorCourses : coursesData;
    const creatorHeroData = {
        id: creator.creatorId,
        name: creator.name,
        role: creator.role,
        bio: creator.bio,
        avatar: creator.avatar,
        productsCount: creatorCourses.length,
        followersCount: creatorCourses.reduce((total, course) => total + course.studentsCount, 0),
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <Navbar />

            <main className="flex-grow w-full  ">
                {/* top blue hero section */}
                <CreatorHero creator={creatorHeroData} />

                <section className="mx-auto w-full max-w-[1200px] sm:px-6 px-4 py-[40px] flex flex-col items-center gap-[20px] sm:gap-[48px]">

                    {/* filters matching exact figma design */}
                    <CreatorFilters />

                    {/* section heading requested above course cards */}
                    <div className="w-full  flex justify-start">
                        <h2 className="font-poppins font-semibold text-[24px] leading-[120%] tracking-[-0.01em] text-[#242528]">
                            Courses by {creator.name}
                        </h2>
                    </div>


                    <div className="grid grid-cols-1 w-full  items-center justify-center md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8  ">
                        {coursesToRender.map((course) => {
                            const [, lessons = '0', duration = ''] = course.sidebar.lessonsSummary.match(/(\d+)\s+Lessons\s*\(([^)]+)\)/i) ?? [];

                            return (
                                <CourseCard
                                    key={course.id}
                                    course={{
                                        id: Number(course.id),
                                        title: course.title,
                                        author: course.author,
                                        rating: course.rating,
                                        price: course.price,
                                        lessons: Number(lessons),
                                        duration,
                                        comments: course.reviewsCount,
                                        level: course.level,
                                        students: course.studentsCount,
                                        imgSrc: course.previewVideo.thumbnail,
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* pagination */}
                    <div className="">
                        <Pagination />
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
}
