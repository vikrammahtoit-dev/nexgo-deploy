import { BarChart3, Bell, Brain, Check, ChevronRight, Mail, MessageCircle, Phone, RadioTowerIcon, RotateCcw, ScanLine, Settings2, Sparkles, X } from "lucide-react";
import Nexgo from "../../../assets/logos/NEXGO_FinalLogo.webp"
import ShipmentTracking from "../../../assets/images/Delivery_Route.webp"



const FloatCard = ({
    className = "",
    children,
    rotate = 0,
    style = {},
    lift = false,
}) => (
    <div
        className={` absolute rounded-lg border border-slate-100 bg-white p-3 shadow-lg
        ${lift ? "shadow-xl" : ""} ${className}
        `}
        style={{ transform: `rotate(${rotate}deg)`, zIndex: lift ? 10 : 1, ...style }}
    >
        {children}
    </div>
);

const riskFactors = [
    {
        title: "Manual",
        subtitle: "Rate Check",
    },
    {
        title: "Multiple",
        subtitle: "Logins",
    },
    {
        title: "No Real-time",
        subtitle: "Visibility",
    },
    {
        title: "High RTO &",
        subtitle: "Delays",
    },
    {
        title: "Scattered",
        subtitle: "Communication",
    },
];

const BeforeNexgo = () => {
    // Heght has to focused later after completing the work.
    return (
        <section className="relative min-h-[760px] w-full overflow-visible ">
            {/* Inline Heading  */}
            <div className="absolute left-[3%] top-0 z-20">
                {/* label */}
                <div className="inline-flex items-center rounded-full border border-[#FFD8CC] bg-[#FFF4F0] px-3.5 py-1.5 shadow-[0_5px_20px_rgba(244,122,32,0.06)]">

                    <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#E15C3A] sm:text-[11px]">
                        Before Nexgo
                    </span>
                </div>
                {/* Heading  */}
                <h2 className="mt-4 text-[30px] font-[700] leading-[1.05] tracking-[-0.035em] sm:text-[32px] lg:text-[35px] text-blue-950">
                    Logistics Chaos
                </h2>
                {/* Supporting text */}
                <p className="mt-3 max-w-[260px] text-[13px] font-medium leading-[1.55] text-[#66758A] sm:text-[14px]">
                    Too many tools. Too much manual work.
                    Too many things going wrong.
                </p>

            </div>

            {/* Left-side viaual canvas */}
            <div className="absolute inset-x-0 top-[155px] bottom-0 overflow-visible">
                {/* Flow connecter layer  */}

                <div className="pointer-events-none absolute inset-0 z-1 overflow-visible" aria-hidden="true" />
                {/* Card layer */}
                <div className="relative mt-5 w-full" style={{ height: 430 }}>
                    <FloatCard style={{ top: 8, left: 28, width: 145 }} rotate={-3}>
                        <div className="flex items-center gap-1.5 text-xs font-bold">
                            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-blue-600 text-[9px] text-white">
                                BD
                            </span>
                            Blue Dart
                        </div>
                        <p className="mt-1 text-[8px] text-slate-400">Login to continue</p>
                        <div className="mt-2 h-2.5 w-full rounded bg-gray-100" />
                        <div className="mt-2 h-2.5 w-full rounded bg-gray-100" />
                    </FloatCard>
                    <FloatCard style={{ top: 8, left: 178, width: 130 }} rotate={1}>
                        <div className="flex items-center gap-1.5 text-xs font-bold">
                            <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-slate-500 text-[9px] text-white">
                                D
                            </span>
                            Delhivery
                        </div>
                        <p className="mt-1 text-[10px] text-gray-400">Dashboard</p>
                        <svg
                            viewBox="0 0 100 30"
                            className="mt-2 h-6 w-full"
                        >
                            <polyline
                                points="0, 25 15, 20 30, 22 45, 10 60, 15 75, 5 100, 8"
                                fill="none"
                                stroke="#F97316"
                                strokeWidth={2}
                            />
                        </svg>
                    </FloatCard>
                    <FloatCard style={{ top: 4, left: 315, width: 145 }} rotate={4}>
                        <div className="flex items-center text-xs font-bold">
                            DTDC
                        </div>
                        <p className="mt-1 text-[10px] text-slate-400">Track N Parcel </p>
                        <div className="mt-2 rounded border border-slate-200 px-2 py-1 text-[9px] text-slate-400">
                            Enter AWB No.
                        </div>
                        <div className="mt-1 rounded bg-blue-900 py-1 text-center text-[10px] font-semibold text-white">
                            Track
                        </div>
                    </FloatCard>

                    {/* 2nd Line */}
                    <FloatCard style={{ top: 125, left: 128, width: 220, }} rotate={3}>
                        <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                            <span className=" text-green-600">▤</span> Rates - Aug.xlsx
                        </div>
                        <table className="mt-2 w-full text-[8px] text-slate-500">
                            <thead>
                                <tr className="text-slate-500">
                                    <th className="text-left font-medium">Courier</th>
                                    <th className="font-medium">Air</th>
                                    <th className=" font-medium">Surface</th>
                                    <th className="font-medium">COD</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Blue Dart", 52, 28, true],
                                    ["Delhivery", 48, 25, true],
                                    ["XpressBees", 46, 24, true],
                                    ["DTDC", 44, 22, false],
                                    ["India Post", 26, 15, false],
                                ].map(([name, air, surf, ok]) => (
                                    <tr key={name}>
                                        <td className="py-0.5">{name}</td>
                                        <td className="text-center">{air}</td>
                                        <td className="text-center">{surf}</td>
                                        <td className="text-center">
                                            {ok ? (
                                                <Check className="mx-auto h-2.5 w-2.5 text-green-500" />
                                            ) : (
                                                <X className="mx-auto h-2.5 w-2.5 text-red-500" />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </FloatCard>
                    <div
                        className="absolute"
                        style={{ top: 132, left: 2, width: 132, height: 180, transform: "rotate(-9deg)" }}
                    >
                        <div
                            className="relative shadow-xl"
                            style={{
                                background: "linear-gradient(180deg, #FDE380 0%, #FBD34D 100%)",
                                padding: "18px 16px 22px",
                                borderRadius: 2
                            }}
                        >
                            <p
                                className="text-center leading-snug"
                                style={{
                                    fontFamily: "'Segoe Print', 'Bradley Hand', 'Comic Sans MS', cursive",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    // color: "#7C5E10",
                                }}
                            >
                                Compare rates
                                <br />
                                Manually
                            </p>
                            {/* folded Corner */}
                            <div
                                className="absolute bottom-0 right-0"
                                style={{
                                    width: 0,
                                    height: 0,
                                    borderStyle: "solid",
                                    borderWidth: "0 0 16px 16px",
                                    borderColor: "transparent transparent rgba(120, 90, 10, 0.35) transparent"
                                }}
                            />
                        </div>
                    </div>

                    <FloatCard style={{ top: 135, left: 360, width: 140 }} rotate={-2} lift>
                        <p className="flex items-center gap-2 text-[11px] font-bold text-red-700">
                            <span className="text-red-500">!</span> Delayed Shipment
                        </p>
                        <p className="mt-1 text-[9px] text-slate-600">AWB: 12345678</p>
                        <p className="text-[9px] text-slate-600">Delay: 2 Days</p>
                    </FloatCard>
                    <FloatCard style={{ top: 217, left: 350, width: 150 }} rotate={2}>
                        <p className="flex items-center gap-2 text-[11px] font-bold text-red-700">
                            <span className="text-red-500">!</span>RTO Intiated
                        </p>
                        <p className="mt-1 text-[9px] text-slate-500">AWB: 987654321</p>
                        <p className="text-[9px] text-slate-600">Reason: Customer Unreachable</p>
                    </FloatCard>
                    {/* 3rd Line */}
                    <FloatCard style={{ top: 296, left: 20, width: 145 }} rotate={-1}>
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
                            <Mail className="h-3 w-3 text-slate-400" />Support@gmail.com
                        </div>
                        <p className="mt-1 text-[9px] text-slate-600 font-bold">Re: Delivery failed</p>
                        <p className="text-[9px] text-slate-500">Please check and revert</p>
                    </FloatCard>

                    <FloatCard style={{ top: 296, left: 178, width: 155, backgroundColor: "#F0FDF4" }} rotate={1}>
                        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                            <MessageCircle className="h-4 w-4 text-green-700" />Customer
                        </div>
                        <p className="mt-1 text-[9px] text-slate-600">Where is my order ? <br /> It's been 5 days!</p>
                        <p className="mt-1 text-right text-[8px] text-slate-500 leading-tight">11:30 AM ✓✓</p>
                    </FloatCard>
                    <FloatCard style={{ top: 300, left: 345, width: 145 }} rotate={5}>
                        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                            <Phone className="h-3 w-3 text-green-600" /> Courier Support
                        </div>
                        <p className="mx-auto mt-1 text-[9px] text-slate-600">On Call...</p>
                        <p className=" text-center text-[9px] font-semibold">08:24</p>
                        <div className="mt-2 flex items-center justify-center">
                            <span className=" flex h-5 w-5 items-center justify-center rounded-full bg-red-700 ">
                                <Phone className="h-2.5 w-2.5 text-white" />
                            </span>
                        </div>
                    </FloatCard>
                </div>
                {/* Last line  */}
                <div className="w-[490px] rounded-[15px] bg-white px-[7px] py-[10px] shadow-[0_3px_14px_rgba(0,0,0,0.06)]">
                    <div className="flex items-start">
                        {riskFactors.map((item, index) => (
                            <div
                                key={item.title}
                                className={`
                                    relative flex h-[61px] flex-1 flex-col items-center justify-start
                                    ${index !== 0 ? "border-l border-[#eeeeee]" : ""}
                                    `}
                            >
                                {/* Icon */}
                                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#FFF1F1]">
                                    <svg
                                        height={26}
                                        width={26}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="shrink-0"
                                    >
                                        {/* soft Circular background */}
                                        <circle
                                            cx={12}
                                            cy={12}
                                            r={10}
                                            fill="#FFF0F0"
                                        />
                                        {/* Main Diagonal -{bottom-left & top-right} */}
                                        <path
                                            d="
                                            M 4.4 17.2
                                            C 3.7 17.9 3.6 18.8 4.2 19.4
                                            C 4.8 20.0 5.7 19.9 6.4 19.2
                                            L 17.0 6.5
                                            
                                            Z
                                            "
                                            fill="#EF2020"
                                        />
                                        {/* small rounded endpoint at top-right */}
                                        <circle
                                            cx={17.9}
                                            cy={5.6}
                                            r={2.0}
                                            fill="#EF2020"
                                        />
                                        {/* second Diagonal */}

                                        <path
                                            d="
                                            M 7.0 6.2
                                            C 6.5 5.7 6.5 5.0 7.0 4.6 
                                            C 7.5 4.1 8.2 4.2 8.7 4.7
                                            L 16.6 13.5
                                            C 17.1 14.0 17.1 14.7 16.6 15.2
                                            C 16.1 15.7 15.4 15.7 14.9 15.2
                                            Z
                                            "
                                            fill="#EF2020"
                                        />
                                        {/* Rounded endpoint */}
                                    </svg>
                                </div>

                                {/*Text  */}
                                <div className="mt-3 text-center">
                                    <p className="whitespace-nowrap text-[10px] font-semibold leading-[6px] tracking-tight text-[#171B2B]">
                                        {item.title}
                                    </p>
                                    <p className="mt-1 whitespace-nowrap text-[10px] font-semibold leading-[6px] tracking-[-0.1px] text-[#171B2B] ">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

const TransformationCenter = () => {
    return (
        <div className="relative left-1/2 h-[520px] w-[390px] -translate-x-1/2">
            {/* Transformation Atmosphere */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle, rgba(255,255,255,0.96)_0%, rgba(255,255,255,0.82)_32%, rgba(255,255,255,0.42)_55%,transparent_76%)] blur-[35px]" />
            {/* Warm left glow */}
            <div />
            {/* cool right glow  */}
            <div />
            {/* AI-POwered */}
            <div className="absolute left-1/2 top-[235px] z-[70] flex -translate-x-[1/2] flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-50 bg-white">
                    <Brain className="h-[32px] w-[32px] text-[#07183D]" />
                </div>
                <span className="mt-1 whitespace-nowrap text-[13px] font-semibold text-[#07183D]">
                    AI-Powered
                </span>
            </div>

            {/* Complete Transformation Circle  */}
            <div className="absolute left-[60%] top-[405px] z-[20] h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2">
                {/* Outer circular body  */}
                <div className="absolute inset-0 overflow-hidden rounded-full bg-[linear-gradient(90deg,#F47A20_0%,#F47A20_43%,#FFB878_51%,#8FC9F8_49%,#1D70C9_57%,#1D70C9_100%)]">
                    {/* Subtle color depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.28),transparent_45%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.28),transparent_45%)]" />

                    {/* Energy/ lightning system  */}

                    {/* Inner white circle */}
                    <div className="absolute left-1/2 top-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[inset_0_0_18px_rgba(20,55,100,0.04)]" />
                </div>
                {/* outer edge  */}
                {/* <div className="pointer-events-none absolute inset-0 rounded-full border border-white/80" /> */}
            </div>
            {/* Nexgo core  */}
            <div className="absolute left-[60%] top-[405px] z-[80] flex h-[108px] w-[108px] items-center justify-center -translate-x-1/2 -translate-y-1/2">
                <img src={Nexgo} alt="Nexgo" className="h-auto object-contain w-[72px]" />
            </div>
            {/* Left Flow Chevrons */}
            <div
                className="
                    absolute
                    left-[95px]
                    top-[405px]
                    z-[90]
                    flex
                    -translate-y-1/2
                    items-center
                "
            >
                <ChevronRight
                    className="
                        h-[36px]
                        w-[36px]
                        text-slate-300
                    "
                    strokeWidth={3}
                />

                <ChevronRight
                    className="
                        -ml-[17px]
                        h-[36px]
                        w-[36px]
                        text-slate-300
                    "
                    strokeWidth={3}
                />
            </div>

            {/* Right Flow Chevrons */}
            <div
                className="
                    absolute
                    right-[28px]
                    top-[405px]
                    z-[90]
                    flex
                    -translate-y-1/2
                    items-center
                "
            >
                <ChevronRight
                    className="
                        h-[36px]
                        w-[36px]
                        text-slate-300
                    "
                    strokeWidth={3}
                />

                <ChevronRight
                    className="
                        -ml-[17px]
                        h-[36px]
                        w-[36px]
                        text-slate-300
                    "
                    strokeWidth={3}
                />
            </div>
            {/* Smart Automation */}
            <div className="absolute left-1/2 top-[515px] z-[70] flex -translate-x-[1/2] flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-50 bg-white">
                    <Settings2 className="h-[32px] w-[32px] text-[#07183D]" />
                </div>
                <span className="mt-1 whitespace-nowrap text-[13px] font-semibold text-[#07183D] text-center">
                    Smart
                    <br />
                    Automation
                </span>
            </div>

        </div>
    )
}

const CourierBadge = ({ color, letter, name }) => (
    <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-sm">
        <span
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-white"
            style={{ background: color }}
        >
            {letter}
        </span>
        <span className="text-[9px] font-semibold text-slate-700 whitespace-nowrap">
            {name}
        </span>
    </div>
);

const FeatureChip = ({ icon: Icon, title, subtitle, color = "#F97316", first = false }) => (
    <div
        className={`flex flex-1 items-center gap-2 px-3 py-1 ${!first ? "border-l border-slate-200" : ""
            }`}
    >
        <span
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${color}15` }}
        >
            <Icon className="h-4 w-4" style={{ color }} />
        </span>
        <div className="leading-tight">
            <p className="text-[11px] font-bold text-slate-700">
                {title}
            </p>
            <p className="text-[9px] text-slate-500">
                {subtitle}
            </p>
        </div>
    </div >
)

const WithNexgoSection = () => {
    // Heght has to focused later after completing the work.
    return (
        <section className="relative min-h-[760px] w-full justify-center overflow-visible">
            {/* Inline Heading  */}
            <div className="absolute left-[3%] top-0 z-20">
                {/* label */}
                <div className="inline-flex items-center rounded-full border border-[#123C98] bg-[#123C98] px-3.5 py-1.5 shadow-[0_5px_20px_rgba(244,122,32,0.06)]">

                    <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-white sm:text-[11px]">
                        With Nexgo
                    </span>
                </div>
                {/* Heading  */}
                <h2 className="mt-4 text-[30px] font-[700] leading-[1.05] tracking-[-0.035em] sm:text-[32px] lg:text-[35px] text-blue-950">
                    Complete Control
                </h2>
                {/* Supporting text */}
                <p className="mt-3 max-w-[340px] text-[13px] font-medium leading-[1.55] text-[#66758A] sm:text-[14px]">
                    One Platform. Every courier. Total visibility.
                    <br />
                    Smarter decisions, better delivery.
                </p>

                {/* AI-Powered Card  */}
                <div className="mt-10 flex flex-wrap items-start gap-6">
                    {/* main column */}
                    <div className="flex-1 min-w-[280px]">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-950 px-5 py-3 shadow-lg ring-2 ring-blue-100">
                                <Sparkles className="h-4 w-4 shrink-0 text-blue-200" />
                                <span className="text-center text-xs font-bold  text-blue-200 leading-snug">
                                    AI-Powered
                                    <br />
                                    Courier Selection
                                </span>
                            </div>
                        </div>

                        {/* Connecting routes */}
                        <div className="relative" style={{ height: 34 }}>
                            <svg
                                viewBox="0 0 100 34"
                                preserveAspectRatio="none"
                                className=" absolute inset-0 h-full w-full text-blue-900"
                            >
                                {[10, 30, 50, 70, 90].map((x) => (
                                    <path
                                        key={x}
                                        d={`M50, 0 C${50 + (x - 50) * 0.35}, 10 ${x}, 18 ${x}, 34 `}
                                        stroke="currentColor"
                                        strokeWidth={0.4}
                                        strokeDasharray={2.4}
                                        fill="none"
                                    />
                                ))}

                            </svg>

                        </div>

                        <div className="flex justify-between gap-3">
                            {/* courier badge */}
                            <CourierBadge color="#1D4ED8" letter="BD" name="Blue Dart" />
                            <CourierBadge color="#111827" letter="D" name="Delhivery" />
                            <CourierBadge color="#F97316" letter="X" name="XpressBees" />
                            <CourierBadge color="#2563EB" letter="DT" name="DTDC" />
                            <CourierBadge color="#DC2626" letter="IP" name="India Post" />
                        </div>

                        {/* Connecting lines between courierbadge and smart routing */}
                        <div className="relative" style={{ height: 40 }}>
                            <svg
                                viewBox="0 0 100 70"
                                preserveAspectRatio="none"
                                className="absolute inset-0 h-full w-full"
                            >
                                {/* Line from first courier */}
                                <path
                                    d="M10, 0 V36 Q10, 42 16, 42 H50"
                                    stroke="#3B82F6"
                                    strokeWidth={0.45}
                                    fill="none"
                                />
                                {/* Line from second courier */}
                                <path
                                    d="M30, 0 V35 Q30, 42 32, 42 H50"
                                    stroke="#60A5FA"
                                    strokeWidth={0.45}
                                    fill="none"
                                />
                                {/* Line from center courier */}
                                <path
                                    d="M50, 0 V42"
                                    stroke="#3B82F6"
                                    strokeWidth={0.45}
                                    fill="none"
                                />
                                {/* Line from fourth courier */}
                                <path
                                    d="M70, 0 V35 Q70, 42 68, 42 H20"
                                    stroke="#3B82F6"
                                    strokeWidth={0.45}
                                    fill="none"
                                />
                                {/* Line from fifth courier */}
                                <path
                                    d="M90, 0 V36 Q90, 42 84, 42 H50"
                                    stroke="#3B82F6"
                                    strokeWidth={0.45}
                                    fill="none"
                                />
                                {/* Center junction */}
                                <circle
                                    cx={50}
                                    cy={42}
                                    r={1.5}
                                    fill="#3B82F6"
                                />
                                {/*  Centre line going into smart routing */}
                                <path
                                    d="M50, 42 V70"
                                    stroke="#3B82F6"
                                    strokeWidth={0.45}
                                    fill="none"
                                />
                            </svg>
                        </div>

                        {/* Next part - smart routing  */}
                        <div className="relative  rounded-xl border border-slate-100 bg-white p-4 shadow-md ml-10 mr-10">


                            <p className="relative z-10 text-sm font-bold  text-slate-700 text-center">Smart Routing </p>
                            <p className="relative z-10 text-[10px] text-slate-500 text-center">
                                Best courier. Best rate. Fastest delivery
                            </p>
                            <svg
                                viewBox="0 0 400 100"
                                className="relative z-10 mt-1 w-full"
                            >
                                <path
                                    d="M28, 58 Q114, 26 200, 58"
                                    stroke="#3B82F6"
                                    strokeWidth={2.5}
                                    strokeDasharray="6 6"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                                <path
                                    d="M200,58 Q286,90 372, 58"
                                    stroke="#F97316"
                                    strokeWidth={2.5}
                                    strokeDasharray="6 6"
                                    strokeLinecap="round"
                                    fill="none"
                                />

                                {/* Left Pin */}
                                <g transform="translate(12,4)">
                                    <path
                                        d="M16,0 C25,0 32,7 32,17 C32, 29 16, 48 16, 48 C16, 48 0, 29 0 ,17 C0, 7 7, 0 16, 0 Z"
                                        fill="#2563EB"
                                    />
                                    <circle
                                        cx={16}
                                        cy={17}
                                        r={6.5}
                                        fill="#FFFFFF"
                                    />
                                </g>
                                <circle
                                    cx={28}
                                    cy={58}
                                    r={3.5}
                                    fill="#2563EB"
                                />
                                {/* right pin */}
                                <g transform="translate(356,4)">
                                    <path
                                        d="M16,0 C25,0 32,7 32,17 C32, 29 16, 48 16, 48 C16, 48 0, 29 0 ,17 C0, 7 7, 0 16, 0 Z"
                                        fill="#F97316"
                                    />
                                    <circle
                                        cx={16}
                                        cy={17}
                                        r={6.5}
                                        fill="#FFFFFF"
                                    />
                                </g>
                                <circle
                                    cx={372}
                                    cy={58}
                                    r={3.5}
                                    fill="#F97316"
                                />

                                {/* delivery cart with package-sits near the peak of the blue arc */}
                                <g transform="translate(92,0)">
                                    <rect
                                        x="6"
                                        y="4"
                                        width={26}
                                        height={22}
                                        rx={2}
                                        fill="#F5C99B"
                                        stroke="#EA9B4B"
                                    />
                                    <path
                                        d="M9, 10 L29, 20 M29, 10 L9, 20"
                                        stroke="#2563EB"
                                        strokeWidth={1.6}
                                    />
                                    <rect
                                        x={0}
                                        y={26}
                                        width={46}
                                        height={16}
                                        rx={4}
                                        fill="#F97316"
                                    />
                                    <rect
                                        x={0}
                                        y={30}
                                        width={10}
                                        height={9}
                                        rx={2}
                                        fill="#2563EB"
                                    />
                                    <circle
                                        cx={12}
                                        cy={46}
                                        r={6.5}
                                        fill="#111827"
                                    />
                                    <circle
                                        cx={12}
                                        cy={46}
                                        r={2.2}
                                        fill="#9CA3AF"
                                    />
                                    <circle
                                        cx={36}
                                        cy={46}
                                        r={6.5}
                                        fill="#111827"
                                    />
                                    <circle
                                        cx={36}
                                        cy={46}
                                        r={2.2}
                                        fill="#9CA3AF"
                                    />
                                </g>

                                {/* route/loop icon box-sits at the baseline crossover */}
                                <g transform="translate(185,46)">
                                    <rect x="0" y="0" width="30" height="20" rx="4" fill="#FFFFFF" stroke="#1F2937" strokeWidth="1.6" />
                                    <path
                                        d="M8,10 C8,6 13,6 15,10 C17,14 22,14 22,10 C22,6 17,6 15,10 C13,14 8,14 8,10 Z"
                                        fill="#F97316"
                                    />
                                    <circle cx="15" cy="10" r="1.6" fill="#111827" />
                                </g>
                            </svg>
                        </div>

                        {/* Next line  */}
                        <div className="  mt-4 flex items-stretch rounded-xl border border-slate-200 bg-white py-2 shadow-sm">
                            <FeatureChip icon={RadioTowerIcon} title="Unified Tracking" subtitle="Real-time updates" color="#F97316" first />
                            <FeatureChip icon={Bell} title="Automated" subtitle="Notifications" color="#3B82F6" />
                            <FeatureChip icon={BarChart3} title="Analytics &" subtitle="Reports" color="#7C3AED" />
                            <FeatureChip icon={RotateCcw} title="Easy Returns" subtitle="Management" color="#22C55E" />


                        </div>
                        <div className="relative w-full h-full   mb-8">
                            <img
                                src={ShipmentTracking}
                                alt="Nexgo shipment tracking"
                                className="block w-full h-auto"
                            />

                            {/* Your Shipment is in Transit */}
                            <div
                                className=" absolute left-[15%] bottom-[5%] flex items-center gap-4 rounded-lg bg-white px-4 py-2 shadow-md"
                            >
                                <div>
                                    <p className="text-[10px] font-bold leading-tight text-slate-800">
                                        Your Shipment is in Transit
                                    </p>

                                    <p className="mt-1 text-[8px] text-slate-500">
                                        ETA: 12 May, 02:30 PM
                                    </p>
                                </div>

                                <div className="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                                    <span className="text-[8px] font-bold text-emerald-600">
                                        Live
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
};

const Chaos = () => {
    return (
        <section className="relative hidden w-full overflow-hidden bg-white lg:block">
            {/*  Background System */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[#FFFFFF]" />
                {/* Left- warm/ chaos atmosphere */}
                <div className="absolute left-[-180px] top-[190px] h-[650px] w-[650px] rounded-full bg-[#FFE4D7] opacity-60 blur-[95px]" />
                <div className="absolute left-[40px] top-[330px] h-[430px] w-[430px] rounded-full bg-[#FFD28D] blur-[95px]" />
                <div className="absolute left-[230px] top-[500px] h-[260px] w-[260px] rounded-full bg-[#FFF0E8] opacity-90 blur-[65px]" />

                {/*Left to Center - transformation zone  */}
                <div className="absolute left-[25%] top-[300px ] h-[430px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,184,130,0.55)_0%,rgba(255,208,174,0.30)_38%,rgba(255,255,255,0)_75%)] blur-[35px]" />
                {/* Centre white Transformation zone */}
                <div className="absolute left-1/2 top-[230px] h-[620px] w-[420px] -translate-x-1/2  rounded-full bg-[#ffffff] opacity-95 blur-[45px]" />
                {/* Central orange energy */}
                <div className="absolute left-1/2 top-[430px] h-[390px] w-[390px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,152,61,0.72)_0%,rgba(255,177,99,0.48)_20%,rgba(255,205,160,0.25)_43%,rgba(255,255,255,0)_74%)] blur-[38px]" />
                {/* Bright center */}
                <div className=" absolute left-1/2 top-[470px] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(255,255,255,0.92)_30%,rgba(255,255,255,0)_76%)] blur-[18px] " />
                {/* Right-cool zone */}
                <div className=" absolute -right-[190px] top-[170px] h-[680px] w-[680px] rounded-full bg-[#DDF2FF] opacity-75 blur-[95px]" />
                <div className=" absolute right-[20px] top-[310px] h-[470px] w-[470px] rounded-full bg-[#C9EBFF] opacity-55 blur-[82px]" />
                <div className="absolute right-[230px] top-[500px] h-[270px] w-[270px] rounded-full bg-[#EDF9FF] opacity-95 blur-[65px]" />
                {/* center-to-right blue transition */}
                <div className=" absolute right-[24%] top-[300px] h-[440px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(105,191,255,0.38)_0%,rgba(170,224,255,0.22)_40%,rgba(255,255,255,0)_76%)] blur-[40px]" />
                {/* Horizontal light transition */}
                <div className=" absolute left-1/2 top-[390px] h-[330px] w-[95%] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,220,204,0),rgba(255,190,142,0.18),rgba(255,255,255,0.85),rgba(147,214,255,0.18),rgba(210,241,255,0))] blur-[45px]" />
                {/* Central vertical light */}
                <div className=" absolute left-1/2 top-[260px] h-[590px] w-[90px] -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.8),rgba(255,255,255,0))] opacity-80 blur-[28px]" />
                {/* Very subtle grid */}
                <div className=" absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(20,50,90,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,50,90,0.5)_1px,transparent_1px)] [background-size:70px_70px] " />
                {/* Top white fade */}
                <div className=" absolute left-0 right-0 top-0 h-[280px] bg-gradient-to-b from-white via-white/85 to-transparent " />


            </div>
            {/* Hero Content Area */}
            <div className="relative  mx-auto w-full max-w-[1536px] min-h-[878px] px-6 sm:px-8 lg:px-10 xl:px-12">
                {/* Main Hero Intro */}
                <div className="relative z-10 mx-auto w-full max-w-[900px] flex-col items-center pt-[72px] text-center lg:pt-[76px]">
                    {/* Hero Heading */}
                    <h1 className="max-w-[900px] text-[20px] font-bold leading-[1.08] tracking-[-0.035em] text-[#12233F] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px]">
                        Turn Logistics{" "}
                        <span className="text-[#F47A20]">Chaos</span>{" "}
                        Into Complete{" "}
                        <span className="text-[#1D70C9]">Control.</span>
                    </h1>

                    {/* Hero Description */}
                    <p className="mt-6 pl-22 max-w-[780px] text-[15px] font-medium leading-[1.7] text-[#526174] sm:text-[16px] lg:text-[17px]">
                        Manage orders, compare couriers, automate shipping, track
                        deliveries, and grow your business - all from one intelligent
                        platform.
                    </p>
                </div>

                {/* Main three - Zone Composition */}
                <div className="relative mx-auto mt-[58px] grid w-full grid-cols-1 gap-10 lg:grid-cols-[1fr_180px_1fr] lg:items-start lg:gap-10 xl:grid-cols-[1fr_210px_1fr]">
                    {/* Left Zone - Before Nexgo */}
                    <BeforeNexgo />
                    {/* Centre Zone - Nexgo Transformation */}
                    <div>
                        <TransformationCenter />
                    </div>

                    {/* Right Zone - With Nexgo  */}
                    <div >
                        <WithNexgoSection />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chaos;