import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, Download, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const resources = [
  {
    type: "Guide",
    icon: BookOpen,
    title: "Complete Guide to 21 CFR Part 11 Compliance",
    description: "Everything you need to know about electronic records and signatures compliance.",
    downloadable: true,
  },
  {
    type: "Whitepaper",
    icon: FileText,
    title: "Risk-Based Validation Approaches Under GAMP5",
    description: "Learn how to implement efficient, risk-based validation strategies.",
    downloadable: true,
  },
  {
    type: "Checklist",
    icon: Download,
    title: "FDA Inspection Readiness Checklist",
    description: "Prepare for regulatory inspections with our comprehensive checklist.",
    downloadable: true,
  },
  {
    type: "Webinar",
    icon: PlayCircle,
    title: "Data Integrity Best Practices",
    description: "On-demand webinar covering ALCOA+ principles and implementation.",
    downloadable: false,
  },
  {
    type: "Guide",
    icon: BookOpen,
    title: "CSV for Cloud-Based Systems",
    description: "Validation considerations for SaaS and cloud-hosted applications.",
    downloadable: true,
  },
  {
    type: "Template",
    icon: FileText,
    title: "Validation Plan Template",
    description: "Start your validation project with our proven template structure.",
    downloadable: true,
  },
];

const faqItems = [
  {
    question: "What is Computer System Validation (CSV)?",
    answer: "Computer System Validation is a documented process establishing evidence that a computerized system consistently produces results meeting predetermined specifications and quality attributes. It ensures systems are fit for their intended use in regulated environments.",
  },
  {
    question: "Why is 21 CFR Part 11 compliance important?",
    answer: "FDA 21 CFR Part 11 establishes requirements for electronic records and electronic signatures. Compliance is mandatory for organizations maintaining electronic records or using electronic signatures for FDA-regulated activities.",
  },
  {
    question: "What is the GAMP5 framework?",
    answer: "GAMP5 (Good Automated Manufacturing Practice) is an industry guideline providing a risk-based approach to compliant GxP computerized systems. It categorizes software and defines appropriate validation activities based on risk.",
  },
  {
    question: "How long does a typical validation project take?",
    answer: "Project duration varies based on system complexity and scope. Simple systems may take 4-6 weeks, while complex ERP implementations can span several months. We provide accurate timelines after initial assessment.",
  },
  {
    question: "What is included in validation documentation?",
    answer: "Complete validation documentation includes Validation Plans, User Requirements, Functional Specifications, Risk Assessments, IQ/OQ/PQ Protocols, Test Scripts, Traceability Matrices, and Validation Summary Reports.",
  },
  {
    question: "Do you provide ongoing support after validation?",
    answer: "Yes, we offer ongoing support including change control management, periodic reviews, revalidation activities, and continuous compliance monitoring to maintain the validated state.",
  },
];

export default function Resources() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-gradient py-24 lg:py-32 -mt-20 pt-44 lg:pt-52">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="text-gold-400 font-medium text-sm uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              Resources
            </motion.span>
            <motion.h1 
              className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              CSV Knowledge Center &{" "}
              <span className="text-gradient-gold">Learning Resources</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-navy-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Access our library of guides, templates, whitepapers, and educational 
              content to support your Computer System Validation initiatives.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
              Downloadable Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Free guides, templates, and educational materials to help you 
              navigate the complexities of Computer System Validation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div 
                key={index} 
                className="card-elevated p-6 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.1, duration: 0.3 }}
                  >
                    <resource.icon className="w-5 h-5 text-gold-500" />
                  </motion.div>
                  <span className="text-xs font-medium text-gold-500 uppercase tracking-wider">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {resource.description}
                </p>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-gold-500/30 text-gold-600 hover:bg-gold-500/10"
                  >
                    {resource.downloadable ? "Download Free" : "Watch Now"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-navy-950">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gold-400 font-medium text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-navy-800/50 rounded-xl p-6 border border-gold-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.question}
                </h3>
                <p className="text-navy-200">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gold-500 to-gold-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl lg:text-4xl font-display font-bold text-navy-950 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Have More Questions?
          </motion.h2>
          <motion.p 
            className="text-xl text-navy-800 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our validation experts are here to help. Get answers to your specific 
            CSV questions and challenges.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Link to="/contact">
              <Button className="bg-navy-950 hover:bg-navy-900 text-white text-lg px-10 py-6 rounded-xl">
                Ask Our Experts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}
