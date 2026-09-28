import D2CEcommerce from "../pages/public/solutions/D2CEcommerce";
import SMEsStartups from "../pages/public/solutions/SMEsStartups";
// import BrandsRetailers from "../pages/public/solutions/";
// import WarehouseFulfilment from "../pages/public/solutions/WarehouseFulfilment";

const solutionRoutes = [
    {
        path: "solutions/d2c-ecommerce",
        element: <D2CEcommerce />,
    },
    {
        path: "solutions/smes-startups",
        element: <SMEsStartups />,
    },
    // {
    //     path: "solutions/brands-retailers",
    //     element: <BrandsRetailers />,
    // },
    // {
    //     path: "solutions/warehouse-fulfilment",
    //     element: <WarehouseFulfilment />,
    // },
];

export default solutionRoutes;