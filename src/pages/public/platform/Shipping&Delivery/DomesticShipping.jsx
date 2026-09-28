import { ArrowRight, BriefcaseBusiness, FileText, Layers3, MapPin, Package, Rocket, ShieldCheck, ShoppingBag, ShoppingCart, Store, TrendingUp, Truck } from "lucide-react";
import Navbar from "../../../../features/landing/navbar/Navbar";
import domestic_Shipping from "../../../../assets/images/domesticshipping_illustration_tall.webp";
import pan_india from "../../../../assets/images/pan-india-shipping.webp";
import shipment_control from "../../../../assets/images/shipment-control.webp";
import Shipment_protection from "../../../../assets/images/shipment-protection.jpg";
import { useEffect, useRef, useState } from "react";
import pickup_anywhere from "../../../../assets/images/pickup-anywhere.webp";
import better_tracking from "../../../../assets/images/Better-tracking.webp";
import centralized_view from "../../../../assets/images/Centralized-view.webp";
import faster_payments from "../../../../assets/images/Faster-payment.webp";
import easy_returns from "../../../../assets/images/Return-request.webp";
import domestic_shipping_cta_button from "../../../../assets/images/Domestic-shipping-ctabutton.webp";
import Footer from "../../../../features/landing/footer/Footer";

const features = [
    {
        icon: MapPin,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
        title: "Wide Reach",
        description: "Deliver across metros, cities, and smaller towns with one shipping network.",
    },
    {
        icon: Layers3,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-500",
        title: "Centralized Management",
        description: "Track shipments, status, and fulfillment from one simple dashboard.",
    },
    {
        icon: TrendingUp,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500",
        title: "Built for Growth",
        description: "Scale effortlessly as order volume grows without losing visibility.",
    },
];

const shippingfeatures = [
    {
        title: "Shipment Control",
        description: [
            "Track, manage and control all your shipments in real time - from a single dashboard.",
            "Get complete visibility, reduce manual work, and keep your operations running smoothly.",
        ],
        image: shipment_control,
        imageLeft: false,
        background: "bg-[#EEF7FF]",
    },
    {
        title: "Shipment Protection",
        description: [
            "Keep your parcels safe with built-in insurance and easy claim support.",
            "In case of damage, loss or delay, you're covered - every step of the way."
        ],
        image: Shipment_protection,
        imageLeft: true,
        background: "bg-[#EFFBF7]",
    },
    {
        title: "Pickup Anywhere",
        description: [
            "Add multiple pickup locations and get your products collected from where you operate.",
            "No more logistics hassles - we bring the pickup to you.",
        ],
        image: pickup_anywhere,
        imageLeft: false,
        background: "bg-[#EFF7FF]"
    },
    {
        title: "Better Tracking",
        description: [
            "Share real-time tracking updates with your customers and keep them informed at every step.",
            "Build trust with full transparency and reduce support queries.",
        ],
        image: better_tracking,
        imageLeft: true,
        background: "bg-[#FFFAF0]",

    },
    {
        title: "Centralized View",
        description: [
            "See all your shipments, orders and performance metrics in one place.",
            "Stay organized, make better decisions, and keep your business moving.",
        ],
        image: centralized_view,
        imageLeft: false,
        background: "bg-[#EEF7FF]"
    },
    {
        title: "Faster Payments",
        description: [
            "Get quicker access to your collected payments and stay in control of your cash flow.",
            "With transparent records and timely settlements, you can plan and grow with confidence",
        ],
        image: faster_payments,
        imageLeft: true,
        background: "bg-[#EFFBF7]"
    },
    {
        title: "Easy Returns",
        description: [
            "Let your customers return products effortlessly with a simple and automated process.",
            "Fewer manual steps, happier customers.",
        ],
        image: easy_returns,
        imageLeft: false,
        background: "bg-[#F4F3FF]"
    },
];

const shippingSteps = [
    {
        icon: FileText,
        title: "Create Your Shipment",
        description: "Add your order and customer details",
    },
    {
        icon: Package,
        title: "Select Your Shipping Option",
        description: "Choose the right courier and shipping option.",
    },
    {
        icon: Truck,
        title: "Prepare & Dispatch",
        description: "Prepare the shipment and hand it over for pickup.",
    },
    {
        icon: MapPin,
        title: "Track the Shipment",
        description: "Monitor its journey and current status.",
    },
    {
        icon: ShieldCheck,
        title: "Delivery",
        description: "The Shipment reaches the customer.",
    },
];

