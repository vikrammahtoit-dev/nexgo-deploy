import DomesticShipping from "../pages/public/platform/Shipping&Delivery/DomesticShipping";
// import MultiCourierManagement from "../pages/public/platform/Shipping&Delivery/MultiCourierManagement";
// import PickupManagement from "../pages/public/platform/Shipping&Delivery/PickupManagement";
// import InternationalShipping from "../pages/public/platform/Shipping&Delivery/InternationalShipping";

const platformRoutes = [
    {
        path: "platform/shipping-delivery/domestic-shipping",
        element: <DomesticShipping />,
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