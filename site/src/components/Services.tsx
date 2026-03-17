"use client";

import { FadeIn } from "./FadeIn";

const services = [
  {
    level: "01",
    title: "The Digital Front Door",
    description:
      "Custom website build — mobile-first, conversion-optimized, brand-aligned. The entry point that establishes trust and gives us visibility into your real problems.",
    details: ["Custom Shopify build", "Mobile-first design", "2–4 week delivery"],
    price: "Starting at $750",
  },
  {
    level: "02",
    title: "Custom Commerce Apps",
    description:
      "AI-powered applications built to solve specific bottlenecks. Corporate gifting portals, catering systems, inventory management, production planning — built in days, not months.",
    details: [
      "AI-powered solutions",
      "Headless architecture",
      "1–4 week delivery",
    ],
    price: "Starting at $1,500",
  },
  {
    level: "03",
    title: "The Steward Retainer",
    description:
      "Ongoing digital stewardship — performance optimization, app maintenance, strategic consultation, and new app development as needs emerge. We are the steward of your digital presence.",
    details: [
      "Performance optimization",
      "Strategic consultation",
      "Continuous development",
    ],
    price: "Starting at $500/mo",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What we <span className="text-gold">build</span>
          </h2>
          <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-16">
            Every client relationship starts with trust and expands naturally.
            Each level reveals the next problem to solve.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="group relative p-8 rounded-2xl bg-dark-card border border-white/5 hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                <span className="text-gold font-mono text-sm mb-4 block">
                  {service.level}
                </span>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <p className="text-gold font-semibold text-sm mt-auto">
                  {service.price}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
