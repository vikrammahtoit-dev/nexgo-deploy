import { Route, Routes } from "react-router-dom";

import Home from "../pages/public/Home/Home";
import PrivacyPolicy from "../pages/public/PrivacyPolicy/PrivacyPolicy";
import TermsService from "../pages/public/TermsofService/TermsServices";
import RefundCancellationPolicy from "../pages/public/Refund&Cancellation/RefundCancellation";
import CookiePolicy from "../pages/public/CookiePolicy/CookiePolicy";
import APIGuides from "../pages/public/APIGuides/APIGuides";
import FAQs from "../pages/public/FAQ/FAQs";
import ShippingGuides from "../pages/public/ShippingGuides/ShippingGuides";
import ShippingSOP from "../pages/public/ShippingSOP/ShippingSOP";
import Pricing from "../pages/public/pricing/Pricing";
import Tracking from "../pages/public/Tracking/Tracking";

import solutionRoutes from "./SolutionsRoutes";
import platformRoutes from "./PlatformRoutes";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-services" element={<TermsService />} />
            <Route path="refund-policy" element={<RefundCancellationPolicy />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="api-guides" element={<APIGuides />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="shipping-guides" element={<ShippingGuides />} />
            <Route
                path="shipping-guides/:policySlug"
                element={<ShippingGuides />}
            />
            <Route path="shipping-sop" element={<ShippingSOP />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="tracking" element={<Tracking />} />

            {/* Solutions */}
            {solutionRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}

            {/* Platform */}
            {platformRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default PublicRoutes;