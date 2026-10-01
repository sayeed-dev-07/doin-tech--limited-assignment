'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { CreatorHeroProps } from '@/types';

export default function CreatorHero({ creator }: CreatorHeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: heroRef });

    // gsap hover handlers
    const handleBtnEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });

    const handleBtnLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });

    return (
        <div
            ref={heroRef}
            className="relative flex h-[610px] w-full flex-col items-center justify-center overflow-hidden bg-[#003BE2] sm:h-[595px]"
            style={{
                // replicating the grid lines from the design
                backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.12) 2px, transparent 2px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
        `,
                backgroundSize: '120px 120px',
                backgroundPosition: 'center top',
            }}
        >
            {/* main content container matching exact figma layout widths */}
            <div className="relative z-10 mt-16 flex w-full max-w-[1198px] flex-col items-start gap-6 px-4 pb-4 sm:mt-20 sm:gap-[40px] sm:px-6">

                {/* profile info row */}
                <div className="flex w-full max-w-[902px] flex-col items-start gap-4 md:flex-row md:items-center md:gap-[24px]">
                    {/* avatar */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[20px] bg-[#D9D9D9] sm:h-[96px] sm:w-[96px] sm:rounded-[24px]">
                        <Image
                            src={creator.avatar || 'https://i.pravatar.cc/150?img=12'}
                            alt={creator.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* name, badge, and role */}
                    <div className="flex flex-col items-start gap-[8px]">
                        <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-[16px]">
                            <h1 className="font-poppins text-[28px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6] sm:text-[36px]">
                                {creator.name}
                            </h1>
                            {/* creator badge */}
                            <div className="flex items-center justify-center rounded-[24px] bg-[#D4FB20] px-4 py-2 backdrop-blur-[20px] sm:px-[24px]">
                                <span className="font-satoshi text-sm font-medium leading-[120%] text-[#242528] sm:text-[16px]">
                                    Creator
                                </span>
                            </div>
                        </div>
                        <p className="font-satoshi text-base leading-[160%] text-[#F5F5F6] sm:text-[18px]">
                            {creator.role}
                        </p>
                    </div>
                </div>

                {/* bio text */}
                <p className="w-full max-w-[1197px] font-satoshi text-base leading-[160%] text-[#F5F5F6] sm:text-[18px]">
                    {creator.bio}
                </p>

                {/* stats and follow button row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-6 mt-2">

                    {/* left stats */}
                    <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-[16px]">
                        <div
                            onMouseEnter={handleBtnEnter}
                            onMouseLeave={handleBtnLeave}
                            className="flex h-[42px] flex-row items-center justify-center gap-2 rounded-[24px] bg-[#FFFFFF] px-4 py-2 backdrop-blur-[20px] sm:h-[46px] sm:px-[24px] sm:py-[12px]"
                        >
                            <span className="font-satoshi font-medium text-[18px] leading-[120%] text-[#003BE2]">
                                {creator.productsCount}
                            </span>
                            <span className="font-satoshi font-medium text-[18px] leading-[120%] text-[#242528]">
                                Products
                            </span>
                        </div>

                        <div
                            onMouseEnter={handleBtnEnter}
                            onMouseLeave={handleBtnLeave}
                            className="flex h-[42px] flex-row items-center justify-center gap-2 rounded-[24px] bg-[#FFFFFF] px-4 py-2 backdrop-blur-[20px] sm:h-[46px] sm:px-[24px] sm:py-[12px]"
                        >
                            <span className="font-satoshi font-medium text-[18px] leading-[120%] text-[#003BE2]">
                                {creator.followersCount}
                            </span>
                            <span className="font-satoshi font-medium text-[18px] leading-[120%] text-[#242528]">
                                Followers
                            </span>
                        </div>
                    </div>

                    {/* right follow button */}
                    <button
                        onMouseEnter={handleBtnEnter}
                        onMouseLeave={handleBtnLeave}
                        className="flex h-[42px] shrink-0 items-center justify-center rounded-[24px] bg-[#D4FB20] px-5 py-2 sm:h-[46px] sm:px-[24px] sm:py-[12px]"
                    >
                        <span className="font-satoshi font-medium text-[18px] leading-[120%] text-[#040819]">
                            Follow
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
}
