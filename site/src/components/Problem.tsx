"use client";

import { FadeIn } from "./FadeIn";

const painPoints = [
  {
    icon: "📋",
    text: "Taking orders by phone and losing track",
  },
  {
    icon: "📊",
    text: "Running operations on spreadsheets and sticky notes",
  },
  {
    icon: "💸",
    text: "Missing revenue because there's no digital ordering",
  },
  {
    icon: "🔧",
    text: "Tools that are either too simple or too expensive",
  },
];

export function Problem() {
  return (
    <section className="py-24 px-6 bg-dark-lighter">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Small businesses are{" "}
            <span className="text-gold">drowning</span>.
          </h2>
          <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-16">
            The tools available are either too simple or too expensive. There is
            no one building custom, AI-powered applications for the businesses
            that need them most.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-dark border border-white/5">
                <span className="text-2xl">{point.icon}</span>
                <p className="text-foreground">{point.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-lg mt-12 text-foreground">
            LevaWorks fills this gap.{" "}
            <span className="text-gold font-semibold">
              Not templates. Not platforms. Custom leverage.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
