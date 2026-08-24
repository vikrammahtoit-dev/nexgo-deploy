import { AlertTriangle, CalendarDays, ChartNoAxesCombined, Check, ChevronRight, CircleCheck, Clock3, FileCheck2, Headphones, icons, IndianRupee, PackageCheck, ShieldCheck } from "lucide-react";
import Navbar from "../../../features/landing/navbar/Navbar";
import { shippingSOPData as data, shippingSOPData } from "./ShippingSOP.data";
import Footer from "../../../features/landing/footer/Footer";
import SOPIllustration from "../../../assets/images/SOP-Illustration.png"

const renderHighlightedText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong
                    key={index}
                    className="font-semibold text-blue-950"
                >
                    {part.slice(2, -2)}
                </strong>
            );
        }

        return <span key={index}>{part}</span>;
    });
};

const formatTOCTitle = (title) => {
    return title
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase())
        .replace(/\bKyc\b/g, "KYC")
        .replace(/\bRto\b/g, "RTO")
        .replace(/\bOda\b/g, "ODA")
        .replace(/\bNsz\b/g, "NSZ")
        .replace(/\bCod\b/g, "COD")
        .replace(/\bPod\b/g, "POD")
        .replace(/\bAwb\b/g, "AWB");
};

const ShippingSOPHero = () => {
    const breadcrumbs = ["Home", "Shipping SOP"];
    return (
        <section className=" relative overflow-hidden rounded-[32px] border border-slate-200  bg-slate-50 mt-7">
            {/* Decorative background elements  */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80  rounded-full bg-slate-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72  rounded-full bg-slate-100 blur-3xl" />

            <div className="relative px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                {/* BreadCrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="flex flex-wrap items-center gap-1.5 text-sm"
                >
                    {breadcrumbs.map((item, index) => {
                        const isLast = index === breadcrumbs.length - 1;

                        return (
                            <div key={item} className="flex items-center">
                                <span
                                    className={
                                        isLast
                                            ? "font-medium text-orange-600"
                                            : " text-slate-600"
                                    }
                                >
                                    {item}
                                </span>

                                {!isLast && (
                                    <ChevronRight className="mx-1.5 h-4 w-4 text-slate-400" />
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Hero Grid */}
                <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
                    {/* Left Side */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-blue-950 lg:text-[44px]">
                            {data.title}
                        </h1>
                        <div className="mt-7 spacy-y-6">
                            {data.introduction.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`max-w-2xl text-base leading-7 text-blue-950 sm:texrt-lg ${index > 0 ? "mt-6" : " "
                                        }`}
                                >
                                    {renderHighlightedText(paragraph)}
                                </p>
                            ))}
                        </div>
                        {/* Document dates */}
                        <div className="mt-8 flex flex-wrap gap-8 text-blue-950">
                            {/* Effective dates  */}
                            <div className="flex items-center gap-1">
                                <CalendarDays className="h-4 w-4" />
                                <span className="">
                                    <strong>
                                        Effective Data:
                                    </strong> {""}
                                    {data.effectiveDate}
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Clock3 className="h-4 w-4" />
                                <span>
                                    <strong>
                                        Last Updated:
                                    </strong> {""}
                                    {data.lastUpdatedDate}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <div className="flex h-full min-h-[320px] w-full items-center justify-center   lg:min-h-[390px]">
                            <div className="text-center">
                                <img
                                    src={SOPIllustration}
                                    alt="SOP-Illustration"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Instructions */}
                <div className="mt-10">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3 sm:p-4 max-w-2xl">
                        <div className="flex gap-4">
                            {/* Icon */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                                <AlertTriangle className="h-5 w-5 text-amber-600" />
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-lg font-bold text-blue-950 ">
                                    {data.introduction.important.title}:
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    {data.introduction.important.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

const ShippingSOPSection = ({ section }) => {
    return (
        <article
            id={section.id}
            className="scroll-mt-28"
        >
            {/* Section Header */}

            <h2 className="text-2xl font-bold tracking-tight text-blue-950">
                {section.number}.{section.title}
            </h2>


            {/* Section Content */}
            <div className="mt-7   px-5 sapce-y-6">
                {section.content.map((block, index) => {
                    switch (block.type) {
                        case "paragraph":
                            return (
                                <p
                                    key={index}
                                    className="mb-5 text-base leading-6 text-blue-950 ls:mb-0"
                                >
                                    {block.text}
                                </p>
                            );
                        case "subheading":
                            return (
                                <h3
                                    key={index}
                                    className=" mb-2 mt-7 text-lg font-bold text-blue-950 first:mt-0"
                                >
                                    {block.text}
                                </h3>
                            );
                        case "list":
                            return (
                                <ul
                                    key={index}
                                    className="ml-5 list-disc space-y-2 text-base  text-blue-950 marker:text-orange-600"
                                >
                                    {block.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            );

                        case "step":
                            return (
                                <div
                                    key={index}
                                    className="relative mt-7 gap-4 last:mb-0"
                                >
                                    {/* Timeline */}
                                    <div className="flex w-10 shrink-0 flex-col items-center">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 bg-orange-50  text-sm font-bold text-orange-600">
                                            {String(block.step).padStart(2, "0")}
                                        </div>
                                        {index !== section.content.length - 1 && (
                                            <div className="mt-2 h-full min-h-8 w-px bg-slate-200" />
                                        )}
                                    </div>

                                    {/* Step Content */}
                                    <div className="min-w-0 flex-1 pb-1">
                                        <h3 className="text-base font-bold text-blue-950">
                                            {renderHighlightedText(block.title)}
                                        </h3>

                                        {block.description && (
                                            <p className="mt-2 text-[15px] leading-7 text-blue-950">
                                                {renderHighlightedText(block.description)}
                                            </p>
                                        )}

                                        {block.items?.length > 0 && (
                                            <ul className="mt-3 space-y-2 text-[15px] leading-7 text-blue-950 ml-5">
                                                {block.items.map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                                        <span>{renderHighlightedText(item)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );

                        case "table":
                            return (
                                <div
                                    key={index}
                                    className="mb-7 overflow-hidden rounded-xl border border-slate-200 bg-white"
                                >
                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[620px] border-collapse text-left">
                                            <thead>
                                                <tr className="bg-slate-50">
                                                    {block.headers?.map((header, headerIndex) => (
                                                        <th
                                                            key={headerIndex}
                                                            className="border-b border-slate-200 px-5 py-4 text-sm font-bold text-slate-900"
                                                        >
                                                            {renderHighlightedText(header)}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {block.rows?.map((row, rowIndex) => (
                                                    <tr
                                                        key={rowIndex}
                                                        className="border-b border-slate-100 last:border-b-0"
                                                    >
                                                        {row.map((cell, cellIndex) => (
                                                            <td
                                                                key={cellIndex}
                                                                className="px-5 py-4 align-top text-sm leading-6 text-slate-600"
                                                            >
                                                                {renderHighlightedText(cell)}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            );

                        case "definition":
                            return (
                                <div
                                    key={index}
                                    className="mb-5 rounded-xl border-l-4 border-orange-400 bg-orange-50/60 px-5 py-4"
                                >
                                    <h3 className="text-sm font-bold text-slate-900">
                                        {renderHighlightedText(block.term)}
                                    </h3>

                                    <p className="mt-1.5 text-[15px] leading-7 text-slate-600">
                                        {renderHighlightedText(block.description)}
                                    </p>
                                </div>
                            );

                        case "formula":
                            return (
                                <div
                                    key={index}
                                    className="mb-7 rounded-xl border border-slate-200 bg-slate-50 px-6 py-6 text-center"
                                >
                                    {block.label && (
                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                                            {renderHighlightedText(block.label)}
                                        </p>
                                    )}

                                    <div className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                                        {renderHighlightedText(block.formula)}
                                    </div>
                                </div>
                            );

                        case "level":
                            return (
                                <div
                                    key={index}
                                    className="mb-4 flex gap-4 rounded-xl border border-slate-200 bg-white p-4 last:mb-0"
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-orange-600">
                                        {block.level}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-sm font-bold text-slate-900">
                                            {renderHighlightedText(block.title)}
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            {renderHighlightedText(block.description)}
                                        </p>
                                    </div>
                                </div>
                            );

                        case "checklist":
                            return (
                                <div
                                    key={index}
                                    className="mb-7 rounded-xl border border-slate-200 bg-slate-50/70 p-5"
                                >
                                    {block.title && (
                                        <h3 className="mb-4 text-base font-bold text-slate-900">
                                            {renderHighlightedText(block.title)}
                                        </h3>
                                    )}

                                    <div className="space-y-3">
                                        {block.items?.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                                    <Check size={13} strokeWidth={2.5} />
                                                </span>

                                                <p className="text-[15px] leading-6 text-slate-600">
                                                    {renderHighlightedText(item)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );



                        case "closing":
                            return (
                                <div
                                    key={index}
                                    className="mt-8 border-t border-slate-200 pt-7 text-center"
                                >
                                    <div className="mx-auto flex max-w-xl items-center justify-center gap-2 text-base font-semibold text-[#10245c]">
                                        <CircleCheck
                                            size={20}
                                            className="shrink-0 text-orange-500"
                                        />

                                        <span>{renderHighlightedText(block.text)}</span>
                                    </div>
                                </div>
                            );


                        default:
                            return null;
                    }
                })}
            </div>

        </article>
    )
}

const ShippingSOPTOC = ({ sections }) => {
    return (
        <aside className="hidden lg:block lg:sticky lg:top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
                {/* title */}
                <h2 className="text-sm font-bold text-blue-950 text-center">
                    On This Page
                </h2>

                {/* section links */}
                <nav className="mt-5">
                    <ul className="space-y-1">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className="block rounded-lg px-3 py-2 text-sm leading-5 text-slate-500 transition-colors duration-200 hover:bg-orange-50 hover:text-orange-600"
                                >
                                    <span className="mr-1 text-slate-400">
                                        {section.number}.
                                    </span>

                                    {formatTOCTitle(section.title)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

const ShippingSOPWhyFollow = () => {
    const points = [
        {
            icon: ShieldCheck,
            title: "Ensure Compliant and secure shipments",
            iconClass: "text-blue-600",
            bgClass: "bg-blue-50",
        },

        {
            icon: Clock3,
            title: "Reduce delays and delivery exceptions",
            iconClass: "text-green-600",
            bgClass: "bg-green-50",
        },
        {
            icon: PackageCheck,
            title: "Imporve shipment safety and accuracy",
            iconClass: "text-purple-600",
            bgClass: "bg-purple-50",
        },
        {
            icon: IndianRupee,
            title: "Faster COD settlements",
            iconClass: "text-orange-600",
            bgClass: "bg-orange-50",
        },
        {
            icon: Headphones,
            title: "Smooth claim and support experience",
            iconClass: "text-blue-600",
            bgClass: "bg-blue-50",
        },
        {
            icon: ChartNoAxesCombined,
            title: "Better customer satisfication and business growth",
            iconClass: "text-green-600",
            bgClass: "bg-green-50",
        },
    ];

    return (
        <aside className="hidden lg:block lg:sticky lg:top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ">
                {/* Heading */}
                <div>
                    <h2 className="max-w-[180px] text-sm text-center font-medium leading-7 text-blue-950">
                        Why Follow Shipping SOP ?
                    </h2>
                    <div className="mt-4 h-0.5 w-12 bg-orange-400" />
                </div>

                {/* Benefits */}
                <div className="mt-7 space-y-6">
                    {points.map((point) => {
                        const Icon = point.icon;

                        return (
                            <div
                                key={point.title}
                                className="flex items-center gap-2"
                            >
                                {/* Icon */}
                                <div
                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${point.bgClass}`}
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={1.8}
                                        className={point.iconClass}
                                    />
                                </div>

                                {/* Text */}
                                <p className="text-xs font-medium leading-[1.08] text-blue-950">
                                    {point.title}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom information Card */}
                <div className="mt-8 rounded-xl bg-[#eef3ff] p-4">
                    <div className="flex items-start gap-2">
                        <div>
                            <FileCheck2
                                size={21}
                                strokeWidth={1.7}
                                className="text-blue-600"
                            />
                        </div>
                        <p className="text-xs font-meidum leading-5 text-blue-950">
                            Keep this SOP handy and ensure your team follows
                            the guidelines for a seamless shipping experiences.
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

const ShippingSOP = () => {

    return (

        <main className="min-h-screen bg-white">
            {/* Navbar */}
            <Navbar />
            {/* Hero Section */}
            <section className="w-full">
                <div className="mx-auto max-w-8xl px-6 pb-20 lg:px-8 lg:pb-28">
                    <ShippingSOPHero />
                </div>
            </section>

            {/* SOP content area  */}
            <section
                id="shipping-sop-content"
                className="w-full"
            >
                <div className="mx-auto max-w-8xl px-6 pb-20 lg:px-8 lg:pb-28 mb-10">
                    <div className="grid items-start gap-3 lg:grid-cols-[220px_minmax(0,0.95fr)_240px]">
                        {/* Left-on this page */}
                        <aside className="hiddien  lg:block">
                            <div className="sticky top-24">
                                <div className="h-[580px] overflow-y-auto pr-1">
                                    <ShippingSOPTOC sections={shippingSOPData.sections} />
                                </div>
                            </div>

                        </aside>



                        {/* Center- Shipping SOP Content */}
                        <main className="min-w-0 lg:h-[720px] overflow-y-auto lg:pr-1">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
                                <div className="space-y-14">
                                    {shippingSOPData.sections.map((section) => (
                                        <ShippingSOPSection
                                            key={section.number}
                                            section={section}
                                        />
                                    ))}
                                </div>
                            </div>
                        </main>

                        {/* Right-Why follow SOP ?  */}
                        <div>
                            <ShippingSOPWhyFollow />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default ShippingSOP;