import React, { useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Check,
    ChevronDown,
    FileText,
    Package,
    ShoppingCart,
    Store,
    Truck,
    Zap,
} from "lucide-react";
import next_day_delivery from "../../../../assets/SDD-NDD/nextday_heroImage.webp";
import business_shipping from "../../../../assets/SDD-NDD/ndd_shipping.webp";
import handset_order from "../../../../assets/SDD-NDD/handset_order.webp";
import ndd_cta from "../../../../assets/SDD-NDD/ndd_cta.webp";
import Footer from "../../../../features/landing/footer/Footer";
import Navbar from "../../../../features/landing/navbar/Navbar";


const NextDayDelivery = () => {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove(
                            "opacity-0",
                            "translate-y-10",
                            "translate-x-10",
                            "-translate-x-10",
                            "scale-95"
                        );

                        entry.target.classList.add(
                            "opacity-100",
                            "translate-y-0",
                            "translate-x-0",
                            "scale-100"
                        );

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const faqs = [
        {
            question: "What is Next-Day Delivery?",
            answer:
                "Next-Day Delivery is a shipping option designed for shipments that need to reach the customer on the following day.",
        },
        {
            question: "Can retail businesses use Next-Day Delivery?",
            answer:
                "Yes. Retail businesses can use Next-Day Delivery when their customers need faster and more predictable delivery.",
        },
        {
            question: "Who is Next-Day Delivery suitable for?",
            answer:
                "It is suitable for e-commerce sellers, retailers, growing businesses and shipments that need a reliable next-day delivery window.",
        },
        {
            question: "Can I track my shipment?",
            answer:
                "Yes. Shipments can be monitored through Nexgo's tracking system throughout the delivery journey.",
        },
        {
            question: "How is Next-Day different from Same-Day Delivery?",
            answer:
                "Same-Day Delivery is intended for shipments that need to arrive on the same day, while Next-Day Delivery provides a delivery window for the following day.",
        },
        {
            question: "Is Next-Day Delivery available for every shipment?",
            answer:
                "Availability depends on courier serviceability, destination, shipment characteristics and the selected delivery service.",
        },
        {
            question: "Can e-commerce businesses use Next-Day Delivery?",
            answer:
                "Yes. E-commerce businesses can use next-day services for orders where customers need faster delivery without requiring same-day fulfillment.",
        },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen overflow-hidden bg-white font-sans text-slate-900">
            <Navbar />

            {/* =====================================================
          BACK BUTTON
      ====================================================== */}
            <div className="fixed left-5 top-5 z-50">
                <button
                    onClick={() => {
                        window.location.href = "/";
                    }}
                    className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
                >
                    <ArrowLeft
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                    Back
                </button>
            </div>

            {/* =====================================================
          HERO
      ====================================================== */}
            <section className="relative overflow-hidden bg-gradient-to-r from-cyan-50 via-white to-white">
                <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-cyan-100/60 blur-3xl" />
                <div className="absolute right-[35%] top-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

                <div className="relative mx-auto flex min-h-[610px] max-w-[1440px] items-center px-6 py-20 sm:px-10 lg:px-16">
                    <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

                        {/* Left */}
                        <div
                            data-reveal
                            className="relative z-10 max-w-[570px] opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                        >
                            <h1 className="max-w-[660px] text-4xl font-extrabold leading-[1.05] tracking-tight text-blue-950 sm:text-5xl lg:text-[58px]">
                                Ship Today.
                                <br />
                                Deliver Tomorrow.
                            </h1>

                            <p className="mt-7 max-w-[510px] text-[15px] leading-7 text-slate-600">
                                When your shipment needs to arrive quickly — but not necessarily
                                within hours, Next-Day Delivery provides a practical delivery
                                window for planned and priority shipments. Move orders,
                                products, documents, and other shipments today with delivery
                                planned for the following day.
                            </p>

                            <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                Start Shipping
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </div>

                        {/* Hero Image */}
                        <div
                            data-reveal
                            className="relative opacity-0 translate-x-10 scale-95 transition-all duration-1000 ease-out"
                        >
                            <div className="absolute -left-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-cyan-100/80 blur-2xl" />

                            <div className="relative overflow-hidden rounded-[36px]">
                                <img
                                    src={next_day_delivery}
                                    alt="Nexgo next day delivery"
                                    loading="eager"
                                    className="h-[360px] w-full object-cover sm:h-[420px] lg:h-[460px]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/30 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="relative bg-white py-20">
                <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
                    <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                        <div
                            data-reveal
                            className="opacity-0 -translate-x-10 transition-all duration-1000 ease-out"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.1em] text-cyan-600">
                                When tomorrow is the right delivery window
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
                                Priority Without the Rush
                            </h2>

                            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-slate-600">
                                Not every shipment needs same-day delivery. Some orders simply
                                need to move quickly and reach their destination the following
                                day.
                            </p>
                        </div>

                        <div
                            data-reveal
                            className="grid grid-cols-2 gap-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out sm:grid-cols-4"
                        >
                            {[
                                {
                                    icon: ShoppingCart,
                                    title: "E-commerce",
                                    sub: "Orders",
                                },
                                {
                                    icon: Store,
                                    title: "Retail",
                                    sub: "Shipments",
                                },
                                {
                                    icon: FileText,
                                    title: "Business",
                                    sub: "Documents",
                                },
                                {
                                    icon: Package,
                                    title: "Planned",
                                    sub: "Shipments",
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group flex min-h-[135px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-100 hover:shadow-xl"
                                    >
                                        <Icon
                                            size={30}
                                            strokeWidth={1.7}
                                            className="text-cyan-500 transition-transform duration-300 group-hover:scale-110"
                                        />

                                        <p className="mt-4 text-xs font-bold text-blue-950">
                                            {item.title}
                                        </p>

                                        <p className="text-xs text-slate-500">{item.sub}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          COURIER PARTNERS
      ====================================================== */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-20">
                <div className="absolute right-[-120px] top-[-100px] h-[400px] w-[400px] rounded-full border border-cyan-200/60" />
                <div className="absolute right-[-80px] top-[-60px] h-[300px] w-[300px] rounded-full border border-cyan-200/50" />

                <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

                    <div
                        data-reveal
                        className="max-w-[700px] opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-600">
                            Courier Partners
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
                            One Platform. Multiple Courier Partners.
                        </h2>

                        <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-slate-600">
                            Ship through the courier network connected to Nexgo, giving
                            businesses access to multiple delivery partners from a single
                            logistics platform.
                        </p>
                    </div>

                    <div
                        data-reveal
                        className="mt-10 overflow-hidden rounded-2xl border border-white bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.07)] opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                    >
                        <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-3 lg:grid-cols-6">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex h-[90px] flex-col items-center justify-center gap-2 transition-colors duration-300 hover:bg-cyan-50"
                                >
                                    <Truck
                                        size={21}
                                        strokeWidth={1.8}
                                        className="text-blue-700"
                                    />

                                    <span className="text-[11px] font-medium text-slate-600">
                                        Courier Partner
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          TWO DELIVERY WINDOWS
      ====================================================== */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

                    <div
                        data-reveal
                        className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-600">
                            Same-Day or Next-Day?
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
                            Two Delivery Windows. Different Levels of Urgency.
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">

                        {/* Same Day */}
                        <div
                            data-reveal
                            className="group rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-7 opacity-0 -translate-x-10 transition-all duration-1000 ease-out sm:p-9"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                                    <Zap
                                        size={29}
                                        strokeWidth={1.7}
                                        className="text-blue-500"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-blue-950">
                                        Same-Day Delivery
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        For shipments that need to arrive today.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 space-y-3">
                                {[
                                    "Urgent documents",
                                    "Contracts",
                                    "Medical supplies",
                                    "Time-sensitive shipments",
                                    "Last-minute essentials",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-slate-600"
                                    >
                                        <Check size={17} className="text-cyan-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Day */}
                        <div
                            data-reveal
                            className="group rounded-2xl bg-gradient-to-br from-cyan-50 to-emerald-50 p-7 opacity-0 translate-x-10 transition-all duration-1000 ease-out sm:p-9"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                                    <CalendarDays
                                        size={29}
                                        strokeWidth={1.7}
                                        className="text-cyan-500"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-blue-950">
                                        Next-Day Delivery
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        For shipments that can arrive tomorrow.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 space-y-3">
                                {[
                                    "E-commerce orders",
                                    "Retail shipments",
                                    "Planned business deliveries",
                                    "Less-urgent priority shipments",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-slate-600"
                                    >
                                        <Check size={17} className="text-cyan-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        data-reveal
                        className="mt-9 flex justify-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                    >
                        <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            Start Shipping
                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>
            </section>

            {/* =====================================================
          BUSINESS SECTION
      ====================================================== */}
            <section className="overflow-hidden bg-gradient-to-r from-cyan-50/80 to-white py-20">
                <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
                    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

                        <div
                            data-reveal
                            className="opacity-0 -translate-x-10 transition-all duration-1000 ease-out"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-600">
                                Made for businesses that ship regularly
                            </p>

                            <h2 className="mt-3 max-w-[560px] text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl">
                                When Delivery Is Part of the Daily Operation
                            </h2>

                            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-slate-600">
                                Next-Day Delivery fits businesses that need to keep orders and
                                products moving without requiring every shipment to be
                                delivered within hours.
                            </p>

                            <div className="mt-9 grid max-w-[500px] grid-cols-3 gap-5">
                                {[
                                    {
                                        icon: ShoppingCart,
                                        title: "E-commerce",
                                        sub: "Sellers",
                                    },
                                    {
                                        icon: Store,
                                        title: "Retailers",
                                        sub: "",
                                    },
                                    {
                                        icon: Package,
                                        title: "Growing",
                                        sub: "Businesses",
                                    },
                                ].map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={index}>
                                            <Icon
                                                size={27}
                                                strokeWidth={1.7}
                                                className="text-cyan-500"
                                            />

                                            <p className="mt-3 text-xs font-bold text-blue-950">
                                                {item.title}
                                            </p>

                                            {item.sub && (
                                                <p className="text-xs text-slate-500">{item.sub}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div
                            data-reveal
                            className="relative opacity-0 translate-x-10 transition-all duration-1000 ease-out"
                        >
                            <div className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan-100 blur-2xl" />

                            <img
                                src={business_shipping}
                                alt="Business shipping with Nexgo"
                                loading="lazy"
                                className="relative h-[360px] w-full rounded-[28px] object-cover shadow-xl sm:h-[430px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          PRACTICAL DELIVERY PACE
      ====================================================== */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        {/* Images */}
                        <div
                            data-reveal
                            className="relative min-h-[430px] opacity-0 -translate-x-10 transition-all duration-1000 ease-out"
                        >
                            <div className="absolute left-[30%] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-100 blur-xl" />

                            <img
                                src={next_day_delivery}
                                alt="Nexgo shipment packing"
                                loading="lazy"
                                className="absolute left-0 top-0 h-[300px] w-[72%] rounded-2xl object-cover shadow-lg"
                            />

                            <img
                                src={handset_order}
                                alt="Nexgo package"
                                loading="lazy"
                                className="absolute bottom-0 right-0 h-[190px] w-[42%] rounded-2xl border-8 border-white object-cover shadow-xl"
                            />
                        </div>

                        {/* Content */}
                        <div
                            data-reveal
                            className="opacity-0 translate-x-10 transition-all duration-1000 ease-out"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-600">
                                A more practical delivery pace
                            </p>

                            <h2 className="mt-3 max-w-[570px] text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl">
                                Not Every Shipment Needs to Move at the Same Speed
                            </h2>

                            <p className="mt-5 max-w-[570px] text-[15px] leading-7 text-slate-600">
                                Some deliveries are urgent. Others simply need to arrive on
                                time the following day.
                            </p>

                            <p className="mt-4 max-w-[570px] text-[15px] leading-7 text-slate-600">
                                Next-Day Delivery provides another option between immediate
                                delivery and a longer standard delivery cycle—giving
                                businesses more flexibility when deciding how quickly a
                                shipment needs to move.
                            </p>

                            <div className="mt-8">
                                <p className="font-serif text-2xl italic leading-tight text-blue-950">
                                    Ship When You're Ready.
                                </p>

                                <p className="font-serif text-2xl italic leading-tight text-blue-950">
                                    Plan for Tomorrow.
                                </p>

                                <div className="mt-2 h-1 w-36 rotate-[-2deg] rounded-full bg-cyan-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          FAQ
      ====================================================== */}
            <section className="bg-gradient-to-b from-cyan-50/70 to-white py-20">
                <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

                    <div
                        data-reveal
                        className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-600">
                            Questions Before You Ship
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-blue-950 sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-x-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                data-reveal
                                className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_5px_25px_rgba(15,23,42,0.04)] opacity-0 translate-y-10 transition-all duration-700 ease-out"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left transition-colors duration-300 hover:bg-slate-50"
                                >
                                    <span className="text-sm font-semibold text-blue-950">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={17}
                                        className={`shrink-0 text-slate-500 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${openFaq === index
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-6 text-slate-600">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
          FINAL CTA
      ====================================================== */}
            <section className="px-5 pb-12">
                <div
                    data-reveal
                    className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[18px] bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-500 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
                >
                    <div className="absolute right-[-80px] top-[-100px] h-[330px] w-[330px] rounded-full bg-cyan-400/20 blur-2xl" />
                    <div className="absolute bottom-[-120px] left-[45%] h-[300px] w-[300px] rounded-full bg-blue-500/30 blur-3xl" />

                    <div className="relative grid min-h-[270px] items-center lg:grid-cols-[1fr_0.8fr]">

                        <div className="px-7 py-12 sm:px-10 lg:px-12">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Ready for Tomorrow?
                            </h2>

                            <p className="mt-3 max-w-[450px] text-sm leading-6 text-blue-100">
                                Keep your orders moving with a delivery timeline designed for
                                the next day.
                            </p>

                            <button className="group mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                Start Shipping
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </div>

                        <div className="relative hidden h-full min-h-[270px] lg:block">
                            <img
                                src={ndd_cta}
                                alt="Nexgo shipping packages"
                                loading="lazy"
                                className="absolute bottom-0 right-8 h-[245px] w-[480px] object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default NextDayDelivery;