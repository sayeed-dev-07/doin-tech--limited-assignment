const HeroText: React.FC = () => {
    return (
        <>
            <h1 className="hero-content opacity-0 text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mt-4">
                Get Access to Hundreds <br className="hidden md:block" />
                Courses Available
            </h1>

            <p className="hero-content opacity-0 mt-4 md:mt-6 text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl font-light">
                Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
        </>
    );
};

export default HeroText;