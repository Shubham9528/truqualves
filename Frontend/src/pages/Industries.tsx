import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Pill, FlaskConical, HeartPulse, TestTube2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const industries = [
  {
    id: "pharma",
    icon: Pill,
    title: "Pharmaceutical",
    description: "From drug discovery to manufacturing, we validate systems across the pharmaceutical lifecycle.",
    challenges: [
      "FDA 21 CFR Part 11 compliance",
      "Manufacturing execution systems",
      "Quality management systems",
      "Laboratory information management",
      "Pharmacovigilance systems",
    ],
    regulations: ["FDA cGMP", "EU GMP Annex 11", "ICH Guidelines"],
  },
  {
    id: "biotech",
    icon: FlaskConical,
    title: "Biotechnology",
    description: "Specialized validation for biologics manufacturers and research organizations.",
    challenges: [
      "Cell therapy documentation",
      "Gene therapy data integrity",
      "Bioprocessing systems",
      "Cold chain management",
      "Clinical trial systems",
    ],
    regulations: ["FDA BLA requirements", "EMA guidelines", "ICH Q8-Q12"],
  },
  {
    id: "medical",
    icon: HeartPulse,
    title: "Medical Devices",
    description: "Supporting medical device manufacturers with software and system validation needs.",
    challenges: [
      "Design control documentation",
      "Software as Medical Device (SaMD)",
      "Manufacturing systems",
      "Complaint handling systems",
      "Post-market surveillance",
    ],
    regulations: ["FDA 21 CFR Part 820", "ISO 13485", "EU MDR"],
  },
  {
    id: "clinical",
    icon: TestTube2,
    title: "Clinical Research",
    description: "Ensuring data integrity and compliance for clinical trial systems and laboratories.",
    challenges: [
      "eClinical platforms",
      "EDC system validation",
      "CTMS implementation",
      "Laboratory systems",
      "eTMF compliance",
    ],
    regulations: ["FDA 21 CFR Part 11", "ICH E6(R2)", "GCP guidelines"],
  },
];

export default function Industries() {
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
              Industries We Serve
            </motion.span>
            <motion.h1 
              className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Specialized Expertise Across{" "}
              <span className="text-gradient-gold">Life Sciences</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-navy-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Our deep understanding of industry-specific regulations and challenges 
              allows us to deliver tailored validation solutions that address your 
              unique compliance needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                className={`grid lg:grid-cols-2 gap-12 items-start`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold-500/10 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <industry.icon className="w-8 h-8 text-gold-500" />
                  </motion.div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {industry.description}
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Key Validation Challenges
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {industry.challenges.map((challenge, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                      >
                        <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    {industry.regulations.map((reg, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gold-500/10 text-gold-600 rounded-full"
                      >
                        {reg}
                      </span>
                    ))}
                  </motion.div>
                </div>

                <motion.div 
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 lg:p-12 border border-gold-500/10 sticky top-24">
                    <div className="text-center">
                      <industry.icon className="w-24 h-24 text-gold-500/30 mx-auto mb-6" />
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Need {industry.title} Validation?
                      </h3>
                      <p className="text-navy-200 mb-6">
                        Our experts understand the unique challenges of {industry.title.toLowerCase()} 
                        {" "}validation.
                      </p>
                      <Link to="/contact">
                        <Button className="btn-gold w-full">
                          Discuss Your Project
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
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
            Which Industry Are You In?
          </motion.h2>
          <motion.p 
            className="text-xl text-navy-800 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Whether pharmaceutical, biotech, medical device, or clinical research, 
            we have the expertise to support your validation needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Link to="/contact">
              <Button className="bg-navy-950 hover:bg-navy-900 text-white text-lg px-10 py-6 rounded-xl">
                Schedule Industry Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}
