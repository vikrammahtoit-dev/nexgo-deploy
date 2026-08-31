import { Link } from "react-router-dom";
import logo from "../../../assets/logos/Nexgo_logo.png";
import { useState } from "react";
import { BookOpen, ChevronDown, LifeBuoy, Menu, ShoppingBag, Truck, X } from "lucide-react";

const navbarLinks = [
    {
        label: "Solutions",
        dropdown: true,
        menu: {
            sections: [
                {
                    title: "Shipping",
                    items: [
                        {
                            label: "Domestic Shipping",
                            description: "Simplify your online deliveries",
                            icon: "ShoppingBag",
                            path: "/solutions/domestic-shipping",
                        },
                        {
                            label: "International Shipping",
                            description: "Deliver globally with confidence",
                            icon: "ShoppingBag",
                            path: "/solutions/international-shipping",
                        },
                    ],
                },
                // {
                //     title: "Operations",
                //     items: [
                //         {
                //             label: "Warehouse Support",
                //             description: "Manage fulfillment and dispatch",
                //             icon: "Truck",
                //             path: "/solutions/warehouse-support",
                //         },
                //         {
                //             label: "Returns Management",
                //             description: "Handle reverse logistics efficiently",
                //             icon: "Truck",
                //             path: "/solutions/returns-management",
                //         },
                //     ],
                // },
            ],
        },
    },
    {
        label: "Platform",
        dropdown: true,
        menu: {
            sections: [
                {
                    title: "Core Platform",
                    items: [
                        {
                            label: "Multi-courier Shipping",
                            description: "Connect with multiple courier partners",
                            icon: "Truck",
                            path: "/platform/shipping",
                        },
                        {
                            label: "Order Management",
                            description: "Track and control every shipment",
                            icon: "Truck",
                            path: "/platform/order-management",
                        },
                    ],
                },
                {
                    title: "Integrations",
                    items: [
                        {
                            label: "Marketplace Connect",
                            description: "Integrate with your eCommerce stack",
                            icon: "BookOpen",
                            path: "/platform/marketplace-connect",
                        },
                        {
                            label: "API Access",
                            description: "Build custom workflows with API",
                            icon: "BookOpen",
                            path: "/platform/api-access",
                        },
                    ],
                },
            ],
        },
    },
    {
        label: "Tracking",
        path: "/tracking",
        dropdown: false,
    },
    {
        label: "Pricing",
        path: "/pricing",
        dropdown: false,
    },
    {
        label: "Resources",
        dropdown: true,
        menu: {
            sections: [
                {
                    title: "Product",
                    items: [
                        {
                            label: "Blog",
                            description: "Latest logistics insights",
                            icon: "BookOpen",
                            path: "/resources/blog",
                        },
                        {
                            label: "Case Studies",
                            description: "See how businesses scale faster",
                            icon: "BookOpen",
                            path: "/resources/case-studies",
                        },
                    ],
                },
                {
                    title: "Help",
                    items: [
                        {
                            label: "Support Center",
                            description: "Find answers and setup guides",
                            icon: "LifeBuoy",
                            path: "/resources/support",
                        },
                        {
                            label: "Contact Us",
                            description: "Talk to our logistics experts",
                            icon: "LifeBuoy",
                            path: "/resources/contact",
                        },
                    ],
                },
            ],
        },
    },
];

