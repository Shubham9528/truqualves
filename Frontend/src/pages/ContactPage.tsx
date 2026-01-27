import { useState } from "react";
import AnimatedContent from "../components/animated-content";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission
        console.log("Form submitted:", formData);
        alert("Thanks for contacting us! We'll get back to you shortly.");
        setFormData({ name: "", email: "", company: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-slate-50 px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 border-b border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedContent>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 mb-6">
                            <span className="text-sm font-semibold text-teal-700">Contact Us</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-urbanist">
                            Let's Start a Conversation
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our validation services? Ready to ensure compliance for your next project? We're here to help.
                        </p>
                    </AnimatedContent>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Contact Information */}
                        <AnimatedContent className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-urbanist">Get in Touch</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Our team of experts is ready to discuss your specific needs and provide tailored solutions for your validation challenges.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                                        <MailIcon className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                                        <p className="text-gray-600 mb-1">Our friendly team is here to help.</p>
                                        <a href="mailto:info@truqual.com" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                                            info@truqual.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                                        <PhoneIcon className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Call Us</h3>
                                        <p className="text-gray-600 mb-1">Mon-Fri from 8am to 5pm.</p>
                                        <a href="tel:+15551234567" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                                            +1 (555) 123-4567
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPinIcon className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">Visit Us</h3>
                                        <p className="text-gray-600 mb-1">Come say hello at our office headquarters.</p>
                                        <p className="text-slate-900 font-medium">
                                            100 Validation Way, Suite 200<br />
                                            Tech City, TC 90210
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>

                        {/* Contact Form */}
                        <AnimatedContent delay={0.2} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Ltd."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project needs..."
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <SendIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </AnimatedContent>

                    </div>
                </div>
            </section>
        </div>
    );
}
