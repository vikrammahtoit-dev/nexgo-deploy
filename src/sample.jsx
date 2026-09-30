import React, { useEffect, useRef, useState } from "react";
import {
    Search,
    ArrowRight,
    MapPin,
    Package,
    Truck,
    ClipboardList,
    CalendarDays,
    Building2,
    Clock3,
    AlertTriangle,
    XCircle,
    RotateCcw,
    Check,
    ChevronDown,
    RefreshCw,
} from "lucide-react";


const shipmentStatus = [
    {
        title: "Order Received",
        text: "Your order has been received by your courier partner.",
        icon: Package,
        type: "done",
    },
    {
        title: "Order Picked",
        text: "Your order has been picked up by your courier partner.",
        icon: ClipboardList,
        type: "done",
    },
    {
        title: "Order In Transit",
        text: "Your order is on its way to your customer's address.",
        icon: Truck,
        type: "done",
    },
    {
        title: "Out For Delivery",
        text: "The courier executive is on its way to deliver the order at your customer's doorstep.",
        icon: Truck,
        type: "active",
    },
    {
        title: "Reached Destination",
        text: "Your order has reached your customer's city.",
        icon: MapPin,
        type: "pending",
    },
];


const shipmentCards = [
    {
        title: "Shipment Status",
        text: "See the current stage of your delivery.",
        icon: MapPin,
    },
    {
        title: "Latest Update",
        text: "View the most recent tracking event.",
        icon: ClipboardList,
    },
    {
        title: "Shipment Movement",
        text: "Follow how your shipment is progressing.",
        icon: Truck,
    },
    {
        title: "Expected Delivery",
        text: "Check the available delivery estimate.",
        icon: CalendarDays,
    },
    {
        title: "Courier Information",
        text: "View the courier-handling your shipment, where available.",
        icon: Building2,
    },
];


const exceptions = [
    {
        title: "Delivery Delay",
        icon: Clock3,
        color: "text-red-500 bg-red-50",
    },
    {
        title: "Failed Delivery Attempt",
        icon: XCircle,
        color: "text-red-500 bg-red-50",
    },
    {
        title: "Shipment Exception",
        icon: AlertTriangle,
        color: "text-orange-500 bg-orange-50",
    },
    {
        title: "Address Issue",
        icon: MapPin,
        color: "text-blue-500 bg-blue-50",
    },
    {
        title: "Return to Origin",
        icon: RotateCcw,
        color: "text-purple-500 bg-purple-50",
    },
];


const faqItems = [
    "How can I track my shipment?",
    "Where can I find my tracking ID?",
    "What information can I see while tracking?",
    "How often is shipment status updated?",
    "What does 'Out for Delivery' mean?",
    "What should I do if my shipment is delayed?",
    "Can I track B2C shipments?",
    "Can I track B2B shipments?",
];


function Reveal({ children, className = "", delay = 0 }) {
    return (
        <div
            data-reveal
            data-delay={delay}
            className={`translate-y-8 opacity-0 transition-all duration-700 ease-out ${className}`}
        >
            {children}
        </div>
    );
}


function SearchInput({
    value,
    onChange,
    onSubmit,
    placeholder,
    buttonText,
    loading = false,
}) {
    return (
        <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex h-11 flex-1 items-center gap-2 rounded-lg border border-blue-100 bg-white px-3">
                <Search
                    size={15}
                    className="shrink-0 text-blue-500"
                />

                <input
                    type="text"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            onSubmit();
                        }
                    }}
                    placeholder={placeholder}
                    className="w-full bg-transparent text-[11px] text-blue-950 outline-none placeholder:text-slate-400"
                />
            </div>

            <button
                type="button"
                onClick={onSubmit}
                disabled={loading}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-[10px] font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {loading ? "Tracking..." : buttonText}

                {!loading && <ArrowRight size={13} />}
            </button>
        </div>
    );
}


