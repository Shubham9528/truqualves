import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Shield, FileCheck, Database, Users, CheckCircle, ArrowRight,
  FileText, Settings, Server, Lock, ClipboardCheck, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "strategy",
    icon: Shield,
    title: "CSV Strategy & Regulatory Compliance",
    description: "Develop comprehensive Computer System Validation strategies aligned with FDA, EMA, MHRA, and global regulatory requirements.",
    features: [
      "Custom risk-based validation approaches",
      "Regulatory gap analysis and remediation",
      "Validation lifecycle development",
      "Inspection readiness preparation",
      "SOP development and implementation",
    ],
  },
  {
    id: "part11",
    icon: Lock,
    title: "21 CFR Part 11 Compliance",
    description: "Ensure your electronic records and signatures meet FDA requirements for authenticity, integrity, and confidentiality.",
    features: [
      "Part 11 gap assessments",
      "Electronic signature implementation",
      "Audit trail configuration",
      "Access control frameworks",
      "Remediation project management",
    ],
  },
  {
    id: "gamp5",
    icon: FileCheck,
    title: "GAMP5 Validation Services",
    description: "Implement Good Automated Manufacturing Practice guidelines with our structured, risk-based validation methodology.",
    features: [
      "System categorization (Cat 1-5)",
      "Risk assessment and mitigation",
      "IQ/OQ/PQ protocol development",
      "Test script creation and execution",
      "Validation summary reporting",
    ],
  },
  {
    id: "data-integrity",
    icon: Database,
    title: "Data Integrity Assurance",
    description: "Implement ALCOA+ principles to ensure your data meets regulatory expectations for accuracy, legibility, and traceability.",
    features: [
      "Data integrity assessments",
      "ALCOA+ implementation",
      "Data governance frameworks",
      "Backup and recovery validation",
      "Data migration verification",
    ],
  },
  {
    id: "audits",
    icon: Users,
    title: "Vendor Audits & Assessments",
    description: "Comprehensive supplier evaluations ensuring your software vendors and partners meet regulatory requirements.",
    features: [
      "Vendor qualification programs",
      "Supplier audit execution",
      "Assessment report documentation",
      "Corrective action tracking",
      "Ongoing vendor management",
    ],
  },
  {
    id: "systems",
    icon: Server,
    title: "System-Specific Validation",
    description: "Specialized validation services for ERP, LIMS, MES, QMS, and other critical GxP systems.",
    features: [
      "ERP system validation (SAP, Oracle)",
      "LIMS validation and compliance",
      "MES implementation support",
      "QMS/eQMS validation",
      "Laboratory equipment qualification",
    ],
  },
];

const deliverables = [
  { icon: FileText, title: "Validation Plans", description: "Comprehensive roadmaps for your validation projects" },
  { icon: ClipboardCheck, title: "Test Protocols", description: "IQ, OQ, PQ protocols and test scripts" },
  { icon: Settings, title: "SOPs & Procedures", description: "Standard operating procedures and work instructions" },
  { icon: BarChart3, title: "Traceability Matrix", description: "Requirements-to-test coverage documentation" },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-gold-400 font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6">
              Comprehensive CSV Services for{" "}
              <span className="text-gradient-gold">Regulatory Excellence</span>
            </h1>
            <p className="text-xl text-navy-200">
              From strategy development to ongoing compliance support, we provide 
              end-to-end Computer System Validation services tailored to your 
              specific regulatory requirements and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold-500/10 mb-6">
                    <service.icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 lg:p-12 border border-gold-500/10">
                    <div className="aspect-square flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-gold-500/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-navy-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-400 font-medium text-sm uppercase tracking-wider">
              What You Get
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-6">
              Complete Validation Deliverables
            </h2>
            <p className="text-lg text-navy-200">
              Every engagement includes comprehensive documentation ready for 
              regulatory inspection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-navy-800/50 rounded-xl p-6 border border-gold-500/10 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gold-500 to-gold-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-950 mb-6">
            Need Custom Validation Support?
          </h2>
          <p className="text-xl text-navy-800 mb-10 max-w-2xl mx-auto">
            Let us tailor a validation approach that fits your specific systems, 
            timeline, and budget.
          </p>
          <Link to="/contact">
            <Button className="bg-navy-950 hover:bg-navy-900 text-white text-lg px-10 py-6 rounded-xl">
              Get Your Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
