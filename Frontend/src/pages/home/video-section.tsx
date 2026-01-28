import { lazy , Suspense } from "react";
import AnimatedContent from "../../components/animated-content";
import SectionTitle from "../../components/section-title";
import { ShieldCheckIcon, CheckCircle2Icon } from "lucide-react";
const ReactPlayer = lazy(() => import("react-player"));



export default function VideoSection() {
    return (
        <section id="about" className="border-b border-gray-200 px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="p-4 pt-20 md:p-20 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-gray-200">
                <SectionTitle
                    icon={ShieldCheckIcon}
                    title="Validation Excellence in Action"
                    subtitle="Discover how TruQual helps pharmaceutical and biotech companies achieve regulatory compliance and accelerate their validation lifecycle."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-16 w-full items-center">
                    {/* Video Player */}
                    <AnimatedContent className="relative group">
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-gray-200 shadow-xl">
                            
                            <Suspense fallback={<div>Loading...</div>}>
                                <ReactPlayer
                                    src="https://www.youtube.com/watch?v=nFWNSKedptI"
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                    className="react-player"
                                />
                            </Suspense>
                        </div>
                        
                        
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </AnimatedContent>

                    {/* Content Side */}
                    <AnimatedContent delay={0.2} className="flex flex-col justify-center space-y-6">
                        <h3 className="text-3xl font-bold text-slate-900 font-urbanist">
                            Your Trusted Partner in GxP Compliance
                        </h3>
                        
                        <p className="text-base text-gray-600 leading-relaxed">
                            For over 15 years, TruQual has been at the forefront of computer system validation, 
                            helping life sciences organizations navigate complex regulatory landscapes with confidence.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2Icon className="w-4 h-4 text-teal-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">FDA & EU Compliant</h4>
                                    <p className="text-sm text-gray-600">
                                        Our frameworks strictly align with 21 CFR Part 11, EU Annex 11, and GAMP 5 guidelines.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2Icon className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Proven Track Record</h4>
                                    <p className="text-sm text-gray-600">
                                        500+ successful validation projects with a 98% first-time audit pass rate.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle2Icon className="w-4 h-4 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-1">Expert Team</h4>
                                    <p className="text-sm text-gray-600">
                                        Senior validation engineers and QA specialists with decades of combined experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a 
                                href="#contact" 
                                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/30"
                            >
                                Schedule a Consultation
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </AnimatedContent>
                </div>

                {/* Trust Badges */}
                <AnimatedContent delay={0.3} className="mt-16 w-full">
                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                            Trusted by Industry Leaders
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <div className="flex items-center gap-2 font-bold text-lg text-slate-700">
                                <ShieldCheckIcon className="h-6 w-6" /> BioTechPro
                            </div>
                            <div className="flex items-center gap-2 font-bold text-lg text-slate-700">
                                <ShieldCheckIcon className="h-6 w-6" /> PharmaCorp
                            </div>
                            <div className="flex items-center gap-2 font-bold text-lg text-slate-700">
                                <ShieldCheckIcon className="h-6 w-6" /> MedSolutions
                            </div>
                            <div className="flex items-center gap-2 font-bold text-lg text-slate-700">
                                <ShieldCheckIcon className="h-6 w-6" /> GxP Systems
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
}
