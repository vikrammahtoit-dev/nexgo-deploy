import Navbar from "../../../features/landing/navbar/Navbar";
import SMEs_illustration from "../../../assets/images/SMEs_image.jpg"
import { ArrowRight, Clock3, Cloud, Rocket, TrendingUp } from "lucide-react";
import ChallengeImages from "../../../assets/images/business-challenge-illustration.webp"
import Footer from "../../../features/landing/footer/Footer";

const challenges = [
    "Shipping process depend on manual coordination",
    "Shipment volumes start increasing",
    "Logistics takes more time and resources",
    "Managing different shipping requirements becomes difficult",
    "Business need better control over their operational cost"
];

const helpCards = [
    {
        icon: Rocket,
        title: "Start Without Heavy Logistics Infrastructure",
        text: "Begin shipping without building a large in-house logistics operation.",
        iconClass: "bg-[#e7f1ff] text-[#1675F5]",
    },
    {
        icon: TrendingUp,
        title: "Scale with your Business",
        text: "Increase your shipping capacity as your business and shipment volumes grow.",
        iconClass: "bg-[#eeeaff] text-[#7654f5]",
    },
    {
        icon: Cloud,
        title: "Centralize Shipping Operations",
        text: "Manage shipping activities through one platform instead of coordinating across multiple systems.",
        iconClass: "bg-[#e5f8f2] text-[#16a77b]",
    },
    {
        icon: Clock3,
        title: "Reduce Operational Work",
        text: "Simplify repetitive logistics tasks and reduce manual coordination.",
        iconClass: "bg-[#eeeaff] text-[#7654f5]",
    },
]

const SMEsStartups = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero  */}
            <section className="relative isolate min-h-[470px] overflow-hidden bg-slate-50 ">
                <div className="absolute inset-0 z-0">
                    <img
                        src={SMEs_illustration}
                        alt="Founder working in a modern startup office"
                        className="absolute right-0 top-0 h-full w-full object-cover object-[67%_center] md:w-[70%]"
                    />
                    {/* Main Fade */}
                    <div className="absolute inset-0 bg-gradient-to-r from-bg-slate-50 via-[#eef7ff]/95 via-[28%] via-[#eef7ff]/45 to-transparent" />
                    {/* Slight bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#EEF7FF] to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 mx-auto flex min-h-[470px] max-w-[1180px] items-center px-5 lg:px-0">
                    <div className="w-full pb-10  md:w-[53%]">
                        <div className="inline-flex rounded-full bg-[#DCECFF] px-4 py-2 text-[14px] font-medium text-[#1670ED]">
                            SMEs & Startups
                        </div>

                        <h1 className="mt-5 max-w-[620px] text-[42px] font-bold leading-[1.08] tracking-[-1.5px] text-[#0B3273] sm:text-[46px] lg:text-[52px]">
                            Ship Smarter as
                            <br />
                            You Build Your Business
                        </h1>

                        <p className="mt-5 max-w-[510px] text-[16px] leading-[1.65] text-[#5278AD]">
                            Nexgo help SMEs & startups build and manage a reliable
                            shipping operation without the complexity of managing
                            logistics on their own.
                        </p>

                        <button className="mt-7 inline-flex items-center gap-3 rounded-[16px] bg-blue-500 px-7 py-3.5 text-15px] font-semibold text-white shadow-[0_8px_20px_rgba(20,117,245,.2)] transition hover:bg-blue-700">
                            Get Started
                            <ArrowRight size={17} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Business Challenges */}
            <section className="bg-white py-12 lg:py-14">
                <div className="mx-auto grid max-w-[1180px] items-center gap-0 px-5 lg:grid-cols-[1fr_1fr] lg:px-0">
                    {/* Left */}
                    <div>
                        <h2 className="text-30px font-bold tracking-[-0.7px] text-[#0B3273] md:text-[32px]">
                            The Business Challenge
                        </h2>
                        <p className="mt-3 max-w-[420px] text-[15px] leading-7 text-[#6482B0]">
                            As a business grows, logistics can quickly become to
                            difficult to manage.
                        </p>

                        <div className="mt-6 space-y-4">
                            {challenges.map((challenge) => (
                                <div
                                    key={challenge}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-[3px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"> ! </span>
                                    <span className="text-[15px] leading-5 text-[#5677A9]">{challenge}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - image  */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* soft background glow */}
                        <div className="absolute inset-8 rounded-full bg-[#EDF6FF] blur-3xl" />
                        <img
                            src={ChallengeImages}
                            alt="Shipping Challenge illustration"
                            className="relative z-10 w-full max-[540px] object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* How nexgo helps */}
            <section className="bg-[#f3f9ff] py-12 lg:py-14">
                <div className="mx-auto max-w-[1180px] px-5 lg:px-0">
                    <h2 className="text-4xl font-bold tracking-[-0.7px] text-[#0B3273] md:text-4xl">
                        How Nexgo Helps
                    </h2>
                    <p className="mt-2 max-w-[580px] text-[15px] leading-6 text-slate-600">
                        Nexgo provides the shipping infrastruce business need
                        to manage their logistics as they grow.
                    </p>

                    <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {helpCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={card.title}
                                    className="min-h-[205px] rounded-xl border border-[#DFEBF8] bg-white p-5 shadow-[0_6px_25px_rgba(28,91,160,.035)] transition hover:translate-y-1 hover:shadow-[0_12px_35px_rgba(28,91,160,.09)]"
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-full ${card.iconClass}`}
                                    >
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="mt-5 text-[15px] font-bold leading-5 text-[#0B3B83]">
                                        {card.title}
                                    </h3>
                                    <p className="mt-3 text-[13px] leading-5 text-[#6787B5]">
                                        {card.text}
                                    </p>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA button */}
            <section className="bg-white px-5 pb-10 pt-2 lg:px-0">
                <div className="relative mx-auto max-w-[880px] overflow-hidden rounded-xl bg-gradient-to-r from-[#123E83] via-[#1768DC] to-[#2D82F4]">
                    {/* Background decoration */}
                    <div className="absolute right-[-50px] top-[-100px] h-[280px] rounded-full bg-white/5" />
                    <div className="absolute bottom-[-120px] right-[300px] h-[240px] w-[240px] rounded-full bg-white/5" />

                    <div className="relative z-10 px-8 py-8 md:px-10 flex items-center justify-center text-center">
                        <div className="max-w-[600px] ">
                            <h2 className="text-[24px] font-bold text-white md:text-[25px]">
                                Build Your Shipping Operation With Nexgo
                            </h2>
                            <p className="mt-2 max-w-[520px] text-[15px] leading-6 text-blue-100">
                                Start with infrastructure you need today and scale your shipping operations as your business grows.
                            </p>

                            <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-[14px] font-semibold text-[#1765D3] shadow-md transition hover:bg-blue-50">
                                Get Started
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />
        </main>
    );
};

export default SMEsStartups;