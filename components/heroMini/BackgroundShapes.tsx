import Image from "next/image";

const BackgroundShapes = () => {
    return (
        <>
            <div className="absolute top-[25%] left-0 -translate-x-[20%] w-[40px] sm:w-[70px] md:w-[100px] lg:w-[150px] xl:w-[220px] opacity-80 z-0">
                <Image src="/images/hero/shape1.png" alt="shape" width={220} height={220} className="w-full h-auto object-contain" />
            </div>
            <div className="absolute top-[49%] left-[10%] -translate-x-[20%] -translate-y-1/2 w-[40px] sm:w-[90px] md:w-[105px] lg:w-[120px] xl:w-[130px] opacity-90 z-0">
                <Image src="/images/hero/shape2.png" alt="shape" width={130} height={130} className="w-full h-auto object-contain" />
            </div>
            <div className="absolute bottom-[6%] left-[15%] -translate-x-[18%] w-[40px] sm:w-[145px] md:w-[175px] lg:w-[220px] xl:w-[260px] z-0">
                <Image src="/images/hero/shape3.png" alt="shape" width={260} height={260} className="w-full h-auto object-contain" />
            </div>

            {/* Right edge shapes */}
            <div className="absolute top-[35%] right-[10%] translate-x-[20%] w-[40px] sm:w-[130px] md:w-[160px] lg:w-[195px] xl:w-[230px] z-0">
                <Image src="/images/hero/shape4.png" alt="shape" width={230} height={230} className="w-full h-auto object-contain" />
            </div>
            <div className="absolute top-[77%] right-[10%] translate-x-[20%] -translate-y-1/2 w-[40px] sm:w-[90px] md:w-[110px] lg:w-[135px] xl:w-[160px] z-0">
                <Image src="/images/hero/shape5.png" alt="shape" width={160} height={160} className="w-full h-auto object-contain" />
            </div>
            <div className="absolute bottom-[42%] right-0 translate-x-[20%] w-[40px] sm:w-[110px] md:w-[140px] lg:w-[170px] xl:w-[200px] z-0">
                <Image src="/images/hero/shape6.png" alt="shape" width={200} height={200} className="w-full h-auto object-contain" />
            </div>
        </>
    );
};

export default BackgroundShapes;