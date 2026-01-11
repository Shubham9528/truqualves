import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Award, Users, Target, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Easing } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every validation detail matters. We approach each project with meticulous attention to regulatory requirements.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work as an extension of your team, understanding your business needs and regulatory challenges.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our track record of 100% FDA inspection success reflects our commitment to the highest standards.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "We deliver validation projects on time without compromising quality or regulatory compliance.",
  },
];

const milestones = [
  { year: "2000", event: "Founded with a vision to simplify CSV" },
  { year: "2005", event: "Expanded to serve Fortune 500 pharmaceutical companies" },
  { year: "2010", event: "Pioneered risk-based validation methodologies" },
  { year: "2015", event: "Became ISPE charter sponsors" },
  { year: "2020", event: "Launched cloud-based validation solutions" },
  { year: "2024", event: "500+ validated systems and counting" },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "CEO & Founder",
    bio: "25+ years in pharmaceutical validation and regulatory affairs",
  },
  {
    name: "James Chen",
    role: "VP of Validation Services",
    bio: "Former FDA reviewer with deep Part 11 expertise",
  },
  {
    name: "Maria Rodriguez",
    role: "Director of Quality",
    bio: "GAMP5 specialist with global regulatory experience",
  },
  {
    name: "David Thompson",
    role: "Senior Validation Engineer",
    bio: "Expert in ERP, LIMS, and MES validation",
  },
];

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: easeOut },
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

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: easeOut },
};

export default function About() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-gradient relative overflow-hidden py-24 lg:py-32">
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

        <div className="container mx-auto px-6 relative">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <motion.span 
              className="text-gold-400 font-medium text-sm uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About Truqualves
            </motion.span>
            <motion.h1 
              className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Your Trusted Partner in{" "}
              <span className="text-gradient-gold">Regulatory Compliance</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-navy-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              For over two decades, Truqualves has been the trusted CSV partner 
              for pharmaceutical, biotech, and medical device companies worldwide. 
              We combine deep regulatory expertise with practical, business-focused solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...slideInLeft}>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower life science companies with validation solutions that 
                protect patient safety, ensure regulatory compliance, and accelerate 
                time to market.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that effective Computer System Validation should not be 
                a barrier to innovation but rather an enabler of quality and trust. 
                Our approach combines regulatory rigor with practical efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center p-6 bg-gold-500/10 rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-gold-500 mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Systems Validated</div>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-gold-500/10 rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-gold-500 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Inspection Success</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 border border-gold-500/10"
              {...slideInRight}
            >
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-16 flex-shrink-0 text-gold-400 font-bold">
                      {milestone.year}
                    </div>
                    <div className="flex-1 text-navy-200 pb-4 border-b border-navy-700 last:border-0">
                      {milestone.event}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-950">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-gold-400 font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-6">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-navy-800/50 rounded-xl p-6 border border-gold-500/10 text-center group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: easeOut }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <value.icon className="w-7 h-7 text-gold-400 group-hover:text-navy-950 transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-navy-200 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-gold-500 font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Industry Experts at Your Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Our leadership team brings decades of combined experience in regulatory 
              compliance, validation engineering, and quality management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="card-elevated p-6 text-center group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: easeOut }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-3xl font-display font-bold text-navy-950">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            className="text-3xl lg:text-4xl font-display font-bold text-navy-950 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Ready to Work With Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-navy-800 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join the growing list of companies that trust Truqualves for their 
            Computer System Validation needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link to="/contact">
              <Button className="bg-navy-950 hover:bg-navy-900 text-white text-lg px-10 py-6 rounded-xl shadow-2xl transition-all hover:-translate-y-1">
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}
