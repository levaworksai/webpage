"use client";

import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const stats = [
  { value: "59%", label: "Year-over-year revenue growth" },
  { value: "Days", label: "Not months — custom app delivery" },
  { value: "10x", label: "Operate like a company 10x your size" },
];

export function Results() {
  return (
    <section id="results" className="py-24 px-6 bg-dark-lighter">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Proven <span className="text-gold">results</span>
          </h2>
          <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-16">
            We do not tell you what sounds impressive. We show you what works.
          </p>
        </FadeIn>

        {/* Stats row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <motion.span
                  className="text-5xl md:text-6xl font-bold text-gold block mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-muted">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Case study card */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-dark border border-white/5">
            <span className="text-gold text-sm font-mono uppercase tracking-wider">
              Case Study
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
              Brown Sugar Bakery
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              A beloved Chicago bakery that had no digital ordering
              infrastructure. We built a custom ordering system that transformed
              their business — from phone orders and whiteboards to a fully
              automated digital operation. The result: 59% year-over-year
              revenue growth and an entirely new corporate catering revenue
              stream.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
                Custom Ordering System
              </span>
              <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
                Corporate Catering Portal
              </span>
              <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
                59% Revenue Growth
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
