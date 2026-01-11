import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Systems Validated" },
  { value: "25+", label: "Years Experience" },
  { value: "100%", label: "FDA Inspection Success" },
  { value: "50+", label: "Enterprise Clients" },
];

export function HeroSection() {
  return (
    <section className="section-gradient relative overflow-hidden -mt-20 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage: 'radial-gradient(circle at bottom right, black 10%, transparent 35%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom right, black 10%, transparent 35%)',
          }} 
        />
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Award className="w-4 h-4 text-gold-400" />
              <span className="text-gold-400 text-sm font-medium">
                Trusted CSV Consulting Partner
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Regulatory Compliance{" "}
              <span className="text-gradient-gold">Without Compromise</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-navy-200 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Expert Computer System Validation services ensuring your GxP systems meet 
              FDA, EMA, and global regulatory standards. Protect your business with 
              proven validation methodologies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link to="/contact">
                <Button className="btn-gold text-base">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 text-base px-6 py-3"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-xl bg-navy-900/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-gold-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-navy-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-gold-600/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
