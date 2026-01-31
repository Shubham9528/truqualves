// import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="/" className="flex items-center gap-3">
                            <img src="/assets/logo.png" alt="TruQual Logo" width={48} height={48} />
                            <div className="flex flex-col">
                                <span className="font-bold text-lg tracking-tight text-slate-900">TruQual</span>
                                <span className="text-xs text-slate-600 font-medium">Validation Expert Service</span>
                            </div>
                        </a>
                        <p className="text-sm/7 mt-6">TruQual provides expert Computer System Validation (CSV) services for pharmaceutical and biotech companies</p>
                        
                        {/* <div className="flex gap-4 mt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 hover:bg-teal-100 transition">
                                <LinkedinIcon className="w-5 h-5" />
                            </a>
                            <a href="mailto:info@truqual.com" className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 hover:bg-teal-100 transition">
                                <MailIcon className="w-5 h-5" />
                            </a>
                            <a href="tel:+1234567890" className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 hover:bg-teal-100 transition">
                                <PhoneIcon className="w-5 h-5" />
                            </a>
                        </div> */}
                    </div>
                    <div className="flex flex-col lg:items-center lg:justify-center">
                        <div className="flex flex-col text-sm space-y-2.5">
                            <h2 className="font-semibold mb-5 text-gray-800">Quick Links</h2>
                            <a className="hover:text-teal-600 transition" href="/">Linkedin</a>
                            <a className="hover:text-teal-600 transition" href="/">Mail</a>
                            <a className="hover:text-teal-600 transition" href="/">Phone</a>
                            <Link className="hover:text-teal-600 transition" to="/dashboard">Dashboard</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
                        <div className="text-sm space-y-6 max-w-sm">
                            <p>Get the latest insights on validation, compliance, and regulatory updates delivered to your inbox.</p>
                            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-teal-50">
                                <input className="focus:ring-2 bg-white ring-teal-500 outline-none w-full max-w-64 py-2 rounded px-2" type="email" placeholder="Enter your email" />
                                <button className="bg-teal-500 px-4 py-2 text-white rounded-full hover:bg-teal-600 transition">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="py-4 text-center border-t mt-6 border-slate-200">
                    Copyright 2025 © <a href="/" className="text-teal-600 hover:text-teal-700">TruQual Validation Expert Service</a>. All Rights Reserved.
                </p>
            </footer>
        </>
    );
}