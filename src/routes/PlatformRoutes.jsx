import Warehousing from "../pages/public/platform/Order&Fulfilment/Warehousing";
import DomesticShipping from "../pages/public/platform/Shipping&Delivery/DomesticShipping";
import NextDayDelivery from "../pages/public/platform/Shipping&Delivery/NextDayDelivery";
import SameDayDelivery from "../pages/public/platform/Shipping&Delivery/SameDayDelivery";
// import MultiCourierManagement from "../pages/public/platform/Shipping&Delivery/MultiCourierManagement";
// import PickupManagement from "../pages/public/platform/Shipping&Delivery/PickupManagement";
// import InternationalShipping from "../pages/public/platform/Shipping&Delivery/InternationalShipping";

const platformRoutes = [
    {
        path: "platform/shipping-delivery/domestic-shipping",
        element: <DomesticShipping />,
    },

    {
        path: "platform/shipping-delivery/warehousing",
        element: <Warehousing />,
    },

    {
        path: "platform/shipping-delivery/sdd",
        element: <SameDayDelivery />,
    },
    {
        path: "platform/shipping-delivery/ndd",
        element: <NextDayDelivery />,
    },
    // {
    //     path: "platform/shipping-delivery/multi-courier-management",
    //     element: <MultiCourierManagement />,
    // },
    // {
    //     path: "platform/shipping-delivery/pickup-management",
    //     element: <PickupManagement />,
    // },
    // {
    //     path: "platform/shipping-delivery/international-shipping",
    //     element: <InternationalShipping />,
    // },
];

export default platformRoutes;