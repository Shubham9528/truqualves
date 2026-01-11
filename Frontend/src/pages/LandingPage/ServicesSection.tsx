import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileCheck, Database, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Easing } from "framer-motion";

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

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: easeOut },
};

export function ServicesSection() {
  return (
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
  );
}
