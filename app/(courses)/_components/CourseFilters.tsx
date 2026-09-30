'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Filter, Signal, LayoutGrid, ListFilter } from 'lucide-react';

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking"
];

export default function CourseFilters() {
    const containerRef = useRef<HTMLDivElement>(null);


    useGSAP(() => {

        gsap.from('.filter-btn, .category-chip', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
        });
    }, { scope: containerRef });


    return (
        <div ref={containerRef} className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 px-4 sm:px-6 py-12">


            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">

                {/* left group */}
                <div className="flex flex-wrap items-center gap-4">
                    <button

                        className="filter-btn cursor-pointer flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#CED0D3] rounded-[24px]"
                    >
                        <Filter size={20} className="text-[#242528]" />
                        <span className="text-[16px] font-medium text-[#4B4C53]">Filter</span>
                    </button>

                    <button

                        className="filter-btn cursor-pointer flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#CED0D3] rounded-[24px]"
                    >
                        <Signal size={20} className="text-[#242528]" />
                        <span className="text-[16px] font-medium text-[#4B4C53]">Level</span>
                    </button>

                    <button

                        className="filter-btn flex items-center justify-center cursor-pointer gap-2 px-4 py-3 bg-white border border-[#CED0D3] rounded-[24px]"
                    >
                        <LayoutGrid size={20} className="text-[#242528]" />
                        <span className="text-[16px] font-medium text-[#4B4C53]">Category</span>
                    </button>
                </div>

                {/* right group */}
                <button

                    className="filter-btn flex items-center justify-center cursor-pointer gap-2 px-4 py-3 bg-white border border-[#CED0D3] rounded-[24px]"
                >
                    <ListFilter size={20} className="text-[#242528]" />
                    <span className="text-[16px] font-medium text-[#4B4C53]">Most relevant</span>
                </button>

            </div>

            {/* bottom row: categories[cite: 10] */}
            <div className="flex flex-wrap items-center gap-4 w-full">
                {categories.map((category) => {
                    const isFeatured = category === 'Featured';

                    return (
                        <button
                            key={category}
                            className={`category-chip flex items-center text-[16px] justify-center px-4 py-3 rounded-[24px] cursor-pointer ${isFeatured
                                ? 'bg-[#D4FB20] text-[#242528]'
                                : 'bg-[#F5F5F6] text-[#4B4C53]'
                                }`}
                        >
                            <span className="text-[16px] font-medium">
                                {category}
                            </span>
                        </button>
                    );
                })}
            </div>

        </div>
    );
}