import { lazy, Suspense, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection, TrustedBySection } from "./LandingPage";

// Lazy load sections below the fold for better performance
const ServicesSection = lazy(() => import("./LandingPage/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WhyChooseUsSection = lazy(() => import("./LandingPage/WhyChooseUsSection").then(m => ({ default: m.WhyChooseUsSection })));
const CTASection = lazy(() => import("./LandingPage/CTASection").then(m => ({ default: m.CTASection })));

// Minimal loading fallback to avoid layout shift
const SectionFallback = () => <div className="min-h-[200px]" />;


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      {/* Above the fold - loaded immediately */}
      <HeroSection />
      <TrustedBySection />
      
      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <WhyChooseUsSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
    </Layout>
  );
}
