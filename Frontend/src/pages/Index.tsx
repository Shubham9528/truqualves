import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileCheck, Database, Users, CheckCircle, Award, Clock, Globe } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, type Easing } from "framer-motion";

const stats = [
  { value: "500+", label: "Systems Validated" },
  { value: "25+", label: "Years Experience" },
  { value: "100%", label: "FDA Inspection Success" },
  { value: "50+", label: "Enterprise Clients" },
];

const services = [
  {
    icon: Shield,
    title: "21 CFR Part 11 Compliance",
    description: "Comprehensive electronic records and signatures compliance ensuring FDA regulatory alignment.",
  },
  {
    icon: FileCheck,
    title: "GAMP5 Validation",
    description: "Risk-based validation approaches following Good Automated Manufacturing Practice guidelines.",
  },
  {
    icon: Database,
    title: "Data Integrity Assurance",
    description: "ALCOA+ principles implementation to ensure data accuracy, legibility, and traceability.",
  },
  {
    icon: Users,
    title: "Vendor Audits & Assessments",
    description: "Thorough supplier evaluations ensuring your partners meet regulatory requirements.",
  },
];

const features = [
  "Risk-based validation approach",
  "FDA, EMA, MHRA compliant",
  "Standard validation templates",
  "Experienced validation engineers",
  "On-time project delivery",
  "Transparent pricing",
];

const trustedBy = [
  "Leading Pharmaceutical",
  "Global Biotech",
  "Medical Device Corp",
  "Clinical Research Org",
];

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: easeOut },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-gradient relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-gold-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-gold-500/3 rounded-full blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
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
      </section>

      {/* Trusted By */}
      <motion.section 
        className="bg-navy-900 py-8 border-y border-gold-500/10"
        {...fadeInUp}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <span className="text-navy-400 text-sm uppercase tracking-wider">
              Trusted by Industry Leaders
            </span>
            <motion.div 
              className="flex flex-wrap justify-center gap-8 md:gap-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {trustedBy.map((company, index) => (
                <motion.span
                  key={index}
                  className="text-navy-300 font-medium opacity-60 hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {company}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Comprehensive CSV Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From initial assessment to ongoing compliance support, we provide end-to-end 
              Computer System Validation services tailored to your regulatory requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card-elevated p-6 group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <service.icon className="w-7 h-7 text-gold-500 group-hover:text-navy-950 transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            {...fadeInUp}
          >
            <Link to="/services">
              <Button className="btn-gold">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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

      {/* CTA Section */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gold-500 to-gold-600 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-6 text-center relative">
          <motion.h2 
            className="text-3xl lg:text-5xl font-display font-bold text-navy-950 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Ready to Ensure Compliance?
          </motion.h2>
          <motion.p 
            className="text-xl text-navy-800 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get a free assessment of your current validation status and discover 
            how Truqualves can help you achieve regulatory compliance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link to="/contact">
              <Button className="bg-navy-950 hover:bg-navy-900 text-white text-lg px-10 py-6 rounded-xl shadow-2xl transition-all hover:-translate-y-1">
                Start Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}
