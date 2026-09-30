import { Course, TestimonialData } from "@/types";

export const testimonialsData: TestimonialData[] = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        quote: "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
        imgSrc: "/images/community/img1.png"
    },
    {
        id: 2,
        name: "James L.",
        role: "Lifelong Learner",
        quote: "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
        imgSrc: "/images/community/img2.png"
    },
    {
        id: 3,
        name: "Alex B.",
        role: "Inspired Creator",
        quote: "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
        imgSrc: "/images/community/img3.png"
    }
];

export const logoData = [
    {
        id: 1,
        link: '/images/skills/logo1.svg',
        alt: 'logo1',
        text: 'Design'
    },
    {
        id: 2,
        link: '/images/skills/logo2.svg',
        alt: 'logo2',
        text: 'Development'
    },
    {
        id: 3,
        link: '/images/skills/logo3.png',
        alt: 'logo3',
        text: 'IT & Software'
    },
    {
        id: 4,
        link: '/images/skills/logo4.png',
        alt: 'logo4',
        text: 'Business'
    },
    {
        id: 5,
        link: '/images/skills/logo5.png',
        alt: 'logo5',
        text: 'Marketing'
    },
    {
        id: 6,
        link: '/images/skills/logo6.png',
        alt: 'logo6',
        text: 'Photography'
    }
];


export const categories = [
    "Featured", "Music", "Drawing & Painting", "Marketing",
    "Animation", "Social Media", "UI/UX Design", "Creative Marketing",
    "Digital Illustration", "Film & Video", "Crafts",
    "Freelance & Entrepreneurship", "Graphic Design", "Photography",
    "Productivity", "Web Development", "Data Science", "Cooking"
];

export const courses: Course[] = [
    {
        id: 1,
        title: 'Learn Figma from Basic',
        author: 'pumpeer studio',
        rating: 4.5,
        price: 25,
        lessons: 17,
        duration: '2 hours 16 min',
        comments: 50,
        level: 'Beginner',
        students: 26,
        imgSrc: '/images/course/img1.jpg',
    },
    {
        id: 2,
        title: 'Build Digital Asset',
        author: 'pumpeer studio',
        rating: 4.5,
        price: 25,
        lessons: 17,
        duration: '2 hours 16 min',
        comments: 50,
        level: 'Beginner',
        students: 26,
        imgSrc: '/images/course/img2.jpg',
    },
    {
        id: 3,
        title: 'the Power of Big Data',
        author: 'sumpler studio',
        rating: 4.5,
        price: 25,
        lessons: 17,
        duration: '2 hours 16 min',
        comments: 50,
        level: 'Beginner',
        students: 26,
        imgSrc: '/images/course/img3.jpg',
    },
    {
        id: 4,
        title: 'Balancing Productivity an...',
        author: 'pumpeer studio',
        rating: 4.5,
        price: 25,
        lessons: 17,
        duration: '2 hours 15 min',
        comments: 50,
        level: 'Beginner',
        students: 26,
        imgSrc: '/images/course/img4.jpg',
    },
    {
        id: 5,
        title: 'Mastering Money Manage...',
        author: 'pumpeer studio',
        rating: 4.5,
        price: 25,
        lessons: 17,
        duration: '2 hours 15 min',
        comments: 99,
        level: 'Beginner',
        students: 26,
        imgSrc: '/images/course/img5.jpg',
    },
    {
        id: 6,
        title: 'From Idea to Startup Succ...',
        author: 'pumpeer studio',
        rating: 4.5,
        price: 25,
        lessons: 12,
        duration: '2 hours 16 min',
        comments: 99,
        level: 'Beginner',
        students: 26,
        imgSrc: '/images/course/img6.jpg',
    },
];