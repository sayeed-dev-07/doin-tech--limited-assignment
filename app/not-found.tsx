'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/sections/Footer';

export default function NotFoundPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    useGSAP(() => {
        gsap.from('.giant-404', {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        });


        gsap.from('.not-found-content > *', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.3,
        });
    }, { scope: containerRef });


    const handleBtnEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            scale: 1.05,
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    const handleBtnLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            boxShadow: '0 0px 0px rgba(0,0,0,0)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    return (
        <div>
            <Navbar />
            <div
                ref={containerRef}
                className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#003BE2] pt-24 sm:pt-[120px]"
                style={{
                    backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.12) 2px, transparent 2px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.12) 2px, transparent 2px)
        `,
                    backgroundSize: '120px 120px',
                    backgroundPosition: 'center top',
                }}
            >

                <div className="pointer-events-none absolute left-1/2 top-28 z-0 flex w-full -translate-x-1/2 justify-center select-none sm:top-[160px]">
                    <h1
                        className="giant-404 text-center font-poppins text-[110px] font-semibold leading-none tracking-[-0.01em] sm:text-[200px] md:text-[300px] lg:text-[480px]"
                        style={{
                            background: 'linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        404
                    </h1>
                </div>


                <div className="not-found-content relative z-10 mt-40 flex w-full max-w-[935px] flex-col items-center gap-6 px-4 sm:mt-[280px] sm:gap-[32px] sm:px-6 md:mt-[360px] lg:mt-[400px]">

                    <h2 className="text-center font-poppins text-3xl font-semibold leading-[120%] tracking-[-0.01em] text-[#FFFFFF] sm:text-[40px] md:text-[56px] lg:text-[72px]">
                        The page you are looking for doesn’t exist
                    </h2>

                    <p className="font-satoshi text-[16px] md:text-[18px] leading-[160%] text-center text-[#E5E6E8] max-w-[486px]">
                        Try to use a correct url or go back to homepage to start again
                    </p>

                    <Link href="/" passHref>
                        <button
                            onMouseEnter={handleBtnEnter}
                            onMouseLeave={handleBtnLeave}
                            className="flex flex-row justify-center items-center px-[24px] py-[12px] gap-[8px] h-[46px] bg-[#D4FB20] rounded-[24px] cursor-pointer"
                        >
                            <span className="font-satoshi font-medium text-[18px] leading-[120%] text-[#242528]">
                                Back to Home
                            </span>
                        </button>
                    </Link>

                </div>
            </div>
            <Footer />
        </div>
    );
}
