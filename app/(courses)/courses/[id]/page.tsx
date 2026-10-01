import Navbar from '@/components/shared/Navbar';
import Footer from '@/sections/Footer';
import { getCourseById } from '@/public/data/mockData';
import { notFound } from 'next/navigation';
import CourseDetails from './_components/CourseDetails';
import type { CoursePageProps } from '@/types';

export default async function CoursePage({ params }: CoursePageProps) {
    const { id } = await params;
    const course = getCourseById(id);

    if (!course) notFound();

    return <div className="bg-[#FAFAFA]"><Navbar /><CourseDetails course={course} /><Footer /></div>;
}
