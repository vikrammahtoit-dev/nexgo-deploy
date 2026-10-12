import React from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Box,
    Check,
    CheckCircle2,
    ChevronDown,
    ClipboardCheck,
    Eye,
    Factory,
    Gauge,
    Home,
    MapPin,
    PackageCheck,
    PackageSearch,
    ShieldCheck,
    Snowflake,
    Truck,
    Warehouse,
    Workflow,
} from "lucide-react";
import Navbar from "../../../../features/landing/navbar/Navbar";
import Warehouse_Image from "../../../../assets/images/Warehouse_Image.webp";
import ambient_storage from "../../../../assets/images/ambient_storage.webp";
import Controlled_storage from "../../../../assets/images/Controlled_Storage.webp";
import Cross_Docking from "../../../../assets/images/Cross-Docking.webp";
import Inventory_Management from "../../../../assets/images/Inventory_Management.webp";
import Inbound_Recieving from "../../../../assets/images/Inbound&Recieving.webp";
import Footer from "../../../../features/landing/footer/Footer";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const services = [
    {
        title: "Ambient Storage",
        description:
            "Secure and organized storage for non-perishable products and general merchandise.",
        image: ambient_storage,
        icon: Box,
    },
    {
        title: "Temperature-Controlled Storage",
        description:
            "Controlled storage environments for products that require specific temperature conditions.",
        image: Controlled_storage,
        icon: Snowflake,
    },
    {
        title: "Cross-Docking",
        description:
            "Move eligible inventory through the warehouse efficiently with minimal storage and handling.",
        image: Cross_Docking,
        icon: Workflow,
    },
    {
        title: "Inventory Management",
        description:
            "Maintain accurate stock information with visibility into inventory levels and warehouse operations.",
        image: Inventory_Management,
        icon: ClipboardCheck,
    },
];

const benefits = [
    {
        title: "High Security",
        description:
            "Controlled facilities, security systems, and trained warehouse teams help keep your inventory protected.",
        icon: ShieldCheck,
    },
    {
        title: "Inventory Visibility",
        description:
            "Maintain clear visibility into your stored inventory and stock levels.",
        icon: Eye,
    },
    {
        title: "Cost Efficient",
        description:
            "Use professional warehousing infrastructure without the investment and operational complexity of building your own facility.",
        icon: Gauge,
    },
    {
        title: "Pan India Network",
        description:
            "Access warehousing locations across India to support your business requirements.",
        icon: MapPin,
    },
];

const processSteps = [
    {
        number: "01",
        title: "Receive",
        description: "Products arrive at the warehouse.",
        icon: Truck,
    },
    {
        number: "02",
        title: "Verify",
        description:
            "Inventory and quantities are checked against the received shipment.",
        icon: ClipboardCheck,
    },
    {
        number: "03",
        title: "Inspect",
        description:
            "Products are checked for condition and any discrepancies.",
        icon: PackageSearch,
    },
    {
        number: "04",
        title: "Store",
        description:
            "Verified inventory is placed into its designated storage location.",
        icon: Warehouse,
    },
    {
        number: "05",
        title: "Monitor",
        description:
            "Inventory remains visible and manageable throughout its warehouse lifecycle.",
        icon: Eye,
    },
];

