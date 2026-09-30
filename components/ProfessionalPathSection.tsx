'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);


export default function ProfessionalPathSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {

        gsap.from('.row-1-text > *', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.row-1-trigger',
                start: 'top 80%',
            },
        });

        gsap.from('.row-1-image', {
            x: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.row-1-trigger',
                start: 'top 80%',
            },
        });


        gsap.from('.row-2-text > *', {
            x: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.row-2-trigger',
                start: 'top 80%',
            },
        });

        gsap.from('.row-2-image', {
            x: -40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.row-2-trigger',
                start: 'top 80%',
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full bg-[#FAFAFA] relative isolate overflow-hidden py-24 px-6">


            <div className="max-w-[1258px] mx-auto flex flex-col gap-20">


                <div className="row-1-trigger flex flex-col lg:flex-row items-center gap-10 lg:gap-20">


                    <div className="row-1-text flex-1 flex flex-col items-start w-full lg:max-w-[574px]">
                        <h2 className="font-poppins font-semibold text-[44px] leading-[1.2] tracking-tight text-background mb-10">
                            Your Path to Professional Growth Starts Here!
                        </h2>

                        <p className="text-[18px] leading-[1.6] text-gray-600 mb-14 max-w-[477px]">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>

                        <div className="flex items-end gap-14">
                            <div className="flex flex-col">
                                <span className="font-poppins font-medium text-[36px] leading-[1.2] text-[#003BE2]">12K</span>
                                <span className="text-[18px] text-gray-600 leading-tight mt-1">Students</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-poppins font-medium text-[36px] leading-[1.2] text-[#003BE2]">70+</span>
                                <span className="text-[18px] text-gray-600 leading-tight mt-1">Courses</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-poppins font-medium text-[36px] leading-[1.2] text-[#003BE2]">16</span>
                                <span className="text-[18px] text-gray-600 leading-tight mt-1">Creators</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="row-1-image max-w-[500px] flex-1 relative w-full aspect-square ">
                        <Image
                            src="/images/path/img1.png"
                            alt="Student with laptop and progress charts"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>



                <div className="row-2-trigger flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Image */}
                    <div className="row-2-image max-w-[500px] flex-1 relative w-full aspect-square ">
                        <Image
                            src="/images/path/img2.png"
                            alt="Creator with headset and revenue stats"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>


                    <div className="row-2-text flex-1 flex flex-col items-start w-full lg:max-w-[580px]">
                        <h2 className="font-poppins font-semibold text-[44px] leading-[1.2] tracking-tight text-background mb-8 max-w-[400px]">
                            Create & Manage Courses Easily.
                        </h2>

                        <p className="font-bold text-[18px] leading-[28px] text-background mb-10 max-w-[574px]">
                            ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>

                        <div className="flex flex-col gap-4">
                            {[
                                "Share Your Expertise",
                                "Monetize Your Passion",
                                "Flexibility and Autonomy",
                                "Build a Community"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full  flex items-center justify-center shrink-0">
                                        <Image src="/images/path/like.svg" alt="Checkmark" width={24} height={24} />
                                    </div>
                                    <span className="text-[18px] font-medium text-background leading-tight">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}