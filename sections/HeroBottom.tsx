import Image from 'next/image';
import React from 'react';
const logos = [
    {
        id: 1,
        link: '/images/heroBottom/logo1.png',
        alt: 'logo1'
    },
    {
        id: 2,
        link: '/images/heroBottom/logo2.png',
        alt: 'logo2'
    },
    {
        id: 3,
        link: '/images/heroBottom/logo3.png',
        alt: 'logo3'
    },
    {
        id: 4,
        link: '/images/heroBottom/logo4.png',
        alt: 'logo4'
    },
    {
        id: 5,
        link: '/images/heroBottom/logo5.png',
        alt: 'logo5'
    }
]

const HeroBottom = () => {
    return (
        <div className='flex  justify-center flex-wrap items-center gap-8 lg:gap-[72px] py-8 md:py-12 bg-[#F5F5F6]'>
            {logos.map((logo) => (
                <Image key={logo.id} id={logo.id.toString()} src={logo.link} alt={logo.alt} width={170} height={42} />
            ))}
        </div>
    );
};

export default HeroBottom;