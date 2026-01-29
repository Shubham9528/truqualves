import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import Navbar from "./components/navbar";

// Lazy load page components
const Dashboard = lazy(() => import("./dashboard/App"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const MainLayout = () => {
    return (
        <div>
            <LenisScroll />
            <Navbar />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    );
};

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
            <Route path="/dashboard/*" element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                    <Dashboard />
                </Suspense>
            } />
        </Routes>
    )
}