const businessTypes = [
    {
        icon: ShoppingCart,
        badge: "D2C & E-commerce",
        title: "D2C & E-commerce",
        description: "Manage shipments while growing your online customer base.",
        background: "bg-[#F1F6FF]",
        iconBackground: "bg-blue-50",
        iconColor: "text-blue-600",
        badgeColor: "bg-blue-50 text-blue-600",
    },
    {
        icon: Store,
        badge: "SMEs & Startups",
        title: "SMEs & Startups",
        description:
            "Build an organized shipping workflow without unnecessary complexity.",
        background: "bg-[#f1fbf7]",
        iconBackground: "bg-emerald-50",
        iconColor: "text-emerald-600",
        badgeColor: "bg-emerald-50 text-emerald-600",
    },
    {
        icon: BriefcaseBusiness,
        badge: "Retail & Brands",
        title: "Retail & Brands",
        description:
            "Manage shipments as customer and order volumes grow.",
        background: "bg-[#f6f3ff]",
        iconBackground: "bg-purple-50",
        iconColor: "text-purple-600",
        badgeColor: "bg-purple-50 text-purple-600",
    },
    {
        icon: ShoppingBag,
        badge: "Online Sellers",
        title: "Online Sellers",
        description:
            "Simplify day-to-day shipping through one centralized platform.",
        background: "bg-[#fff8ee]",
        iconBackground: "bg-orange-50",
        iconColor: "text-orange-500",
        badgeColor: "bg-orange-50 text-orange-500",
    },
]