function StatusTimeline({ shipment }) {
    const defaultStatuses = shipmentStatus.map((status) => ({
        title: status.title,
        text: status.text,
        icon: status.icon,
        status:
            status.type === "done"
                ? "completed"
                : status.type === "active"
                    ? "current"
                    : "pending",
        completed: status.type === "done",
        current: status.type === "active",
    }));

    const backendEvents = shipment?.events || [];

    const timeline =
        backendEvents.length > 0
            ? backendEvents.map((event, index) => {
                const fallback = shipmentStatus[index] || {
                    title: "Shipment Update",
                    text: "Shipment status has been updated.",
                    icon: Truck,
                };

                return {
                    title: event.title || fallback.title,
                    text:
                        event.description ||
                        event.text ||
                        fallback.text,
                    icon: fallback.icon,
                    status: event.status,
                    completed: event.completed,
                    current: event.current,
                    location: event.location,
                    date: event.date,
                    time: event.time,
                };
            })
            : defaultStatuses;

    const getStatusType = (event) => {
        if (
            event.completed === true ||
            event.status === "completed" ||
            event.status === "done"
        ) {
            return "done";
        }

        if (
            event.current === true ||
            event.status === "current" ||
            event.status === "active" ||
            event.status === "in_progress"
        ) {
            return "active";
        }

        return "pending";
    };

    const completedCount = timeline.filter(
        (event) => getStatusType(event) === "done"
    ).length;

    const progress =
        timeline.length > 1
            ? (completedCount / (timeline.length - 1)) * 100
            : 0;

    return (
        <div className="rounded-xl border border-blue-100 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(30,90,180,0.05)]">

            <div className="flex items-center justify-between gap-3">
                <h3 className="text-[17px] font-bold text-blue-950">
                    What's your order status?
                </h3>

                {shipment?.status && (
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[8px] font-semibold text-blue-600">
                        {shipment.status}
                    </span>
                )}
            </div>

            <div className="relative mt-5">

                <div className="absolute left-[8px] top-2 h-[calc(100%-16px)] w-px bg-blue-100" />

                <div
                    className="absolute left-[8px] top-2 w-px bg-emerald-400 transition-all duration-700"
                    style={{
                        height: `${Math.min(progress, 100)}%`,
                    }}
                />

                <div className="space-y-4">

                    {timeline.map((event, index) => {
                        const Icon = event.icon;
                        const type = getStatusType(event);

                        return (
                            <Reveal
                                key={`${event.title}-${index}`}
                                delay={index * 80}
                            >
                                <div className="relative flex gap-3">

                                    <div
                                        className={`relative z-10 mt-1 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border-2 border-white ${type === "done"
                                                ? "bg-emerald-500"
                                                : type === "active"
                                                    ? "bg-blue-600"
                                                    : "bg-white ring-1 ring-slate-300"
                                            }`}
                                    >
                                        {type === "done" && (
                                            <Check
                                                size={10}
                                                strokeWidth={3}
                                                className="text-white"
                                            />
                                        )}

                                        {type === "active" && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                        )}
                                    </div>

                                    <div className="flex gap-2.5">

                                        <div
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${type === "active"
                                                    ? "bg-blue-100"
                                                    : "bg-blue-50"
                                                }`}
                                        >
                                            <Icon
                                                size={14}
                                                className="text-blue-600"
                                            />
                                        </div>

                                        <div>

                                            <div className="flex flex-wrap items-center gap-2">
                                                <h4 className="text-[11px] font-semibold text-blue-950">
                                                    {event.title}
                                                </h4>

                                                {type === "active" && (
                                                    <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[7px] font-semibold text-blue-600">
                                                        Current
                                                    </span>
                                                )}
                                            </div>

                                            <p className="mt-0.5 max-w-[210px] text-[9px] leading-[14px] text-slate-400">
                                                {event.text}
                                            </p>

                                            {event.location && (
                                                <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-400">
                                                    <MapPin size={9} />
                                                    {event.location}
                                                </div>
                                            )}

                                            {(event.date || event.time) && (
                                                <div className="mt-1 flex items-center gap-1 text-[8px] text-slate-400">
                                                    <Clock3 size={9} />

                                                    {event.date}

                                                    {event.date && event.time
                                                        ? " · "
                                                        : ""}

                                                    {event.time}
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}


function ShipmentInfoCard({
    item,
    index,
    shipment,
}) {
    const Icon = item.icon;

    let dynamicText = item.text;

    if (shipment) {
        if (item.title === "Shipment Status") {
            dynamicText =
                shipment.status ||
                "Current shipment status is unavailable.";
        }

        if (item.title === "Latest Update") {
            dynamicText =
                shipment.events?.length > 0
                    ? shipment.events[shipment.events.length - 1]
                        ?.description ||
                    "Latest shipment update is available."
                    : "Latest shipment update is unavailable.";
        }

        if (item.title === "Shipment Movement") {
            dynamicText =
                shipment.currentLocation ||
                "Current shipment location is unavailable.";
        }

        if (item.title === "Expected Delivery") {
            dynamicText =
                shipment.estimatedDelivery ||
                "Delivery estimate is currently unavailable.";
        }

        if (item.title === "Courier Information") {
            dynamicText =
                shipment.courier?.name ||
                "Courier information is currently unavailable.";
        }
    }

    return (
        <Reveal
            delay={index * 70}
            className="h-full"
        >
            <div className="h-full rounded-lg border border-blue-100 bg-white px-3.5 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                    <Icon
                        size={14}
                        className="text-blue-600"
                    />
                </div>

                <h3 className="mt-3 text-[10px] font-bold text-blue-950">
                    {item.title}
                </h3>

                <p className="mt-1.5 text-[9px] leading-[13px] text-slate-400">
                    {dynamicText}
                </p>

            </div>
        </Reveal>
    );
}


function Journey({ business = false }) {
    const steps = business
        ? [
            {
                icon: Building2,
                text: "Business",
            },
            {
                icon: ClipboardList,
                text: "Shipment Reference",
            },
            {
                icon: Truck,
                text: "Shipment Movement",
            },
            {
                icon: MapPin,
                text: "Destination Hub",
            },
            {
                icon: Check,
                text: "Delivery",
            },
        ]
        : [
            {
                icon: Package,
                text: "Order Received",
            },
            {
                icon: ClipboardList,
                text: "Order Picked",
            },
            {
                icon: Truck,
                text: "In Transit",
            },
            {
                icon: MapPin,
                text: "Out for Delivery",
            },
            {
                icon: Check,
                text: "Delivered",
            },
        ];

    return (
        <div className="mt-5 flex items-start">

            {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                    <React.Fragment key={step.text}>

                        <div className="flex min-w-0 flex-1 flex-col items-center text-center">

                            <div
                                className={`flex h-7 w-7 items-center justify-center rounded-full ${index < 4
                                        ? "bg-blue-50 text-blue-600"
                                        : "bg-slate-100 text-slate-400"
                                    }`}
                            >
                                <Icon size={12} />
                            </div>

                            <span className="mt-1.5 max-w-[58px] text-[7px] leading-3 text-slate-500">
                                {step.text}
                            </span>

                        </div>

                        {index < steps.length - 1 && (
                            <div className="mt-3.5 flex-1 border-t border-dashed border-blue-200" />
                        )}

                    </React.Fragment>
                );
            })}

        </div>
    );
}


function Tracking() {
    const pageRef = useRef(null);

    const [searchType, setSearchType] = useState("awb");

    const [trackingValue, setTrackingValue] = useState("");

    const [b2cValue, setB2cValue] = useState("");

    const [b2bValue, setB2bValue] = useState("");

    const [shipment, setShipment] = useState(null);

    const [trackingLoading, setTrackingLoading] = useState(false);

    const [trackingError, setTrackingError] = useState("");


    const trackShipment = async (type, value) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            setTrackingError(
                "Please enter a valid tracking value."
            );

            return;
        }

        setTrackingLoading(true);

        setTrackingError("");

        setShipment(null);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/v1/tracking/track`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        type,
                        value: trimmedValue,
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message ||
                    "Unable to track shipment."
                );
            }

            setShipment(result.data);

        } catch (error) {
            setTrackingError(
                error.message ||
                "Something went wrong while tracking shipment."
            );

        } finally {
            setTrackingLoading(false);
        }
    };


    const handleHeroTrack = () => {
        trackShipment(
            searchType,
            trackingValue
        );
    };


    const handleB2CTrack = () => {
        trackShipment(
            "b2c",
            b2cValue
        );
    };


    const handleB2BTrack = () => {
        trackShipment(
            "b2b",
            b2bValue
        );
    };


    useEffect(() => {
        const container = pageRef.current;

        if (!container) return;

        const elements =
            container.querySelectorAll("[data-reveal]");

        const observer =
            new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;

                        const delay = Number(
                            entry.target.dataset.delay || 0
                        );

                        setTimeout(() => {
                            entry.target.classList.remove(
                                "translate-y-8",
                                "opacity-0"
                            );

                            entry.target.classList.add(
                                "translate-y-0",
                                "opacity-100"
                            );
                        }, delay);

                        observer.unobserve(
                            entry.target
                        );
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -50px 0px",
                }
            );

        elements.forEach((element) =>
            observer.observe(element)
        );

        return () =>
            observer.disconnect();
    }, [shipment]);


    const searchPlaceholder =
        searchType === "orderId"
            ? "Enter Order ID"
            : searchType === "mobile"
                ? "Enter Mobile Number"
                : "Enter AWB / Tracking ID";


    return (
        <div
            ref={pageRef}
            className="min-h-screen overflow-hidden bg-white text-blue-950"
        >


            {/* ======================================================
          HERO
      ====================================================== */}

            <section className="bg-blue-50/40">

                <div className="mx-auto max-w-7xl px-5 pb-9 pt-14 md:px-8 md:pt-16">

                    <Reveal className="mx-auto max-w-2xl text-center">

                        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide text-blue-600">
                            Tracking
                        </span>

                        <h1 className="mt-4 text-[32px] font-bold leading-[1.08] text-blue-950 md:text-[42px]">
                            Track Your Shipment.
                            <br />
                            Stay Informed.
                        </h1>

                        <p className="mx-auto mt-3 max-w-md text-[11px] leading-[17px] text-slate-500">
                            Enter your tracking ID and get the latest update
                            <br />
                            on your shipment.
                        </p>

                    </Reveal>


                    <Reveal
                        delay={120}
                        className="mx-auto mt-6 max-w-[600px]"
                    >

                        <div className="rounded-xl border border-blue-100 bg-white px-3 py-2 shadow-[0_8px_30px_rgba(30,90,180,0.06)]">

                            <div className="flex gap-5 border-b border-blue-50 px-1">

                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearchType("awb")
                                    }
                                    className={`border-b-2 py-2 text-[9px] font-semibold ${searchType === "awb"
                                            ? "border-blue-500 text-blue-600"
                                            : "border-transparent text-slate-400"
                                        }`}
                                >
                                    AWB / Tracking ID
                                </button>


                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearchType("orderId")
                                    }
                                    className={`border-b-2 py-2 text-[9px] font-semibold ${searchType === "orderId"
                                            ? "border-blue-500 text-blue-600"
                                            : "border-transparent text-slate-400"
                                        }`}
                                >
                                    Order ID
                                </button>


                                <button
                                    type="button"
                                    onClick={() =>
                                        setSearchType("mobile")
                                    }
                                    className={`border-b-2 py-2 text-[9px] font-semibold ${searchType === "mobile"
                                            ? "border-blue-500 text-blue-600"
                                            : "border-transparent text-slate-400"
                                        }`}
                                >
                                    Mobile Number
                                </button>

                            </div>


                            <div className="mt-2">

                                <SearchInput
                                    value={trackingValue}
                                    onChange={setTrackingValue}
                                    onSubmit={handleHeroTrack}
                                    placeholder={searchPlaceholder}
                                    buttonText="Track Shipment"
                                    loading={trackingLoading}
                                />

                            </div>


                            {trackingError && (
                                <div className="mt-2 rounded-md bg-red-50 px-3 py-2 text-[8px] text-red-500">
                                    {trackingError}
                                </div>
                            )}


                            {shipment && (
                                <div className="mt-2 rounded-md bg-emerald-50 px-3 py-2 text-[8px] text-emerald-600">
                                    Shipment found. Your tracking information has been updated below.
                                </div>
                            )}

                        </div>


                        <p className="mt-2 px-2 text-[8px] text-slate-400">
                            Track your shipment from pickup to delivery.
                        </p>

                    </Reveal>

                </div>

            </section>


            {/* ======================================================
          SECTION 2
      ====================================================== */}

            <section className="bg-white">

                <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-8">

                    <Reveal>

                        <div>

                            <h2 className="text-[24px] font-bold leading-[1.1] text-blue-950">
                                Know Where Your
                                <br />
                                Shipment Is
                            </h2>

                            <p className="mt-2 max-w-md text-[10px] leading-[15px] text-slate-500">
                                Once a shipment is tracked, you can easily see its current
                                delivery stage and estimated delivery time.
                            </p>

                            <div className="relative mt-5 h-[280px] overflow-hidden rounded-xl">

                                <img
                                    src="/images/tracking/tracking-shipment.jpg"
                                    alt="Shipment tracking"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent" />

                            </div>

                        </div>

                    </Reveal>


                    <Reveal delay={120}>

                        <StatusTimeline
                            shipment={shipment}
                        />

                    </Reveal>

                </div>

            </section>


            {/* ======================================================
          SECTION 3
      ====================================================== */}

            <section className="bg-blue-50/30">

                <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

                    <Reveal>

                        <h2 className="text-[18px] font-bold text-blue-950 md:text-[20px]">
                            Everything You Need to Know About Your Shipment
                        </h2>

                        <p className="mt-1 text-[9px] text-slate-500">
                            Get a clear view of the latest information available for your
                            shipment.
                        </p>

                    </Reveal>


                    <div className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-5">

                        {shipmentCards.map(
                            (item, index) => (
                                <ShipmentInfoCard
                                    key={item.title}
                                    item={item}
                                    index={index}
                                    shipment={shipment}
                                />
                            )
                        )}

                    </div>

                </div>

            </section>


            {/* ======================================================
          B2C / B2B
      ====================================================== */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

                    <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">


                        {/* B2C */}

                        <Reveal>

                            <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-[0_5px_20px_rgba(30,90,180,0.04)]">

                                <span className="rounded-full bg-blue-50 px-2 py-1 text-[7px] font-bold uppercase text-blue-600">
                                    B2C Tracking
                                </span>

                                <h2 className="mt-2 text-[19px] font-bold text-blue-950">
                                    Track Customer Orders
                                </h2>

                                <p className="mt-1 text-[9px] leading-[14px] text-slate-500">
                                    Customers can enter their AWB or tracking ID to check order
                                    status and delivery progress.
                                </p>


                                <div className="mt-3">

                                    <SearchInput
                                        value={b2cValue}
                                        onChange={setB2cValue}
                                        onSubmit={handleB2CTrack}
                                        placeholder="Enter AWB / Order ID"
                                        buttonText="Track Order"
                                        loading={trackingLoading}
                                    />

                                </div>


                                <Journey />

                            </div>

                        </Reveal>


                        {/* B2B */}

                        <div>

                            <Reveal delay={100}>

                                <div className="h-[205px] overflow-hidden rounded-xl">

                                    <img
                                        src="/images/tracking/business-tracking.jpg"
                                        alt="Business tracking"
                                        className="h-full w-full object-cover"
                                    />

                                </div>

                            </Reveal>


                            <Reveal delay={180}>

                                <div className="mt-3 rounded-xl border border-blue-100 bg-white p-4 shadow-[0_5px_20px_rgba(30,90,180,0.04)]">

                                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[7px] font-bold uppercase text-blue-600">
                                        B2B Tracking
                                    </span>

                                    <h2 className="mt-2 text-[19px] font-bold text-blue-950">
                                        Track Business Shipments
                                    </h2>

                                    <p className="mt-1 text-[9px] leading-[14px] text-slate-500">
                                        Businesses can use a shipment reference or tracking ID to
                                        monitor shipment movement and delivery progress.
                                    </p>


                                    <div className="mt-3">

                                        <SearchInput
                                            value={b2bValue}
                                            onChange={setB2bValue}
                                            onSubmit={handleB2BTrack}
                                            placeholder="Enter Shipment Reference / Tracking ID"
                                            buttonText="Track Shipment"
                                            loading={trackingLoading}
                                        />

                                    </div>


                                    <Journey business />


                                    <div className="mt-3 rounded-md bg-blue-50 px-3 py-2 text-[7px] leading-3 text-blue-500">
                                        Use your shipment reference or tracking ID to get real-time
                                        updates on your shipment's journey.
                                    </div>

                                </div>

                            </Reveal>

                        </div>

                    </div>

                </div>

            </section>


            {/* ======================================================
          EXCEPTIONS
      ====================================================== */}

            <section className="bg-blue-50/30">

                <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

                    <Reveal>

                        <h2 className="text-[19px] font-bold text-blue-950">
                            Stay Informed When Something Changes
                        </h2>

                        <p className="mt-1 text-[9px] text-slate-500">
                            Tracking helps identify shipment updates that may require
                            attention.
                        </p>

                    </Reveal>


                    <div className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-5">

                        {exceptions.map(
                            (item, index) => {

                                const Icon = item.icon;

                                return (
                                    <Reveal
                                        key={item.title}
                                        delay={index * 70}
                                    >

                                        <div className="flex min-h-[82px] flex-col justify-center rounded-lg border border-blue-100 bg-white px-3.5">

                                            <div
                                                className={`flex h-8 w-8 items-center justify-center rounded-full ${item.color}`}
                                            >
                                                <Icon size={14} />
                                            </div>

                                            <h3 className="mt-2 text-[9px] font-bold text-blue-950">
                                                {item.title}
                                            </h3>

                                        </div>

                                    </Reveal>
                                );
                            }
                        )}

                    </div>

                </div>

            </section>


            {/* ======================================================
          CUSTOMER EXPERIENCE
      ====================================================== */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

                    <Reveal>

                        <div className="grid overflow-hidden rounded-xl bg-blue-50/40 md:grid-cols-[1fr_1fr]">

                            <div className="h-[260px]">

                                <img
                                    src="/images/tracking/customer-tracking.jpg"
                                    alt="Customer tracking"
                                    className="h-full w-full object-cover"
                                />

                            </div>


                            <div className="flex flex-col justify-center p-6 md:p-8">

                                <span className="w-fit rounded-full bg-white px-2 py-1 text-[7px] font-bold uppercase text-blue-600">
                                    Customer Experience
                                </span>

                                <h2 className="mt-2 text-[22px] font-bold leading-tight text-blue-950">
                                    Simple Tracking.
                                    <br />
                                    Better Experience.
                                </h2>

                                <p className="mt-2 max-w-sm text-[10px] leading-[15px] text-slate-500">
                                    Give customers a simple way to check their shipment status
                                    and follow its journey without repeatedly contacting your
                                    business.
                                </p>


                                <div className="mt-5 flex items-center gap-3">

                                    <div className="text-center">

                                        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600">
                                            <Search size={13} />
                                        </div>

                                        <span className="mt-1 block text-[7px] font-semibold text-blue-950">
                                            Track
                                        </span>

                                    </div>


                                    <ArrowRight
                                        size={11}
                                        className="text-blue-400"
                                    />


                                    <div className="text-center">

                                        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600">
                                            <ClipboardList size={13} />
                                        </div>

                                        <span className="mt-1 block text-[7px] font-semibold text-blue-950">
                                            Understand
                                        </span>

                                    </div>


                                    <ArrowRight
                                        size={11}
                                        className="text-blue-400"
                                    />


                                    <div className="text-center">

                                        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600">
                                            <RefreshCw size={13} />
                                        </div>

                                        <span className="mt-1 block text-[7px] font-semibold text-blue-950">
                                            Stay Informed
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </Reveal>

                </div>

            </section>


            {/* ======================================================
          FAQ
      ====================================================== */}

            <section className="bg-blue-50/30">

                <div className="mx-auto max-w-7xl px-5 py-9 md:px-8">

                    <Reveal>

                        <h2 className="text-[19px] font-bold text-blue-950">
                            Frequently Asked Questions
                        </h2>

                    </Reveal>


                    <div className="mt-4 overflow-hidden rounded-lg border border-blue-100 bg-white">

                        {faqItems.map(
                            (item, index) => (

                                <Reveal
                                    key={item}
                                    delay={index * 35}
                                >

                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between border-b border-blue-50 px-3 py-2 text-left last:border-0"
                                    >

                                        <span className="text-[9px] text-slate-500">
                                            {item}
                                        </span>

                                        <ChevronDown
                                            size={12}
                                            className="shrink-0 text-blue-400"
                                        />

                                    </button>

                                </Reveal>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* ======================================================
          FINAL CTA
      ====================================================== */}

            <section className="bg-white">

                <div className="mx-auto max-w-7xl px-5 pb-8 pt-6 md:px-8">

                    <Reveal>

                        <div className="relative overflow-hidden rounded-xl bg-blue-950 px-6 py-6 md:px-8">

                            <div className="absolute -right-12 -top-20 h-44 w-44 rounded-full border border-blue-900" />

                            <div className="absolute -right-8 -bottom-24 h-56 w-56 rounded-full border border-blue-900" />


                            <div className="relative z-10 max-w-lg">

                                <span className="text-[7px] font-bold uppercase tracking-wide text-blue-300">
                                    Tracking
                                </span>

                                <h2 className="mt-1 text-[19px] font-bold text-white">
                                    Stay Updated From Pickup to Delivery
                                </h2>

                                <p className="mt-1 max-w-md text-[9px] leading-[14px] text-blue-200">
                                    Track your shipments, follow their progress, and stay
                                    informed throughout the delivery journey.
                                </p>


                                <button
                                    type="button"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="mt-4 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-[9px] font-semibold text-white transition hover:bg-blue-500"
                                >
                                    Track Shipment
                                    <ArrowRight size={12} />
                                </button>

                            </div>


                            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 md:flex">

                                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-blue-800 bg-blue-900">

                                    <Package
                                        size={27}
                                        className="text-blue-200"
                                    />

                                </div>

                            </div>

                        </div>

                    </Reveal>

                </div>

            </section>

        </div>
    );
}


export default Tracking;