const iconMap = {
    ShoppingBag,
    Truck,
    BookOpen,
    LifeBuoy,
};

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

    const getMenuSections = (menu) => {
        if (!menu) {
            return [];
        }

        if (Array.isArray(menu.sections)) {
            return menu.sections.slice(0, 2);
        }

        if (menu.title && Array.isArray(menu.items)) {
            return [
                {
                    title: menu.title,
                    items: menu.items,
                },
            ];
        }

        return [];
    };

    const activeLink = navbarLinks.find((link) => link.label === activeMenu);
    const activeSections = getMenuSections(activeLink?.menu);
    const dropdownWidth = activeSections.length === 1 ? "w-[360px]" : "w-[560px]";
    const dropdownGrid = activeSections.length === 1 ? "grid-cols-1" : "grid-cols-2";

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
            <div className="relative mx-auto flex h-[76px] w-[calc(100%-32px)] max-w-[1280px] items-center justify-between sm:w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">
                <div className="flex shrink-0 items-center">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Nexgo_logo"
                            className="block h-auto w-[120px] object-contain sm:w-[130px] lg:w-[138px]"
                        />
                    </Link>
                </div>

                <nav className="hidden items-center gap-6 lg:flex lg:gap-8 xl:gap-10">
                    {navbarLinks.map((link) => {
                        const isActive = activeMenu === link.label;

                        if (!link.dropdown) {
                            return (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    className="whitespace-nowrap text-[15px] text-[#253657] transition-colors duration-200 hover:text-[#F97316] xl:text-[16px]"
                                >
                                    {link.label}
                                </Link>
                            );
                        }

                        return (
                            <div
                                className="relative"
                                key={link.label}
                                onMouseEnter={() => setActiveMenu(link.label)}
                                onMouseLeave={() => setActiveMenu(null)}
                            >
                                <button
                                    type="button"
                                    className={`group inline-flex items-center gap-1.5 whitespace-nowrap text-[15px]  transition-colors duration-200 xl:text-[16px] ${isActive ? "text-[#F97316]" : "text-[#253657] hover:text-[#F97316]"
                                        }`}
                                    aria-expanded={isActive}
                                >
                                    <span>{link.label}</span>
                                    <ChevronDown
                                        size={14}
                                        strokeWidth={1.8}
                                        className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </nav>

                {/* Desktop dropdown megamenu  */}
                {activeMenu && activeLink?.menu && (
                    <div
                        className={`absolute left-1/2 top-[76px] hidden -translate-x-1/2 overflow-hidden rounded-b-2xl border border-t-0 border-slate-100 bg-white shadow-[0_18px_45px_rgba(20,38,70,0.12)] lg:block ${dropdownWidth}`}
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <div className={`grid ${dropdownGrid} gap-4 p-4`}>
                            {activeSections.map((section, index) => (
                                <div key={`${section.title}-${index}`}>
                                    <p className="mb-4 text-sm font-semibold tracking-[0.02em] text-slate-500">
                                        {section.title}
                                    </p>

                                    <div className="space-y-2">
                                        {section.items.map((item) => {
                                            const Icon = iconMap[item.icon];

                                            return (
                                                <Link
                                                    key={item.label}
                                                    to={item.path}
                                                    className="flex items-start gap-2 rounded-xl p-3 transition-colors hover:bg-slate-50"
                                                >
                                                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-[#F97316]">
                                                        {Icon ? <Icon size={18} /> : null}
                                                    </div>

                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                                                        <p className="text-xs text-slate-500">{item.description}</p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA buttons */}
                <div className="ml-6 hidden lg:flex items-center gap-3 shrink-0 xl:ml-10">
                    <Link
                        to="/login"
                        className="inline-flex h-[42px] items-center justify-center rounded-[9px] border border-slate-200 bg-white px-5 text-[15px] font-semibold text-[#172B50] transition-all duration-200 hover:-translate-y-px hover:border-[#F97316] hover:text-[#F97316] xl:h-[44px] xl:px-[23px]"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="inline-flex h-[42px] min-w-[108px] items-center justify-center rounded-[9px] border border-[#F97316] bg-[#F97316] px-5 text-[15px] font-semibold text-white shadow-[0_4px_12px_rgba(255,100,20,0.12)] transition-all duration-200 hover:-translate-y-px hover:border-[#ED590E] hover:bg-[#ED590E] hover:shadow-[0_7px_18px_rgba(255,100,200,0.2)] xl:h-[44px] xl:min-w-[116px] xl:px-[23px] "
                    >Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen((current) => !current)}
                    aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="ml-auto  flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#172B50] transition-colors duration-200 hover:border-[#F97316] hover:text-[#F97316] lg:hidden "
                >
                    {mobileMenuOpen ? (
                        <X size={20} />
                    ) : (
                        <Menu size={20} />
                    )}
                </button>

                {/* Mobile dropdown menu */}
                {mobileMenuOpen && (
                    <div className="absolute right-0 top-[76px] w-[calc(100%-0.5rem)] max-w-[360px] rounded-b-2xl border border-slate-100 bg-white px-3 py-4 shadow-[0_18px_35px_rgba(15,23,42,0.06)] lg:hidden">
                        <div className="space-y-3">
                            {navbarLinks.map((link) => {
                                const isExpanded = expandedMobileMenu === link.label;

                                if (!link.dropdown) {
                                    return (
                                        <Link
                                            key={link.label}
                                            to={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block rounded-xl px-3 py-3 text-base font-medium text-[#253657] hover:bg-slate-50 hover:text-[#F97316]"
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                }

                                return (
                                    <div key={link.label} className="rounded-xl border border-slate-100 bg-slate-50">
                                        <button
                                            type="button"
                                            onClick={() => setExpandedMobileMenu(isExpanded ? null : link.label)}
                                            className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-medium text-[#253657]"
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        {isExpanded && (
                                            <div className="space-y-4 border-t border-slate-200 px-3 py-3">
                                                {link.menu.sections.map((section, sectionIndex) => (
                                                    <div key={`${section.title}-${sectionIndex}`}>
                                                        <p className="mb-2 text-sm font-semibold text-slate-500">
                                                            {section.title}
                                                        </p>

                                                        <div className="space-y-2">
                                                            {section.items.map((item) => {
                                                                const Icon = iconMap[item.icon];

                                                                return (
                                                                    <Link
                                                                        key={item.label}
                                                                        to={item.path}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        className="flex items-start gap-3 rounded-xl bg-white p-2.5"
                                                                    >
                                                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#F97316]">
                                                                            {Icon ? <Icon size={16} /> : null}
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                                                                            <p className="text-xs text-slate-500">{item.description}</p>
                                                                        </div>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            <div className="space-y-2 pt-2">
                                <Link
                                    to="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex h-[42px] items-center justify-center rounded-[9px] border border-slate-200 bg-white px-5 text-[15px] font-semibold text-[#172B50]"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex h-[42px] items-center justify-center rounded-[9px] border border-[#F97316] bg-[#F97316] px-5 text-[15px] font-semibold text-white"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;