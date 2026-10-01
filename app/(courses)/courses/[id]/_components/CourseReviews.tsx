'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Star } from 'lucide-react';
import type { CourseReviewsProps } from '@/types';

export default function CourseReviews({ course }: CourseReviewsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });
    const [filter, setFilter] = useState<number | 'all'>('all');

    const reviewsToDisplay = filter === 'all'
        ? course.reviewsData.reviews
        : course.reviewsData.reviews.filter(r => r.rating === filter);

    // gsap hover handlers
    const handleFilterEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
    });

    const handleFilterLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: 'power2.out' });
    });

    const handleCardEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.06)', duration: 0.3, ease: 'power2.out' });
    });

    const handleCardLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)', duration: 0.3, ease: 'power2.out' });
    });

    return (
        <div ref={containerRef} className="flex flex-col items-start gap-[24px] w-full max-w-[723px]">

            <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background">
                What Learners Are Saying
            </h2>

            <p className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                Discover what our learners have to say about their experience with '{course.title}.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
            </p>

            {/* ratings summary box[cite: 18] */}
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center p-4 sm:p-[40px] gap-[24px] w-full bg-foreground border border-[#CED0D3] rounded-[16px] backdrop-blur-[10px]">

                <div className="flex flex-col justify-center items-center w-[129px] h-[140px] p-[40px] bg-[#D4FB20] rounded-[8px] backdrop-blur-[20px] shrink-0">
                    <span className="font-satoshi font-medium text-[14px] leading-[1.2] text-background">
                        Ratings
                    </span>
                    <span className="font-poppins font-semibold text-[36px] leading-[1.2] tracking-[-0.01em] text-background mt-2">
                        {course.reviewsData.overallRating}
                    </span>
                </div>

                <div className="flex flex-col items-start gap-[4px] w-full max-w-[490px]">
                    {course.reviewsData.ratingBreakdown.map((item) => {
                        // simple percentage calculation for the bar width
                        const maxCount = Math.max(...course.reviewsData.ratingBreakdown.map(b => b.count));
                        const percentage = maxCount === 0 ? 0 : (item.count / maxCount) * 100;

                        return (
                            <div key={item.stars} className="flex flex-row items-center gap-[16px] w-full h-[26px]">
                                <div className="flex flex-row items-start gap-[4px] w-[136px] shrink-0">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={24}
                                            className={i < item.stars ? "fill-[#4B4C53] text-[#4B4C53]" : "text-[#CED0D3]"}
                                        />
                                    ))}
                                </div>
                                <div className="relative w-full h-[8px] bg-[#E5E6E8] rounded-[24px] overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-[#D4FB20] rounded-[24px]"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53] w-[40px] text-right shrink-0">
                                    {item.count}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <h2 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-[-0.01em] text-background mt-4">
                Individual Reviews:
            </h2>

            {/* filters[cite: 18] */}
            <div className="flex flex-row flex-wrap items-center gap-[16px] w-full">
                {(['all', 5, 4, 3, 2, 1] as const).map((val) => (
                    <div
                        key={val}
                        onClick={() => setFilter(val)}
                        onMouseEnter={handleFilterEnter}
                        onMouseLeave={handleFilterLeave}
                        className={`flex flex-row justify-center items-center px-[16px] py-[12px] gap-[4px] h-[43px] md:h-[48px] rounded-[24px] cursor-pointer ${filter === val ? 'bg-[#D4FB20]' : 'bg-[#F5F5F6]'
                            }`}
                    >
                        {val === 'all' ? (
                            <span className="font-satoshi font-medium text-[16px] leading-[1.2] text-background">All rating</span>
                        ) : (
                            <>
                                <Star size={20} className="fill-[#4B4C53] text-[#4B4C53]" />
                                <span className="font-satoshi font-medium text-[16px] leading-[1.2] text-[#4B4C53]">{val}</span>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* review cards[cite: 18] */}
            <div className="flex flex-col gap-6 w-full">
                {reviewsToDisplay.map((review) => (
                    <div
                        key={review.id}
                        onMouseEnter={handleCardEnter}
                        onMouseLeave={handleCardLeave}
                        className="flex flex-col items-start p-4 sm:p-[40px] gap-[24px] w-full bg-foreground border border-[#CED0D3] rounded-[24px] cursor-pointer"
                    >
                        <div className="flex flex-row justify-between items-start w-full">
                            <div className="flex flex-row items-start gap-[12px]">
                                <div className="w-[52px] h-[52px] rounded-full bg-[#D9D9D9] relative overflow-hidden shrink-0">
                                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-satoshi font-medium text-[18px] leading-[1.2] text-background">
                                        {review.name}
                                    </span>
                                    {review.role && (
                                        <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                                            {review.role}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <span className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53]">
                                {review.timeAgo}
                            </span>
                        </div>

                        <div className="flex flex-row items-start gap-[4px]">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={24}
                                    className={i < review.rating ? "fill-[#4B4C53] text-[#4B4C53]" : "text-[#CED0D3]"}
                                />
                            ))}
                        </div>

                        <p className="font-satoshi text-[16px] leading-[160%] text-[#4B4C53] w-full">
                            &quot;{review.comment}&quot;
                        </p>
                    </div>
                ))}
                {reviewsToDisplay.length === 0 && (
                    <p className="font-satoshi text-[16px] text-[#4B4C53]">No reviews found for this rating.</p>
                )}
            </div>

        </div>
    );
}
