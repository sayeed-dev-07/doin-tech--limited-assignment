import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Star, Users } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/sections/Footer';
import { coursesData } from '@/public/data/mockData';

const creators = Array.from(
    new Map(
        coursesData.map((course) => [
            course.sidebar.instructor.creatorId,
            {
                ...course.sidebar.instructor,
                courses: coursesData.filter(
                    ({ sidebar }) => sidebar.instructor.creatorId === course.sidebar.instructor.creatorId,
                ),
            },
        ]),
    ).values(),
);

export default function CreatorsPage() {
    const totalStudents = creators.reduce(
        (total, creator) => total + creator.courses.reduce((count, course) => count + course.studentsCount, 0),
        0,
    );

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-[#242528]">
            <Navbar />

            <main>
                <section
                    className="relative overflow-hidden bg-[#003BE2] px-4 sm:px-6 pb-20 pt-36 text-white md:px-12 md:pb-24 md:pt-44"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
                        backgroundSize: '88px 88px',
                    }}
                >

                    <div className="relative mx-auto max-w-[1200px]">
                        <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 font-satoshi text-sm font-medium backdrop-blur-sm">
                            Learn from people who make the work
                        </span>
                        <h1 className="mt-6 max-w-3xl font-poppins text-4xl font-semibold leading-[1.12] tracking-[-0.03em] md:text-6xl">
                            Meet our creative experts.
                        </h1>
                        <p className="mt-6 max-w-xl font-satoshi text-lg leading-8 text-white/85">
                            Explore courses made by practitioners who turn their experience into useful, practical learning.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <div className="rounded-2xl bg-white px-5 py-4 text-[#242528] shadow-sm">
                                <p className="font-poppins text-2xl font-semibold">{creators.length}</p>
                                <p className="font-satoshi text-sm text-[#4B4C53]">Active creators</p>
                            </div>
                            <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm">
                                <p className="font-poppins text-2xl font-semibold">{totalStudents}+</p>
                                <p className="font-satoshi text-sm text-white/75">Learners enrolled</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16  md:py-24">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <p className="font-satoshi text-sm font-medium uppercase tracking-[0.16em] text-[#003BE2]">Creator directory</p>
                            <h2 className="mt-3 font-poppins text-3xl font-semibold tracking-[-0.02em] md:text-4xl">Find your next mentor</h2>
                        </div>
                        <p className="max-w-sm font-satoshi leading-7 text-[#66676D]">Each creator brings a distinct point of view and a library built around it.</p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-6 ">
                        {creators.map((creator) => {
                            const courseCount = creator.courses.length;
                            const students = creator.courses.reduce((total, course) => total + course.studentsCount, 0);
                            const averageRating = creator.courses.reduce((total, course) => total + course.rating, 0) / courseCount;

                            return (
                                <article key={creator.creatorId} className="group flex h-full flex-col rounded-[28px] border border-[#CED0D3] bg-white p-5 shadow-[0_4px_20px_rgba(36,37,40,0.04)] transition-transform duration-300 hover:-translate-y-1 md:p-7">
                                    <div className="flex items-start gap-4">
                                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#F5F5F6] md:h-20 md:w-20">
                                            <Image src={creator.avatar} alt={creator.name} fill sizes="80px" className="object-cover" />
                                        </div>
                                        <div className="min-w-0 pt-1">
                                            <p className="font-poppins text-xl font-semibold tracking-[-0.01em]">{creator.name}</p>
                                            <p className="mt-1 font-satoshi text-sm text-[#66676D]">{creator.role}</p>
                                        </div>
                                    </div>

                                    <p className="mt-6 line-clamp-2 font-satoshi leading-7 text-[#4B4C53]">{creator.bio}</p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-3 py-2 font-satoshi text-sm text-[#4B4C53]"><BookOpen size={15} />{courseCount} {courseCount === 1 ? 'course' : 'courses'}</span>
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-3 py-2 font-satoshi text-sm text-[#4B4C53]"><Users size={15} />{students} learners</span>
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-3 py-2 font-satoshi text-sm text-[#4B4C53]"><Star size={15} className="fill-[#D4FB20] text-[#242528]" />{averageRating.toFixed(1)}</span>
                                    </div>

                                    <Link href={`/creators/${creator.creatorId}`} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#003BE2] px-5 py-3 font-satoshi font-medium text-white transition-colors hover:bg-[#002DAA]">
                                        See all courses <ArrowRight size={18} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
