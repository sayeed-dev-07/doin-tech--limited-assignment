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
        <section ref={sectionRef} className="relative h-full w-full isolate overflow-hidden bg-[#FAFAFA] px-4 sm:px-6 xl:py-24">

            <div className='absolute xl:block hidden top-0  left-0 w-full h-full z-20'>
                <div className='w-[700px] aspect-square absolute top-0 left-0'>
                    <Image src={'/images/path/bg1.svg'} alt='bgSvg' fill className='object-contain' />
                </div>
                <div className='w-[700px] aspect-square absolute bottom-[-5%] left-[-10%]'>
                    <Image src={'/images/path/path4.svg'} alt='bgSvg' fill className='object-contain' />
                </div>
                <div className='w-[700px] aspect-square absolute top-[30%] left-[-15%]'>
                    <Image src={'/images/path/path2.svg'} alt='bgSvg' fill className='object-contain' />
                </div>
                <div className='w-[700px] aspect-square absolute right-0 -bottom-10'>
                    <Image src={'/images/path/path3.svg'} alt='bgSvg' fill className='object-contain' />
                </div>
            </div>


            <div className="relative z-50 mx-auto flex max-w-[1200px] flex-col gap-14 px-0 py-16 sm:gap-20 sm:py-24 md:px-6 md:py-[120px]">


                <div className="row-1-trigger flex flex-col lg:flex-row items-center gap-10 lg:gap-20">


                    <div className="row-1-text flex-1 flex flex-col items-start w-full lg:max-w-[574px]">
                        <h2 className="mb-6 font-poppins text-3xl font-semibold leading-[1.2] tracking-tight text-background sm:mb-10 sm:text-[44px]">
                            Your Path to Professional Growth Starts Here!
                        </h2>

                        <p className="mb-8 max-w-[477px] text-base leading-[1.6] text-gray-600 sm:mb-14 sm:text-[18px]">
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>

                        <div className="flex items-end gap-7 sm:gap-14">
                            <div className="flex flex-col">
                                <span className="font-poppins text-3xl font-medium leading-[1.2] text-[#003BE2] sm:text-[36px]">12K</span>
                                <span className="mt-1 text-sm leading-tight text-gray-600 sm:text-[18px]">Students</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-poppins text-3xl font-medium leading-[1.2] text-[#003BE2] sm:text-[36px]">70+</span>
                                <span className="mt-1 text-sm leading-tight text-gray-600 sm:text-[18px]">Courses</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-poppins text-3xl font-medium leading-[1.2] text-[#003BE2] sm:text-[36px]">16</span>
                                <span className="mt-1 text-sm leading-tight text-gray-600 sm:text-[18px]">Creators</span>
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
                        <h2 className="mb-6 max-w-[400px] font-poppins text-3xl font-semibold leading-[1.2] tracking-tight text-background sm:mb-8 sm:text-[44px]">
                            Create & Manage Courses Easily.
                        </h2>

                        <p className="mb-8 max-w-[574px] text-base font-bold leading-7 text-background sm:mb-10 sm:text-[18px]">
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
                                    <span className="text-base font-medium leading-tight text-background sm:text-[18px]">
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
