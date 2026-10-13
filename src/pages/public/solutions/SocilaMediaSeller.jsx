
import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight, Truck, IndianRupee, MapPin, ShieldCheck, MessageCircle, CheckCircle2, Share2, Bell, CloudUpload, Package, Percent, Star, ArrowLeft,
} from "lucide-react";
import Navbar from "../../../features/landing/navbar/Navbar";
import blueDartLogo from "../../../assets/logos/bluedart.svg";
import amazonLogo from "../../../assets/logos/amazon.svg";
import blitzLogo from "../../../assets/logos/blitz.svg";
import delhiveryLogo from "../../../assets/logos/delhivery.png";
import dhlLogo from "../../../assets/logos/dhl.svg";
import dtdcLogo from "../../../assets/logos/dtdc.png";
import ekartLogo from "../../../assets/logos/ekart.svg";
import indianPostLogo from "../../../assets/logos/indianpost.webp";
import shadowfaxLogo from "../../../assets/logos/fedex.png";
import shriMarutiLogo from "../../../assets/logos/shri_maruti.png";
import xpressbeesLogo from "../../../assets/logos/xpressbees.svg";
import gatiLogo from "../../../assets/logos/gati.svg";
import Footer from "../../../features/landing/footer/Footer";
import small_business from "../../../assets/SDD-NDD/same Day_image.webp";
import instagram from "../../../assets/logos/Instagram_logo_2022.svg";
import facebook from "../../../assets/logos/2023_Facebook_icon.svg";
import { Link } from "react-router-dom";

const brand = {
    blue: "#087BFA",
    cyan: "#00B9E8",
    teal: "#00BFA5",
    green: "#08C878",
    navy: "#08245B",
    body: "#4F719F",
};

const features = [
    {
        icon: Truck,
        title: "15+ Courier Partners",
        text: "Compare available courier partners and choose a suitable option for your orders.",
    },
    {
        icon: MapPin,
        title: "Real-Time Tracking",
        text: "Share tracking links and keep your customers updated on delivery progress.",
    },
    {
        icon: IndianRupee,
        title: "Competitive Rates",
        text: "Compare available shipping rates and find options that fit your business.",
    },
    {
        icon: ShieldCheck,
        title: "COD & RTO Management",
        text: "Manage cash-on-delivery shipments and monitor return-to-origin updates.",
    },
    {
        icon: CloudUpload,
        title: "Easy Order Upload",
        text: "Create shipments by entering order details or uploading supported files.",
    },
    {
        icon: Bell,
        title: "Automated Updates",
        text: "Keep your customers informed with timely shipment notifications.",
    },
];

const steps = [
    {
        type: "social",
        title: "Bring Your Orders Together",
        text: "Create shipments for orders received through WhatsApp, Instagram, Facebook, and other social channels.",
    },
    {
        type: "rates",
        title: "Compare & Choose",
        text: "Compare available courier partners, shipping rates, and delivery estimates.",
    },
    {
        type: "delivery",
        title: "Ship & Track",
        text: "Arrange shipment pickup, monitor delivery progress, and share tracking links.",
    },
];

const courierPartners = [
    { name: "Blue Dart", logo: blueDartLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Blitz", logo: blitzLogo },
    { name: "Delhivery", logo: delhiveryLogo },
    { name: "DHL", logo: dhlLogo },
    { name: "DTDC", logo: dtdcLogo },
    { name: "Ekart", logo: ekartLogo },
    { name: "Indian Post", logo: indianPostLogo },
    { name: "Shadowfax", logo: shadowfaxLogo },
    { name: "Shri Maruti", logo: shriMarutiLogo },
    { name: "Xpressbees", logo: xpressbeesLogo },
    { name: "Gati", logo: gatiLogo },
];

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Fashion Seller, Mumbai",
        image: "",
        // image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote:
            "Nexgo helps me compare shipping options and manage my orders more easily. It saves time that I can spend growing my business.",
    },
    {
        name: "Rohit Verma",
        role: "Home Decor Seller, Delhi",
        image: "",
        // image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote:
            "Having shipment details and tracking in one place makes managing my daily orders much simpler.",
    },
    {
        name: "Sneha Patel",
        role: "Beauty & Skincare Seller, Bengaluru",
        image: "",
        // image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote:
            "Shipping is an important part of my customer experience. Tracking and sharing delivery updates is easier.",
    },
];

const benefits = [
    { icon: Truck, label: <>15+ Courier<br />Partners</> },
    { icon: IndianRupee, label: <>Competitive<br />Shipping Rates</> },
    { icon: MapPin, label: <>Real-Time<br />Tracking</> },
    { icon: ShieldCheck, label: <>COD & RTO<br />Management</> },
];



const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

