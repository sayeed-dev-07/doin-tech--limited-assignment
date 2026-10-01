import BackgroundShapes from '@/components/heroMini/BackgroundShapes';
import Image from 'next/image';
import React from 'react';

const CreatorSection = () => {
    return (
        <div className='relative flex flex-col items-center justify-center overflow-hidden bg-[#0038E2] px-4 py-10 sm:px-6 sm:py-12 xl:py-21 bg-[size:60px_60px] md:bg-[size:120px_120px]'
            style={{
                backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
        `,

                backgroundPosition: 'center top'
            }}
        >

            <BackgroundShapes />

            <div className='relative z-20 mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 text-center text-foreground sm:gap-10'>
                <p className='max-w-[710px] font-poppins text-3xl font-semibold sm:text-[44px]'>Unlock Your Potential as a Creator with ByteSpace</p>
                <p className='max-w-[964px] text-base text-[#F5F5F6] sm:text-[18px]'>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
            </div>

        </div>
    );
};

export default CreatorSection;
