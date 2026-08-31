import { useState } from "react";
import { billingOptions, pricingPlans, shippingBenefits } from "./Pricing.data";
import { ArrowRight, Check, ChevronDown, Clock3, Headphones, LocateFixed, MapPin, Network, ShieldCheck, Tag, UsersRound } from "lucide-react";
import Navbar from "../../../features/landing/navbar/Navbar";
import Footer from "../../../features/landing/footer/Footer";



const PricingCard = ({ plan }) => {
    const Icon = plan.icon;

    return (
        <div
            className={`relative flex min-h-[425px] flex-col rounded-[15px] bg-white px-[22px] py-[24px] shadow-[0_3px_18px_rgba(9,37,93,0.07)] transition-all duration-200 ${plan.highlighted
                ? "border border-[#ff620c]"
                : "border border-[#edf0f6]"
                }`}
        >

            {/* Popular badge */}
            {plan.badge && (
                <div className="absolute left-1/2 top-[-1px] -translate-x-1/2">
                    <div className="relative flex h-[25px] min-w-[126px] items-center justify-center rounded-b-[12px] bg-[#ff620c] px-4 text-[11px] font-bold text-white">
                        {plan.badge}

                        {/* <span className="absolute left-[-9px] top-0 border-b-[12px] border-r-[9px] border-b-[#ff620c] border-r-transparent" />
                        <span className="absolute right-[-9px] top-0 border-b-[12px] border-l-[9px] border-b-[#ff620c] border-l-transparent" /> */}
                    </div>
                </div>
            )}

            {/* Card heading */}
            <div className="flex items-center gap-4">

                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#06245F] text-white shadow-sm">
                    <Icon size={15} strokeWidth={2.2} />
                </div>

                <div>
                    <h3 className="text-[18px] font-extrabold leading-5 text-[#09255D]">
                        {plan.name}
                    </h3>

                    <p className="mt-1 text-[13px] font-medium text-[#09255D]">
                        {plan.subtitle}
                    </p>
                </div>
            </div>

            <div className="mt-4 h-px bg-[#e5e9f1]" />

            {/* Shipments */}
            <p className="mt-3 text-[14px] font-medium text-[#09255D]">
                {plan.shipments}
            </p>

            {/* Price */}
            <div className="mt-2 flex min-h-[43px] items-end">

                {plan.price.startsWith("₹") ? (
                    <>
                        <span className="text-[34px] font-extrabold leading-none tracking-[-1.5px] text-[#09255D]">
                            {plan.price}
                        </span>

                        <span className="mb-[2px] ml-2 text-[12px] font-medium text-[#09255D]">
                            {plan.suffix}
                        </span>
                    </>
                ) : (
                    <span className="text-[29px] font-extrabold leading-none tracking-[-1px] text-[#09255D]">
                        {plan.price}
                    </span>
                )}
            </div>

            <p className="mt-1 text-[12px] font-medium text-[#09255D]">
                {plan.billing}
            </p>

            {/* Rate */}
            <div className="mt-3 flex h-[34px] items-center justify-center rounded-[7px] bg-[#f0f4fc] text-[12px] font-semibold text-[#09255D]">
                {plan.rate}
            </div>

            {/* CTA */}
            <button
                className={`mt-3 h-[37px] w-full rounded-[7px] text-[14px] font-bold transition-all ${plan.highlighted
                    ? "bg-[#ff5a00] text-white hover:bg-[#eb5000]"
                    : plan.id === "growth"
                        ? "bg-[#06245F] text-white hover:bg-[#051e50]"
                        : "border border-[#06245F] bg-white text-[#06245F] hover:bg-[#06245F] hover:text-white"
                    }`}
            >
                {plan.button}
            </button>

            {/* Features */}
            <div className="mt-3 space-y-[6px]">
                {plan.features.map((feature) => (
                    <div
                        key={feature}
                        className="flex items-start gap-2 text-[12.5px] leading-[18px] text-[#09255D]"
                    >
                        <Check
                            size={17}
                            strokeWidth={3}
                            className="mt-[1px] shrink-0 text-[#06245F]"
                        />

                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const InputField = ({ label, placeholder, icon }) => {
    return (
        <label className="block max-w-[126px]">
            <span className="mt-1 block  text-[10px] font-bold">
                {label}
            </span>

            <div className="flex h-[35px] items-center gap-2 rounded-[7px] border border-[#DCE2EC] bg-white px-3">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-[#64718B]"
                />

                <span className="text-[#09255D]">
                    {icon}
                </span>
            </div>
        </label>
    );
};

const SelectField = ({ label, value }) => {
    return (
        <label className="block">
            <span className="mb-1 block text-[10px] font-bold">
                {label}
            </span>
            <div className="flex h-[39px] items-center gap-2 rounded-[7px] border border-slate-100 bg-white px-3">
                <span className="text-[11px] font-medium">
                    {value}
                </span>
                <ChevronDown size={15} />
            </div>
        </label>
    );
};

const MiniBenefit = ({ icon, text }) => {
    return (
        <div className="flex items-center gap-2 text-[11px] font-medium">
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}


const ShippingCalculator = () => {
    return (
        <div className="rounded-[15px] border border-[#edf0f6] bg-white px-7 py-4 shadow-[0_3px_18px_rgba(9,37,93,0.06)]">

            <h3 className="text-[25px] font-extrabold leading-7 tracking-[-0.8px] text-[#09255D]">
                Calculate Your Shipping Cost
            </h3>

            <p className="mt-1 text-[12.5px] text-[#2f4268]">
                Get instant rates from multiple courier partners and choose the best option.
            </p>

            {/* Inputs */}
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-[1.15fr_1.15fr_.8fr_1fr_1fr_auto]">

                <InputField
                    label="Pickup Pincode"
                    placeholder="Enter pincode"
                    icon={<MapPin size={14} />}
                />

                <InputField
                    label="Delivery Pincode"
                    placeholder="Enter pincode"
                    icon={<MapPin size={16} />}
                />

                <SelectField
                    label="Weight"
                    value="0.5 Kg"
                />

                <SelectField
                    label="Shipment Type"
                    value="Forward"
                />

                <SelectField
                    label="Payment Mode"
                    value="Prepaid"
                />

                <button className="mt-auto flex h-[39px] items-center justify-center gap-2 rounded-[8px] bg-[#06245F] px-5 text-[14px] font-bold text-white transition hover:bg-[#051e50]">
                    Get Rates
                    <ArrowRight
                        size={21}
                        strokeWidth={2.5}
                        className="text-[#ff5a00]"
                    />
                </button>
            </div>

            {/* Calculator benefits */}
            <div className="mt-4 grid grid-cols-2 gap-y-3 md:grid-cols-4">

                <MiniBenefit
                    icon={<Clock3 size={18} />}
                    text="Real-time rates"
                />

                <MiniBenefit
                    icon={<UsersRound size={18} />}
                    text="25+ Courier Partners"
                />

                <MiniBenefit
                    icon={<ShieldCheck size={18} />}
                    text="Best Price Guarantee"
                />

                <MiniBenefit
                    icon={<ShieldCheck size={18} />}
                    text="Secure & Reliable"
                />
            </div>
        </div>
    );
};

const ReadyToShipCard = () => {
    return (
        <div className="flex flex-col justify-between rounded-[15px] border border-slate-200 bg-white px-7 py-5 shadow-[0_3px_18px_rgba(9,37,93,0.06)]">
            <div>
                <h3 className="max-w-[270px] text-[20px] font-extrabold leading-8 tracking-[-0.7px] ">
                    Ready to Ship Smarter
                    <br />
                    with <span className="text-[#ff5a00]">Nexgo? </span>
                </h3>
                <p className="mt-2 max-w-[285px] text-[13px] leading-6 text-[#314568]">
                    Join thousands of businesses shipping
                    <br />
                    faster, cheaper & smarter.
                </p>
            </div>
            <button className="mt-3 flex h-[38px] w-fit items-center gap-4 rounded-full bg-[#FF5A00] px-5 text-[14px] font-bold text-white transition hover:bg-orange-600">
                Get Started Now
                <ArrowRight size={20} strokeWidth={2.4} />
            </button>
        </div>
    );
};

const BenefitsBar = () => {
    const iconMap = {
        tag: Tag,
        network: Network,
        location: LocateFixed,
        support: Headphones,
    };

    return (
        <div className="mt-4 grid min-h-[60px] grid-cols-2 overflow-hidden rounded-[14px] bg-[#06245F] md:grid-cols-4">

            {shippingBenefits.map((benefit) => {
                const Icon = iconMap[benefit.icon];

                return (
                    <div
                        key={benefit.title}
                        className="flex items-center justify-center gap-4 px-4 py-3"
                    >
                        <Icon
                            size={26}
                            strokeWidth={2}
                            className="shrink-0 text-[#ff5a00]"
                        />

                        <div>
                            <p className="text-[12px] font-bold text-white">
                                {benefit.title}
                            </p>

                            <p className="text-[10px] text-white/90">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};





const Pricing = () => {
    const [billing, setBilling] = useState("Monthly")
    return (
        <main>
            <Navbar />
            <section className="relative w-full overflow-hidden bg-[#FBFCFF] py-10 text-[#06245F]">
                {/* Background */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-[-180px] h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
                    <div className="absolute right-[3%] top-[60px] h-[180px] w-[180px] rounded-full bg-[#fff4ec] opacity-40 blur-3xl" />
                    <div className="absolute left-[4%] top-[430px] h-[220px] w-[220px] rounded-full bg-[#edf3ff] opacity-50 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8">
                    {/* Header */}
                    <div className="relative text-center">
                        {/* Pricing pill  */}
                        <div className="mx-auto inline-flex h-[31px] min-w-[68px] items-center justify-center rounded-full bg-[#06245F] px-4 text-[14px] text-white font-bold tracking-wide shadow-sm">
                            PRICING
                        </div>

                        {/* decorative route */}


                        {/* Heading  */}
                        <h2 className="mx-auto mt-4 max-w-[700px] text-[42px] font-bold leading-[1.08] tracking-[-1.8px] text-[#09255D] sm:text-[50px] lg:text-[52px]">
                            <span>Shipping plans that </span>
                            <span className="text-orange-600">Scale</span>
                            <br />
                            <span>with your Business</span>
                        </h2>
                        <p className="mt-3 text-[17px] leading-7 text-[#3F4E70]">No hidden charges. No surprises
                            <br />
                            Choose the perfect plan for your shipping needs.
                        </p>

                        {/* Billing toggle */}
                        <div className="mx-auto mt-5 flex h-[49px] max-w-[525px] rounded-full border border-[#e5eaf3] bg-white p-[4px] shadow-[0_4px_18px_rgba(15,45,100,0.06)]">

                            {billingOptions.map((option) => {
                                const active = billing === option.label;

                                return (
                                    <button
                                        key={option.label}
                                        onClick={() => setBilling(option.label)}
                                        className={`flex flex-1 items-center justify-center rounded-full transition-all duration-200 ${active
                                            ? "bg-[#06245F] text-white shadow-sm"
                                            : "text-[#09255D]"
                                            }`}
                                    >
                                        <span className="flex flex-col items-center justify-center leading-none">
                                            <span className="text-[14px] font-semibold">
                                                {option.label}
                                            </span>

                                            {option.saving && (
                                                <span
                                                    className={`mt-[3px] text-[11px] font-medium ${active ? "text-white" : "text-green-600"
                                                        }`}
                                                >
                                                    {option.saving}
                                                </span>
                                            )}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* Pricing Cards */}
                    <div className="mt-32 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {pricingPlans.map((plan) => {
                            return (
                                <PricingCard
                                    key={plan.id}
                                    plan={plan}
                                />
                            )
                        })}
                    </div>

                    {/* Lower section */}
                    <div className="mt-60 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
                        <ShippingCalculator />

                        {/* CTA */}
                        <ReadyToShipCard />

                        {/* Benefits */}
                        <BenefitsBar />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default Pricing
