/* eslint-disable react-hooks/refs */
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TestimonialCardProps } from '@/types';



export default function TestimonialCard({ data }: TestimonialCardProps) {


    return (
        <div
            className="testimonial-card flex flex-col items-start p-6 gap-6 bg-foreground rounded-[24px] w-full md:max-w-[374px] shadow-sm"
        >
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden bg-gray-100 shrink-0">
                <Image
                    src={data.imgSrc}
                    alt={data.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col items-start w-full">
                <h4 className="font-poppins font-semibold text-[20px] leading-[1.2] tracking-tight text-background">
                    {data.name}
                </h4>
                <span className="text-[18px] leading-[1.6] text-[#003BE2]">
                    {data.role}
                </span>
            </div>

            <p className="text-[18px] leading-[1.6] text-[#4F4F4F]">
                {data.quote}
            </p>
        </div>
    );
}
