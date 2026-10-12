import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, HeartPulse, ShoppingCart, Gift, BriefcaseBusiness, Package, MapPin, Truck, CheckCircle2, CalendarDays, Store, Users, Building2, Route, Headphones, RefreshCw, Eye, } from "lucide-react";

import Navbar from "../../../../features/landing/navbar/Navbar";
import Same_Day from "../../../../assets/SDD-NDD/same Day_image.webp";
import urgent_shipment from "../../../../assets/SDD-NDD/medical_healthcare.webp";
import tracking_order from "../../../../assets/images/Better-tracking.webp";
import e_commerce from "../../../../assets/SDD-NDD/ecommerce_sellers.png";
import retailer_store from "../../../../assets/SDD-NDD/retailer_stores.webp";
import corporate_client from "../../../../assets/SDD-NDD/corporate_clients.png";
import healthcare_provider from "../../../../assets/SDD-NDD/healthcare.png";
import individual from "../../../../assets/SDD-NDD/individual.png";
import service_delivery from "../../../../assets/SDD-NDD/service_delivery.webp";

import bluedart from "../../../../assets/logos/delhivery.png";
import delhivery from "../../../../assets/logos/bluedart.svg";
import Footer from "../../../../features/landing/footer/Footer";

/* =========================================================
   DATA
========================================================= */

const sectionTwoCards = [
    {
        title: "Urgent Documents",
        description:
            "Move important business documents, contracts, and other time-sensitive paperwork, when deadlines matter.",
        icon: FileText,
    },
    {
        title: "Medical & Healthcare Supplies",
        description:
            "Support urgent movement of medical, pharmaceutical, and healthcare-related supplies.",
        icon: HeartPulse,
    },
    {
        title: "E-commerce Orders",
        description:
            "Give customers a faster delivery option for orders that need to reach them within the same day.",
        icon: ShoppingCart,
    },
    {
        title: "Last-Minute Essentials",
        description:
            "Deliver gifts, personal essentials, and other items that cannot wait for a regular delivery window.",
        icon: Gift,
    },
    {
        title: "Business-Critical Shipments",
        description:
            "Move important shipments quickly when delays could affect business commitments or opportunities.",
        icon: BriefcaseBusiness,
    },
];

const deliverySteps = [
    {
        icon: ShoppingCart,
        title: "Book Online",
        text: "Create your same-day delivery request through the available platform.",
    },
    {
        icon: Package,
        title: "Quick Pickup",
        text: "Your shipment is picked up and prepared for delivery within the service window.",
    },
    {
        icon: MapPin,
        title: "Track in Real Time",
        text: "Follow your shipment as it moves through the delivery journey with status updates.",
    },
    {
        icon: CheckCircle2,
        title: "Delivered Today",
        text: "Your package reaches its destination within the same-day delivery window.",
    },
];

const timelineCards = [
    {
        icon: RefreshCw,
        title: "Same-Day Delivery",
        text: "For shipments where waiting until tomorrow isn't an option.",
        items: [
            "Urgent documents",
            "Contracts",
            "Medical supplies",
            "Time-sensitive orders",
            "Last-minute gifts and essentials",
        ],
    },
    {
        icon: CalendarDays,
        title: "Next-Day Delivery",
        text: "For shipments that need priority delivery but don't require delivery within the same day.",
        items: [
            "E-commerce shipments",
            "Retail orders",
            "Less urgent business deliveries",
            "Shipments planned for the following day",
        ],
    },
];

const audienceCards = [
    {
        image: e_commerce,
        icon: ShoppingCart,
        title: "E-commerce Sellers",
        text: "Offer customers a faster delivery option for time-sensitive purchases.",
    },
    {
        image: corporate_client,
        icon: Building2,
        title: "Corporate Clients",
        text: "Move important documents, contracts, and business materials when deadlines matter.",
    },
    {
        image: healthcare_provider,
        icon: HeartPulse,
        title: "Healthcare Providers",
        text: "Support the urgent delivery of medical supplies and reports.",
    },
    {
        image: individual,
        icon: Users,
        title: "Individuals",
        text: "Send gifts, essentials, and personal shipments when they need to arrive quickly.",
    },
    {
        image: retailer_store,
        icon: Store,
        title: "Retail Stores",
        text: "Deliver products directly to customers within the same day.",
    },
];

