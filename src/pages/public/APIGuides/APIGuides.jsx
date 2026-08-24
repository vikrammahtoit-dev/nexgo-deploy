import { CalendarDays, ChevronRight, Clock3 } from "lucide-react";
import Navbar from "../../../features/landing/navbar/Navbar";
import { apiTerms } from "./APITerms";
import ApiIllustration from "../../../assets/images/api-illustration.webp"
import { useEffect, useRef, useState } from "react";
import Footer from "../../../features/landing/footer/Footer";

const renderHighlightedText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith("*") && part.endsWith("*")) {
            return (
                <strong
                    key={index}
                    className="font-bold text-blue-950"
                >
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return <span key={index}>{part}</span>;
    });
};

const APITermsHero = () => {
    const breadcrumbs = ["Home", "Shipping SOP"];
    return (
        <section className=" relative overflow-hidden bg-slate-50 ">
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
                            {apiTerms.title}
                        </h1>
                        <div className="mt-7 spacy-y-6">
                            {apiTerms.introduction?.map((item, index) => (
                                <p
                                    key={index}
                                    className={`max-w-2xl text-base leading-7 text-blue-950 sm:texrt-lg ${index > 0 ? "mt-6" : " "
                                        }`}
                                >
                                    {renderHighlightedText(item.text)}
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
                                    {apiTerms.effectiveDate}
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Clock3 className="h-4 w-4" />
                                <span>
                                    <strong>
                                        Last Updated:
                                    </strong> {""}
                                    {apiTerms.lastUpdated}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <div className="flex h-full min-h-[320px] w-full items-center justify-center   lg:min-h-[390px]">
                            <div className="text-center">
                                <img
                                    src={ApiIllustration}
                                    alt="API-Illustration"
                                    className="h-auto w-full max-w-lg object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const APITermsContent = ({ renderText }) => {
    const [activeSection, setActiveSection] = useState(
        apiTerms.sections?.[0]?.id
    );

    const {
        sections,
    } = apiTerms;
    const contentRef = useRef(null);

    const [activeId, setActiveId] =
        useState(sections[0]?.id ?? 1);
    // Left section - Scrolling
    useEffect(() => {
        const container =
            contentRef.current;

        if (!container) return;

        const handleScroll = () => {
            const containerRect =
                container.getBoundingClientRect();

            const triggerPoint =
                containerRect.top + 70;

            let currentId =
                sections[0]?.id ?? 1;

            sections.forEach((section) => {
                const element =
                    document.getElementById(
                        `terms-section-${section.id}`,
                    );

                if (!element) return;

                const rect =
                    element.getBoundingClientRect();

                if (
                    rect.top <= triggerPoint
                ) {
                    currentId = section.id;
                }
            });

            setActiveId(currentId);
        };

        handleScroll();

        container.addEventListener(
            "scroll",
            handleScroll,
            { passive: true },
        );

        return () => {
            container.removeEventListener(
                "scroll",
                handleScroll,
            );
        };
    }, [sections]);


    // Right Side
    useEffect(() => {
        const sections = apiTerms.sections
            .map((section) => document.getElementById(section.id))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    );

                if (visibleSections[0]) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-120px 0px -65% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);


    const renderContentItem = (item, index) => {
        switch (item.type) {
            case "paragraph":
                return (
                    <p
                        key={index}
                        className="ml-5 text-[15px] leading-[1.8] text-blue-950"
                    >
                        {renderText(item.text)}
                    </p>
                );
            case "subheading":
                return (
                    <h3
                        key={index}
                        className="pt-3 text-[18px] font-semibold leading-6 text-blue-950"
                    >
                        {renderText(item.text)}
                    </h3>
                );
            case "list":
                return (
                    <ul
                        key={index}
                        className="ml-10 list-disc space-y-1 text-[15px] text-blue-950 marker:text-orange-600"
                    >
                        {item.items?.map((listItem, listIndex) => (
                            <li key={listIndex} className="pl-1">

                                {renderText(listItem)}
                            </li>
                        ))}
                    </ul>
                );

            default:
                return null;
        }
    }
    return (
        <section className="w-full bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16 lg:px-14 lg:py-20">
                {/* Left Content */}
                <article
                    ref={contentRef}
                    className="min-w-0 lg:h-[calc(100vh-155px)] lg:overflow-y-auto lg:pr-7"
                    style={{
                        scrollbarWidth: "thin",
                    }}
                >
                    {apiTerms.sections.map((section, sectionIndex) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className={`scroll-mt-24 ${sectionIndex > 0
                                ? "mt-12 border-t border-slate-200 pt-10"
                                : ""
                                }`}
                        >
                            {/* Section Heading */}
                            <div className="mb-5">
                                <h2 className="text-[22px] font-bold leading-tight tracking-tight text-blue-950">
                                    <span>
                                        {section.number}.
                                    </span>{" "}
                                    {section.title}
                                </h2>
                            </div>
                            {/* Section Content */}
                            <div className="space-y-3">
                                {section.content?.map(
                                    renderContentItem
                                )}
                            </div>
                        </section>
                    ))}
                </article>

                {/* Right Side - On this page */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24">
                        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                            <h2 className="text-sm font-bold text-blue-950">
                                On this page
                            </h2>

                            <div className="mt-4 h-px bg-slate-200" />

                            <nav className="mt-3 max-h-[calc(100vh-190px)] overflow-y-auto pr-1">
                                <div className="space-y-0.5">
                                    {apiTerms.sections.map((section) => {
                                        const isActive =
                                            activeSection === section.id;

                                        return (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className={`group flex items-start gap-2 rounded-md px-3 py-2 text-[13px] leading-5 transition-all ${isActive
                                                    ? "bg-white font-semibold text-blue-950 shadow-sm"
                                                    : "text-slate-500 hover:bg-white hover:text-blue-950"
                                                    }`}
                                            >
                                                <ChevronRight
                                                    className={`mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform ${isActive
                                                        ? "translate-x-0 text-orange-500"
                                                        : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                                        }`}
                                                />

                                                <span>
                                                    {section.number}.{" "}
                                                    {section.title}
                                                </span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </nav>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}

const APIGuides = () => {


    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <section className="w-full">
                <APITermsHero />
            </section>
            {/* Content Area */}
            <APITermsContent renderText={renderHighlightedText} />

            {/* Footer */}
            <Footer />

        </main>
    );
};

export default APIGuides;