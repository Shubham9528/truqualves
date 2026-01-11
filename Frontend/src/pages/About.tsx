import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Award, Users, Target, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-gold-400 font-medium text-sm uppercase tracking-wider">
              About Truequalves
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mt-4 mb-6">
              Your Trusted Partner in{" "}
              <span className="text-gradient-gold">Regulatory Compliance</span>
            </h1>
            <p className="text-xl text-navy-200">
              For over two decades, Truequalves has been the trusted CSV partner 
              for pharmaceutical, biotech, and medical device companies worldwide. 
              We combine deep regulatory expertise with practical, business-focused solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
                <div className="text-center p-6 bg-gold-500/10 rounded-xl">
                  <div className="text-4xl font-bold text-gold-500 mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Systems Validated</div>
                </div>
                <div className="text-center p-6 bg-gold-500/10 rounded-xl">
                  <div className="text-4xl font-bold text-gold-500 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Inspection Success</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 border border-gold-500/10">
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-16 flex-shrink-0 text-gold-400 font-bold">
                      {milestone.year}
                    </div>
                    <div className="flex-1 text-navy-200 pb-4 border-b border-navy-700 last:border-0">
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-400 font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-4 mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-navy-800/50 rounded-xl p-6 border border-gold-500/10 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-navy-200 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="card-elevated p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-navy-950">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gold-500 to-gold-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy-950 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-navy-800 mb-10 max-w-2xl mx-auto">
            Join the growing list of companies that trust Truequalves for their 
            Computer System Validation needs.
          </p>
          <Link to="/contact">
            <Button className="bg-navy-950 hover:bg-navy-900 text-white text-lg px-10 py-6 rounded-xl">
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
