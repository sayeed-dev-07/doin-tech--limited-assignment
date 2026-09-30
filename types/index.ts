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