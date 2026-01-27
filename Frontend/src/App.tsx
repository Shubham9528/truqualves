import { Routes, Route } from "react-router-dom";
import Footer from "./sections/footer";
import LenisScroll from "./components/lenis";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
    return (
        <div>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>
    )
}