const serviceCards = [
    {
        icon: Truck,
        title: "Fast Delivery",
        text: "Move shipments within the same-day delivery window.",
    },
    {
        icon: Package,
        title: "Careful Handling",
        text: "Professional handling keeps packages secure throughout the journey.",
    },
    {
        icon: MapPin,
        title: "Location Flexibility",
        text: "Support pickup and delivery across available service locations.",
    },
    {
        icon: Eye,
        title: "Shipment Visibility",
        text: "Stay informed with real-time updates and status tracking.",
    },
    {
        icon: Headphones,
        title: "Business Support",
        text: "Useful for e-commerce sellers, startups, retailers, and other businesses.",
    },
    {
        icon: Route,
        title: "Route Optimization",
        text: "More efficient routes for faster and greener logistics.",
    },
];

const partnerCards = [
    bluedart,
    "Partner",
    "Partner",
    "Partner",
    "Partner",
];

// common classes 

const reveal =
    "opacity-0 translate-y-8 transition-all duration-700 ease-out";

const sectionClass =
    "relative overflow-hidden py-16 sm:py-20 lg:py-24";

const containerClass =
    "mx-auto max-w-7xl px-5 sm:px-6 lg:px-8";

const sectionTitle =
    "text-2xl font-bold leading-tight tracking-tight text-blue-950 sm:text-3xl lg:text-4xl";

const sectionDescription =
    "mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base";

const cardTitle =
    "text-sm font-semibold leading-5 text-blue-950 sm:text-base";

const cardDescription =
    "mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6";



