import { motion, type Easing } from "framer-motion";

const trustedBy = [
  "Trusted by Industry Leaders",
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

export function TrustedBySection() {
  return (
    <motion.section 
      className="bg-navy-900 py-8 border-y border-gold-500/10"
      {...fadeInUp}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
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
                className="text-white/70 font-medium hover:text-white transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
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
  );
}
