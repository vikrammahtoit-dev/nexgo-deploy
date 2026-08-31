import {BriefcaseBusiness, Building2, ChartNoAxesCombined, Send} from "lucide-react"

export const billingOptions = [
    {
        label:"Monthly",
    },
    {
        label: "Quarterly",
        saving: "Save 5%",
    },
    {
        label:"Yearly",
        saving:"15%",
    },
];

export const pricingPlans = [
    {
        id:"basic",
        name: "Basic",
        subtitle: "For new sellers & startups",
        icon: Send,
        shipments : "Up to 100 Shipments/month",
        price: "₹26",
        suffix:"/month",
        billing: "Billed monthly",
        rate: "Starting rate ₹26/500g",
        button: "Get Started",
        highlighted: false,
        features: [
            "Access to 10+ courier partners",
            "Basic dashboard & tracking",
            "Email Support"
        ],
    },
    {
        id:"growth",
        name: "Growth",
        subtitle: "For growing businesses",
        icon: ChartNoAxesCombined,
        shipments : "Up to 500 Shipments/month",
        price: "₹24",
        suffix:"/month",
        billing: "Billed monthly",
        rate: "Starting rate ₹24/500g",
        button: "Get Started",
        highlighted: false,
        features: [
            "Access to 10+ courier partners",
            "All basic features",
            "Automated NDR management",
            "Whatsapp & email support",
            "Basic analytics",
        ],
    },
    {
        id:"business",
        name: "Business",
        subtitle: "For high-volume sellers",
        icon: BriefcaseBusiness,
        shipments : "Up to 3000 Shipments/month",
        price: "₹19",
        suffix:"/month",
        billing: "Billed monthly",
        rate: "Starting rate ₹19/500g",
        button: "Get Started",
        highlighted: true,
        badge: "Most Popular",
        features: [
            "Access to 10+ courier partners",
            "All Growth features",
            "Advanced analytics & reports",
            "Priority support "
        ],
    },
    {
        id:"enterprise",
        name: "Enterprise ",
        subtitle: "For large enterprises",
        icon: Building2,
        shipments : "Customs Shipments/month",
        price: "Custom Pricing",
        suffix:"",
        billing: "Billed monthly",
        rate: "Custom rate",
        button: "Contact Sales",
        highlighted: false,
        features: [
            "All Business features",
            "Custom integration & solutions",
            "SLA & priority support",
            "Onboarding & training",
        ],
    },
];

export const shippingBenefits  = [
    {
        title: "Lowest Shipping Rates",
        description: "Compare & save more",
        icon: "tag",
    },
    {
        title: "Wide Courier Network",
        description: " 20+ trusted partners",
        icon: "network",
    },
    {
        title: "Real-time Tracking",
        description: "Stay updated ALways",
        icon: "location",
    },
    {
        title: "Support That Cares",
        description: "We're here for you",
        icon: "support",
    },
]