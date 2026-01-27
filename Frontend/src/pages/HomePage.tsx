import { lazy, Suspense } from "react";
import HeroSection from "../sections/hero-section";
import StatsSection from "../sections/stats-section";

// Lazy load below-the-fold sections for better performance
const VideoSection = lazy(() => import("../sections/video-section"));
const FeaturesSection = lazy(() => import("../sections/features-section"));
const FaqSection = lazy(() => import("../sections/faq-section"));
const OurTeamSection = lazy(() => import("../sections/our-team"));
const PricingSection = lazy(() => import("../sections/pricing-section"));
const TestimonialSection = lazy(() => import("../sections/testimonial-section"));

// Loading placeholder component
const SectionLoader = () => (
    <div className="w-full py-20 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
);

export default function HomePage() {
    return (
        <>
            {/* Above-the-fold sections - load immediately */}
            <HeroSection />
            <StatsSection />
            
            {/* Below-the-fold sections - lazy load */}
            <Suspense fallback={<SectionLoader />}>
                <VideoSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <FeaturesSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <OurTeamSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <PricingSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
                <FaqSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoader />}>
                <TestimonialSection />
            </Suspense>
            
            
        </>
    );
}
