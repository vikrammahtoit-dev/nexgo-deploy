import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Route, PackageCheck, RotateCcw, Boxes, Code2, RefreshCcw, ClipboardList, FileCheck2, LoaderCircle, MailCheck, Truck, Package, UserRound, Store, CircleCheck, TrendingUp, Eye, Settings2, ArrowUpRight, Star, } from "lucide-react";
import hero_brandsRetailer from "../../../assets/images/hero_retail_brand_package.webp";
import Nexgi_icon from "../../../assets/logos/favicon.webp";
import bulk_order from "../../../assets/images/bulk_order_fulfillment.webp";
import Delhivery from "../../../assets/logos/delhivery.png";
import Blitz from "../../../assets/logos/blitz.svg";
import dhl from "../../../assets/logos/dhl.svg";
import ekart from "../../../assets/logos/ekart.svg";
import Shree_Maruthi from "../../../assets/logos/shri_maruti.png";
import XpressBees from "../../../assets/logos/xpressbees.svg";

import Bluedart from "../../../assets/logos/bluedart.svg";
import amazon from "../../../assets/logos/amazon.svg";
import Courier_boxes from "../../../assets/images/Courier boxes and packaging.webp";
import shipping_operations from "../../../assets/images/shipping and fulfilment operations.png";

import myntra from "../../../assets/brands/myntra.webp";
import boat from "../../../assets/brands/boat.webp";
import body_shop from "../../../assets/brands/body_shop.webp";
import vivo from "../../../assets/brands/vivo.webp";
import reliance from "../../../assets/brands/reliance.webp";
import decathlon from "../../../assets/brands/Decathlon.webp";
import nykaa from "../../../assets/brands/nykaa.webp";
import tata_cliq from "../../../assets/brands/tata_cliq.webp";
import lifestyle from "../../../assets/brands/lifestyle.webp";
import Navbar from "../../../features/landing/navbar/Navbar";
import Footer from "../../../features/landing/footer/Footer";



const testimonials = [
    {
        brand: "boAt",
        brandLogo: boat,
        quote:
            "Nexgo has been a game-changer for our D2C business. We get the best courier rates, real-time tracking, and smooth COD management.",
        name: "Aman Gupta",
        role: "Co-founder, boAt (D2C Brand)",
        avatar: "",
    },
    {
        brand: "Nykaa",
        brandLogo: nykaa,
        quote:
            "Nexgo's platform is reliable, easy to use and gives us complete visibility. Our orders reach customers faster than ever.",
        name: "Falguni Nayar",
        role: "Founder, Nykaa",
        avatar: "",
    },
    {
        brand: "Myntra",
        brandLogo: myntra,
        quote:
            "We've reduced RTOs significantly with Nexgo and the support team always responds when we need them.",
        name: "Ankit Agarwal",
        role: "Category Lead, Myntra",
        avatar: "",
    },
];

const finalCtaContent = {
    eyebrow: "READY TO GROW?",
    title: "Simplify Your Retail Logistics",
    description:
        "Take control of your shipping and fulfillment operations with Nexgo.",
    button: "Start Shipping with Nexgo",
};

