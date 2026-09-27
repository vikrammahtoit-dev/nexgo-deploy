import HeroContent from "./HeroContent";
import hero_illustration from "../../../assets/images/nexgo_heroImage.webp";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white">

            {/* Background glow */}

            <div className="pointer-events-none absolute inset-0">

                <div className="absolute left-[-180px] top-[80px] h-[450px] w-[450px] rounded-full bg-[#fff1e9] blur-[120px]" />

                <div className="absolute right-[-180px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[#edf3ff] blur-[120px]" />

            </div>


            {/* Hero Container */}


            <div className="relative mx-auto grid min-h-[530px] w-[calc(100%-32px)] max-w-[1500px] grid-cols-1 items-center  sm:w-[calc(100%-48px)] lg:grid-cols-[40%_60%] xl:w-[calc(100%-80px)]">

                {/* LEFT — 40% */}

                <HeroContent />


                {/* RIGHT — 60% */}

                <div className="group relative mx-auto flex w-full min-w-0 items-center justify-center py-8 lg:py-0">
                    <img
                        src={hero_illustration}
                        alt="Nexgo shipping and delivery management platform"
                        className="h-auto w-full max-w-[820px] object-contain drop-shadow-[0_24px_30px_rgba(19,47,84,0.12)] motion-reduce:animate-none animate-[hero-float_6s_ease-in-out_infinite] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                </div>

            </div>

        </section>
    );
};

export default Hero;