const DomesticShipping = () => {
    const sectionRefs = useRef([]);
    const howItWorksRef = useRef(null);
    const [visibleSections, setVisibleSections] = useState({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === howItWorksRef.current) {
                            setVisible(true);
                            observer.unobserve(entry.target);
                            return;
                        }

                        const index = entry.target.dataset.index;

                        setVisibleSections((prev) => ({
                            ...prev,
                            [index]: true,
                        }));

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        if (howItWorksRef.current) observer.observe(howItWorksRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section  */}
            <section className="overflow-hidden bg-slate-50">
                <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6  sm:px-10 lg:grid-cols-2 lg:px-16 xl:px-20">
                    {/* Left */}
                    <div className="relative z-10 max-w-[620px]">
                        <div className="inline-flex rounded-xl bg-blue-50 px-3 py-1.5">
                            <span className="text-sm font-semibold tracking-wide text-blue-600">
                                DOMESTIC SHIPPING
                            </span>
                        </div>

                        <h1 className="mt-7 text-[32px] font-bold leading-[1.09] tracking-[-0.02em] text-slate-800 lg:text-[58px]">
                            A simpler way to
                            <br />
                            <span className="block text-blue-600">
                                ship online orders
                            </span>
                        </h1>

                        <div className="mt-7 max-w-[560px] space-y-5">
                            <p className="text-[18px] leading-[1.30] text-slate-500">
                                Manage your domestic shipping from one platform — from
                                creating shipments and selecting the right courier to
                                tracking deliveries and staying informed throughout the
                                delivery journey.
                            </p>
                            <p className="text-[18px] leading-[1.30] text-slate-500">
                                Whether you're shipping your first order or handling
                                growing shipment volumes, Nexgo helps you simplify your
                                shipping operations with greater visibility and control.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-5">
                            <button
                                type="button"
                                className="group flex h-[58px] items-center gap-2 rounded-xl bg-blue-600 px-5 text-[16px] font-semibold text-white shadow-sm transition-all duration-300 hover:translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                            >
                                <span>Start Shipping</span>
                                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight size={19} />
                                </span>
                            </button>
                            <button
                                type="button"
                                className="h-[58px] rounded-xl border border-slate-200 bg-white px-5 text-[16px] font-semibold text-blue-700 transition-all duration-300 hover:translate-y-1 hover:border-blue-300 hover:bg-blue-50"
                            >
                                Explore the Platform
                            </button>
                        </div>

                    </div>
                    {/* Right Side  */}
                    <div className="flex items-center justify-center">
                        <img
                            src={domestic_Shipping}
                            alt="Nexgo domestic shipping"
                            className="h-[520px] w-full max-w-[850px] object-contain motion-safe:animate-[domesticFloat_6s_ease-in-out_infinite]"
                        />
                    </div>
                </div>

                {/* Animation */}
                <style>
                    {`
                    @keyframes domesticFloat {
                    0%,
                    100% {
                    transform: translateY(0);
                    }
                    50%{
                    transform : translateY(-8px);
                    }
                    }
                    `}
                </style>
            </section>

            {/* customers reach  */}
            <section className="overflow-hidden bg-white">
                <div className="mx-auto grid  max-w-[1440px] items-center gap-6 px-6 py-12 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 xl:px-20">
                    {/* Left Content  */}
                    <div className="relative z-10 max-w-[650px]">
                        {/* Badge  */}
                        <div className="inline-flex rounded-full bg-blue-100 px-3 py-1.5">
                            <span className="text-sm font-semibold tracking-[0.08em] text-blue-600">
                                PAN-INDIA SHIPPING
                            </span>
                        </div>

                        {/* Heading  */}
                        <h2 className="mt-7 max-w-[620px] text-[48px] font-bold leading-[1.08] tracking-[-0.035em] text-[#12284B] sm:text-[56px] lg:text-[58px] xl:text-[64px]">
                            Reach Customers
                            <br />
                            <span className="block">
                                Across India
                            </span>
                        </h2>

                        {/* Description */}
                        <div className="mt-7 max-w-[570px] space-y-4">
                            <p className="text-[18px] leading-[1.3] text-slate-500">
                                Ship to customers across major cities, growing markets,
                                and smaller towns from one centralized platform.
                            </p>

                            <p className="text-[18px] leading-[1.3] text-slate-500">
                                Nexgo helps you manage shipments across multiple destinations
                                while keeping your operations organized as your business grows.
                            </p>
                        </div>

                        {/* Features  */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 max-w-[780px]">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.title}
                                        className={` group relative p-6 transition-transform duration-300 hover:-translate-y-1 ${index !== 0 ? "border-l border-slate-200 pl-8" : ""
                                            }`}
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-1 ${feature.iconBg}`}
                                        >
                                            <Icon size={25} strokeWidth={2} className={feature.iconColor} />
                                        </div>

                                        {/* title */}
                                        <h3 className="text-[17px] font-semibold leading-6 text-slate-950">
                                            {feature.title}
                                        </h3>

                                        {/* description */}
                                        <p className="mt-2 max-w-[210px] text-[15px] leading-6 text-slate-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right side- image */}
                    <div className="relative flex min-h-[600px] items-center justify-center">
                        {/* soft background glow */}
                        <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-50/60 blur-3xl" />

                        <img
                            src={pan_india}
                            alt="Nexgo pan India shipping network"
                            className="relative z-10 w-full max-w-[760px] object-contain motion-safe:animate-[panIndiaFloat_7s_ease-in-out_infinite]"
                        />
                    </div>
                </div>

                <style>{`
        @keyframes panIndiaFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }
      `}</style>
            </section>

            {/* Shipping features  */}
            <section className="overflow-hidden max-w-[1440px] bg-slate-50 px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
                {/* Section header */}
                <div className="mx-auto mb-12 max-w-[850px] text-center">
                    <div className="inline-flex rounded-full bg-blue-100 px-3 py-1.5">
                        <span className="text-[11px] font-semibold tracking-[0.08em] text-blue-600">
                            POWERED FOR YOUR GROWTH
                        </span>
                    </div>

                    <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-[-0.025em] text-[#102653] sm:text-[40px] lg:text-[44px]">
                        Smarter Shipping, Greater Possibilities
                    </h2>
                    <p className="mx-auto mt-3 max-w-[680px] text-[15px] leading-6 text-[#66799A] sm:text-[16px]">
                        From order to doorstep, Nexgo gives you the tools to ship faster,
                        safer, and more efficiently - all in one place.
                    </p>
                </div>

                {/* Features */}
                <div className="mx-auto max-w-[1440px] space-y-10">
                    {shippingfeatures.map((feature, index) => {
                        const isVisible = visibleSections[index];
                        return (
                            <div
                                key={feature.title}
                                ref={(element) => {
                                    sectionRefs.current[index] = element;
                                }}
                                data-index={index}
                                className={`group overflow-hidden rounded-xl ${feature.background} transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                            >
                                <div className={`grid min-h-[190px] lg:grid-cols-2 ${feature.imageLeft ? "" : ""
                                    }`}>
                                    {/* Content */}
                                    <div className={`order-1 flex items-center px-7 py-8 sm:px-9 lg:px-8 xl:px-10 ${feature.imageLeft ? "lg:order-2" : "lg:order-1"}`}>

                                        <div className="max-w-[500px]">
                                            <h3 className="text-[25px] font-bold leading-tight tracking-[-0.02em] text-[#102653] sm:text-[27px] ">
                                                {feature.title}
                                            </h3>

                                            <div className="mt-3 space-y-2.5">
                                                {feature.description.map((text) => (
                                                    <p
                                                        key={text}
                                                        className="max-w-[500px] text-[15px] leading-[1.55] text-slate-500 sm:text-[16px]"
                                                    >
                                                        {text}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div
                                        className={`
                                        order-2 flex min-h-[190px] items-center justify-center overflow-hidden px-5 ${feature.imageLeft ? "lg:order-1" : "lg:order-2"}
                                        `}
                                    >
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-safe:animate-[featureFloat_7s_ease-in-out_infinite]"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Image Floating ANimation */}
                <style>{`
                @keyframes featureFloat {
                0%,
                100% {
                transform:translateY(0);
                }
                50%{
                transform:translateY(-4px)
                }
                }
                `}
                </style>

            </section>

            {/* DomesticShippingWorks */}
            <section
                ref={howItWorksRef}
                className="overflow-hidden bg-white px-6 sm:px-10 lg:px-16 xl:px-20 py-12"
            >
                <div className="mx-auto max-w-[1440px]">
                    {/* Header */}
                    <div
                        className={`
                        mx-auto max-w-[700px] text-center transition-all duration-700 ease-out ${visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }
                        `}
                    >
                        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-[15px] font-semibold trackin-[0.08em] text-blue-500">
                            How it works
                        </span>

                        <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1-2653] sm:text-[40px]">
                            From order to delivey, Simplified
                        </h2>

                        <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-6 text-[#66799A]">
                            Get your shipments moving in just a few steps. Here's how Nexgo
                            makes domestic shipping simple and hassle-free.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="relative mt-14">
                        {/* Connecting line */}
                        <div className="absolute left-[10%] right-[10%] top-[120px] hidden h-px bg-blue-200 lg:block">
                            <div
                                className={`
                                    h-full origin-left bg-blue-400
                                    transition-transform duration-[160ms] ease-out
                                    ${visible ? "scale-x-100" : "scale-x-0"}
                                    `}
                            />
                        </div>

                        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                            {shippingSteps.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <div
                                        key={step.title}
                                        className={`
                                            relative rounded-xl bg-white px-5 py-6 text-center shadow-[0_8px_30px_rgba(40,90,150,0.96)] transition-all duration-700 ease-out hover:-translate-y-2 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                                            `}
                                        style={{
                                            transitionDelay: `${index * 120}ms`
                                        }}
                                    >
                                        {/* Icon */}
                                        <div className="relative z-10 mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-8 ring-[#F5FBFF]">
                                            <Icon size={25} strokeWidth={1.8} />
                                        </div>

                                        <h3 className="mt-5 text-[14px] font-bold leading-5 text-[#102653]">
                                            {index + 1} .{step.title}
                                        </h3>
                                        <p className="mt-2 text-[12px] leading-5 text-slate-500">
                                            {step.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7 - Built for different business */}
            <section className="bg-white px-6 sm:px-10 lg:px-16 xl:px-20 py-12 ">
                <div className="mx-auto max-w-[1050px]">
                    {/* Header */}
                    <div className="mx-auto max-w-[700px] text-center animate-[fadeUp_0.8s_ease-out_both]">
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-blue-500">
                            BUILT FOR DIFFERENT BUSINESSES
                        </span>

                        <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-[#102653] sm:text-[40px]">
                            Domestic Shipping for Businesses{" "}
                            <span className="block">
                                at Every Stage
                            </span>
                        </h2>

                        <p className="mx-auto mt-3 max-w-[550px] text-[15px] leading-6 text-[#66799A]">
                            Wheter you're just starting out or scaling fast, Nexgo
                            adapts to your business needs with flexible, reliable and easy-to-use
                            shipping solutions.
                        </p>
                    </div>

                    {/* Business Cards */}
                    <div className="mt-12 grid gap-5 sm:grid-cols-2">
                        {businessTypes.map((business, index) => {
                            const Icon = business.icon;

                            return (
                                <div
                                    key={business.title}
                                    className={`group flex min-h-[175px] items-center gap-6 ${business.background} px-7 py-7 animate-[fadeUp_0.7s_ease-out_both] transition-al duration-300 hover:translate-y-2 hover:shadow-[0_15px_40px_rgba(40,80,140,0.08)]`}
                                    style={{ animationDelay: `${index * 120}ms` }}
                                >
                                    {/* Icon */}
                                    <div
                                        className={` flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-2xl ${business.iconBackground} transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2`}
                                    >
                                        <Icon size={50} strokeWidth={1.5} className={business.iconColor} />
                                    </div>

                                    {/* content */}
                                    <div>
                                        <span
                                            className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${business.badgeColor}`}
                                        >
                                            {business.badge}
                                        </span>
                                        <h3 className="mt-2 text-[20px] font-bold text-[#102653]">
                                            {business.title}
                                        </h3>
                                        <p className="mt-1.5 max-w-[330px] text-[13px] leading-5 text-[#66799A]">
                                            {business.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Animations */}
                <style>
                    {`
                        @keyframes fadeUp {
                        from {
                        opacity: 0,
                        transform: translateY(25px);
                        }
                        to{
                        opacity: 1, 
                        transform: translateY(0)
                        }
                        }
                    `}
                </style>
            </section>

            {/* CTA Button */}


            <section className="bg-white px-6 sm:px-10 lg:px-16 xl:px-20 py-6">
                <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[58px] bg-[#f2f9ff] px-4 py-6 sm:px-8 lg:px-12 lg:py-5">

                    {/* Soft background glow */}
                    <div className="pointer-events-none absolute -right-20 top-10 h-[430px] w-[430px] rounded-full bg-blue-100/50 blur-3xl" />

                    <div className="relative z-10 grid items-center gap-3 lg:grid-cols-[0.95fr_1.05fr]">

                        {/* LEFT CONTENT */}
                        <div className="max-w-[700px] animate-[fadeUp_0.8s_ease-out_both]">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 rounded-full bg-[#dcecff] px-3 py-1.5">
                                <Rocket
                                    size={23}
                                    strokeWidth={2.2}
                                    className="text-[#1672ee]"
                                />

                                <span className="text-[12px] font-semibold tracking-wide text-[#1467dc]">
                                    READY TO GET STARTED?
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="mt-4 max-w-[720px] text-[24px] font-bold leading-[1.08] tracking-[-0.035em] text-[#102b68] sm:text-[34px] lg:text-[38px]">
                                Start Your Domestic
                                <br />
                                Shipping Journey Today
                            </h2>

                            {/* Description */}
                            <p className="mt-5 max-w-[680px] text-[18px] leading-[1.65] text-[#6078a5] sm:text-[20px]">
                                Join thousands of businesses already using Nexgo to
                                <br className="hidden sm:block" />
                                simplify their domestic shipping operations.
                            </p>

                            {/* Buttons */}
                            <div className="mt-5 flex flex-wrap items-center gap-5">

                                {/* Primary */}
                                <button className="group inline-flex h-[62px] items-center gap-7 rounded-xl bg-gradient-to-r from-[#1894ff] to-[#1169ef] px-9 text-[17px] font-semibold text-white shadow-[0_12px_25px_rgba(28,126,240,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(28,126,240,0.32)]">
                                    Start Shipping

                                    <ArrowRight
                                        size={30}
                                        strokeWidth={2}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>

                                {/* Secondary */}
                                {/* <button className="inline-flex h-[62px] items-center justify-center rounded-full border-2 border-[#c9ddff] bg-white/30 px-11 text-[17px] font-semibold text-[#1269e8] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_25px_rgba(50,100,180,0.08)]">
                                    Learn More
                                </button> */}
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative flex items-center justify-center lg:min-h-[350px]">

                            {/* Image glow */}
                            <div className="pointer-events-none absolute inset-10 rounded-full bg-blue-100/60 blur-3xl" />

                            <img
                                src={domestic_shipping_cta_button}
                                alt="Domestic shipping tracking illustration"
                                className=" relative z-10 w-full max-w-[760px] object-contain motion-safe:animate-[illustrationFloat_5s_ease-in-out_infinite]"
                            />
                        </div>
                    </div>
                </div>

                <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes illustrationFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
            </section>

            {/* Footer */}
            <Footer />



        </main>
    );
};
export default DomesticShipping;