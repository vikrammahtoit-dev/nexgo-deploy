import { useEffect, useRef, useState } from "react";
import Navbar from "../../../features/landing/navbar/Navbar";
import SupportHero from "../../../assets/images/Customer_Support.webp";
import {
    ArrowRight, CircleAlert, Clock3, Headphones, Layers3, Mail, MapPin, PackageSearch, Phone, Send,
} from "lucide-react";
import questionImage from "../../../assets/images/questionImage.webp";
import understandImage from "../../../assets/images/understandImage.webp";
import solutionImage from "../../../assets/images/solutionImage.webp";
import contactCtaImage from "../../../assets/images/contactImage.webp";
import Footer from "../../../features/landing/footer/Footer";


const CONTACT_INFO = {
    phoneNumbers: [
        "+91 6299465589",
    ],
    email: "support@mynexgo.com",

    address: "Sector-63, Noida-201301",
    officeHours: "09:00 AM – 07:00 PM",

    // map address must change
    directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=416%2C%20Phase%20III%2C%20Udyog%20Vihar%2C%20Sector%2020%2C%20Gurugram%2C%20Haryana%20122008",
};


const SUPPORT_OPTIONS = [
    {
        icon: PackageSearch,
        title: "Track  Your Shipment",
        description:
            "Need an update on your shipment? Track its latest status and movement.",
    },
    {
        icon: CircleAlert,
        title: "Resolve Issues",
        description:
            "Facing a shipment? Let our support team help you resolve it.",
    },
    {
        icon: Layers3,
        title: "Platform Support",
        description:
            "Get assistance with your Nexgo account, platform features, or integrations.",
    },
];


const QUERY_TYPES = [
    {
        value: "shipment",
        label: "Shipment Issue",
    },
    {
        value: "delivery",
        label: "Delivery Issue",
    },
    {
        value: "account",
        label: "Account Support",
    },
    {
        value: "platform",
        label: "Platform Support",
    },
    {
        value: "other",
        label: "Other",
    },
];


const PROCESS_STEPS = [
    {
        number: "01",
        title: "Tell Us What You Need",
        description: "Share your question or issue with our team.",
        image: questionImage,
        imageAlt: "Tell us what you need",
    },
    {
        number: "02",
        title: "We Understand Your Query",
        description:
            "Our team reviews the details and identifies the right waay to help.",
        image: understandImage,
        imageAlt: "We understand your query",
    },
    {
        number: "03",
        title: "We Help you Move Forward",
        description:
            "Get the guidance or resolution you need to move forward.",
        image: solutionImage,
        imageAlt: "We help you to move forward",
    },
];