const BrandsRetailers = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}

            <section className="relative overflow-hidden bg-gradient-to-r from-[#effaff] via-[#f7fdff] to-[#f0fbf8]">

                {/* Soft background glow */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#d8f5ff]/70 blur-3xl" />

                    <div className="absolute right-[25%] top-[-180px] h-[450px] w-[450px] rounded-full bg-[#ddfaf2]/60 blur-3xl" />

                    <div className="absolute bottom-[-200px] left-[40%] h-[400px] w-[400px] rounded-full bg-[#dff6ff]/50 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-7 sm:px-8 lg:px-12 lg:pb-14">

                    {/* Back to home */}
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

                    {/* Hero Content */}

                    <div className="mt-7 grid items-center lg:grid-cols-[42%_58%]">

                        {/* Left Side  */}
                        <div className="relative z-10">

                            {/* Eyebrow */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-4 inline-flex rounded-full border border-[#b9e7ff] bg-[#dff6ff] px-3 py-[4px]"
                            >
                                <span className="text-[9px] font-semibold uppercase tracking-[0.04em] text-[#0879df]">
                                    For Brands & Retailers
                                </span>
                            </motion.div> */}

                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.18,
                                    ease: "easeOut",
                                }}
                                className="max-w-[620px] text-[42px] font-bold leading-[1.03] tracking-[-0.02em] text-[#073b78] sm:text-[48px] lg:text-[56px]"
                            >
                                Simplify Shipping.
                                <br />

                                Strengthen Your
                                <br />

                                <span className="bg-gradient-to-r from-[#0879df] via-[#08aee4] to-[#10c89c] bg-clip-text text-transparent">
                                    Retail Operations.
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.3,
                                }}
                                className="mt-4 max-w-[550px] text-[13px] leading-[1.55] text-[#1462a4] sm:text-[14px]"
                            >
                                Nexgo helps brands and retailers simplify order fulfillment
                                with multi-courier aggregation, real-time tracking, COD
                                management and seamless logistics — all in one platform.
                            </motion.p>

                            {/* Features */}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4,
                                }}
                                className="mt-6 grid max-w-[590px] grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4"
                            >

                                {/* Feature 1 */}
                                <div className="flex flex-col">
                                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,120,210,0.12)]">
                                        <Route
                                            size={17}
                                            strokeWidth={2}
                                            className="text-[#0879df]"
                                        />
                                    </div>

                                    <span className="text-[10px] font-semibold leading-[1.35] text-[#07539a]">
                                        Multi-Courier
                                        <br />
                                        Rates
                                    </span>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex flex-col">
                                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,120,210,0.12)]">
                                        <PackageCheck
                                            size={17}
                                            strokeWidth={2}
                                            className="text-[#0879df]"
                                        />
                                    </div>

                                    <span className="text-[10px] font-semibold leading-[1.35] text-[#07539a]">
                                        Branded
                                        <br />
                                        Tracking
                                    </span>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex flex-col">
                                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,120,210,0.12)]">
                                        <RotateCcw
                                            size={17}
                                            strokeWidth={2}
                                            className="text-[#0879df]"
                                        />
                                    </div>

                                    <span className="text-[10px] font-semibold leading-[1.35] text-[#07539a]">
                                        COD & RTO
                                        <br />
                                        Management
                                    </span>
                                </div>

                                {/* Feature 4 */}
                                <div className="flex flex-col">
                                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,120,210,0.12)]">
                                        <Boxes
                                            size={17}
                                            strokeWidth={2}
                                            className="text-[#0879df]"
                                        />
                                    </div>

                                    <span className="text-[10px] font-semibold leading-[1.35] text-[#07539a]">
                                        Bulk Order
                                        <br />
                                        Fulfillment
                                    </span>
                                </div>

                            </motion.div>

                            {/* CTA */}

                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5,
                                }}
                                className="mt-6 flex items-center gap-5"
                            >

                                {/* Primary */}
                                <Link
                                    to="/"
                                    className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0879df] to-[#0bc89c] px-5 py-2.5 text-[11px] font-semibold text-white shadow-[0_7px_18px_rgba(0,125,220,0.18)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(0,125,220,0.25)]"
                                >
                                    Start Shipping Now

                                    <ArrowRight
                                        size={14}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>

                                {/* Video */}
                                <button
                                    type="button"
                                    className="group inline-flex items-center gap-2 text-[11px] font-medium text-[#07539a]"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0879df] bg-white text-[#0879df] transition-all duration-300 group-hover:bg-[#0879df] group-hover:text-white">
                                        <Play
                                            size={11}
                                            fill="currentColor"
                                        />
                                    </span>

                                    Watch 1 min video
                                </button>

                            </motion.div>
                        </div>



                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.25,
                                ease: "easeOut",
                            }}
                            className="relative min-h-[430px] lg:min-h-[480px]"
                        >

                            {/* YOUR IMAGE GOES HERE */}

                            <motion.img
                                src={hero_brandsRetailer}
                                alt="Brands and retailers logistics solution"
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                }}
                                className=" absolute inset-0 h-full w-full object-cover object-center rounded-[28px]"
                            />

                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Trusted Partner */}
            <section className="relative overflow-hidden bg-white py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-7 text-center"
                    >
                        <p className="text-sm font-semibold tracking-wide text-[#1462a4]">
                            Trusted by 10,000+ Brands & Retailers
                        </p>
                    </motion.div>

                    {/* Logo Marquee */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            className="flex w-max items-center gap-14"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                                duration: 22,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {/* Logo Set 1 */}
                            <div className="flex shrink-0 items-center gap-14">
                                <img
                                    src={boat}
                                    alt="boat"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={myntra}
                                    alt="myntra"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={lifestyle}
                                    alt="lifestyle"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={body_shop}
                                    alt="body_shop"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={tata_cliq}
                                    alt="tata_cliq"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={nykaa}
                                    alt="Nykaa"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />
                            </div>

                            {/* Logo Set 2 — duplicate for seamless loop */}
                            <div className="flex shrink-0 items-center gap-14">
                                <img
                                    src={decathlon}
                                    alt="decathlon"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={reliance}
                                    alt="reliance brands"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={vivo}
                                    alt="vivo"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={myntra}
                                    alt="myntra"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={tata_cliq}
                                    alt="tata_cliq"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />

                                <img
                                    src={boat}
                                    alt="boat"
                                    className="h-9 w-auto max-w-[150px] object-contain opacity-75"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section-3 */}
            <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-14 lg:py-18">
                <div className="mx-auto px-5 sm:px-7 lg:px-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[450px_minmax(0,1fr)] lg:gap-8">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            className="flex flex-col justify-center"
                        >
                            {/* Small Label */}
                            {/* <div className="mb-3">
                                <span className="inline-flex rounded-full bg-[#d9f2ff] px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.02em] text-[#0879df]">
                                    ORDER & FULFILLMENT
                                </span>
                            </div> */}

                            {/* Heading */}
                            <h2 className="max-w-[380px] text-4xl font-bold leading-[1.1] tracking-[-0.6px] text-[#073b78] ">
                                Everything You Need
                                <br />
                                to Fulfill Orders, Faster.
                            </h2>

                            {/* Description */}
                            <p className="mt-3 max-w-[320px] text-[15px] leading-[1.55] text-[#3675a9]">
                                From instant courier comparison to automated tracking and COD
                                reconciliation, Nexgo gives you complete control over your
                                logistics.
                            </p>

                            {/* CTA */}
                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-5 inline-flex w-fit items-center gap-2 rounded-[6px] bg-gradient-to-r from-[#0879df] to-[#0dc69d] px-4 py-[9px] text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(8,121,223,0.16)]"
                            >
                                Explore All Features

                                <span className="text-[12px] leading-none">
                                    →
                                </span>
                            </motion.a>
                        </motion.div>

                        {/* Right */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                            {/* Order Management */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                whileHover={{ y: -2 }}
                                className="relative h-[180px] overflow-hidden rounded-[15px] border border-[#e1f1f7] bg-white px-4 py-3 shadow-[0_5px_18px_rgba(39,137,187,0.07)]"
                            >
                                <div className="flex items-start gap-3">

                                    {/* Icon */}
                                    <div className="flex shrink-0 items-center justify-center rounded-full bg-[#e8f8ff]">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d8f3ff]">
                                            <ClipboardList
                                                size={24}
                                                strokeWidth={2.3}
                                                className="text-[#0787e8]"
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="pt-[4px]">
                                        <h3 className="text-[19px] font-bold text-[#073b78]">
                                            Order Management
                                        </h3>

                                        <p className="mt-2  max-w-[210px] text-[12px] leading-[1.4] text-[#5790ba]">
                                            Manage shipping orders through a centralized logistics
                                            workflow.
                                        </p>
                                    </div>
                                </div>

                                {/* Workflow */}
                                <div className="absolute mt-5 left-4 right-4 flex items-start justify-between">

                                    {/* Received */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <UserRound
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Received
                                        </span>
                                    </div>

                                    <span className="mt-4 text-[11px] text-[#71b9d8]">
                                        →
                                    </span>

                                    {/* Processing */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <LoaderCircle
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Processing
                                        </span>
                                    </div>

                                    <span className="mt-4 text-[11px] text-[#71b9d8]">
                                        →
                                    </span>

                                    {/* Fulfilled */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <MailCheck
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Fulfilled
                                        </span>
                                    </div>

                                    <span className="mt-4 text-[11px] text-[#71b9d8]">
                                        →
                                    </span>

                                    {/* Shipped */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <Truck
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Shipped
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Dropshipping */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                whileHover={{ y: -2 }}
                                className="relative h-[180px] overflow-hidden rounded-[15px] border border-[#e1f1f7] bg-white px-4 py-3 shadow-[0_5px_18px_rgba(39,137,187,0.07)]"
                            >
                                <div className="flex items-start gap-3">

                                    {/* Icon */}
                                    <div className="flex shrink-0 items-center justify-center rounded-full bg-[#e8f8ff]">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d8f3ff]">
                                            <Package
                                                size={24}
                                                strokeWidth={2.3}
                                                className="text-[#0787e8]"
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="pt-[4px]">
                                        <h3 className="text-[19px] font-bold text-[#073b78]">
                                            Dropshipping
                                        </h3>

                                        <p className="mt-2 max-w-[255px] text-[12px] leading-[1.4] text-[#5790ba]">
                                            Support dropshipping operations by connecting your
                                            fulfillment with the shipping process.
                                        </p>
                                    </div>
                                </div>

                                {/* Workflow */}
                                <div className="absolute mt-5 left-4 right-4 flex items-start justify-between">

                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <UserRound
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Customer
                                        </span>
                                    </div>

                                    <span className="mt-4 text-[11px] text-[#71b9d8]">
                                        →
                                    </span>


                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <Store
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Supplier
                                        </span>
                                    </div>

                                    <span className="mt-4 text-[11px] text-[#71b9d8]">
                                        →
                                    </span>

                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <img
                                                src={Nexgi_icon}
                                                alt="Nexgo Icon"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Supplier
                                        </span>
                                    </div>

                                    <span className="mt-4 text-[11px] text-[#71b9d8]">
                                        →
                                    </span>



                                    {/* Fulfilled */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <Truck
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Courier
                                        </span>
                                    </div>

                                    <span className="mt-4 text-[11px] text-[#71b9d8]">
                                        →
                                    </span>

                                    {/* Shipped */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <UserRound
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Customer
                                        </span>
                                    </div>
                                </div>
                            </motion.div>


                            {/* Bulk Order Fulfillment */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                whileHover={{ y: -2 }}
                                className="relative h-[180px] overflow-hidden rounded-[15px] border border-[#e1f1f7] bg-white px-4 py-3 shadow-[0_5px_18px_rgba(39,137,187,0.07)]"
                            >
                                <div className="flex items-start gap-3">

                                    {/* Icon */}
                                    <div className="flex shrink-0 items-center justify-center rounded-full bg-[#e8f8ff]">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d8f3ff]">
                                            <Package
                                                size={24}
                                                strokeWidth={2.3}
                                                className="text-[#0787e8]"
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="pt-[4px]">
                                        <h3 className="text-[19px] font-bold text-[#073b78]">
                                            Bulk Order Fulfillment
                                        </h3>

                                        <p className="mt-2  max-w-[295px] text-[12px] leading-[1.4] text-[#5790ba]">
                                            Handle high order volumes efficiently and ensure faster
                                            processing and delivery
                                        </p>
                                    </div>
                                </div>

                                {/* Actual Images */}
                                <motion.img
                                    src={bulk_order}
                                    alt="Nexgo boxes for bulk order fulfillment"
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, delay: 0.25 }}
                                    className="absolute  left-[34px] h-[63px] w-[135px] object-contain object-bottom"
                                />

                                {/* High Volume */}
                                <motion.div
                                    initial={{ opacity: 0, x: 8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.3 }}
                                    className="absolute mt-5 right-[36px] flex items-center gap-1.5 rounded-[6px] bg-white px-2.5 py-1.5 shadow-[0_4px_15px_rgba(33,124,174,0.12)]"
                                >
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#10c89c]">
                                        <CircleCheck
                                            size={19}
                                            strokeWidth={2.5}
                                            className="text-white"
                                        />
                                    </span>

                                    <span className="text-[10px] font-bold text-[#477da8]">
                                        High Volume
                                    </span>
                                </motion.div>


                            </motion.div>


                            {/* API Integration */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                                whileHover={{ y: -2 }}
                                className="relative h-[180px] overflow-hidden rounded-[15px] border border-[#e1f1f7] bg-white px-4 py-3 shadow-[0_5px_18px_rgba(39,137,187,0.07)]"
                            >
                                <div className="flex items-start gap-3">

                                    {/* Icon */}
                                    <div className="flex shrink-0 items-center justify-center rounded-full bg-[#e8f8ff]">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d8f3ff]">
                                            <Code2
                                                size={24}
                                                strokeWidth={2.3}
                                                className="text-[#0787e8]"
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="pt-[4px]">
                                        <h3 className="text-[19px] font-bold text-[#073b78]">
                                            API Integration
                                        </h3>

                                        <p className="mt-2  max-w-[290px] text-[12px] leading-[1.4] text-[#5790ba]">
                                            Connect Nexgo with your existing systems and integrate
                                            logistics into your workflow.
                                        </p>
                                    </div>
                                </div>

                                {/* Workflow */}
                                <div className="absolute mt-5 left-4 right-4 flex items-start justify-between">

                                    {/* Received */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            < Code2
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Your System
                                        </span>
                                    </div>

                                    <span className="mt-3 text-[16px] text-[#71b9d8]">
                                        →
                                    </span>

                                    {/* Processing */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                                            <Code2
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-white"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Nexgo API
                                        </span>
                                    </div>

                                    <span className="mt-3 text-[16px] text-[#71b9d8]">
                                        →
                                    </span>

                                    {/* Fulfilled */}
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f7ff]">
                                            <Truck
                                                size={19}
                                                strokeWidth={2.1}
                                                className="text-[#0879df]"
                                            />
                                        </div>

                                        <span className="mt-[3px] text-[10px] font-medium text-[#3976a5]">
                                            Couriers
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section-4 */}

            <section className="relative overflow-hidden bg-[#f3fcff] py-8 sm:py-10 lg:py-20">
                <div className="mx-auto w-full  px-6 sm:px-8 lg:px-16 xl:px-20">
                    <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[27%_45%_28%] lg:gap-0">

                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, x: -18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="pr-5"
                        >
                            {/* <span className="inline-flex rounded-full bg-[#d9f2ff] px-2.5 py-1.5 text-[11px] font-semibold text-[#0879df]">
                                OUR COURIER PARTNERS
                            </span> */}

                            <h2 className="mt-2 text-3xl font-bold leading-[1.08] tracking-[-0.5px] text-[#073b78] lg:text-4xl">
                                India's Leading
                                <br />
                                Courier Partners
                            </h2>

                            <p className="mt-3 max-w-[295px] text-[15px] leading-[1.5] text-[#4b87b3]">
                                We work with the top logistics companies to ensure your orders
                                reach customers safely and on time.
                            </p>

                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-5 inline-flex items-center gap-2 rounded-[6px] bg-gradient-to-r from-[#0879df] to-[#0dc69d] px-4 py-2 text-[19px] font-semibold text-white"
                            >
                                Explore All Partners
                                <ArrowRight size={17} />
                            </motion.a>
                        </motion.div>

                        {/* CENTER — LOGOS */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="w-full px-0 lg:px-2"
                        >
                            {/* ROW 1 */}
                            <div className="flex h-[80px] w-full items-center justify-between rounded-[9px] border border-[#e3f2f8] bg-white px-5 shadow-[0_4px_14px_rgba(39,137,187,0.06)]">

                                <motion.img
                                    src={Delhivery}
                                    alt="Delhivery"
                                    className="h-[19px] w-[75px] object-contain"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />

                                <motion.img
                                    src={ekart}
                                    alt="Ekart"
                                    className="h-[25px] w-[70px] object-contain"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />

                                <motion.img
                                    src={Bluedart}
                                    alt="Blue Dart"
                                    className="h-[23px] w-[70px] object-contain"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />

                                <motion.img
                                    src={XpressBees}
                                    alt="Xpressbees"
                                    className="h-[20px] w-[75px] object-contain"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />
                            </div>

                            {/* ROW 2 */}
                            <div className="mt-2 flex h-[80px] w-full items-center justify-between rounded-[9px] border border-[#e3f2f8] bg-white px-5 shadow-[0_4px_14px_rgba(39,137,187,0.06)]">

                                <motion.img
                                    src={Shree_Maruthi}
                                    alt="Shree Maruthi"
                                    className="h-[24px] w-[70px] object-contain"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />

                                <motion.img
                                    src={Blitz}
                                    alt="Blitz"
                                    className="h-[23px] w-[62px] object-contain"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />

                                <motion.img
                                    src={amazon}
                                    alt="Amazon"
                                    className="h-[22px] w-[58px] object-contain"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />

                                <motion.img
                                    src={dhl}
                                    alt="Dhl"
                                    className="h-[22px] w-[62px] object-contain"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />

                                <span className="text-[11px] whitespace-nowrap text-[#79a7c7]">
                                    and more...
                                </span>
                            </div>
                        </motion.div>

                        {/* RIGHT — ACTUAL IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.15 }}
                            className="relative flex h-[150px] items-center justify-center lg:h-[125px]"
                        >
                            <motion.img
                                src={Courier_boxes}
                                alt="Nexgo courier boxes and packaging"
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55 }}
                                className="h-100 w-full object-contain object-center"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Section-5  */}

            <section className="w-full bg-white py-20">
                <div className="mx-auto grid max-w-[1280px] grid-cols-[26%_52%_22%] items-center gap-8 px-6 sm:px-8 lg:px-16 xl:px-20">

                    {/* LEFT — MAIN IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="relative h-[520px] overflow-hidden rounded-[28px]"
                    >
                        <motion.img
                            src={shipping_operations}
                            alt="Nexgo shipping and fulfillment operations"
                            className="h-full w-full object-cover"
                            initial={{ scale: 1.05 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        />
                    </motion.div>

                    {/* MIDDLE — CONTENT + FEATURE CARDS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="self-center"
                    >
                        {/* Eyebrow */}
                        <div className="mb-4 flex items-center gap-2">
                            <span className="h-[2px] w-7 bg-[#12c89c]" />
                            <span className="text-[11px] font-bold tracking-[0.18em] text-[#0879df]">
                                SHIPPING & FULFILLMENT
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-[560px] text-[42px] font-bold leading-[1.08] tracking-[-0.03em] text-[#073b78]">
                            Build for{" "}
                            <span className="bg-gradient-to-r from-[#0879df] via-[#08aee0] to-[#0bc89c] bg-clip-text text-transparent">
                                Growing Businesses
                            </span>
                        </h2>

                        <p className="mt-4 max-w-[530px] text-[15px] leading-7 text-slate-500">
                            Simplify your shipping operations, gain better control over every
                            order, and scale your business with a smarter logistics
                            infrastructure.
                        </p>

                        {/* FEATURE GRID */}
                        <div className="mt-8 grid grid-cols-2 gap-x-7 gap-y-7">

                            {/* CARD 1 */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                                className="border-b border-slate-200 pb-5"
                            >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f7ff]">
                                    <PackageCheck
                                        size={20}
                                        strokeWidth={1.8}
                                        className="text-[#0879df]"
                                    />
                                </div>

                                <h3 className="text-[15px] font-semibold text-[#073b78]">
                                    Better Logistics Control
                                </h3>

                                <p className="mt-2 text-[12px] leading-5 text-slate-500">
                                    Manage orders, shipments and courier operations from one
                                    centralized platform.
                                </p>
                            </motion.div>

                            {/* CARD 2 */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                                className="border-b border-slate-200 pb-5"
                            >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9fbf6]">
                                    <TrendingUp
                                        size={20}
                                        strokeWidth={1.8}
                                        className="text-[#0bc89c]"
                                    />
                                </div>

                                <h3 className="text-[15px] font-semibold text-[#073b78]">
                                    Scalable Shipping
                                </h3>

                                <p className="mt-2 text-[12px] leading-5 text-slate-500">
                                    Scale your shipping volume without adding unnecessary
                                    operational complexity.
                                </p>
                            </motion.div>

                            {/* CARD 3 — HANDWRITTEN DESIGN IS INSIDE THIS CARD */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                                className="relative overflow-hidden border-b border-slate-200 pb-5"
                            >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f7ff]">
                                    <Eye
                                        size={20}
                                        strokeWidth={1.8}
                                        className="text-[#0879df]"
                                    />
                                </div>

                                <h3 className="text-[15px] font-semibold text-[#073b78]">
                                    Greater Visibility
                                </h3>

                                <p className="mt-2 text-[12px] leading-5 text-slate-500">
                                    Track shipments and stay informed with real-time visibility
                                    across your logistics network.
                                </p>


                            </motion.div>

                            {/* CARD 4 */}
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.25 }}
                                className="border-b border-slate-200 pb-5"
                            >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9fbf6]">
                                    <Settings2
                                        size={20}
                                        strokeWidth={1.8}
                                        className="text-[#0bc89c]"
                                    />
                                </div>

                                <h3 className="text-[15px] font-semibold text-[#073b78]">
                                    Simplified Operations
                                </h3>

                                <p className="mt-2 text-[12px] leading-5 text-slate-500">
                                    Automate repetitive logistics tasks and keep your fulfillment
                                    workflow simple.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT — STATISTICS CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[26px] bg-[#effaff] p-7"
                    >
                        <div className="mb-7">
                            <p className="text-[11px] font-bold tracking-[0.16em] text-[#0879df]">
                                WHY NEXGO
                            </p>

                            <h3 className="mt-2 text-[24px] font-bold leading-tight text-[#073b78]">
                                Built to help you
                                <br />
                                scale smarter.
                            </h3>
                        </div>

                        {/* STAT 1 */}
                        <div className="border-b border-[#d7edf5] py-5">
                            <div className="flex items-end gap-1">
                                <span className="text-[42px] font-bold leading-none text-[#0879df]">
                                    60%
                                </span>
                            </div>

                            <p className="mt-2 text-[13px] font-medium text-slate-600">
                                Lower Shipping Costs
                            </p>
                        </div>

                        {/* STAT 2 */}
                        <div className="border-b border-[#d7edf5] py-5">
                            <span className="text-[42px] font-bold leading-none text-[#0bc89c]">
                                15+
                            </span>

                            <p className="mt-2 text-[13px] font-medium text-slate-600">
                                Courier Partners
                            </p>
                        </div>

                        {/* STAT 3 */}
                        <div className="pt-5">
                            <span className="text-[42px] font-bold leading-none text-[#0879df]">
                                99%
                            </span>

                            <p className="mt-2 text-[13px] font-medium text-slate-600">
                                On-Time Deliveries
                            </p>
                        </div>
                        {/* HANDWRITTEN ELEMENT — PART OF CARD 3 */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -7, y: 8 }}
                            whileInView={{ opacity: 1, rotate: -5, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25, duration: 0.5 }}
                            className="absolute bottom-1 right-0"
                        >
                            <div className="rotate-[-4deg] font-['Comic_Sans_MS',cursive] text-[13px] italic leading-4 text-[#0879df]">
                                Track every
                                <br />
                                shipment
                                <br />
                                effortlessly →
                            </div>
                        </motion.div>

                        {/* SMALL CTA */}
                        {/* <motion.button
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-7 flex items-center gap-2 text-[13px] font-semibold text-[#0879df]"
                        >
                            Explore Nexgo
                            <ArrowUpRight size={16} />
                        </motion.button> */}
                    </motion.div>
                </div>
            </section>

            {/* Section 6 - testimonial  */}
            <section className="w-full bg-white py-8 px-6 sm:px-8 lg:px-16 xl:px-20">
                <div className="mx-auto max-w-[1280px]">
                    {/* SECTION HEADING */}
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-[22px] font-bold leading-none tracking-[-0.02em] text-[#073b78]"
                    >
                        What Our Brands Say
                    </motion.h2>

                    {/* TESTIMONIAL CARDS */}
                    <div className="grid grid-cols-3 gap-5">
                        {testimonials.map((testimonial, index) => (
                            <motion.article
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -3 }}
                                className="relative min-h-[260px] overflow-hidden rounded-[12px] border border-[#dceef8] bg-white px-5 py-4 shadow-[0_5px_20px_rgba(24,125,190,0.07)]"
                            >
                                {/* BRAND LOGO */}
                                <div className="mb-2 flex h-[30px] items-center">
                                    <motion.img
                                        src={testimonial.brandLogo}
                                        alt={`${testimonial.brand} logo`}
                                        className="h-[28px] w-auto max-w-[150px] object-contain object-left"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: index * 0.1 + 0.15 }}
                                    />
                                </div>

                                {/* QUOTE */}
                                <p className=" ml-15 max-w-[205px] text-[15px] leading-[1.20] text-[#6b9bc0]">
                                    "{testimonial.quote}"
                                </p>

                                {/* CUSTOMER DETAILS */}
                                <div className="mt-7 flex items-center justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.1 + 0.2,
                                            }}
                                            className="h-[44px] w-[44px] shrink-0 overflow-hidden rounded-full bg-[#e7f5fb]"
                                        >
                                            {/* <motion.img
                                                src={testimonial.avatar}
                                                alt={`${testimonial.name} profile`}
                                                className="h-full w-full object-cover"
                                                initial={{ scale: 1.05 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5 }}
                                            /> */}
                                        </motion.div>

                                        <div>
                                            <h3 className="text-[14px] font-bold leading-tight text-[#073b78]">
                                                {testimonial.name}
                                            </h3>

                                            <p className="mt-[2px] text-[11px] leading-tight text-[#6b9bc0]">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* STARS */}
                                    <div className="flex items-center gap-[1px]">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                size={10}
                                                strokeWidth={1.5}
                                                className="text-[#f4b400]"
                                                fill="currentColor"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7 - final CTA  */}
            <section className="w-full px-6 py-16 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[30px] border border-[#cfeef7] bg-gradient-to-br from-[#effaff] via-[#f7fdff] to-[#edfbf6] px-8 py-14 text-center md:px-16 md:py-16"
                >
                    {/* Background Glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#8cddff]/20 blur-3xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.15 }}
                        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#61e3bd]/20 blur-3xl"
                    />

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-[720px]">
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-4 flex items-center justify-center gap-2"
                        >
                            <span className="h-[2px] w-7 rounded-full bg-[#0bc89c]" />

                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#0879df]">
                                {finalCtaContent.eyebrow}
                            </span>

                            <span className="h-[2px] w-7 rounded-full bg-[#0bc89c]" />
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[38px] font-bold leading-[1.08] tracking-[-0.035em] text-[#073b78] md:text-[48px]"
                        >
                            Simplify Your{" "}
                            <span className="bg-gradient-to-r from-[#0879df] via-[#08aee0] to-[#0bc89c] bg-clip-text text-transparent">
                                Retail Logistics
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.2 }}
                            className="mx-auto mt-4 max-w-[540px] text-[14px] leading-6 text-[#5e86a5] md:text-[15px]"
                        >
                            {finalCtaContent.description}
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.3 }}
                            className="mt-7 flex justify-center"
                        >
                            <motion.button
                                whileHover={{
                                    y: -2,
                                    scale: 1.02,
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="group flex items-center gap-2 rounded-full bg-[#0879df] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(8,121,223,0.22)]"
                            >
                                {finalCtaContent.button}

                                <motion.span
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ArrowRight size={16} strokeWidth={2} />
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <Footer />

        </main>
    );
};

export default BrandsRetailers;