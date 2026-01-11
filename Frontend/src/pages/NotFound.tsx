import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-gradient py-24 lg:py-32 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl font-display font-bold text-gradient-gold mb-6">
              404
            </div>
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-navy-200 mb-10">
              The page you're looking for doesn't exist or has been moved.
              Let us help you find what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="btn-gold">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