const ContactUs = () => {
    const revealRefs = useRef([]);
    const [showSupportForm, setShowSupportForm] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        shipmentId: "",
        queryType: "",
        message: "",
    });


    // Reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.remove(
                        "opacity-0",
                        "translate-y-8"
                    );

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
            }
        );

        revealRefs.current.forEach((element) => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);


    const addRevealRef = (element) => {
        if (element && !revealRefs.current.includes(element)) {
            revealRefs.current.push(element);
        }
    };


    // open support form
    const openSupportForm = () => {
        setShowSupportForm(true);

        setTimeout(() => {
            document.getElementById("support-form")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 100);
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        /*
        Backend integration will be connected here.

        Example:

        await fetch("/api/v1/contact/support", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        */

        console.log("Support Request:", formData);

        alert("Your request has been submitted successfully.");

        setFormData({
            fullName: "",
            email: "",
            phone: "",
            shipmentId: "",
            queryType: "",
            message: "",
        });
    };


    return (
        <main className="overflow-hidden bg-white text-[#00143A]">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-[#E6F7FC]">
                <div className="mx-auto grid min-h-[350px] max-w-7xl lg:min-h-[420px] lg:grid-cols-2">

                    {/* Left Content */}
                    <div
                        ref={addRevealRef}
                        className="relative z-10 flex traanslate-y-8 px-6 py-20 transition-all duration-300 sm:px-10 lg:px-14"
                    >
                        <div className="max-w-xl">

                            <span className="inline-flex rounded-xl border border-[#B8E8F8] bg-white/70 px-1.5 py-0.5 text-sm font-semibold uppercase tracking-wide text-[#00A4EA]">
                                Contact Us
                            </span>

                            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-[#00143A] sm:text-5xl lg:text-6xl">
                                Have a Questions?
                                <br />
                                <span className="mt-1 block bg-gradient-to-r from-[#00A4EA] via-[#00A4EA] to-[#00AE89] bg-clip-text text-transparent">
                                    Let's Connect
                                </span>
                            </h1>

                            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                                Whether you have a question, feedback, or need
                                assitance with Nexgo, our team is here to connect
                                with you.
                            </p>
                        </div>
                    </div>


                    {/* Right */}
                    <div className="relartive min-h-[350px] py-20 lg:min-h-full">
                        <img
                            src={SupportHero}
                            alt="Nexgo Customer Support"
                            loading="lazy"
                            className="contact-support-image h-auto w-full object-contain"
                        />

                        {/* Soft fade into left content */}
                        <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[#E6F7FC] to-transparent lg:block" />

                        {/* Bottom soft */}
                        <div className="abolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/20 to-transparent" />
                    </div>
                </div>
            </section>


            {/* Let's Connect */}
            <section className="px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl">

                    <div
                        ref={addRevealRef}
                        className="mb-12 translate-y-8 transition-all duration-700 ease-out"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00A4EA]">
                            Let's Connect
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#00143A] sm:text-4xl">
                            We're just a message away.
                        </h2>

                        <p className="mt-4 max-w-2xl text-slate-600">
                            Reach out to our team through whichever option works
                            best for you.
                        </p>
                    </div>


                    <div
                        ref={addRevealRef}
                        className="grid translate-y-8 border-y border-[#B8E8F8] opacity-0 transition-opacity duration-700 ease-out md: grid-cols-3"
                    >

                        {/* Phone */}
                        <div className="px-2 py-8 md:px-8">
                            <div className=" flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6F7FC]">
                                    <Phone
                                        size={20}
                                        strokeWidth={1.8}
                                        className="text-[#00A4EA]"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#00143A]">
                                        Call Us
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-500">
                                        Talk directly with our team.
                                    </p>

                                    <div className="mt-4 space-y-2">
                                        {CONTACT_INFO.phoneNumbers.map((number) => (
                                            <a
                                                key={number}
                                                href={`tel:${number.replace(/\s/g, "")}`}
                                                className="block text-sm font-medium text-[#00143A] transition-colors hover:text-[#00A4EA]"
                                            >
                                                {number}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Email */}
                        <div className="border-slate-200 px-2 py-8 md:border-l md:px-8">
                            <div className="flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6F7FC]">
                                    <Mail
                                        size={20}
                                        strokeWidth={1.8}
                                        className="text-[#00AE89]"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-[#00143A]">
                                        Write email to us
                                    </h2>

                                    <p className="mt-2 text-sm text-slate-500">
                                        Send us your questions or feedback.
                                    </p>

                                    <a
                                        href={`mailto:${CONTACT_INFO.email}`}
                                        className="mt-4 inline-block text-sm font-medium text-[#00143A] transition-colors hover:text-[#00AE89]"
                                    >
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Location */}
                        <div className="border-slate-200 px-2 py-8 md:border-l md:px-8">
                            <div className="flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E6F7FC]">
                                    <MapPin
                                        size={20}
                                        strokeWidth={1.8}
                                        className="text-[#00A4EA]"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[#00143A]">
                                        Visit Us
                                    </h3>

                                    <a
                                        href={CONTACT_INFO.directionsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 block text-sm leading-6 text-slate-500 transition-colors hover:text-[#00A4EA]"
                                    >
                                        {CONTACT_INFO.address}
                                    </a>

                                    <a
                                        href={CONTACT_INFO.directionsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#00143A] transition-colors hover:text-[#00A4EA]"
                                    >
                                        Get Directions
                                        <ArrowRight
                                            size={16}
                                            strokeWidth={1.8}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Map */}
            <section className="px-6 pb-20 sm:px-10 lg:px-14">
                <div
                    ref={addRevealRef}
                    className="mx-auto grid max-w-7xl translate-y-8 overflow-hidden rounded-3xl bg-[#E6F7FC] opacity-0 transition-all duration-700 ease-out lg:grid-cols-[0.8fr_1.2fr]"
                >

                    {/* Map Information */}
                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                            <MapPin
                                size={21}
                                strokeWidth={1.8}
                                className="text-[#00A4EA]"
                            />
                        </div>

                        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#00A4EA]">
                            Visit Us
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#00143A]">
                            Come say hello
                        </h2>

                        <p className="mt-5 maax-w-md text-sm leading-6 text-slate-600">
                            Our team is available during business hours to
                            assit you with your logistics and shipping needs.
                        </p>


                        <div className="mt-7 space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-[#00143A]">
                                    Nexgo office
                                </p>

                                <a
                                    href={CONTACT_INFO.directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 block max-w-md text-sm leading-6 text-slate-600 transition-colors hover:text-[#00A4EA]"
                                >
                                    {CONTACT_INFO.address}
                                </a>
                            </div>


                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Clock3
                                    size={17}
                                    strokeWidth={1.8}
                                    className="text-[#00AE89]"
                                />
                                {CONTACT_INFO.officeHours}
                            </div>
                        </div>


                        <a
                            href={CONTACT_INFO.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#00A4EA] to-[#00AE89] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:translate-y-0.5 hover:shadow-md"
                        >
                            Get Directions
                            <ArrowRight
                                size={17}
                                strokeWidth={1.8}
                            />
                        </a>
                    </div>


                    {/* GOOGle Map */}
                    <div className="bg-white/40">

                    </div>
                </div>
            </section>


            {/* We're here to help */}
            <section className="bg-[#E6F7FC] px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl">

                    <div
                        ref={addRevealRef}
                        className="max-w-2xl translate-y-8 opacity-0 transition-all duration-700 ease-out"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00A4EA]">
                            Support
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#00143A] sm:text-4xl">
                            We’re Here to Help
                        </h2>

                        <p className="mt-4 text-slate-600">
                            From shipment questions to platform assistance,
                            our team is ready to help you move forward.
                        </p>
                    </div>


                    {/* SUPPORT OPTIONS */}

                    <div
                        ref={addRevealRef}
                        className="mt-12 grid translate-y-8 gap-6 opacity-0 transition-all duration-700 ease-out md:grid-cols-3"
                    >
                        {SUPPORT_OPTIONS.map((option, index) => {
                            const Icon = option.icon;

                            return (
                                <div
                                    key={option.title}
                                    className="rounded-2xl border border-[#B8E8F8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A4EA]/30 hover:shadow-md"
                                >
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E6F7FC]">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.8}
                                            className={
                                                index === 1
                                                    ? "text-[#00AE89]"
                                                    : "text-[#00A4EA]"
                                            }
                                        />
                                    </div>

                                    <h3 className="mt-5 text-lg font-semibold text-[#00143A]">
                                        {option.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {option.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>


                    {/* CUSTOMER SUPPORT */}

                    <div
                        ref={addRevealRef}
                        className="mt-10 translate-y-8 rounded-3xl bg-[#00143A] p-8 text-white opacity-0 transition-all duration-700 ease-out sm:p-10 lg:p-12"
                    >

                        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

                            <div className="flex items-start gap-5">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00A4EA]/15">
                                    <Headphones
                                        size={22}
                                        strokeWidth={1.8}
                                        className="text-[#00A4EA]"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        Customer Support
                                    </h3>

                                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                                        Tell us what you need help with and our
                                        team will get back to you.
                                    </p>
                                </div>

                            </div>


                            <button
                                type="button"
                                onClick={openSupportForm}
                                className="flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#00A4EA] to-[#00AE89] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                            >
                                Contact Support
                                <ArrowRight
                                    size={17}
                                    strokeWidth={1.8}
                                />
                            </button>

                        </div>


                        {/* SUPPORT FORM */}

                        <div
                            id="support-form"
                            className={`grid transition-all duration-700 ease-in-out ${showSupportForm
                                ? "mt-10 grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="min-h-0 overflow-hidden">

                                <div className="border-t border-white/10 pt-10">

                                    <form
                                        onSubmit={handleSubmit}
                                        className="grid gap-5 md:grid-cols-2"
                                    >

                                        {/* FULL NAME */}

                                        <div>
                                            <label
                                                htmlFor="fullName"
                                                className="mb-2 block text-sm font-medium text-slate-200"
                                            >
                                                Full Name
                                            </label>

                                            <input
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your name"
                                                className="w-full rounded-xl border border-[#00A4EA]/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#00A4EA]/60"
                                            />
                                        </div>


                                        {/* EMAIL */}

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-medium text-slate-200"
                                            >
                                                Email
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your email"
                                                className="w-full rounded-xl border border-[#00A4EA]/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#00A4EA]/60"
                                            />
                                        </div>


                                        {/* PHONE */}

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="mb-2 block text-sm font-medium text-slate-200"
                                            >
                                                Phone Number
                                            </label>

                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your phone number"
                                                className="w-full rounded-xl border border-[#00A4EA]/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#00A4EA]/60"
                                            />
                                        </div>


                                        {/* SHIPMENT ID */}

                                        <div>
                                            <label
                                                htmlFor="shipmentId"
                                                className="mb-2 block text-sm font-medium text-slate-200"
                                            >
                                                Shipment ID
                                            </label>

                                            <input
                                                id="shipmentId"
                                                name="shipmentId"
                                                type="text"
                                                value={formData.shipmentId}
                                                onChange={handleInputChange}
                                                placeholder="Enter shipment ID"
                                                className="w-full rounded-xl border border-[#00A4EA]/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#00A4EA]/60"
                                            />
                                        </div>


                                        {/* QUERY TYPE */}

                                        <div className="md:col-span-2">
                                            <label
                                                htmlFor="queryType"
                                                className="mb-2 block text-sm font-medium text-slate-200"
                                            >
                                                Query Type
                                            </label>

                                            <select
                                                id="queryType"
                                                name="queryType"
                                                value={formData.queryType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full rounded-xl border border-[#00A4EA]/20 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-[#00A4EA]/60"
                                            >
                                                <option
                                                    value=""
                                                    className="text-slate-900"
                                                >
                                                    Select query type
                                                </option>

                                                {QUERY_TYPES.map((query) => (
                                                    <option
                                                        key={query.value}
                                                        value={query.value}
                                                        className="text-slate-900"
                                                    >
                                                        {query.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>


                                        {/* MESSAGE */}

                                        <div className="md:col-span-2">
                                            <label
                                                htmlFor="message"
                                                className="mb-2 block text-sm font-medium text-slate-200"
                                            >
                                                Message
                                            </label>

                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Tell us how we can help..."
                                                className="w-full resize-none rounded-xl border border-[#00A4EA]/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#00A4EA]/60"
                                            />
                                        </div>


                                        {/* SUBMIT */}

                                        <div className="md:col-span-2">
                                            <button
                                                type="submit"
                                                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00A4EA] to-[#00AE89] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                            >
                                                Send Request
                                                <Send
                                                    size={17}
                                                    strokeWidth={1.8}
                                                />
                                            </button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* From your question to a solution */}
            <section className="px-6 py-20 sm:px-10 lg:px-14">
                <div className="mx-auto max-w-7xl">

                    <div
                        ref={addRevealRef}
                        className="mx-auto max-w-2xl translate-y-8 text-center transition-all duration-700 ease-out"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00A4EA]">
                            Simple Process
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#00143A] sm:text-4xl">
                            From your Question to a solution
                        </h2>

                        <p className="mt-4 text-slate-600">
                            We keep the process simple and transparent
                        </p>
                    </div>


                    <div className="mt-14 space-y-16">
                        {PROCESS_STEPS.map((step, index) => (
                            <div
                                key={step.number}
                                ref={addRevealRef}
                                className="grid translate-y-8 items-center gap-10 transition-all duration-700 ease-out md:grid-cols-2"
                            >

                                {/* Image */}
                                <div
                                    className={`overflow-hidden rounded-3xl ${index === 1
                                        ? "order-2 md:order-1"
                                        : ""
                                        }`}
                                >
                                    <img
                                        src={step.image}
                                        alt={step.imageAlt}
                                        className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[360px]"
                                    />
                                </div>


                                {/* Content */}
                                <div className="md:pl-8">
                                    {/* <span className="text-sm font-semibold text-slate-400">
                                        {step.number}
                                    </span> */}

                                    <h3 className="mt-3 text-2xl font-semibold text-[#00143A] sm:text-3xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 max-w-lg leading-7 text-slate-600">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Button */}

            <section className="px-6 py-16 sm:px-10 lg:px-14">
                <div
                    ref={addRevealRef}
                    className="mx-auto grid max-w-7xl translate-y-8 overflow-hidden rounded-[2rem] bg-[#E6F7FC] opacity-0 transition-all duration-700 ease-out lg:grid-cols-2"
                >

                    {/* LEFT CONTENT */}

                    <div className="flex flex-col justify-center px-8 py-10 sm:px-12 sm:py-12 lg:px-14 lg:py-14">

                        <span className="w-fit text-sm font-semibold uppercase tracking-[0.18em] text-[#00A4EA]">
                            Need Assistance?
                        </span>

                        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#00143A] sm:text-4xl">
                            Still Have Questions?

                            <span className="mt-1 block bg-gradient-to-r from-[#00A4EA] via-[#00A4EA] to-[#00AE89] bg-clip-text text-transparent">
                                Let’s Get Your Shipping Back on Track.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                            Our team is ready to help with your shipments,
                            deliveries, and platform.
                        </p>

                        <button
                            type="button"
                            onClick={openSupportForm}
                            className="group mt-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#00A4EA] to-[#00AE89] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Get in Touch

                            <ArrowRight
                                size={18}
                                strokeWidth={2}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>


                    {/* RIGHT IMAGE */}

                    <div className="relative min-h-[300px] overflow-hidden sm:min-h-[350px] lg:min-h-[390px]">
                        <img
                            src={contactCtaImage}
                            alt="Nexgo customer support"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />

                        {/* Soft transition between content and image */}

                        <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#E6F7FC] to-transparent lg:block" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default ContactUs;