import HeroSection from "../sections/hero-section";
import StatsSection from "../sections/stats-section";
import VideoSection from "../sections/video-section";
import FeaturesSection from "../sections/features-section";
import FaqSection from "../sections/faq-section";
import OurTeamSection from "../sections/our-team";
import PricingSection from "../sections/pricing-section";
import TestimonialSection from "../sections/testimonial-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <VideoSection />
            <FeaturesSection />
            <FaqSection />
            <OurTeamSection />
            <PricingSection />
            <TestimonialSection />
        </>
    );
}