const SameDayDelivery = () => {
    const pageRef = useRef(null);

    useEffect(() => {
        const elements = pageRef.current?.querySelectorAll("[data-reveal]");

        if (!elements?.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.remove(
                        "opacity-0",
                        "translate-y-8"
                    );

                    entry.target.classList.add(
                        "opacity-100",
                        "translate-y-0"
                    );

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={pageRef}
            className="min-h-screen overflow-hidden bg-white text-blue-950"
        >
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-white">
                <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

                    {/* Back to Home — Hero only */}
                    <div
                        data-reveal
                        className={`${reveal} relative z-30 pt-5 sm:pt-6`}
                    >
                        <Link
                            to="/"
                            className="group inline-flex items-center gap-2 text-sm font-medium text-blue-950 transition-colors duration-300 hover:text-cyan-500"
                        >
                            <ArrowRight className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="relative grid min-h-[620px] items-center lg:grid-cols-[44%_56%] xl:min-h-[650px]">

                        {/* ================= HERO BACKGROUND ================= */}
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="absolute -left-[18%] top-[18%] h-[330px] w-[62%] rounded-[50%] bg-cyan-50" />

                            <div className="absolute -left-[12%] bottom-[-18%] h-[250px] w-[55%] rotate-[8deg] rounded-[50%] bg-cyan-100/70" />

                            <div className="absolute left-[38%] top-[12%] h-[390px] w-[48%] rotate-[-16deg] rounded-[50%] bg-emerald-100/60" />
                        </div>

                        {/* ================= LEFT CONTENT ================= */}
                        <div
                            data-reveal
                            className={`${reveal} relative z-20 py-12 sm:py-14 lg:py-16`}
                        >


                            <h1 className="mt-5 max-w-[620px] text-4xl font-bold leading-[1.04] tracking-tight text-blue-950 sm:text-5xl lg:text-[52px] xl:text-[58px]">
                                Same-Day Delivery,
                                <span className="block">
                                    When Every Hour{" "}
                                    <span className="text-cyan-400">Matters.</span>
                                </span>
                            </h1>

                            <p className="mt-5 max-w-[570px] text-sm leading-6 text-blue-900/75 sm:text-base sm:leading-7">
                                Get urgent shipments moving quickly with same-day delivery
                                designed for time-sensitive orders, important documents,
                                essential supplies, and customer deliveries.
                            </p>

                            <p className="mt-2 max-w-[560px] text-sm leading-6 text-blue-900/70 sm:text-base sm:leading-7">
                                From pickup to delivery, keep your shipment moving with a fast
                                and transparent delivery experience.
                            </p>

                            <div className="mt-7">
                                <Link
                                    to="/shipping"
                                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    Start Shipping
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        {/* ================= RIGHT IMAGE ================= */}
                        <div
                            data-reveal
                            className={`${reveal} relative z-10 flex min-h-[420px] items-center justify-end lg:min-h-[620px]`}
                        >
                            {/* Organic shapes behind image */}
                            <div className="pointer-events-none absolute left-[5%] top-[10%] h-[390px] w-[82%] rotate-[-17deg] rounded-[50%] bg-cyan-100/70" />

                            <div className="pointer-events-none absolute left-[20%] top-[8%] h-[330px] w-[72%] rotate-[-22deg] rounded-[50%] bg-emerald-100/55" />

                            {/* Image */}
                            <div className="relative z-20 w-full max-w-[720px] translate-y-[-35px] sm:translate-y-[-45px] lg:translate-y-[-55px]">
                                <div className="overflow-hidden rounded-[2rem] border-2 border-cyan-400 bg-white shadow-[0_20px_50px_rgba(6,182,212,0.16)]">
                                    <img
                                        src={Same_Day}
                                        alt="Same-day delivery"
                                        loading="lazy"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero bottom curve */}
                <div className="pointer-events-none absolute bottom-[-1px] left-[-8%] h-20 w-[55%] rounded-[50%_50%_0_0] bg-white sm:h-24" />

                <div className="pointer-events-none absolute bottom-[-1px] right-[-10%] h-24 w-[55%] rounded-[50%_50%_0_0] bg-white" />

            </section>

            {/* Section 7 */}
            <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50/30 to-white py-14 sm:py-16">
                <div className={containerClass}>
                    <div className="grid items-center gap-8 lg:grid-cols-[30%_70%]">
                        {/* Content */}

                        <div data-reveal className={reveal}>
                            <h2 className="text-2xl font-bold leading-tight text-blue-950 sm:text-3xl">
                                Courier Partners
                            </h2>

                            <h3 className="mt-3 text-sm font-semibold text-blue-700 sm:text-base">
                                Trusted Courier Network, Wider Reach
                            </h3>

                            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                                Work with multiple reliable courier partners to ensure your
                                shipments are delivered safely and on time.
                            </p>
                        </div>

                        {/* Partners */}

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                            {partnerCards.map((partner, index) => (
                                <div
                                    key={`${partner}-${index}`}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 70}ms`,
                                    }}
                                    className={`${reveal} flex h-16 items-center justify-center gap-2 rounded-xl border border-slate-100 bg-white px-3 text-xs font-medium text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                                >
                                    <Route
                                        size={16}
                                        className="text-cyan-500"
                                    />

                                    {partner}
                                </div>
                            ))}

                            <div
                                data-reveal
                                style={{ transitionDelay: "360ms" }}
                                className={`${reveal} flex h-16 items-center justify-center gap-2 rounded-xl border border-cyan-100 bg-cyan-50/60 px-3 text-xs font-medium leading-4 text-cyan-700 lg:col-span-1`}
                            >
                                <Truck size={16} />

                                Multiple courier
                                partners
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-2  */}
            <section className="group relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

                {/* ================= BACKGROUND ================= */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">

                    {/* Left organic shape */}
                    <div
                        className=" absolute -left-40 top-16 h-[380px] w-[560px] rounded-[50%] bg-cyan-50 transition-transform duration-[1800ms] ease-out group-hover:translate-x-4"
                    />

                    {/* Right organic shape */}
                    <div
                        className=" absolute -right-44 top-0 h-[460px] w-[650px] rotate-[-12deg] rounded-[50%] bg-emerald-50/70 transition-transform duration-[1800ms] ease-out group-hover:-translate-x-4"
                    />

                    {/* Bottom organic shape */}
                    <div
                        className=" absolute -bottom-48 left-[18%] h-[400px] w-[720px] rotate-[8deg] rounded-[50%] bg-cyan-50/80 transition-transform duration-[1800ms] ease-out group-hover:translate-y-3"
                    />
                </div>

                {/* ================= CONTAINER ================= */}
                <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">

                    <div className="grid items-start gap-10 lg:grid-cols-[38%_62%] lg:gap-12">

                        {/* ================= LEFT SIDE ================= */}
                        <div
                            data-reveal
                            className={`${reveal}`}
                        >

                            {/* Section number */}
                            <div className="flex items-center gap-2">


                                <span className="h-px w-8 bg-cyan-400" />
                            </div>

                            {/* Heading */}
                            <h2 className="mt-3 max-w-[500px] text-3xl font-bold leading-[1.08] tracking-tight text-blue-950 sm:text-4xl">
                                For Shipments That Can't Wait
                            </h2>

                            {/* Description */}
                            <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-600 sm:text-base">
                                Some deliveries are simply too important to put off until
                                tomorrow. Same-day delivery is designed for situations where
                                timing matters — from urgent business documents to medical
                                supplies, e-commerce orders, and last-minute essentials.
                            </p>

                            {/* ================= IMAGE ================= */}
                            <div
                                data-reveal
                                className={`${reveal} mt-8`}
                            >
                                <div
                                    className=" relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
                                >
                                    <img
                                        src={urgent_shipment}
                                        alt="Urgent same-day shipment"
                                        loading="lazy"
                                        className=" h-auto w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ================= RIGHT SIDE CARDS ================= */}
                        <div
                            data-reveal
                            className={`${reveal} grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-6`}
                        >
                            {sectionTwoCards.map((card, index) => {
                                const Icon = card.icon;

                                return (
                                    <div
                                        key={card.title}
                                        data-reveal
                                        style={{
                                            transitionDelay: `${index * 100}ms`,
                                        }}
                                        className={`${reveal} group/card relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-5 backdrop-blur-sm shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-100 hover:shadow-[0_18px_40px_rgba(15,23,42,0.09)] ${index < 3
                                            ? "lg:col-span-2"
                                            : "lg:col-span-3"
                                            }`}
                                    >

                                        {/* Small decorative line */}
                                        <div
                                            className=" absolute left-0 top-0 h-0.5 w-0 bg-cyan-400 transition-all duration-500 group-hover/card:w-full"
                                        />

                                        {/* Icon */}
                                        <div
                                            className=" flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 transition-all duration-500 group-hover/card:bg-cyan-100 group-hover/card:scale-105"
                                        >
                                            <Icon
                                                className="h-[18px] w-[18px]text-cyan-500transition-transform duration-500group-hover/card:scale-11"
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-4 text-sm font-semibold leading-5 text-blue-950 sm:text-base">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                                            {card.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ================= BOTTOM CURVE ================= */}
                <div
                    className="pointer-events-none absolut -bottom-1 left-[-8% h-16 w-[55% rounded-[50%_50%_0_0 bg-whit sm:h-20"
                />

                <div
                    className=" pointer-events-none absolute -bottom-1 right-[-10%] h-20 w-[55%] rounded-[50%_50%_0_0] bg-white"
                />
            </section>

            {/* Section-3 */}

            <section className="relative overflow-hidden bg-gradient-to-r from-cyan-50/70 via-white to-white py-16 sm:py-20 lg:py-24">
                <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-100/30 blur-3xl" />

                <div className={containerClass}>
                    <div className="grid items-center gap-12 lg:grid-cols-[58%_42%]">
                        {/* Process */}

                        <div>
                            <div data-reveal className={reveal}>
                                <h2 className={sectionTitle}>
                                    From Booking to Delivery, In One Day
                                </h2>

                                <p className={sectionDescription}>
                                    A simple delivery journey designed to keep your shipment
                                    moving and visible throughout the process.
                                </p>
                            </div>

                            {/* Journey */}

                            <div className="mt-10">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                                    {deliverySteps.map((step, index) => {
                                        const Icon = step.icon;
                                        const isLast =
                                            index === deliverySteps.length - 1;

                                        return (
                                            <div
                                                key={step.title}
                                                data-reveal
                                                style={{
                                                    transitionDelay: `${index * 120}ms`,
                                                }}
                                                className={`${reveal} relative`}
                                            >
                                                <div className="flex items-center lg:pr-5">
                                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-cyan-100 text-blue-600 shadow-sm ring-1 ring-cyan-100">
                                                        <Icon
                                                            size={20}
                                                            strokeWidth={1.8}
                                                        />
                                                    </div>

                                                    {!isLast && (
                                                        <div className="relative mx-3 hidden h-px flex-1 bg-cyan-200 lg:block">
                                                            <ArrowRight
                                                                size={15}
                                                                strokeWidth={1.5}
                                                                className="absolute right-[-2px] top-1/2 -translate-y-1/2 bg-white text-cyan-400"
                                                            />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="mt-4 pr-6">
                                                    <h3 className="text-sm font-semibold leading-5 text-blue-950">
                                                        {step.title}
                                                    </h3>

                                                    <p className="mt-2 max-w-[145px] text-xs leading-5 text-slate-500">
                                                        {step.text}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Image */}

                        <div
                            data-reveal
                            style={{ transitionDelay: "200ms" }}
                            className={`${reveal} relative`}
                        >
                            <div className="pointer-events-none absolute -right-16 -top-12 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[42%_0_0_28%]">
                                <img
                                    src={tracking_order}
                                    alt="Nexgo shipment tracking"
                                    loading="lazy"
                                    className="h-[360px] w-full object-cover object-center sm:h-[400px]"
                                />

                                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cyan-50/60 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Same Day or Next Day delivery  */}
            <section className={`${sectionClass} bg-white`}>
                <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

                <div className={containerClass}>
                    <div className="grid items-center gap-10 lg:grid-cols-[38%_62%]">
                        {/* Text */}

                        <div data-reveal className={reveal}>
                            <h2 className={sectionTitle}>
                                Same-Day or Next-Day?
                            </h2>

                            <h3 className="mt-3 text-base font-semibold text-blue-700">
                                Choose the Delivery Timeline That Fits the Shipment
                            </h3>

                            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                                Not every shipment carries the same level of urgency. Some
                                need to reach their destination within the same day, while
                                others can be delivered the following day.
                            </p>

                            <Link
                                to="/shipping"
                                className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all duration-300 hover:-translate-y-1"
                            >
                                Start Shipping

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>

                        {/* Cards */}

                        <div className="grid gap-5 sm:grid-cols-2">
                            {timelineCards.map((card, index) => {
                                const Icon = card.icon;

                                return (
                                    <div
                                        key={card.title}
                                        data-reveal
                                        style={{
                                            transitionDelay: `${index * 120}ms`,
                                        }}
                                        className={`${reveal} rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(20,70,120,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                                                <Icon size={20} strokeWidth={1.8} />
                                            </div>

                                            <div>
                                                <h3 className={cardTitle}>
                                                    {card.title}
                                                </h3>

                                                <p className={cardDescription}>
                                                    {card.text}
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="mt-6 space-y-3">
                                            {card.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 sm:text-sm"
                                                >
                                                    <CheckCircle2
                                                        size={15}
                                                        className="mt-0.5 shrink-0 text-cyan-500"
                                                    />

                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section-5 */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white to-cyan-50/40 py-16 sm:py-20 lg:py-24">
                <div className="pointer-events-none absolute -bottom-24 right-[-80px] h-72 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

                <div className={containerClass}>
                    <div data-reveal className={reveal}>
                        <h2 className={sectionTitle}>
                            Who It's For
                        </h2>

                        <h3 className="mt-3 text-base font-semibold text-blue-700">
                            Built Around Different Delivery Needs
                        </h3>

                        <p className={sectionDescription}>
                            Same-day delivery can support both individual and business
                            shipments across different use cases.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {audienceCards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={card.title}
                                    data-reveal
                                    style={{
                                        transitionDelay: `${index * 80}ms`,
                                    }}
                                    className={`${reveal} group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(20,70,120,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                                >
                                    <div className="h-44 overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="relative min-h-[155px] p-5 pt-8">
                                        <div className="absolute left-5 top-[-20px] flex h-11 w-11 items-center justify-center rounded-xl border-4 border-white bg-cyan-50 text-cyan-600 shadow-sm">
                                            <Icon size={18} strokeWidth={1.8} />
                                        </div>

                                        <h3 className={cardTitle}>
                                            {card.title}
                                        </h3>

                                        <p className={cardDescription}>
                                            {card.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section-6 */}
            <section className={`${sectionClass} bg-white`}>
                <div className={containerClass}>
                    <div className="grid items-center gap-10 lg:grid-cols-[60%_40%]">
                        {/* Cards */}

                        <div>
                            <div data-reveal className={reveal}>
                                <h2 className={sectionTitle}>
                                    What the Service Brings Together
                                </h2>

                                <h3 className="mt-3 text-base font-semibold text-blue-700">
                                    Speed, Visibility & Care in One Delivery Experience
                                </h3>
                            </div>

                            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {serviceCards.map((card, index) => {
                                    const Icon = card.icon;

                                    return (
                                        <div
                                            key={card.title}
                                            data-reveal
                                            style={{
                                                transitionDelay: `${index * 70}ms`,
                                            }}
                                            className={`${reveal} rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_6px_25px_rgba(20,70,120,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                                                <Icon size={18} strokeWidth={1.8} />
                                            </div>

                                            <h3 className={`${cardTitle} mt-4`}>
                                                {card.title}
                                            </h3>

                                            <p className={cardDescription}>
                                                {card.text}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Image */}

                        <div
                            data-reveal
                            style={{ transitionDelay: "180ms" }}
                            className={`${reveal} relative`}
                        >
                            <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[18px_18px_38px_18px]">
                                <img
                                    src={service_delivery}
                                    alt="Nexgo delivery service"
                                    loading="lazy"
                                    className="h-[420px] w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* =====================================================
          FINAL CTA
      ====================================================== */}

            {/* ================= FINAL CTA ================= */}
            <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
                {/* Soft organic background shapes */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-[12%] bottom-[-35%] h-[520px] w-[620px] rounded-[50%] bg-cyan-100/70" />

                    <div className="absolute -right-[12%] top-[-35%] h-[520px] w-[620px] rounded-[50%] bg-emerald-100/60" />

                    <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/70 blur-3xl" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
                    <div
                        data-reveal
                        className={`${reveal} relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 px-6 py-14 text-center shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:px-10 sm:py-16 lg:px-16 lg:py-20`}
                    >
                        {/* Inner organic shapes */}
                        <div className="pointer-events-none absolute -left-24 bottom-[-180px] h-[360px] w-[420px] rounded-full bg-cyan-100/60" />

                        <div className="pointer-events-none absolute -right-24 top-[-180px] h-[360px] w-[420px] rounded-full bg-emerald-100/60" />

                        <div className="relative z-10 mx-auto max-w-3xl">
                            <h2 className="text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
                                When It Can't Wait
                                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 bg-clip-text text-transparent">
                                    Until Tomorrow
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-900/70 sm:text-base sm:leading-8">
                                Move time-sensitive shipments with Nexgo Same-Day Delivery.
                            </p>

                            <div className="mt-8">
                                <Link
                                    to="/shipping"
                                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,99,235,0.24)]"
                                >
                                    Start Shipping

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SameDayDelivery;