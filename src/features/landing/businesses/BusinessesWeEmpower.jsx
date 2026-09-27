import socialSellers from "../../../assets/images/social-sellers.webp"
import ecommerce from "../../../assets/images/ecommerce.png";
import retailers from "../../../assets/images/retailers.png"
import { Sparkles } from "lucide-react";
import manufacturers from "../../../assets/images/Manufacturers.jpeg"

const businessesData = [
    {
        id: 1,
        image: socialSellers,
        alt: "Nexgo logistics solutions for social sellers",
    },
    {
        id: 2,
        image: ecommerce,
        alt: "Nexgo logistics solution for e-commerce businesses",
    },
    {
        id: 3,
        image: retailers,
        alt: "Nexgo logistics solution for retailers"
    },
]

const BusinessesWeEmpower = () => {
    return (
        <>
            <section className="w-full bg-[#F8FCFB] py-6 sm:py-10 lg:py-14">
                <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8 lg:px-10">

                    {/* Section Heading */}
                    <div className="mx-auto mb-5 max-w-[900px] text-center sm:mb-7 lg:mb-9">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0BA88A]/25 bg-[#F3FCF9] px-5 py-2">
                            <span className="text-[#0BA88A]">
                                <Sparkles className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-bold text-[#087F6A] sm:text-base">
                                Built For Every Business.
                            </span>
                        </div>

                        <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-1.5px] text-[#142338] sm:text-[46px] lg:text-[48px]">
                            Businesses We{" "}
                            <span className="text-[#0BA88A]">
                                Empower
                            </span>
                        </h2>
                        <p className="mx-auto mt-2 max-w-[560px] text-[16px] leading-6 text-green-950 sm:text-[18px]">
                            We help the smallest to the largest business shipping effortlessly,
                            be it Pan India or anywhere in the world.
                        </p>
                    </div>

                    {/* Business cards  */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
                        {businessesData.map((business) => (
                            <div
                                key={business.id}
                                className="flex min-w-0 flex-col"
                            >
                                <div className="w-full overflow-hidden rounded-[20px]">
                                    <img
                                        src={business.image}
                                        alt={business.alt}
                                        className="block h-auto w-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-10 w-full px-5 py-10 sm:mt-14 sm:px-8 sm:py-14 lg:mt-20 lg:px-10 lg:py-20">
                <div className="mx-auto grid max-w-[1220px] items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
                    <div className="text-[#142338]">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold   text-orange-600">
                            <Sparkles className="h-4 w-4" />
                            For Manufacturers
                        </div>

                        <h2 className="max-w-[470px] text-xl font-bold leading-tight sm:text-4xl lg:text-3xl text-blue-950">
                            Move more with logistics built for scale.
                        </h2>

                        <p className="mt-5 max-w-[480px] text-sm leading-7  sm:text-base text-blue-950">
                            From factory floors to customers across India, Nexgo helps manufacturers coordinate high-volume shipping with dependable delivery support.
                        </p>

                        <div className="mt-7 space-y-4 text-sm text-slate-700">
                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                                <span>Handle large shipment volumes with confidence.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                                <span>Keep operations moving with streamlined fulfilment.</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                                <span>Deliver reliably with real-time shipment visibility.</span>
                            </div>
                        </div>
                    </div>

                    <img
                        src={manufacturers}
                        alt="Nexgo logistics solutions for manufacturers"
                        className="mx-auto block h-auto max-h-[380px] w-auto max-w-full rounded-[20px] object-contain shadow-[0_20px_50px_rgba(6,21,47,0.2)] sm:max-h-[520px] lg:max-h-[580px]"
                    />
                </div>
            </section>
        </>
    );
};

export default BusinessesWeEmpower;
