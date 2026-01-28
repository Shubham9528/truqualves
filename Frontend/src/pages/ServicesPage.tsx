import AnimatedContent from "../components/animated-content";
import SectionTitle from "../components/section-title";
import { features } from "../data/features";
import { 
    ArrowRightIcon, 
    CheckCircle2Icon, 
    ShieldCheckIcon,
    ClipboardCheckIcon
} from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-slate-50 px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20">
                <div className="max-w-7xl mx-auto">
                    <AnimatedContent className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border border-teal-200 mb-6">
                            <ShieldCheckIcon className="w-4 h-4 text-teal-600" />
                            <span className="text-sm font-semibold text-teal-700">Our Services</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-urbanist">
                            Comprehensive Validation Services
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            From initial risk assessment to retirement, we support every phase of your system's 
                            lifecycle with precision and transparency.
                        </p>
                    </AnimatedContent>
                </div>
            </section>

            {/* Services Grid */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((service, index) => (
                            <AnimatedContent 
                                key={index} 
                                delay={index * 0.1}
                                className="h-56 [perspective:1000px] group cursor-pointer"
                            >
                                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    {/* Front Side */}
                                    <div className={`${service.cardBg} absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-200 text-center`}>
                                        <div className={`${service.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
                                            <service.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 font-urbanist">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Back Side */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-200 text-center shadow-xl">
                                        <p className="text-gray-600 leading-relaxed mb-3 text-xs line-clamp-4">
                                            {service.description}
                                        </p>
                                        <a 
                                            href="#contact" 
                                            className="inline-flex items-center gap-2 text-teal-600 text-sm font-semibold hover:gap-3 transition-all"
                                        >
                                            Learn More
                                            <ArrowRightIcon className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose TruQual */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 bg-slate-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        icon={ClipboardCheckIcon}
                        title="Why Choose TruQual?"
                        subtitle="We combine deep regulatory knowledge with modern technological approaches to deliver validation services that are both rigorous and efficient."
                    />

                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        <AnimatedContent className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2Icon className="w-5 h-5 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Regulatory Integrity</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Our frameworks are strictly aligned with GAMP 5, 21 CFR Part 11, and Annex 11, 
                                ensuring you are always audit-ready with complete traceability and documentation integrity.
                            </p>
                        </AnimatedContent>

                        <AnimatedContent delay={0.1} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Streamlined Documentation</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Move away from paper-heavy processes. We implement digital validation strategies 
                                that reduce cycle times by 30-40% while maintaining full regulatory compliance.
                            </p>
                        </AnimatedContent>

                        <AnimatedContent delay={0.2} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2Icon className="w-5 h-5 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Support</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Our team consists of senior validation engineers and QA specialists with decades 
                                of combined life sciences experience across pharmaceutical and biotech sectors.
                            </p>
                        </AnimatedContent>

                        <AnimatedContent delay={0.3} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2Icon className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Track Record</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                With 500+ successful validation projects and a 98% first-time audit pass rate, 
                                we deliver results that matter to your business and regulatory compliance.
                            </p>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
                <div className="max-w-4xl mx-auto">
                    <AnimatedContent className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6 font-urbanist">
                                Ready to Elevate Your Compliance Strategy?
                            </h2>
                            <p className="text-xl mb-8 text-teal-50">
                                Schedule a discovery call with our experts to discuss your specific validation needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="#contact" 
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                                >
                                    Get Started Today
                                    <ArrowRightIcon className="w-5 h-5" />
                                </a>
                                <a 
                                    href="/" 
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                                >
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>
        </div>
    );
}
