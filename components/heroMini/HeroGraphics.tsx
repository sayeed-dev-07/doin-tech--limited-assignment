import Image from "next/image";

const HeroGraphics = () => {
    return (
        <div className="relative mt-8 md:mt-12 w-full max-w-[900px] flex-1 flex justify-center items-end min-h-0">
            <div className="big-circle opacity-0 absolute bottom-0 w-full max-w-[500px] md:max-w-[900px] h-full z-0">
                <Image
                    src="/images/hero/bigCircle.png"
                    alt="Background circle"
                    fill
                    className="object-contain object-bottom"
                />
            </div>

            <div className="human-img opacity-0 absolute bottom-0 w-[240px] md:w-[400px] lg:w-[560px] h-[90%] md:h-[95%] z-10">
                <Image
                    src="/images/hero/human.png"
                    alt="Student learning on laptop"
                    fill
                    className="object-contain object-bottom"
                    priority
                />
            </div>

            <div className="sticker opacity-0 absolute left-[-2%] md:left-[5%] lg:left-[10%] top-[10%] md:top-[20%] w-[130px] md:w-[220px] z-20">
                <Image
                    src="/images/hero/design.png"
                    alt="UI/UX Design sticker"
                    width={220}
                    height={80}
                    className="w-full h-auto object-contain drop-shadow-xl"
                />
            </div>

            <div className="sticker opacity-0 absolute left-[-2%] md:left-[2%] lg:left-[8%] bottom-[5%] md:bottom-[15%] w-[140px] md:w-[240px] z-20">
                <Image
                    src="/images/hero/students.png"
                    alt="Happy Students sticker"
                    width={240}
                    height={90}
                    className="w-full h-auto object-contain drop-shadow-xl"
                />
            </div>

            <div className="sticker opacity-0 absolute right-[-2%] md:right-[2%] lg:right-[8%] top-[30%] md:top-[40%] w-[130px] md:w-[220px] z-20">
                <Image
                    src="/images/hero/progress.png"
                    alt="Learning Progress sticker"
                    width={220}
                    height={120}
                    className="w-full h-auto object-contain drop-shadow-xl"
                />
            </div>
        </div>
    );
};

export default HeroGraphics;