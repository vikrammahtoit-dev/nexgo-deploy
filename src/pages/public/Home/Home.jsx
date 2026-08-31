import BusinessesWeEmpower from "../../../features/landing/businesses/BusinessesWeEmpower";
import WhyChooseNexgo from "../../../features/landing/chooseNexgo/WhyChooseNexgo";
import FinalCTA from "../../../features/landing/FinalCTA/FinalCTA";
import Footer from "../../../features/landing/footer/Footer";
import Hero from "../../../features/landing/hero/Hero";
import Navbar from "../../../features/landing/navbar/Navbar";
import CourierPartner from "../../../features/landing/partners/CourierPartner";
import LogisticsSolution from "../../../features/landing/solutions/LogisticsSolution";
import Testimonials from "../../../features/landing/testimonial/Testimonials";
import LiveTracking from "../../../features/landing/tracking/LiveTracking";
import Chaos from "../../../features/landing/transformation/Chaos";
import HowItWorks from "../../../features/landing/Working/HowItWorks";
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CourierPartner />
            <Chaos />
            <LogisticsSolution />

            <HowItWorks />
            <LiveTracking />
            <BusinessesWeEmpower />
            <WhyChooseNexgo />
            <Testimonials />
            <FinalCTA />
            <Footer />

        </>
    );
};

export default Home;