import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Award, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Easing } from "framer-motion";

const features = [
  "Risk-based validation approach",
  "FDA, EMA, MHRA compliant",
  "Standard validation templates",
  "Experienced validation engineers",
  "On-time project delivery",
  "Transparent pricing",
];

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: easeOut },
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: easeOut },
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: easeOut },
};

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-navy-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...slideInLeft}>
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">
              Why Truqualves
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-6">
              Proven Expertise in Regulatory Compliance
            </h2>
            <p className="text-lg text-navy-200 mb-8">
              With decades of experience navigating complex regulatory landscapes, 
              Truqualves delivers validation solutions that protect your business 
              and accelerate your path to compliance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-navy-100">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to="/about">
                <Button className="btn-gold">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            {...slideInRight}
          >
            <div className="space-y-6">
              <motion.div 
                className="bg-navy-800 rounded-2xl p-6 border border-gold-500/10"
                {...fadeInScale}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Clock className="w-10 h-10 text-gold-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Fast Turnaround
                </h4>
                <p className="text-navy-200 text-sm">
                  Validation projects completed within weeks, not months.
                </p>
              </motion.div>
              <motion.div 
                className="bg-gold-500/10 rounded-2xl p-6 border border-gold-500/20"
                {...fadeInScale}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Award className="w-10 h-10 text-gold-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Industry Certified
                </h4>
                <p className="text-navy-200 text-sm">
                  ISPE members with GAMP5 expertise and FDA experience.
                </p>
              </motion.div>
            </div>
            <div className="space-y-6 mt-12">
              <motion.div 
                className="bg-navy-800 rounded-2xl p-6 border border-gold-500/10"
                {...fadeInScale}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Globe className="w-10 h-10 text-gold-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Global Standards
                </h4>
                <p className="text-navy-200 text-sm">
                  Compliant with FDA, EMA, MHRA, and international regulations.
                </p>
              </motion.div>
              <motion.div 
                className="bg-navy-800 rounded-2xl p-6 border border-gold-500/10"
                {...fadeInScale}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Shield className="w-10 h-10 text-gold-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">
                  100% Success Rate
                </h4>
                <p className="text-navy-200 text-sm">
                  Zero FDA citations on validated systems.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
