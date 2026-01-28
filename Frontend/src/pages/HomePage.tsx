import { lazy, Suspense } from "react";
// import HeroSection from "./home/hero-section";
const HeroSection = lazy(() => import("./home/hero-section"));
const StatsSection = lazy(() => import("./home/stats-section"));

// Lazy load below-the-fold sections for better performance
const VideoSection = lazy(() => import("./home/video-section"));
const FeaturesSection = lazy(() => import("./home/features-section"));
const FaqSection = lazy(() => import("./home/faq-section"));
const OurTeamSection = lazy(() => import("./home/our-team"));
const PricingSection = lazy(() => import("./home/pricing-section"));
const TestimonialSection = lazy(() => import("./home/testimonial-section"));

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
