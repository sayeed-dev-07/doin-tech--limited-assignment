'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const column1Links = ["Featured Courses", "Featured Categories", "Business", "IT", "Design"];
const column2Links = ["Development", "Marketing", "Photography", "Finance", "Sport"];
const column3Links = ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const { contextSafe } = useGSAP({ scope: footerRef });

    useGSAP(() => {
        gsap.from('.footer-animate > *', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 90%',
            },
        });
    }, { scope: footerRef });

    const handleLinkEnter = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            x: 4,
            color: '#003BE2',
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    const handleLinkLeave = contextSafe((e: React.MouseEvent) => {
        gsap.to(e.currentTarget, {
            x: 0,
            color: 'inherit',
            duration: 0.3,
            ease: 'power2.out',
        });
    });



    return (
        <footer
            ref={footerRef}
            className="w-full bg-foreground border-t border-gray-200 pt-20 pb-10 px-6 relative isolate overflow-hidden"
        >
            <div className="footer-animate max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-[130px]">


                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-[92px] w-full">


                    <div className="flex flex-col items-start gap-8 w-full lg:max-w-[528px]">
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/images/footerLogo.svg"
                                alt="ByteSpace Logo"
                                width={171}
                                height={37}
                                className="object-contain"
                            />
                            <p className="text-[14px] leading-[1.6] text-background">
                                Stay Up to date with our latest features and releases by joining our newsletter.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                                <div className="flex-1 w-full border border-gray-300 rounded-full px-6 py-3 bg-white">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-transparent outline-none text-[16px] text-black placeholder:text-gray-500"
                                    />
                                </div>
                                <button

                                    className="w-full sm:w-[104px] bg-[#D4FB20] text-black font-medium text-[16px] h-[46px] cursor-pointer rounded-full flex items-center justify-center shrink-0"
                                >
                                    Search
                                </button>
                            </div>
                            <p className="text-[12px] leading-[1.6] text-background/80">
                                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-wrap sm:flex-nowrap justify-between gap-10 sm:gap-16 lg:gap-[100px] w-full lg:w-auto pt-4">


                        <div className="flex flex-col gap-4">
                            {column1Links.map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    onMouseEnter={handleLinkEnter}
                                    onMouseLeave={handleLinkLeave}
                                    className="text-[14px] leading-[1.6] text-background inline-block"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>


                        <div className="flex flex-col gap-4">
                            {column2Links.map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    onMouseEnter={handleLinkEnter}
                                    onMouseLeave={handleLinkLeave}
                                    className="text-[14px] leading-[1.6] text-background inline-block"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>


                        <div className="flex flex-col gap-4">
                            {column3Links.map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    onMouseEnter={handleLinkEnter}
                                    onMouseLeave={handleLinkLeave}
                                    className="text-[14px] leading-[1.6] text-background inline-block"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>


                <div className="flex flex-col gap-6 w-full">
                    <div className="w-full h-px bg-[#CED0D3]"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full">
                        <p className="text-[12px] leading-[1.6] text-background/80 text-center md:text-left">
                            @ 2026 ByteSpace. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    onMouseEnter={handleLinkEnter}
                                    onMouseLeave={handleLinkLeave}
                                    className="text-[12px] leading-[1.6] text-background inline-block"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}