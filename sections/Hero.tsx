'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BackgroundShapes from '../components/heroMini/BackgroundShapes';
import HeroText from '../components/heroMini/Herotext';
import SearchBar from '../components/heroMini/Searchbar';
import HeroGraphics from '../components/heroMini/HeroGraphics';

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!heroRef.current) return;

        const tl = gsap.timeline();

        tl.fromTo('.hero-content',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
        );

        tl.fromTo('.big-circle',
            { y: 300, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
            "-=0.4"
        );

        tl.fromTo('.human-img',
            { y: 300, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
            "-=0.7"
        );

        tl.fromTo('.sticker',
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' },
            "-=0.5"
        );

    }, { scope: heroRef });

    return (
        <section
            ref={heroRef}
            className="relative w-full h-screen bg-[#0038E2] bg-[size:60px_60px] md:bg-[size:120px_120px] overflow-hidden pt-24 md:pt-32 pb-0 flex flex-col items-center"
            style={{
                backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
        `,
                backgroundPosition: 'center top'
            }}
        >
            <BackgroundShapes />

            <div className="max-w-300 mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center text-center flex-1 min-h-0">
                <HeroText />
                <SearchBar />
                <HeroGraphics />
            </div>
        </section>
    );
};

export default Hero;