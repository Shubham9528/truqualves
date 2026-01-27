import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./sections/footer";
import LenisScroll from "./components/lenis";
import Navbar from "./components/navbar";

// Lazy load page components
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

export default function App() {
    return (
        <div>
            <LenisScroll />
            <Navbar />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    )
}