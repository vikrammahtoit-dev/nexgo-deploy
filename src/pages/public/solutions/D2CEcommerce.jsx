import { AlertCircle, ArrowRight, BarChart3, CircleCheck, ClipboardList, FileText, MapPin, Package, RotateCcw, Truck, WalletCards } from "lucide-react";
import Navbar from "../../../features/landing/navbar/Navbar";
import d2c_ecommerce from "../../../assets/images/d2c_ecommerce.webp";
import React from "react";
import CTA_Illustration from "../../../assets/images/cta_illustration.webp";
import Footer from "../../../features/landing/footer/Footer"
const challengePoints = [
    "Increasing order volumes",
    "Managing multiple courier partners",
    "Keeping track of shipments",
    "Handling COD and delivery exceptions",
    "Manging shipping operations manually"
];

const solutionsFeatures = [
    {
        icon: ClipboardList,
        title: "Centralized order Management",
    },
    {
        icon: Truck,
        title: "Multi-courier Shipping",
    },
    {
        icon: WalletCards,
        title: "COD Management",
    },
    {
        icon: RotateCcw,
        title: "NDR Management",
    },
    {
        icon: BarChart3,
        title: "Shipping Analytics",
    }
];

const workFlowSteps = [
    {
        icon: FileText,
        title: "Recieve Orders ",
        description: "Get orders from your store or marketplace",
    },
    {
        icon: Package,
        title: "Create/ Manage Shipment",
        description: "Add shipment details and process orders",
    },
    {
        icon: Truck,
        title: "Choose Courier",
        description: "Compare and Select from multiple partners",
    },
    {
        icon: MapPin,
        title: "Ship & Track",
        description: "Ship your orders and track in real time",
    },
    {
        icon: CircleCheck,
        title: "Delivery",
        description: "Orders reach your customers safely",
    },
    {
        icon: BarChart3,
        title: "Monitor Performance",
        description: " Track sucess rates, NDR and more",
    },
];

const D2CEcommerce = () => {
    return (
        <section className="relative overflow-hidden max-w-[1380px] bg-gradient-to-b from-slate-100 to-white">
            <Navbar />
            <div className="mx-auto grid  grid-cols-1 items-center gap-12 px-6 py-10 lg:grid-cols-2 lg:px-16 lg:py-12">

                {/* Hero Content */}
                <div>
                    <span className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        D2C & E-commerce
                    </span>

                    <h1 className="max-w-[650px] text-4xl font-bold leading-[1.24] tracking-tight md:text-4xl">
                        Simplify Shipping for your
                        <br />
                        D2C & E-commerce Business
                    </h1>

                    <p className="mt-5 max-w-[600px] text-[17px]  text-slate-600">
                        Manage orders, connect with multiple courier partners, track
                        shipments, and streamline your delivery operations from one
                        platform.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-6">
                        <button className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
                            Get Started

                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>

                        <button className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#102B50] transition duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600">
                            Explore Platform
                        </button>
                    </div>
                </div>

                {/* Hero Image  */}
                <div className="relative mx-auto max-w-[680px]">
                    <img
                        src={d2c_ecommerce}
                        alt="D2C"
                    />
                </div>
            </div>

            <main className="bg-white">
                <div className="mx-auto grid gap-10 px-6 py-16 lg:grid-cols-2 lg:px-16">
                    {/* Challenge  */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-blue-500">
                                The Challenge
                            </p>
                            <h2 className="mt-3 max-w-[420px] text-xl font-bold leading-tight text-[#102B50]">
                                The Challenge of growing onle sales
                            </h2>
                            <p className="mt-4 max-w-[370px] text-sm leading-6 text-slate-600">
                                As your orders increase, managing shipments can become complex.
                                From handling multiple courier partners to tracking deliveries
                                and managing COD, the manual process can slow you down and affect
                                customer satisfaction.
                            </p>
                        </div>

                        <div className="space-y-4 pt-7">
                            {challengePoints.map((point) => (
                                <div key={point} className="flex items-center gap-3">
                                    <AlertCircle size={17} className="shrink-0 fill-red-500 text-white" />
                                    <span className="text-sm text-slate-600 font-medium">
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nexgo Soltution */}
                    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 p-7 md:p-8">
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-500">
                            Nexgo Solution
                        </p>
                        <h2 className="mt-3 max-w-[500px] text-[24px] font-bold leading-tight text-[#102b50]">
                            Everything you need to manage your shipments
                        </h2>
                        <p className="mt-4 max-w-[540px] text-sm leading-6 text-slate-600">
                            Nexgo brings all your shipping operations together on one platform,
                            so you can focus on growing your business.
                        </p>

                        <div className="mt-7 grid gap-5 sm:grid-cols-2">
                            {solutionsFeatures.map(({ icon: Icon, title }) => (
                                <div key={title} className="group flex items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                                        <Icon size={19} />
                                    </div>
                                    <span className="text-sm font-semibold text-[#102b50]">
                                        {title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <section className="bg-slate-50">
                <div className="mx-auto  px-6 py-16 lg:px-16">
                    <div className="grid gap-10 lg:grid-cols-[310px_1fr]">
                        {/* Heading  */}
                        <div>
                            <p className=" text-xs font-bold uppercase tracking-widest text-gray-600">
                                How It works
                            </p>

                            <h2 className="mt-3 text-2xl font-bold leading-tight text-[#102b50]">
                                From order to delivery,
                                <br />
                                we keep it simple
                            </h2>
                        </div>

                        {/* Steps */}
                        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-3 xl:grid-cols-6">
                            {workFlowSteps.map(
                                ({ icon: Icon, title, description }, index) => (
                                    <React.Fragment key={title}>
                                        <div className="group text-center">
                                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                                                <Icon size={21} />
                                            </div>

                                            <h3 className="mx-auto mt-3 max-w-[130px] text-sm font-semibold leading-5 text-[#102b50]">
                                                {title}
                                            </h3>
                                            <p className="mx-auto mt-2 max-[145px] text-[11px] leading-4 text-slate-500">
                                                {description}
                                            </p>
                                        </div>

                                        {/* {index !== workFlowSteps.length - 1 && (
                                            <div className="hidden items-start justify-center pt-5">
                                                <ArrowRight size={17} className="text-blue-300" />
                                            </div>
                                        )} */}
                                    </React.Fragment>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Button */}
            <div className="text-white flex items-center justify-center mb-5">
                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-blue-500 px-8 py-6 md:flex-row md:justify-between">
                    <div className="flex items-center gap-6 ">
                        <img
                            src={CTA_Illustration}
                            alt="cta"
                            className="hidden h-40 w-48 sm:block"
                        />
                        <div>
                            <h3 className="text-3xl font-bold ">
                                Ready to simplify your shipping ?
                            </h3>
                            <p className="mt-1 text-sm ">
                                Join thousands of D2C and e-commerce brands already using Nexgo.
                            </p>
                        </div>
                    </div>

                    <button className="group flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
                        Create your Account
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </section>
    );
};

export default D2CEcommerce;