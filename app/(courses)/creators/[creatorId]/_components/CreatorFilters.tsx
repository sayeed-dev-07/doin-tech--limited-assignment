'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Filter, Signal, LayoutGrid, ListFilter } from 'lucide-react';

export default function CreatorFilters() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    // gsap hover handlers
    const handleBtnEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', duration: 0.3, ease: 'power2.out' });
    });

    const handleBtnLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1, boxShadow: 'none', duration: 0.3, ease: 'power2.out' });
    });

    return (
        <div ref={containerRef} className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-[1201px] gap-4">

            {/* left filter group */}
            <div className="flex flex-wrap items-center gap-[16px]">
                <button
                    onMouseEnter={handleBtnEnter}
                    onMouseLeave={handleBtnLeave}
                    className="flex justify-center items-center px-[16px] py-[12px] gap-[4px] h-[48px] bg-[#FFFFFF] border border-[#CED0D3] rounded-[24px] cursor-pointer"
                >
                    <Filter size={24} className="text-[#242528]" />
                    <span className="font-satoshi font-medium text-[16px] leading-[120%] text-[#4B4C53]">Filter</span>
                </button>

                <button
                    onMouseEnter={handleBtnEnter}
                    onMouseLeave={handleBtnLeave}
                    className="flex justify-center items-center px-[16px] py-[12px] gap-[4px] h-[48px] bg-[#FFFFFF] border border-[#CED0D3] rounded-[24px] cursor-pointer"
                >
                    <Signal size={24} className="text-[#242528]" />
                    <span className="font-satoshi font-medium text-[16px] leading-[120%] text-[#4B4C53]">Level</span>
                </button>

                <button
                    onMouseEnter={handleBtnEnter}
                    onMouseLeave={handleBtnLeave}
                    className="flex justify-center items-center px-[16px] py-[12px] gap-[4px] h-[48px] bg-[#FFFFFF] border border-[#CED0D3] rounded-[24px] cursor-pointer"
                >
                    <LayoutGrid size={24} className="text-[#242528]" />
                    <span className="font-satoshi font-medium text-[16px] leading-[120%] text-[#4B4C53]">Category</span>
                </button>
            </div>

            {/* right sort group */}
            <button
                onMouseEnter={handleBtnEnter}
                onMouseLeave={handleBtnLeave}
                className="flex justify-center items-center px-[16px] py-[12px] gap-[4px] h-[48px] bg-[#FFFFFF] border border-[#CED0D3] rounded-[24px] cursor-pointer"
            >
                <ListFilter size={24} className="text-[#242528]" />
                <span className="font-satoshi font-medium text-[16px] leading-[120%] text-[#4B4C53]">Most relevant</span>
            </button>

        </div>
    );
}