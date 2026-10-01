import type { ReactNode } from "react";

export interface Course {
    id: number;
    title: string;
    author: string;
    rating: number;
    price: number;
    lessons: number;
    duration: string;
    comments: number;
    level: string;
    students: number;
    imgSrc: string;
}

export interface TestimonialData {
    id: number;
    name: string;
    role: string;
    quote: string;
    imgSrc: string;
}

export interface SneakPeakItem {
    id: string;
    imgSrc: string;
    alt: string;
}

export interface ReviewItem {
    id: string;
    name: string;
    role: string;
    avatar: string;
    timeAgo: string;
    rating: number;
    comment: string;
}

export interface ModuleItem {
    id: string;
    title: string;
    description: string;
}

export interface Creator {
    creatorId: string;
    name: string;
    role: string;
    avatar: string;
    bio: string;
}

export interface CreatorHeroData
    extends Omit<Creator, "creatorId"> {
    id: string;
    productsCount: number;
    followersCount: number;
}

export interface CourseDetail {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    level: string;
    rating: number;
    reviewsCount: number;
    studentsCount: number;
    price: number;
    billingPeriod: string;

    previewVideo: {
        thumbnail: string;
        videoUrl: string;
    };

    sidebar: {
        lessonsSummary: string;

        previewLessons: {
            num: string;
            title: string;
            duration: string;
        }[];

        moreVideosCount: number;
        ctaMessage: string;
        includes: string[];
        instructor: Creator;
    };

    aboutData: {
        paragraphs: string[];
        sneakPeakImages: SneakPeakItem[];
        keyPoints: string[];
    };

    lessonsData: {
        introText: string;
        progressPercentage: number;
        contentDescription: string;
        modules: ModuleItem[];
    };

    reviewsData: {
        overallRating: number;

        ratingBreakdown: {
            stars: number;
            count: number;
        }[];

        reviews: ReviewItem[];
    };
}

export interface CourseCardProps {
    course: Course;
}

export interface TestimonialCardProps {
    data: TestimonialData;
}

export interface CourseDetailsProps {
    course: CourseDetail;
}

export interface CourseHeroProps {
    course: CourseDetail;
}

export interface CourseAboutProps {
    course: CourseDetail;
}

export interface CourseLessonsProps {
    course: CourseDetail;
}

export interface CourseReviewsProps {
    course: CourseDetail;
}

export interface CourseSidebarProps {
    course: CourseDetail;
    onShowLessons: () => void;
}

export interface CreatorHeroProps {
    creator: CreatorHeroData;
}

export interface AuthLayoutProps {
    eyebrow: string;
    title: string;
    description: string;
    children: ReactNode;
}

export interface CoursePageProps {
    params: Promise<{
        id: string;
    }>;
}

export interface CreatorPageProps {
    params: Promise<{
        creatorId: string;
    }>;
}

export type CourseTab = "About" | "Lessons" | "Reviews";