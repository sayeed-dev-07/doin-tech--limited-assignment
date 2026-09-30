import BackgroundShapes from '@/components/heroMini/BackgroundShapes';
import Image from 'next/image';
import React from 'react';

const CreatorSection = () => {
    return (
        <div className='bg-[#0038E2] overflow-hidden relative py-6 flex-col flex items-center justify-center  px-4 sm:px-6 sm:py-12 xl:py-21 bg-[size:60px_60px] md:bg-[size:120px_120px]'
            style={{
                backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
        `,

                backgroundPosition: 'center top'
            }}
        >

            <BackgroundShapes />

            <div className='max-w-[1200px] relative z-20 flex flex-col items-center justify-center gap-4 sm:gap-10 text-foreground mx-auto text-center'>
                <p className='font-poppins max-w-[710px]  font-semibold text-[44px]'>Unlock Your Potential as a Creator with ByteSpace</p>
                <p className='text-[#F5F5F6] max-w-[964px] text-[18px]'>Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.</p>
            </div>

        </div>
    );
};

export default CreatorSection;