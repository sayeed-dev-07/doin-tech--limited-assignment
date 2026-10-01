import { Course, CourseDetail, TestimonialData } from "@/types";

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


export const coursesData: CourseDetail[] = [
    {
        id: "1", // changed to match /courses/1
        title: "Learn Figma from Basic",
        subtitle: "Master UI/UX Design Fundamentals",
        author: "pumpeer studio",
        level: "Beginner",
        rating: 4.5,
        reviewsCount: 50,
        studentsCount: 26,
        price: 25,
        billingPeriod: "/lifetime",
        previewVideo: {
            thumbnail: "/images/course/img1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        sidebar: {
            lessonsSummary: "112 Lessons (24 hours)",
            previewLessons: [
                { num: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
                { num: "02", title: "Design Principles for Impacts", duration: "21 mins" },
                { num: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" }
            ],
            moreVideosCount: 99,
            ctaMessage: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
            includes: [
                "Learning Resources",
                "Quality Lesson Videos",
                "Certificate of Completion",
                "Private Consultation"
            ],
            instructor: {
                creatorId: "pumpeer-studio",
                name: "Pumpeer Studio",
                role: "Lead Designer",
                avatar: "/images/course/img1.jpg",
                bio: "Helping beginners build confident UI and product design skills."
            }
        },
        aboutData: {
            paragraphs: [
                "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
                "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
                "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios."
            ],
            sneakPeakImages: [
                {
                    id: "sp-1",
                    imgSrc: "/images/course/sneak-peak-1.png",
                    alt: "sketching design wireframes"
                },
                {
                    id: "sp-2",
                    imgSrc: "/images/course/sneak-peak-2.png",
                    alt: "laptop keyboard and screen display"
                },
                {
                    id: "sp-3",
                    imgSrc: "/images/course/sneak-peak-3.png",
                    alt: "workspace with computer monitor"
                },
                {
                    id: "sp-4",
                    imgSrc: "/images/course/sneak-peak-4.png",
                    alt: "mobile device interface designs"
                }
            ],
            keyPoints: [
                "Foundational Concepts",
                "Design Principles Mastery",
                "Advanced Techniques in Digital Creation",
                "Project Showcase and Critique",
                "Optimizing for Various Platforms",
                "Digital Asset Management Best Practices",
                "Monetization Strategies",
                "Capstone Project: Building Your Portfolio"
            ]
        },
        lessonsData: {
            introText: "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experience.",
            progressPercentage: 55,
            contentDescription: "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
            modules: [
                {
                    id: "mod-01",
                    title: "Module 1: Introduction to Digital Assets",
                    description: "Lay the groundwork with lessons like 'Understanding Digital Formats' and 'Navigating Design Software Tools.' Dive into the core tools of digital asset creation."
                },
                {
                    id: "mod-02",
                    title: "Module 2: Design Principles for Impact",
                    description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
                },
                {
                    id: "mod-03",
                    title: "Module 3: User-Centric Design Strategies",
                    description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
                },
                {
                    id: "mod-04",
                    title: "Module 4: Interactive Media and Engagement",
                    description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of crafting interactive digital experiences."
                },
                {
                    id: "mod-05",
                    title: "Module 5: Project Showcase and Critique",
                    description: "Refine your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
                },
                {
                    id: "mod-06",
                    title: "Module 6: Optimizing Digital Assets for Various Platforms",
                    description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
                }
            ]
        },
        reviewsData: {
            overallRating: 4.7,
            ratingBreakdown: [
                { stars: 5, count: 120 },
                { stars: 4, count: 32 },
                { stars: 3, count: 12 },
                { stars: 2, count: 6 },
                { stars: 1, count: 16 }
            ],
            reviews: [
                {
                    id: "rev-01",
                    name: "PurePearl Studio",
                    role: "UI/UX Designer",
                    avatar: "/images/community/img1.png",
                    timeAgo: "a year ago",
                    rating: 5,
                    comment: "This course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended."
                },
                {
                    id: "rev-02",
                    name: "Albert Flores",
                    role: "",
                    avatar: "/images/community/img2.png",
                    timeAgo: "a year ago",
                    rating: 5,
                    comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
                },
                {
                    id: "rev-03",
                    name: "Cody Fisher",
                    role: "UI/UX Designer",
                    avatar: "/images/community/img3.png",
                    timeAgo: "a year ago",
                    rating: 5,
                    comment: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. A practical and valuable dimension to the learning process."
                }
            ]
        }
    },
    {
        id: "2", // matching /courses/2
        title: "Build Digital Asset: A Comprehensive Guide",
        subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
        author: "purepearl studio",
        level: "Intermediate",
        rating: 4.8,
        reviewsCount: 172,
        studentsCount: 199,
        price: 25,
        billingPeriod: "/course",
        previewVideo: {
            thumbnail: "/images/course/img2.jpg",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        sidebar: {
            lessonsSummary: "17 Lessons (2 hours 16 mins)",
            previewLessons: [
                { num: "01", title: "Introduction to Figma", duration: "10 mins" },
                { num: "02", title: "Setting up your workspace", duration: "15 mins" },
                { num: "03", title: "Basic tools and shapes", duration: "20 mins" }
            ],
            moreVideosCount: 14,
            ctaMessage: "Ready to Master Figma? Enroll Now!",
            includes: [
                "Learning Resources",
                "Quality Lesson Videos",
                "Certificate of Completion"
            ],
            instructor: {
                creatorId: "purepearl-studio",
                name: "PurePearl Studio",
                role: "Professional Creator",
                avatar: "/images/course/img2.jpg",
                bio: "Helping creators shape practical, high-quality digital assets."
            }
        },
        aboutData: {
            paragraphs: [
                "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
                "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
                "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios."
            ],
            sneakPeakImages: [
                {
                    id: "sp-1",
                    imgSrc: "/images/course/sneak-peak-1.png",
                    alt: "sketching design wireframes"
                },
                {
                    id: "sp-2",
                    imgSrc: "/images/course/sneak-peak-2.png",
                    alt: "laptop keyboard and screen display"
                },
                {
                    id: "sp-3",
                    imgSrc: "/images/course/sneak-peak-3.png",
                    alt: "workspace with computer monitor"
                },
                {
                    id: "sp-4",
                    imgSrc: "/images/course/sneak-peak-4.png",
                    alt: "mobile device interface designs"
                }
            ],
            keyPoints: [
                "Foundational Concepts",
                "Design Principles Mastery",
                "Advanced Techniques in Digital Creation",
                "Project Showcase and Critique",
                "Optimizing for Various Platforms",
                "Digital Asset Management Best Practices",
                "Monetization Strategies",
                "Capstone Project: Building Your Portfolio"
            ]
        },
        lessonsData: {
            introText: "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experience.",
            progressPercentage: 55,
            contentDescription: "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
            modules: [
                {
                    id: "mod-01",
                    title: "Module 1: Introduction to Digital Assets",
                    description: "Lay the groundwork with lessons like 'Understanding Digital Formats' and 'Navigating Design Software Tools.' Dive into the core tools of digital asset creation."
                },
                {
                    id: "mod-02",
                    title: "Module 2: Design Principles for Impact",
                    description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
                },
                {
                    id: "mod-03",
                    title: "Module 3: User-Centric Design Strategies",
                    description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
                },
                {
                    id: "mod-04",
                    title: "Module 4: Interactive Media and Engagement",
                    description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of crafting interactive digital experiences."
                },
                {
                    id: "mod-05",
                    title: "Module 5: Project Showcase and Critique",
                    description: "Refine your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
                },
                {
                    id: "mod-06",
                    title: "Module 6: Optimizing Digital Assets for Various Platforms",
                    description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
                }
            ]
        },
        reviewsData: {
            overallRating: 4.5,
            ratingBreakdown: [
                { stars: 5, count: 120 },
                { stars: 4, count: 32 },
                { stars: 3, count: 12 },
                { stars: 2, count: 6 },
                { stars: 1, count: 16 }
            ],
            reviews: [
                {
                    id: "rev-01",
                    name: "PurePearl Studio",
                    role: "UI/UX Designer",
                    avatar: "/images/community/img1.png",
                    timeAgo: "a year ago",
                    rating: 5,
                    comment: "This course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended."
                },
                {
                    id: "rev-02",
                    name: "Albert Flores",
                    role: "",
                    avatar: "/images/community/img2.png",
                    timeAgo: "a year ago",
                    rating: 5,
                    comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
                },
                {
                    id: "rev-03",
                    name: "Cody Fisher",
                    role: "UI/UX Designer",
                    avatar: "/images/community/img3.png",
                    timeAgo: "a year ago",
                    rating: 5,
                    comment: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. A practical and valuable dimension to the learning process."
                }
            ]
        }
    }
];


export const getCourseById = (id: string): CourseDetail | undefined => {
    const course = coursesData.find((item) => item.id === id);
    if (course) return course;

    const cardCourse = courses.find((item) => String(item.id) === id);
    if (!cardCourse) return undefined;

    return {
        ...coursesData[0],
        id,
        title: cardCourse.title.replace('...', ''),
        subtitle: `Build practical ${cardCourse.level.toLowerCase()} skills at your own pace.`,
        author: cardCourse.author,
        level: cardCourse.level,
        rating: cardCourse.rating,
        reviewsCount: cardCourse.comments,
        studentsCount: cardCourse.students,
        price: cardCourse.price,
        previewVideo: { ...coursesData[0].previewVideo, thumbnail: cardCourse.imgSrc },
        sidebar: {
            ...coursesData[0].sidebar,
            lessonsSummary: `${cardCourse.lessons} Lessons (${cardCourse.duration})`,
            instructor: {
                ...coursesData[0].sidebar.instructor,
                creatorId: cardCourse.author.toLowerCase().replace(/\s+/g, '-'),
                name: cardCourse.author.replace(/\b\w/g, (letter) => letter.toUpperCase()),
                avatar: cardCourse.imgSrc,
            },
        },
    };
};

export const getCreatorById = (creatorId: string) => {
    const course = coursesData.find((item) => item.sidebar.instructor.creatorId === creatorId)
        ?? getCourseById(String(courses.find((item) => item.author.toLowerCase().replace(/\s+/g, '-') === creatorId)?.id ?? ''));

    return course ? course.sidebar.instructor : undefined;
};