const impact = [
    {
        value: "50K+",
        label: "Sq. Ft. Warehouse Space",
        icon: Warehouse,
    },
    {
        value: "99.8%",
        label: "Order Accuracy",
        icon: CheckCircle2,
    },
    {
        value: "24/7",
        label: "Security Monitoring",
        icon: ShieldCheck,
    },
    {
        value: "1000+",
        label: "Happy Customers",
        icon: Check,
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function Warehousing() {
    const goHome = () => {
        window.location.href = "/";
    };

    const scrollToServices = () => {
        document
            .getElementById("warehousing-services")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen overflow-hidden bg-white text-[#06245F]">
            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F4FAFF] to-[#EFFCF8]">
                {/* Decorative shapes */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-24 top-16 h-80 w-80 rounded-[70px] bg-gradient-to-br from-[#0A8CF5] to-[#0C6BEF] opacity-90"
                />

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[-80px] top-52 h-72 w-72 rounded-full bg-[#21D69A]/70 blur-[1px]"
                />

                <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-24">
                    {/* Back button */}
                    <motion.button
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={goHome}
                        className="group mb-5 flex items-center gap-2 text-sm font-semibold text-[#06245F] transition-colors hover:text-[#087CF0]"
                    >
                        <ArrowLeft
                            size={17}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        Back to Home
                    </motion.button>

                    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                        {/* Hero Content */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            className="relative z-10"
                        >


                            <motion.h1
                                variants={fadeUp}
                                className="max-w-[620px] text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-[#06245F] sm:text-5xl lg:text-[60px]"
                            >
                                Your Inventory.
                                <br />
                                <span className="text-[#06245F]">Our Expertise.</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                className="mt-6 max-w-[540px] text-lg leading-8 text-slate-600"
                            >
                                Safe, smart, and scalable warehousing solutions that keep your
                                products secure, organized, and ready for your business.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <a
                                    href="#quote"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#06245F] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#06245F]/15 transition-all hover:-translate-y-1 hover:bg-[#087CF0]"
                                >
                                    Get a Warehousing Quote
                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </a>

                            </motion.div>

                            {/* Highlights */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
                            >
                                {[
                                    {
                                        icon: ShieldCheck,
                                        label: "Secure Facilities",
                                    },
                                    {
                                        icon: MapPin,
                                        label: "Pan India Locations",
                                    },
                                    {
                                        icon: Eye,
                                        label: "Real-Time Visibility",
                                    },
                                    {
                                        icon: Gauge,
                                        label: "Flexible Scalability",
                                    },
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.label}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-100">
                                                <Icon
                                                    size={20}
                                                    className="text-[#087CF0]"
                                                    strokeWidth={1.8}
                                                />
                                            </div>

                                            <p className="pt-1 text-xs font-bold leading-5 text-[#06245F]">
                                                {item.label}
                                            </p>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.9,
                                delay: 0.2,
                                ease: "easeOut",
                            }}
                            className="relative z-10"
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative overflow-hidden rounded-[30px] border-[8px] border-white bg-white shadow-2xl"
                            >
                                <img
                                    src={Warehouse_Image}
                                    alt="Nexgo warehouse"
                                    className="h-[420px] w-full object-cover sm:h-[440px]"
                                />

                                {/* Floating visibility badge */}
                                <div className="absolute right-5 top-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8FFF6]">
                                        <Eye size={18} className="text-[#0BBF83]" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold text-[#06245F]">
                                            Inventory Secure
                                        </p>
                                        <p className="text-[10px] text-slate-500">
                                            Real-time tracking & visibility
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section
                id="warehousing-services"
                className="bg-white py-12 lg:py-20"
            >
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-2xl"
                    >
                        {/* <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087CF0]">
                            Our Warehousing Services
                        </p> */}

                        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#06245F] sm:text-5xl">
                            End-to-End Warehousing
                            <br />
                            for Every Business
                        </h2>

                        <p className="mt-5 text-base leading-7 text-slate-600">
                            From storing your products to maintaining clear inventory
                            visibility, Nexgo provides flexible warehousing solutions
                            designed around your business requirements.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.12 }}
                        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <motion.article
                                    key={service.title}
                                    variants={fadeUp}
                                    whileHover={{ y: -7 }}
                                    transition={{ duration: 0.25 }}
                                    className="group overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-[0_12px_45px_rgba(6,36,95,0.06)]"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#EFF8FF]">
                                            <Icon size={20} className="text-[#087CF0]" />
                                        </div>

                                        <h3 className="text-lg font-bold leading-6 text-[#06245F]">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-500">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Inbound & Recieving */}
            <section className="bg-[#F5FAFF] py-12 lg:py-20">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087CF0]">
                                Inbound & Receiving
                            </p> */}

                            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#06245F] sm:text-5xl">
                                A Smooth Start for
                                <br />
                                Your Inventory.
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                                Nexgo provides a structured process for receiving inventory
                                into the warehouse.
                            </p>

                            {/* Receiving flow */}
                            <div className="mt-10 flex flex-wrap items-start gap-3 sm:flex-nowrap">
                                {[
                                    {
                                        title: "Receive",
                                        icon: Truck,
                                    },
                                    {
                                        title: "Verify",
                                        icon: CheckCircle2,
                                    },
                                    {
                                        title: "Inspect",
                                        icon: PackageSearch,
                                    },
                                    {
                                        title: "Store",
                                        icon: Warehouse,
                                    },
                                ].map((step, index, array) => {
                                    const Icon = step.icon;

                                    return (
                                        <React.Fragment key={step.title}>
                                            <div className="flex min-w-[70px] flex-1 flex-col items-center text-center">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#087CF0]/10 bg-white shadow-sm">
                                                    <Icon size={19} className="text-[#087CF0]" />
                                                </div>

                                                <p className="mt-3 text-xs font-bold text-[#06245F]">
                                                    {step.title}
                                                </p>
                                            </div>

                                            {index !== array.length - 1 && (
                                                <div className="mt-6 hidden h-px flex-1 bg-[#087CF0]/20 sm:block" />
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            <p className="mt-10 max-w-xl text-sm leading-7 text-slate-600">
                                Incoming products are received, quantities are verified, and
                                inventory is checked before being placed into the appropriate
                                warehouse location. This helps maintain accurate inventory
                                from the moment products enter the warehouse.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative"
                        >
                            <div className="overflow-hidden rounded-[30px] border-8 border-white bg-white shadow-2xl">
                                <img
                                    src={Inbound_Recieving}
                                    alt="Inbound and receiving"
                                    className="h-[460px] w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-[30px] bg-gradient-to-br from-[#087CF0] to-[#0863D8] opacity-90" />
                            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#25D99C]/80" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* {Why Choose Nexgo */}
            <section className="bg-white py-12 lg:py-20">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                    <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {/* <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087CF0]">
                                Why Choose Nexgo
                            </p> */}

                            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#06245F] sm:text-4xl">
                                More Than Just Storage.
                                <br />
                                It's a Growth Enabler.
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                                Our warehousing infrastructure is designed to help businesses
                                maintain better control over their inventory while reducing
                                the complexity of managing warehouse operations.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.15 }}
                            className="grid gap-x-8 gap-y-10 sm:grid-cols-2"
                        >
                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;

                                return (
                                    <motion.div
                                        key={benefit.title}
                                        variants={fadeUp}
                                        className="flex gap-4"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#EAF7FF] to-[#E9FFF7]">
                                            <Icon size={21} className="text-[#087CF0]" />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-[#06245F]">
                                                {benefit.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative overflow-hidden bg-[#06245F] py-24 text-white lg:py-28">
                {/* Background decoration */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[-100px] top-[-80px] h-72 w-72 rounded-full bg-[#25D99C]/20 blur-3xl"
                />

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[-100px] left-[-100px] h-80 w-80 rounded-full bg-[#087CF0]/30 blur-3xl"
                />

                <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4CB5FF]">
                            How It Works
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                            Simple. Transparent. Efficient.
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
                            Nexgo keeps the warehouse process structured from receiving
                            inventory to maintaining it in storage.
                        </p>
                    </motion.div>

                    {/* Process */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className="relative mt-14 grid gap-10 md:grid-cols-5"
                    >
                        {/* Connecting line */}
                        <div
                            className="absolute top-7 hidden h-px bg-white/20 md:block"
                            style={{ left: "calc(10% - 1rem)", right: "calc(10% - 1rem)" }}
                        />

                        {processSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    variants={fadeUp}
                                    className="relative z-10 flex flex-col items-center text-center"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#087CF0] shadow-xl shadow-black/20">
                                        <Icon size={21} />
                                    </div>

                                    {/* <p className="mt-6 text-xs font-bold text-[#4CB5FF]">
                                        {step.number}
                                    </p> */}

                                    <h3 className="mt-1 text-lg font-bold">{step.title}</h3>

                                    <p className="mt-3 text-sm leading-6 text-white/60">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>



                </div>
            </section>

            {/* Our Impact */}
            {/* <section className="bg-white py-24 lg:py-28">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087CF0]">
                                Our Impact
                            </p>

                            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#06245F] sm:text-5xl">
                                Trusted Infrastructure
                                <br />
                                for Growing Businesses
                            </h2>

                            <p className="mt-5 text-sm leading-6 text-slate-500">
                                Use this section only with verified Nexgo data.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.15 }}
                            className="grid grid-cols-2 gap-4 lg:grid-cols-4"
                        >
                            {impact.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.label}
                                        variants={fadeUp}
                                        className="rounded-2xl border border-slate-100 bg-[#F8FCFF] p-6"
                                    >
                                        <Icon size={20} className="text-[#087CF0]" />

                                        <p className="mt-6 text-3xl font-bold tracking-tight text-[#06245F]">
                                            {item.value}
                                        </p>

                                        <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
                                            {item.label}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    <div className="mt-8 rounded-xl border border-amber-100 bg-amber-50 px-5 py-4">
                        <p className="text-xs leading-5 text-amber-800">
                            <strong>Note:</strong> Please use only verified Nexgo figures.
                            If these figures are not confirmed Nexgo figures, they should
                            not be used on the final website.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Testimonial */}
            {/* <section className="bg-[#F4FAFF] py-24 lg:py-28">
                <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                        <motion.div
                            variants={fadeLeft}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087CF0]">
                                Customer Testimonial
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[#06245F] sm:text-5xl">
                                What Our Customers Say
                            </h2>

                            <blockquote className="mt-8 text-xl font-medium leading-9 text-[#06245F] sm:text-2xl">
                                “NEXGO's warehousing solution has given us the flexibility and
                                speed we needed to scale. Their team is professional,
                                responsive and truly understands our business.”
                            </blockquote>

                            <div className="mt-7">
                                <p className="font-bold text-[#06245F]">Ankit Sharma</p>
                                <p className="mt-1 text-sm text-slate-500">
                                    Co-Founder, The Daily Cart
                                </p>
                            </div>

                            <div className="mt-8 rounded-xl border border-amber-100 bg-amber-50 px-5 py-4">
                                <p className="text-xs leading-5 text-amber-800">
                                    Keep this testimonial only if it is a real, authorized Nexgo
                                    customer testimonial. Otherwise, remove the section until
                                    genuine feedback is available.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeRight}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative"
                        >
                            <div className="overflow-hidden rounded-[30px] border-8 border-white bg-white shadow-2xl">
                                <img
                                    src="/images/customer-testimonial.jpg"
                                    alt="Customer testimonial"
                                    className="h-[420px] w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full bg-[#25D99C]/80" />
                            <div className="absolute -left-5 top-10 h-24 w-24 rounded-[25px] bg-[#087CF0]" />
                        </motion.div>
                    </div>
                </div>
            </section> */}

            {/* Warehouse & Fulfillemt */}
            {/* <section className="bg-white py-24 lg:py-28">
                <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-3xl"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087CF0]">
                            Warehouse & Fulfillment
                        </p>

                        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#06245F] sm:text-5xl">
                            Connected Operations,
                            <br />
                            Different Functions
                        </h2>

                        <p className="mt-5 text-base leading-7 text-slate-600">
                            Warehousing and fulfillment work together, but they serve
                            different purposes.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className="mt-12 grid gap-6 lg:grid-cols-2"
                    >
                        
                        <motion.div
                            variants={fadeLeft}
                            className="rounded-[25px] border border-slate-100 bg-[#F5FAFF] p-7 sm:p-9"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                                    <Warehouse size={21} className="text-[#087CF0]" />
                                </div>

                                <span className="rounded-full bg-[#E6F5FF] px-3 py-1 text-xs font-bold text-[#087CF0]">
                                    Storage
                                </span>
                            </div>

                            <h3 className="mt-7 text-2xl font-bold text-[#06245F]">
                                Warehousing
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["Receive", "Verify", "Inspect", "Store", "Monitor"].map(
                                    (item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-[#087CF0]/10 bg-white px-3 py-2 text-xs font-semibold text-[#06245F]"
                                        >
                                            {item}
                                        </span>
                                    )
                                )}
                            </div>

                            <p className="mt-6 text-sm leading-6 text-slate-500">
                                <strong className="text-[#06245F]">Focus:</strong> Storing and
                                managing inventory
                            </p>
                        </motion.div>

                       
                        <motion.div
                            variants={fadeRight}
                            className="rounded-[25px] border border-slate-100 bg-[#F4FFF9] p-7 sm:p-9"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                                    <PackageCheck size={21} className="text-[#0BBF83]" />
                                </div>

                                <span className="rounded-full bg-[#E6FFF5] px-3 py-1 text-xs font-bold text-[#0A9F70]">
                                    Operations
                                </span>
                            </div>

                            <h3 className="mt-7 text-2xl font-bold text-[#06245F]">
                                Fulfillment
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["Pick", "Pack", "Dispatch", "Delivery"].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-[#0BBF83]/10 bg-white px-3 py-2 text-xs font-semibold text-[#06245F]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <p className="mt-6 text-sm leading-6 text-slate-500">
                                <strong className="text-[#06245F]">Focus:</strong> Processing
                                and delivering customer orders
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-500"
                    >
                        Nexgo can connect these operations into one logistics ecosystem
                        while keeping their functions clearly defined.
                    </motion.p>
                </div>
            </section> */}

            {/* Final CTA  */}
            <section id="quote" className="px-5 pb-10 sm:px-8 lg:px-10 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#06245F] via-[#073C9B] to-[#087CF0] px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-14"
                >
                    {/* Decorative shapes */}
                    <motion.div
                        animate={{ rotate: [0, 8, 0] }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -left-12 -bottom-16 h-40 w-40 rounded-[45px] bg-[#087CF0]"
                    />

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute left-8 bottom-[-50px] h-32 w-32 rounded-[35px] bg-[#25D99C]/80"
                    />

                    <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8DD4FF]">
                                Nexgo Warehousing
                            </p>

                            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                                Power Your Business With
                                <br />
                                Nexgo Warehousing
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
                                Secure your inventory, simplify warehouse operations, and build
                                the infrastructure you need to scale.
                            </p>
                        </div>

                        <a

                            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#06245F] transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            Start Shipping
                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}