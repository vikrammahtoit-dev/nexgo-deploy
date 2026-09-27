import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
    BookOpen,
    ChevronDown,
    LifeBuoy,
    Menu,
    ShoppingBag,
    Truck,
    X,
} from "lucide-react";

import logo from "../../../assets/logos/Nexgo_logo.webp";

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
                    ],
                },
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

    // {
    //     label: "Pricing",
    //     path: "/pricing",
    //     dropdown: false,
    // },

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
                            label: "FAQ",
                            description: "Find answers and setup guides",
                            icon: "LifeBuoy",
                            path: "/faqs",
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
    const location = useLocation();

    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

    const navbarRef = useRef(null);

    // ---------------------------------------------------------
    // Normalize menu sections
    // ---------------------------------------------------------

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

    // ---------------------------------------------------------
    // Check whether a route is active
    // ---------------------------------------------------------

    const isPathActive = (path) => {
        if (!path) {
            return false;
        }

        if (location.pathname === path) {
            return true;
        }

        return location.pathname.startsWith(`${path}/`);
    };

    const isDropdownActive = (link) => {
        const sections = getMenuSections(link.menu);

        return sections.some((section) =>
            section.items?.some((item) => isPathActive(item.path))
        );
    };

    // ---------------------------------------------------------
    // Close everything
    // ---------------------------------------------------------

    const closeAllMenus = () => {
        setActiveMenu(null);
        setMobileMenuOpen(false);
        setExpandedMobileMenu(null);
    };

    // ---------------------------------------------------------
    // Escape key
    // ---------------------------------------------------------

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key !== "Escape") {
                return;
            }

            closeAllMenus();
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    // ---------------------------------------------------------
    // Click outside
    // ---------------------------------------------------------

    useEffect(() => {
        const handlePointerDown = (event) => {
            if (!navbarRef.current?.contains(event.target)) {
                setActiveMenu(null);
                setMobileMenuOpen(false);
                setExpandedMobileMenu(null);
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener(
                "pointerdown",
                handlePointerDown
            );
        };
    }, []);

    // ---------------------------------------------------------
    // Close menus after route changes
    // ---------------------------------------------------------

    useEffect(() => {
        setActiveMenu(null);
        setMobileMenuOpen(false);
        setExpandedMobileMenu(null);
    }, [location.pathname]);

    // ---------------------------------------------------------
    // Dropdown keyboard handling
    // ---------------------------------------------------------

    const handleDropdownKeyDown = (event, label) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();

            setActiveMenu((current) =>
                current === label ? null : label
            );
        }

        if (event.key === "ArrowDown") {
            event.preventDefault();
            setActiveMenu(label);
        }
    };

    const activeLink = navbarLinks.find(
        (link) => link.label === activeMenu
    );

    const activeSections = getMenuSections(activeLink?.menu);

    const dropdownWidth =
        activeSections.length === 1
            ? "w-[360px]"
            : "w-[560px]";

    const dropdownGrid =
        activeSections.length === 1
            ? "grid-cols-1"
            : "grid-cols-2";

    return (
        <header
            ref={navbarRef}
            className="sticky top-0 z-50 border-b border-slate-100 bg-white"
        >
            <div className="relative mx-auto flex h-[76px] w-[calc(100%-32px)] max-w-[1280px] items-center justify-between sm:w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">

                {/* =====================================================
                    LOGO
                ===================================================== */}

                <div className="flex shrink-0 items-center">
                    <Link
                        to="/"
                        aria-label="NEXGO home"
                        onClick={() => closeAllMenus()}
                    >
                        <img
                            src={logo}
                            alt="NEXGO"
                            width="138"
                            height="92"
                            className="block h-auto w-[120px] object-contain sm:w-[130px] lg:w-[138px]"
                        />
                    </Link>
                </div>

                {/* =====================================================
                    DESKTOP NAVIGATION
                ===================================================== */}

                <nav
                    className="hidden items-center gap-6 lg:flex lg:gap-8 xl:gap-10"
                    aria-label="Main navigation"
                >
                    {navbarLinks.map((link) => {
                        const isOpen =
                            activeMenu === link.label;

                        const isRouteActive =
                            link.dropdown
                                ? isDropdownActive(link)
                                : isPathActive(link.path);

                        // -------------------------------------------------
                        // Normal link
                        // -------------------------------------------------

                        if (!link.dropdown) {
                            return (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    className={`whitespace-nowrap text-[15px] transition-colors duration-200 xl:text-[16px] ${isRouteActive
                                        ? "font-semibold text-[#F97316]"
                                        : "text-[#253657] hover:text-[#F97316]"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        }

                        // -------------------------------------------------
                        // Dropdown trigger
                        // -------------------------------------------------

                        return (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() =>
                                    setActiveMenu(link.label)
                                }
                            >
                                <button
                                    type="button"
                                    aria-haspopup="true"
                                    aria-expanded={isOpen}
                                    aria-controls={`navbar-menu-${link.label
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    onClick={() =>
                                        setActiveMenu((current) =>
                                            current === link.label
                                                ? null
                                                : link.label
                                        )
                                    }
                                    onKeyDown={(event) =>
                                        handleDropdownKeyDown(
                                            event,
                                            link.label
                                        )
                                    }
                                    onFocus={() =>
                                        setActiveMenu(link.label)
                                    }
                                    className={`group inline-flex items-center gap-1.5 whitespace-nowrap text-[15px] transition-colors duration-200 xl:text-[16px] ${isRouteActive || isOpen
                                        ? "font-medium text-[#F97316]"
                                        : "text-[#253657] hover:text-[#F97316]"
                                        }`}
                                >
                                    <span>{link.label}</span>

                                    <ChevronDown
                                        size={14}
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                        className={`transition-transform duration-200 ${isOpen
                                            ? "rotate-180"
                                            : ""
                                            }`}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </nav>

                {/* =====================================================
                    DESKTOP MEGA MENU
                ===================================================== */}

                {activeMenu && activeLink?.menu && (
                    <div
                        id={`navbar-menu-${activeMenu
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        role="menu"
                        className={`absolute left-1/2 top-[76px] hidden -translate-x-1/2 overflow-hidden rounded-b-2xl border border-t-0 border-slate-100 bg-white shadow-[0_18px_45px_rgba(20,38,70,0.12)] lg:block ${dropdownWidth}`}
                        onMouseEnter={() =>
                            setActiveMenu(activeMenu)
                        }
                        onMouseLeave={() =>
                            setActiveMenu(null)
                        }
                    >
                        <div
                            className={`grid ${dropdownGrid} gap-4 p-4`}
                        >
                            {activeSections.map(
                                (section, index) => (
                                    <div
                                        key={`${section.title}-${index}`}
                                    >
                                        <p className="mb-4 text-sm font-semibold tracking-[0.02em] text-slate-500">
                                            {section.title}
                                        </p>

                                        <div className="space-y-2">
                                            {section.items?.map(
                                                (item) => {
                                                    const Icon =
                                                        iconMap[
                                                        item.icon
                                                        ];

                                                    return (
                                                        <Link
                                                            key={
                                                                item.label
                                                            }
                                                            to={
                                                                item.path
                                                            }
                                                            role="menuitem"
                                                            onClick={() =>
                                                                setActiveMenu(
                                                                    null
                                                                )
                                                            }
                                                            className="flex items-start gap-2 rounded-xl p-3 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30"
                                                        >
                                                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#F97316]">
                                                                {Icon ? (
                                                                    <Icon
                                                                        size={
                                                                            18
                                                                        }
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : null}
                                                            </div>

                                                            <div>
                                                                <p className="text-sm font-semibold text-slate-800">
                                                                    {
                                                                        item.label
                                                                    }
                                                                </p>

                                                                <p className="text-xs text-slate-500">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}

                {/* =====================================================
                    DESKTOP CTA
                ===================================================== */}

                <div className="ml-6 hidden shrink-0 items-center gap-3 lg:flex xl:ml-10">

                    <Link
                        to="/login"
                        className="inline-flex h-[42px] items-center justify-center rounded-[9px] border border-slate-200 bg-white px-5 text-[15px] font-semibold text-[#172B50] transition-all duration-200 hover:-translate-y-px hover:border-[#F97316] hover:text-[#F97316] xl:h-[44px] xl:px-[23px]"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="inline-flex h-[42px] min-w-[108px] items-center justify-center rounded-[9px] border border-[#F97316] bg-[#F97316] px-5 text-[15px] font-semibold text-white shadow-[0_4px_12px_rgba(249,115,22,0.12)] transition-all duration-200 hover:-translate-y-px hover:border-[#ED590E] hover:bg-[#ED590E] hover:shadow-[0_7px_18px_rgba(249,115,22,0.2)] xl:h-[44px] xl:min-w-[116px] xl:px-[23px]"
                    >
                        Get Started
                    </Link>
                </div>

                {/* =====================================================
                    MOBILE MENU BUTTON
                ===================================================== */}

                <button
                    type="button"
                    onClick={() => {
                        setMobileMenuOpen(
                            (current) => !current
                        );
                        setExpandedMobileMenu(null);
                    }}
                    aria-label={
                        mobileMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                    className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#172B50] transition-colors duration-200 hover:border-[#F97316] hover:text-[#F97316] lg:hidden"
                >
                    {mobileMenuOpen ? (
                        <X size={20} aria-hidden="true" />
                    ) : (
                        <Menu size={20} aria-hidden="true" />
                    )}
                </button>

                {/* =====================================================
                    MOBILE MENU
                ===================================================== */}

                {mobileMenuOpen && (
                    <div
                        id="mobile-navigation"
                        className="absolute left-0 right-0 top-[76px] max-h-[calc(100vh-90px)] overflow-y-auto rounded-b-2xl border border-slate-100 bg-white px-3 py-4 shadow-[0_18px_35px_rgba(15,23,42,0.08)] lg:hidden"
                    >
                        <nav
                            className="space-y-3"
                            aria-label="Mobile navigation"
                        >
                            {navbarLinks.map((link) => {
                                const isExpanded =
                                    expandedMobileMenu ===
                                    link.label;

                                const isRouteActive =
                                    link.dropdown
                                        ? isDropdownActive(link)
                                        : isPathActive(link.path);

                                // -------------------------------------------------
                                // Normal mobile link
                                // -------------------------------------------------

                                if (!link.dropdown) {
                                    return (
                                        <Link
                                            key={link.label}
                                            to={link.path}
                                            onClick={() =>
                                                closeAllMenus()
                                            }
                                            className={`block rounded-xl px-3 py-3 text-base transition-colors ${isRouteActive
                                                ? "bg-orange-50 font-semibold text-[#F97316]"
                                                : "font-medium text-[#253657] hover:bg-slate-50 hover:text-[#F97316]"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                }

                                const mobileSections =
                                    getMenuSections(
                                        link.menu
                                    );

                                return (
                                    <div
                                        key={link.label}
                                        className={`rounded-xl border ${isRouteActive
                                            ? "border-orange-100 bg-orange-50/50"
                                            : "border-slate-100 bg-slate-50"
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            aria-expanded={
                                                isExpanded
                                            }
                                            onClick={() =>
                                                setExpandedMobileMenu(
                                                    isExpanded
                                                        ? null
                                                        : link.label
                                                )
                                            }
                                            className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-medium text-[#253657]"
                                        >
                                            <span>
                                                {link.label}
                                            </span>

                                            <ChevronDown
                                                size={16}
                                                aria-hidden="true"
                                                className={`transition-transform duration-200 ${isExpanded
                                                    ? "rotate-180"
                                                    : ""
                                                    }`}
                                            />
                                        </button>

                                        {isExpanded && (
                                            <div className="space-y-4 border-t border-slate-200 px-3 py-3">
                                                {mobileSections.map(
                                                    (
                                                        section,
                                                        sectionIndex
                                                    ) => (
                                                        <div
                                                            key={`${section.title}-${sectionIndex}`}
                                                        >
                                                            <p className="mb-2 text-sm font-semibold text-slate-500">
                                                                {
                                                                    section.title
                                                                }
                                                            </p>

                                                            <div className="space-y-2">
                                                                {section.items?.map(
                                                                    (
                                                                        item
                                                                    ) => {
                                                                        const Icon =
                                                                            iconMap[
                                                                            item.icon
                                                                            ];

                                                                        return (
                                                                            <Link
                                                                                key={
                                                                                    item.label
                                                                                }
                                                                                to={
                                                                                    item.path
                                                                                }
                                                                                onClick={() =>
                                                                                    closeAllMenus()
                                                                                }
                                                                                className="flex items-start gap-3 rounded-xl bg-white p-2.5 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#F97316]/30"
                                                                            >
                                                                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#F97316]">
                                                                                    {Icon ? (
                                                                                        <Icon
                                                                                            size={
                                                                                                16
                                                                                            }
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    ) : null}
                                                                                </div>

                                                                                <div>
                                                                                    <p className="text-sm font-semibold text-slate-800">
                                                                                        {
                                                                                            item.label
                                                                                        }
                                                                                    </p>

                                                                                    <p className="text-xs text-slate-500">
                                                                                        {
                                                                                            item.description
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </Link>
                                                                        );
                                                                    }
                                                                )}
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {/* Mobile CTA */}

                            <div className="space-y-2 pt-2">
                                <Link
                                    to="/login"
                                    onClick={() =>
                                        closeAllMenus()
                                    }
                                    className="flex h-[42px] items-center justify-center rounded-[9px] border border-slate-200 bg-white px-5 text-[15px] font-semibold text-[#172B50]"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/signup"
                                    onClick={() =>
                                        closeAllMenus()
                                    }
                                    className="flex h-[42px] items-center justify-center rounded-[9px] border border-[#F97316] bg-[#F97316] px-5 text-[15px] font-semibold text-white"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;