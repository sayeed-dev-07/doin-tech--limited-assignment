'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ShoppingBag, Menu, X } from 'lucide-react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Navbar: React.FC = () => {
    const navRef = useRef<HTMLElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    useGSAP(() => {
        if (!navRef.current) return;

        const showAnim = gsap.from(navRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.4,
            ease: 'power3.out'
        }).progress(1);

        ScrollTrigger.create({
            start: 'top top',
            end: 'max',
            onUpdate: (self) => {
                const scrollPos = self.scroll();

                if (self.direction === 1 && scrollPos > 100) {
                    showAnim.reverse();
                } else if (self.direction === -1 || scrollPos <= 100) {
                    showAnim.play();
                }

                if (scrollPos > 100) {
                    gsap.to(navRef.current, {
                        backgroundColor: 'rgba(0, 56, 226, 0.95)',
                        backdropFilter: 'blur(12px)',
                        paddingTop: '12px',
                        paddingBottom: '12px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        duration: 0.3,
                        overwrite: 'auto'
                    });
                } else {
                    gsap.to(navRef.current, {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        backdropFilter: 'blur(0px)',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        boxShadow: 'none',
                        duration: 0.3,
                        overwrite: 'auto'
                    });
                }
            }
        });
    }, { scope: navRef });


    useGSAP(() => {
        if (!mobileMenuRef.current) return;


        gsap.set(mobileMenuRef.current, { xPercent: 100 });

        if (mobileMenuOpen) {
            gsap.to(mobileMenuRef.current, {
                xPercent: 0,
                duration: 0.5,
                ease: 'power4.out',
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                xPercent: 100,
                duration: 0.4,
                ease: 'power3.in',
            });
        }
    }, [mobileMenuOpen]);

    return (
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 text-white">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex justify-between items-center py-3 ">

                <Link href="/" className="relative z-50 block">
                    <div className="relative w-[140px] h-[35px] md:w-[180px] md:h-[45px]">
                        <Image
                            src="/images/hero/logo.png"
                            fill
                            sizes="(max-width: 768px) 140px, 180px"
                            alt="ByteSpace logo"
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                <ul className="hidden md:flex items-center gap-8 font-medium text-[16px]  text-gray-100">
                    <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                    <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                    <li><Link href="/creators" className="hover:text-white transition-colors">Creators</Link></li>
                </ul>

                <div className="hidden md:flex items-center gap-6 text-sm lg:text-base font-medium z-50">
                    <Link href="/signin" className="hover:opacity-80 transition-opacity">Sign In</Link>
                    <Link href="/join" className="hover:opacity-80 transition-opacity">Join Us</Link>
                    <button aria-label="Cart" className="hover:opacity-80 transition-opacity">
                        <ShoppingBag size={20} strokeWidth={2} />
                    </button>
                </div>


                <button
                    className="md:hidden relative z-50 text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>


            <div
                ref={mobileMenuRef}
                className="absolute top-0 left-0 w-full h-screen bg-[#0038E2] flex flex-col items-center justify-center gap-8 md:hidden"
            >
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-white">Home</Link>
                <Link href="/courses" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-white">Courses</Link>
                <Link href="/creators" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-white">Creators</Link>
                <Link href="/signin" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-white mt-4 border border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#0038E2] transition-colors">Sign In</Link>
            </div>
        </nav>
    );
};

export default Navbar;