function SocialMediaSeller() {

    const reduceMotion = useReducedMotion();
    const pageRef = useRef(null);

    useEffect(() => {
        const root = pageRef.current;
        if (!root) return;

        const elements = root.querySelectorAll(".reveal");

        if (!("IntersectionObserver" in window)) {
            elements.forEach((el) => el.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const motionProps = (delay = 0) =>
        reduceMotion
            ? {}
            : {
                initial: "hidden",
                animate: "visible",
                variants: reveal,
                custom: delay,
            };

    return (
        <main
            ref={pageRef}
            className="nexgo-page min-h-screen overflow-x-clip bg-white font-sans text-[#08245B] antialiased"
        >
            <style>{`
                    .nexgo-page {
                      --navy: #092957;
                      --blue: #0877f9;
                      --green: #00b98b;
                      --muted: #58749d;
                      --mint: #eafbf7;
                      font-family: Inter, ui-sans-serif, system-ui, -apple-system,
                        BlinkMacSystemFont, "Segoe UI", sans-serif;
                    }

                    .nexgo-page * { box-sizing: border-box; }

                    .nexgo-page .reveal {
                      opacity: 0;
                      transform: translateY(28px);
                      transition:
                        opacity .75s ease,
                        transform .75s cubic-bezier(.2,.7,.2,1);
                    }

                    .nexgo-page .reveal.is-visible {
                      opacity: 1;
                      transform: translateY(0);
                    }

                    .nexgo-page .delay-1 { transition-delay: .10s; }
                    .nexgo-page .delay-2 { transition-delay: .20s; }
                    .nexgo-page .delay-3 { transition-delay: .30s; }
                    .nexgo-page .delay-4 { transition-delay: .40s; }

                    .nexgo-page .hero-copy {
                      animation: nexgoCopyIn .9s cubic-bezier(.2,.7,.2,1) both;
                    }

                    .nexgo-page .hero-visual {
                      animation: nexgoVisualIn 1.1s cubic-bezier(.2,.7,.2,1) both;
                      animation-delay: .12s;
                    }

                    .nexgo-page .float-soft {
                      animation: nexgoFloat 4.5s ease-in-out infinite;
                    }

                    .nexgo-page .float-delay {
                      animation: nexgoFloat 5s ease-in-out infinite;
                      animation-delay: -2s;
                    }

                    .nexgo-page .gradient-button {
                      background: linear-gradient(110deg, #0877f9, #00c99a);
                      background-size: 150% 100%;
                      transition: background-position .35s ease, transform .3s ease,
                        box-shadow .3s ease;
                      background-position: left center;
                    }

                    .nexgo-page .gradient-button:hover {
                      background-position: right center;
                      transform: translateY(-3px);
                      box-shadow: 0 12px 26px rgba(0, 160, 140, .22);
                    }

                    .nexgo-page .feature-card {
                      transition: transform .35s ease, box-shadow .35s ease,
                        border-color .35s ease;
                    }

                    .nexgo-page .feature-card:hover {
                      transform: translateY(-6px);
                      border-color: rgba(0, 185, 139, .45);
                      box-shadow: 0 16px 35px rgba(9, 41, 87, .08);
                    }

                    .nexgo-page .icon-bubble {
                      transition: transform .35s ease, background .35s ease;
                    }

                    .nexgo-page .feature-card:hover .icon-bubble {
                      transform: rotate(-7deg) scale(1.08);
                      background: #d5fbef;
                    }

                    .nexgo-page .courier-tile {
                      transition: transform .3s ease, box-shadow .3s ease;
                    }

                    .nexgo-page .courier-tile:hover {
                      transform: translateY(-4px);
                      box-shadow: 0 10px 24px rgba(9, 41, 87, .08);
                    }

                    .nexgo-page .step-number {
                      box-shadow: 0 8px 18px rgba(0, 185, 139, .18);
                    }

                    .nexgo-page .testimonial-card {
                      transition: transform .35s ease, box-shadow .35s ease;
                    }

                    .nexgo-page .testimonial-card:hover {
                      transform: translateY(-5px);
                      box-shadow: 0 16px 35px rgba(9, 41, 87, .08);
                    }

                    .nexgo-page .hero-image-mask {
                      border-radius: 46% 0 0 43% / 32% 0 0 36%;
                    }

                    @keyframes nexgoCopyIn {
                      from { opacity: 0; transform: translateX(-30px); }
                      to { opacity: 1; transform: translateX(0); }
                    }

                    @keyframes nexgoVisualIn {
                      from { opacity: 0; transform: translateX(30px) scale(.98); }
                      to { opacity: 1; transform: translateX(0) scale(1); }
                    }

                    @keyframes nexgoFloat {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-10px); }
                    }

                    @media (prefers-reduced-motion: reduce) {
                      .nexgo-page *,
                      .nexgo-page *::before,
                      .nexgo-page *::after {
                        animation-duration: .01ms !important;
                        animation-iteration-count: 1 !important;
                        scroll-behavior: auto !important;
                        transition-duration: .01ms !important;
                      }
                      .nexgo-page .reveal {
                        opacity: 1;
                        transform: none;
                      }
                    }

                    @media (max-width: 640px) {
                      .nexgo-page .hero-image-mask {
                        border-radius: 28px;
                      }
                    }
                  `}</style>
            {/* ================= NAVBAR ================= */}
            <div>
                <Navbar />
            </div>

            {/* ================= HERO SECTION ================= */}
            <section className="relative isolate ">
                {/* Back to home */}
                <div className=" px-10 lg:px-16 pt-5">
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/"
                            className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#3e6790] transition-colors duration-300 hover:text-[#0879df]"
                        >
                            <ArrowLeft
                                size={15}
                                strokeWidth={2}
                                className="transition-transform duration-300 group-hover:-translate-x-1"
                            />

                            Back to Home
                        </Link>
                    </motion.div>
                </div>
                {/* Soft page background. This is behind the photo, not on it. */}
                <div
                    className="pointer-events-none absolute inset-0 -z-20"
                    style={{
                        background:
                            "radial-gradient(ellipse at 66% 17%, rgba(8,123,250,.055), transparent 31%), radial-gradient(ellipse at 90% 40%, rgba(0,191,165,.075), transparent 32%)",
                    }}
                />

                <div className="relative mx-auto grid max-w-[1440px] items-center gap-5 px-5 pb-12 pt-8 sm:px-8 sm:pt-6 lg:min-h-[790px] lg:grid-cols-[0.96fr_1.04fr] lg:gap-0 lg:px-12 lg:pb-16 lg:pt-5 xl:px-[5.5%]">
                    {/* LEFT CONTENT */}
                    <div className="relative z-30 min-w-0 lg:-mr-16 xl:-mr-20">
                        {/* <motion.div {...motionProps(0)}>
                            <span
                                className="inline-flex rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.025em] shadow-sm sm:text-sm"
                                style={{
                                    color: "#009F8B",
                                    background: "#E9FCF7",
                                    borderColor: "#D3F6ED",
                                    boxShadow: "0 3px 10px rgba(0,191,165,.13)",
                                }}
                            >
                                For WhatsApp & Social Media Sellers
                            </span>
                        </motion.div> */}

                        <motion.h1
                            {...motionProps(1)}
                            className="mt-6 max-w-[700px] text-[42px] font-extrabold leading-[1.06] tracking-[-1.8px] sm:text-[42px] lg:text-[42px] xl:text-[62px] xl:tracking-[-2.5px]"
                        >
                            <span className="block">Turn Your Social Media</span>
                            <span className="block">Orders into</span>
                            <span
                                className="block pb-1"
                                style={{
                                    background:
                                        "linear-gradient(100deg, #087BFA 0%, #00AFCB 46%, #00B88C 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Happy Deliveries
                            </span>
                        </motion.h1>

                        <motion.p
                            {...motionProps(2)}
                            className="mt-6 max-w-[570px] text-[15px] leading-[1.75] sm:text-[17px] sm:leading-[1.8]"
                            style={{ color: brand.body }}
                        >
                            <strong className="font-semibold">
                                Nexgo helps WhatsApp and social media sellers ship faster,
                                cheaper and smarter.
                            </strong>{" "}
                            Compare with 15+ courier partners, manage all your orders in one
                            place and keep your customers happy — without the hassle.
                        </motion.p>

                        {/* BENEFITS */}
                        <div className="mt-8 grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-x-0 lg:mt-9">
                            {benefits.map(({ icon: Icon, label }, index) => (
                                <motion.div
                                    key={index}
                                    {...motionProps(index + 3)}
                                    whileHover={reduceMotion ? {} : { y: -4 }}
                                    className={`flex min-w-0 flex-col items-start gap-3 px-1 sm:px-4 lg:px-3 ${index !== 0 ? "sm:border-l sm:border-slate-200" : ""
                                        }`}
                                >
                                    <span
                                        className="flex h-[60px] w-[60px] items-center justify-center rounded-full"
                                        style={{
                                            background:
                                                "linear-gradient(145deg, #E8F9FF, #D5F8EE)",
                                            color: "#00A993",
                                        }}
                                    >
                                        <Icon size={29} strokeWidth={2.3} />
                                    </span>
                                    <span className="text-[14px] font-medium leading-[1.5] sm:text-[15px]">
                                        {label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA BUTTONS */}
                        <motion.div
                            {...motionProps(7)}
                            className="mt-8 flex flex-wrap items-center gap-4 sm:gap-7 lg:mt-10"
                        >
                            <motion.a
                                href="/signup"
                                whileHover={reduceMotion ? {} : { y: -3, scale: 1.015 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex min-h-[59px] items-center justify-center gap-4 rounded-[15px] px-6 py-4 text-[15px] font-bold text-white shadow-md sm:px-9 sm:text-[17px]"
                                style={{
                                    background:
                                        "linear-gradient(105deg, #087BFA 0%, #00BFA5 100%)",
                                    boxShadow: "0 8px 22px rgba(8,123,250,.15)",
                                }}
                            >
                                Start Shipping Now
                                <ArrowRight size={19} />
                            </motion.a>

                            {/* <motion.a
                                href="#demo"
                                whileHover={reduceMotion ? {} : { y: -2 }}
                                className="inline-flex items-center gap-3 rounded-full py-2 text-[14px] font-semibold sm:text-[16px]"
                                style={{ color: "#00A990" }}
                            >
                                <span
                                    className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-2"
                                    style={{ borderColor: "#00BFA5" }}
                                >
                                    <Play size={19} fill="currentColor" />
                                </span>
                                Watch 1 Min Demo
                            </motion.a> */}
                        </motion.div>

                        {/* <motion.p
                            {...motionProps(8)}
                            className="mt-7 text-[13px] italic leading-6 sm:text-[14px]"
                            style={{ color: "#6688B4" }}
                        >
                            You focus on growing your business. Let Nexgo simplify your
                            shipping.
                        </motion.p> */}
                    </div>

                    {/* RIGHT VISUAL COMPOSITION */}
                    <div className="relative z-10 mx-auto mt-5 w-full max-w-[740px] lg:mt-0 lg:ml-0 lg:h-[690px] lg:max-w-none">
                        {/* Cyan organic shape BEHIND the photo */}
                        <motion.div
                            className="pointer-events-none absolute -right-[4%] top-0 h-[70%] w-[92%]"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(8,123,250,.09), rgba(0,191,165,.10))",
                                borderRadius: "42% 58% 20% 35% / 20% 22% 30% 35%",
                                filter: "blur(1px)",
                            }}
                            animate={
                                reduceMotion
                                    ? {}
                                    : {
                                        borderRadius: [
                                            "42% 58% 20% 35% / 20% 22% 30% 35%",
                                            "48% 52% 28% 30% / 25% 18% 34% 28%",
                                            "42% 58% 20% 35% / 20% 22% 30% 35%",
                                        ],
                                    }
                            }
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Pale mint shape at the lower left of the image */}
                        <div
                            className="pointer-events-none absolute bottom-[8%] left-[1%] h-[30%] w-[30%]"
                            style={{
                                background:
                                    "linear-gradient(140deg, rgba(164,244,226,.82), rgba(225,251,246,.3))",
                                borderRadius: "18% 82% 69% 31% / 36% 32% 68% 64%",
                            }}
                        />

                        {/* Main organic image mask. No tint or filter on the image. */}
                        <motion.div
                            className="relative h-[390px] overflow-hidden sm:h-[510px] lg:absolute lg:inset-0 lg:h-full"
                            initial={
                                reduceMotion ? false : { opacity: 0, scale: 0.97, x: 20 }
                            }
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{
                                duration: reduceMotion ? 0 : 1,
                                delay: reduceMotion ? 0 : 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                clipPath:
                                    "polygon(24% 5%, 42% 0%, 64% 4%, 79% 9%, 100% 2%, 100% 94%, 84% 99%, 63% 100%, 42% 91%, 21% 83%, 4% 66%, 12% 47%, 21% 29%)",
                            }}
                        >
                            <img
                                src={small_business}
                                alt="Small business owner managing orders and packing shipments"
                                fetchPriority="high"
                                className="h-full w-full object-cover object-center"
                                style={{
                                    filter: "none",
                                    mixBlendMode: "normal",
                                }}
                            />
                        </motion.div>

                        {/* Soft white edge transition between the text and photograph.
                This overlay sits on the IMAGE EDGE only, not across the photo. */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-y-0 left-0 z-[5] hidden w-[37%] lg:block"
                            style={{
                                background:
                                    "linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,.98) 12%, rgba(255,255,255,.8) 32%, rgba(255,255,255,.34) 65%, rgba(255,255,255,0) 100%)",
                                clipPath:
                                    "polygon(0 0, 100% 0, 84% 17%, 67% 36%, 54% 53%, 64% 73%, 100% 100%, 0 100%)",
                            }}
                        />

                        {/* Social icons floating independently over the photo */}
                        <div className="absolute left-[5%] top-[20%] z-20 flex flex-col items-center gap-2 sm:left-[7%] sm:top-[20%] lg:left-[4%] lg:top-[20%] lg:flex-row lg:flex-wrap lg:gap-2">
                            {[
                                {
                                    image: instagram,
                                    color: "#E1306C",
                                    delay: 0.1,
                                },
                                {
                                    Icon: MessageCircle,
                                    color: "#20C875",
                                    delay: 0.25,
                                },
                                {
                                    image: facebook,
                                    color: "#1877F2",
                                    delay: 0.4,
                                },
                            ].map(({ Icon, image, color, delay }, i) => (
                                <motion.div
                                    key={i}
                                    initial={
                                        reduceMotion ? false : { opacity: 0, scale: 0.65, y: 8 }
                                    }
                                    animate={
                                        reduceMotion
                                            ? {}
                                            : { opacity: 1, scale: 1, y: [0, -5, 0] }
                                    }
                                    transition={{
                                        opacity: { delay: 0.4 + delay, duration: 0.4 },
                                        scale: { delay: 0.4 + delay, duration: 0.4 },
                                        y: {
                                            delay: 1 + delay,
                                            duration: 3.4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                    }}
                                    className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white bg-white shadow-[0_7px_28px_rgba(8,123,250,.13)] sm:h-[60px] sm:w-[60px]"
                                >
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="social media icon"
                                            className="h-[22px] w-[22px] object-contain sm:h-[26px] sm:w-[26px]"
                                        />
                                    ) : (
                                        <Icon size={29} color={color} strokeWidth={2.5} />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Handwritten-style note */}
                        <motion.div
                            className="absolute right-[2%] top-[10%] z-20 rotate-[-8deg] text-center sm:right-[3%] lg:right-[2%] lg:top-[10%]"
                            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <p
                                className="text-[14px] font-semibold italic leading-[1.5] sm:text-[17px]"
                                style={{
                                    color: brand.navy,
                                    fontFamily: "cursive",
                                }}
                            >
                                More orders,
                                <br />
                                less hassle!
                            </p>
                            <svg
                                viewBox="0 0 100 42"
                                className="ml-2 mt-1 h-8 w-20 sm:h-10 sm:w-24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M91 4C72 17 47 20 18 30M18 30l9-12M18 30l14 4"
                                    stroke={brand.blue}
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>

                        {/* Floating order notification */}
                        <motion.div
                            className="absolute bottom-[12%] left-[2%] z-20 flex items-center gap-3 rounded-2xl border border-white/90 bg-white/95 p-3 shadow-[0_12px_35px_rgba(8,36,91,.13)] sm:bottom-[11%] sm:left-[6%] sm:p-4 lg:bottom-[12%] lg:left-[0%]"
                            animate={
                                reduceMotion ? {} : { y: [0, -7, 0], rotate: [0, 0.5, 0] }
                            }
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                style={{ background: "#E2F9F2", color: "#00A990" }}
                            >
                                <MessageCircle size={22} />
                            </div>
                            <div>
                                <p className="text-xs font-bold sm:text-sm">New Order! 🎉</p>
                                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                                    Your order has been received
                                </p>
                                <p className="mt-1 text-[9px] text-slate-400">Just now</p>
                            </div>
                        </motion.div>

                        {/* Shipment tracking phone — separate from the photo */}
                        <motion.div
                            className="absolute bottom-[5%] right-[3%] z-30 w-[150px] rounded-[29px] border-[5px] border-[#243442] bg-white p-2.5 shadow-[0_18px_45px_rgba(8,36,91,.25)] sm:bottom-[6%] sm:right-[4%] sm:w-[190px] sm:rounded-[35px] sm:p-3 lg:bottom-[16%] lg:right-[4%] lg:w-[218px]"
                            initial={
                                reduceMotion ? false : { opacity: 0, y: 25, rotate: 2 }
                            }
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{
                                duration: reduceMotion ? 0 : 0.8,
                                delay: reduceMotion ? 0 : 0.65,
                            }}
                            whileHover={reduceMotion ? {} : { y: -4 }}
                        >
                            {/* Phone speaker */}
                            <div className="absolute left-1/2 top-[-1px] h-[9px] w-[53px] -translate-x-1/2 rounded-b-xl bg-[#243442]" />

                            <div className="flex items-center justify-between px-1 pt-2 text-[8px] font-semibold text-slate-600 sm:text-[9px]">
                                <span>9:41</span>
                                <span>● ▰ ▴</span>
                            </div>

                            <div className="mt-3 flex items-center gap-1">
                                <span
                                    className="text-xl font-black italic"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #087BFA, #00BFA5)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    N
                                </span>
                                <span className="text-[12px] font-extrabold tracking-tight sm:text-sm">
                                    Nexgo
                                </span>
                            </div>

                            <h3 className="mt-5 text-[11px] font-bold sm:text-[14px]">
                                Track Shipment
                            </h3>

                            <div
                                className="mt-3 flex items-center gap-2 rounded-xl px-2 py-2"
                                style={{ background: "#EAFBF6" }}
                            >
                                <CheckCircle2
                                    size={18}
                                    fill="#00BFA5"
                                    color="#00BFA5"
                                    stroke="white"
                                />
                                <span className="text-[9px] font-semibold text-[#009D83] sm:text-[11px]">
                                    Out for Delivery
                                </span>
                            </div>

                            <p className="mt-3 break-all text-[9px] text-[#315C91] sm:text-[10px]">
                                Tracking ID: 7845629103
                            </p>

                            <div className="relative ml-[5px] mt-4 space-y-4 border-l-2 border-[#BDEDE2] pl-4">
                                {[
                                    ["Out for Delivery", "Today, 10:34 AM", true],
                                    ["In Transit", "Today, 08:15 AM", false],
                                    ["Arrived at Hub", "Yesterday, 06:42 PM", false],
                                    ["Shipment Picked Up", "Yesterday, 12:10 PM", false],
                                ].map(([title, time, active]) => (
                                    <div key={title} className="relative">
                                        <span
                                            className="absolute -left-[22px] top-[2px] h-[12px] w-[12px] rounded-full border-[3px] bg-white"
                                            style={{
                                                borderColor: active ? "#00BFA5" : "#08B89B",
                                                background: active ? "#D9F8EF" : "#FFFFFF",
                                            }}
                                        />
                                        <p className="text-[9px] font-medium leading-4 sm:text-[11px]">
                                            {title}
                                        </p>
                                        <p className="text-[8px] leading-4 text-slate-400 sm:text-[10px]">
                                            {time}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl border py-2.5 text-[9px] font-semibold sm:text-[10px]"
                                style={{
                                    borderColor: "#00BFA5",
                                    color: "#00A88F",
                                }}
                            >
                                <Share2 size={13} />
                                Share Tracking Link
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. FEATURES */}
            <section
                id="features"
                className="relative bg-gradient-to-br from-[#f2fcf8] via-white to-[#f1faff] py-16 sm:py-20"
            >
                <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-14">
                    <div className="reveal self-center">
                        <span className="inline-flex rounded-full bg-[#d8faf0] px-4 py-2 text-[11px] font-bold tracking-wide text-[#009e83]">
                            WHY NEXGO?
                        </span>
                        <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight tracking-[-.035em] text-[#092957] sm:text-4xl">
                            Everything You Need for Your Social Media Business
                        </h2>
                        <p className="mt-5 max-w-lg text-base leading-7 text-[#58749d]">
                            From order pickup to doorstep delivery — Nexgo makes shipping
                            simple, so you can focus on selling, growing your audience and
                            serving your customers.
                        </p>
                        <a
                            href="#how-it-works"
                            className="gradient-button mt-7 inline-flex items-center gap-4 rounded-2xl px-6 py-4 text-sm font-bold text-white"
                        >
                            Explore All Features
                            <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <article
                                    key={feature.title}
                                    className={`feature-card reveal delay-${(index % 4) + 1} flex gap-4 rounded-2xl border border-[#e1eff4] bg-white/90 p-5 shadow-[0_5px_22px_rgba(9,41,87,.035)] sm:p-6`}
                                >
                                    <div className="icon-bubble flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e1faf3] text-[#009d7b] sm:h-14 sm:w-14">
                                        <Icon size={25} strokeWidth={2.3} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold leading-6 text-[#092957] sm:text-base">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-[#6884a8]">
                                            {feature.text}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section
                id="how-it-works"
                className="relative overflow-hidden bg-gradient-to-b from-[#f0fcf9] to-[#f7fcff] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
            >
                <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
                <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />

                <div className="relative mx-auto max-w-[1340px]">
                    <div className={`${reveal} mx-auto max-w-2xl text-center`}>
                        <span className="inline-flex rounded-full border border-emerald-100 bg-[#dffbf4] px-4 py-2 text-[11px] font-bold tracking-wide text-[#009d83]">
                            HOW IT WORKS
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#092c63] sm:text-4xl lg:text-[42px]">
                            Ship in 3 Simple Steps
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6484ad] sm:text-base">
                            From social media orders to doorstep delivery — manage your
                            shipping journey in one simple place.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-7">
                        {steps.map((step, i) => (
                            <article
                                key={step.title}
                                className={`${reveal} nexgo-delay-${i + 1} nexgo-card relative`}
                            >
                                {/* Illustration card */}
                                <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-3xl border border-white bg-white/80 p-5 shadow-[0_10px_35px_rgba(16,78,122,0.06)]">
                                    <span className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#e7f7ff] opacity-80" />
                                    <span className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-[#e1faf1] opacity-80" />

                                    {step.type === "social" && (
                                        <div className="nexgo-float relative z-10 w-full max-w-[290px] rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/60">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-extrabold text-[#092c63]">
                                                        Social Orders
                                                    </p>
                                                    <p className="mt-1 text-[11px] text-[#7794b8]">
                                                        Your channels, together
                                                    </p>
                                                </div>
                                                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e5faf3] text-[#00a889]">
                                                    <Share2 size={18} />
                                                </span>
                                            </div>

                                            <div className="mt-5 space-y-3">
                                                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dcfce7] text-[#16a34a]">
                                                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                                                            <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15L2.5 21l4.1-1.08A10 10 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-2.43.64.65-2.37-.2-.31a8.1 8.1 0 1 1 6.41 3.35Zm4.46-6.08c-.24-.12-1.46-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.07-.4-2.03-1.23-.76-.68-1.27-1.52-1.42-1.77-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.38-.77-1.88-.2-.5-.41-.43-.56-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.87.86-.87 2.09s.9 2.43 1.02 2.6c.13.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.14.16 1.56.1.48-.07 1.47-.6 1.68-1.19.21-.59.21-1.08.15-1.19-.06-.1-.23-.17-.48-.29Z" />
                                                        </svg>
                                                    </span>
                                                    <span className="flex-1">
                                                        <span className="block text-xs font-bold text-[#12366e]">WhatsApp</span>
                                                        <span className="mt-1 block text-[10px] text-[#7794b8]">Customer orders</span>
                                                    </span>
                                                    <span className="h-2 w-2 rounded-full bg-[#00bd91]" />
                                                </div>

                                                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f6] text-[#e1306c]">
                                                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                                            <rect x="3" y="3" width="18" height="18" rx="5" />
                                                            <circle cx="12" cy="12" r="4" />
                                                            <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                                                        </svg>
                                                    </span>
                                                    <span className="flex-1">
                                                        <span className="block text-xs font-bold text-[#12366e]">Instagram</span>
                                                        <span className="mt-1 block text-[10px] text-[#7794b8]">DM enquiries</span>
                                                    </span>
                                                    <span className="h-2 w-2 rounded-full bg-[#00bd91]" />
                                                </div>

                                                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1877f2]">
                                                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                                                            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11 10.13 11.93v-8.44H7.08v-3.49h3.05V9.4c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.98h-1.52c-1.49 0-1.96.93-1.96 1.88v2.26h3.34l-.53 3.49h-2.81V24C19.61 23.07 24 18.09 24 12.07Z" />
                                                        </svg>
                                                    </span>
                                                    <span className="flex-1">
                                                        <span className="block text-xs font-bold text-[#12366e]">Facebook</span>
                                                        <span className="mt-1 block text-[10px] text-[#7794b8]">Page enquiries</span>
                                                    </span>
                                                    <span className="h-2 w-2 rounded-full bg-[#00bd91]" />
                                                </div>
                                            </div>

                                            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#e7faf5] px-3 py-2.5 text-[11px] font-bold text-[#009d83]">
                                                <CheckCircle2 size={15} />
                                                Orders in one workflow
                                            </div>
                                        </div>
                                    )}

                                    {step.type === "rates" && (
                                        <div className="nexgo-float relative z-10 w-full max-w-[300px] rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/60">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-extrabold text-[#092c63]">
                                                        Compare Shipping
                                                    </p>
                                                    <p className="mt-1 text-[11px] text-[#7794b8]">
                                                        Find the right delivery option
                                                    </p>
                                                </div>
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f2ff] text-[#0878f9]">
                                                    <Percent size={21} />
                                                </span>
                                            </div>

                                            <div className="mt-5 space-y-3">
                                                {[
                                                    { name: "Delhivery", logo: delhiveryLogo, price: "₹48", days: "2–3 days" },
                                                    { name: "DHL", logo: dhlLogo, price: "₹52", days: "3–4 days" },
                                                    { name: "Blue Dart", logo: blueDartLogo, price: "₹65", days: "2–4 days" },
                                                ].map((courier, j) => (
                                                    <div
                                                        key={courier.name}
                                                        className={`flex items-center gap-3 rounded-xl border p-3 ${j === 0
                                                            ? "border-[#00bd91] bg-[#f0fcf8]"
                                                            : "border-slate-100 bg-white"
                                                            }`}
                                                    >
                                                        <img
                                                            src={courier.logo}
                                                            alt={courier.name}
                                                            className="h-8 w-12 shrink-0 object-contain"
                                                        />
                                                        <span className="min-w-0 flex-1">
                                                            <span className="mt-1 block text-[10px] text-[#7794b8]">
                                                                {courier.days}
                                                            </span>
                                                        </span>
                                                        <span className="text-sm font-extrabold text-[#092c63]">
                                                            {courier.price}
                                                        </span>
                                                        {j === 0 && (
                                                            <CheckCircle2 size={15} className="text-[#00a889]" />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl nexgo-gradient py-3 text-xs font-bold text-white shadow-md shadow-emerald-100">
                                                <CheckCircle2 size={15} />
                                                Choose Your Best Rate
                                            </div>
                                        </div>
                                    )}

                                    {step.type === "delivery" && (
                                        <div className="nexgo-float relative z-10 w-full max-w-[300px] rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/60">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-extrabold text-[#092c63]">
                                                        Shipment Tracking
                                                    </p>
                                                    <p className="mt-1 text-[11px] text-[#7794b8]">
                                                        Follow every delivery
                                                    </p>
                                                </div>
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e5faf3] text-[#00a889]">
                                                    <Truck size={22} />
                                                </span>
                                            </div>

                                            <div className="mt-5 flex items-center gap-4 rounded-xl bg-[#f0fcf8] p-3">
                                                <div className="flex h-[66px] w-[72px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d8b58d] to-[#b9814e] shadow-sm">
                                                    <Package size={42} className="text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-extrabold text-[#092c63]">
                                                        Your parcel is moving!
                                                    </p>
                                                    <p className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-[#009d83]">
                                                        <span className="h-2 w-2 rounded-full bg-[#00bd91]" />
                                                        Out for delivery
                                                    </p>
                                                    <p className="mt-1 text-[10px] text-[#7794b8]">
                                                        Tracking updates available
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="ml-3 mt-5 space-y-4 border-l-2 border-[#c8f0e4] pl-5">
                                                {[
                                                    { title: "Shipment picked up", time: "Parcel collected", active: false },
                                                    { title: "In transit", time: "Moving to destination", active: false },
                                                    { title: "Out for delivery", time: "Courier is on the way", active: true },
                                                ].map((item) => (
                                                    <div key={item.title} className="relative">
                                                        <span
                                                            className={`absolute -left-[27px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white ${item.active ? "bg-[#00bd91] ring-2 ring-emerald-100" : "bg-[#a8e6d6]"
                                                                }`}
                                                        >
                                                            {item.active && (
                                                                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                                            )}
                                                        </span>
                                                        <p className="text-xs font-bold text-[#12366e]">
                                                            {item.title}
                                                        </p>
                                                        <p className="mt-1 text-[10px] text-[#7794b8]">
                                                            {item.time}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-[#00bd91] py-2.5 text-xs font-bold text-[#009d83]">
                                                <Share2 size={15} />
                                                Share Tracking Link
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Step description */}
                                <div className="mt-6 px-1">
                                    <h3 className="text-base font-bold leading-6 text-[#092c63] sm:text-lg">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#6484ad]">
                                        {step.text}
                                    </p>
                                </div>

                                {i < 2 && (
                                    <div className="absolute -right-5 top-[43%] z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-[#d8eee9] bg-white text-xl text-[#00a889] shadow-sm md:flex">
                                        <ArrowRight size={19} />
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-[#f0fbf7] via-white to-[#f2fbff] py-16 sm:py-20">
                <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-14 lg:px-14">
                    <div className="reveal">
                        <span className="inline-flex rounded-full bg-[#d8faf0] px-4 py-2 text-[11px] font-bold tracking-wide text-[#009e83]">
                            OUR COURIER PARTNERS
                        </span>
                        <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-.035em] text-[#092957] sm:text-4xl">
                            We Work With India’s Top Couriers
                        </h2>
                        <p className="mt-4 text-base leading-7 text-[#6884a8]">
                            Get access to available courier services through Nexgo and
                            choose shipping options that suit your business needs.
                        </p>
                        <a
                            href="#get-started"
                            className="gradient-button mt-6 inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-bold text-white"
                        >
                            View All Partners
                            <ArrowRight size={17} />
                        </a>
                    </div>

                    <div className="reveal delay-2 grid grid-cols-2 gap-3 rounded-3xl bg-[#eef9f7] p-4 sm:grid-cols-4 sm:gap-4 sm:p-6">
                        {courierPartners.map(({ name, logo }) => (
                            <div
                                key={name}
                                className="courier-tile flex min-h-[76px] items-center justify-center rounded-xl border border-[#edf3f7] bg-white px-4 py-4"
                            >
                                <img
                                    src={logo}
                                    alt={name}
                                    className="max-h-9 w-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <p className="mx-auto mt-4 max-w-[1440px] px-5 text-xs text-[#7b91ad] sm:px-8 md:px-10 lg:px-14">
                    Courier availability depends on your account, pickup location and
                    service coverage. Display official partner logos only where
                    authorised.
                </p>
            </section>

            {/* 5. TESTIMONIALS */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-14">
                    <div className="reveal flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <span className="inline-flex rounded-full bg-[#d8faf0] px-4 py-2 text-[11px] font-bold tracking-wide text-[#009e83]">
                                REAL SELLERS. REAL STORIES.
                            </span>
                            <h2 className="mt-5 text-3xl font-extrabold tracking-[-.035em] text-[#092957] sm:text-4xl">
                                What Our Sellers Say
                            </h2>
                            <p className="mt-3 max-w-xl text-base leading-7 text-[#6884a8]">
                                See how Nexgo helps social media sellers simplify shipping and
                                grow their businesses.
                            </p>
                        </div>
                        <a
                            href="#get-started"
                            className="inline-flex items-center gap-2 self-start rounded-full border border-[#00b98b] px-5 py-3 text-sm font-bold text-[#009d7b] transition hover:bg-[#e8fbf5] sm:self-auto"
                        >
                            Join Nexgo
                            <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="mt-9 grid gap-5 md:grid-cols-3">
                        {testimonials.map((person, index) => (
                            <article
                                key={person.name}
                                className={`testimonial-card reveal delay-${index + 1} rounded-2xl border border-[#e5eff4] bg-white p-6 shadow-[0_5px_24px_rgba(9,41,87,.035)]`}
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={person.image}
                                        alt=""
                                        loading="lazy"
                                        className="h-14 w-14 rounded-full object-cover ring-4 ring-[#e8faf5]"
                                    />
                                    <div>
                                        <h3 className="text-sm font-bold text-[#092957]">
                                            {person.name}
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-[#6884a8]">
                                            {person.role}
                                        </p>
                                        <div
                                            className="mt-1 flex gap-0.5 text-[#f6ae26]"
                                            aria-label="Sample five-star display"
                                        >
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={13}
                                                    fill="currentColor"
                                                    strokeWidth={1}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-5 text-sm leading-7 text-[#58749d]">
                                    “{person.quote}”
                                </p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section id="get-started" className="px-4 pb-4 sm:px-8 sm:pb-8">
                <div className="reveal relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[#053e39]">
                    <div className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full bg-[#00c69a]/25 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-[#0877f9]/20 blur-3xl" />

                    <div className="relative grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-[1fr_.8fr] md:px-14 md:py-12 lg:px-16">
                        <div className="relative z-10">
                            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-wide text-[#a9f6df]">
                                READY TO GROW YOUR BUSINESS?
                            </span>
                            <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-.035em] text-white sm:text-4xl lg:text-4xl">
                                Start Shipping with Nexgo Today
                            </h2>
                            <p className="mt-2 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                                Join social media sellers who want a simpler way to manage
                                shipments through available courier partners.
                            </p>
                            <a
                                href="mailto:support@mynexgo.com?subject=Get%20Started%20with%20Nexgo"
                                className="gradient-button mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-white"
                            >
                                Get Started Free
                                <ArrowRight size={17} />
                            </a>
                        </div>

                        <div className="relative mx-auto w-full max-w-[450px] md:ml-auto">
                            <div className="absolute inset-6 rounded-full bg-[#00c99a]/20 blur-3xl" />
                            <img
                                src="/src/assets/SDD-NDD/ndd_cta.webp"
                                alt="Packages prepared for shipping"
                                loading="lazy"
                                className="relative h-[230px] w-full rounded-3xl object-cover shadow-2xl sm:h-[290px]"
                            />
                            <div className="float-delay absolute -bottom-4 -left-3 rounded-2xl border border-white/50 bg-white p-4 shadow-xl sm:-left-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e1faf3] text-[#009d7b]">
                                        <Truck size={22} />
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-[#092957]">
                                            Ready to ship
                                        </p>
                                        <p className="mt-1 text-xs text-[#6884a8]">
                                            Track every delivery
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />


        </main>
    );
}

export default SocialMediaSeller;
