"use client";

import { FadeIn } from "./FadeIn";

const principles = [
  {
    title: "Consultative, not transactional",
    description:
      "We sit at the counter with you, not across a conference table. Every engagement starts with a conversation, not a pitch.",
  },
  {
    title: "Ship fast, iterate faster",
    description:
      "Our architecture lets us build custom apps in days, not months. Get it into your hands, get feedback, iterate.",
  },
  {
    title: "Steward, not vendor",
    description:
      "A vendor delivers and disappears. We stay, monitor, optimize, and grow the relationship. Your success is our metric.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — story */}
          <FadeIn>
            <span className="text-gold text-sm font-mono uppercase tracking-wider">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Builder energy,
              <br />
              not agency polish.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                LevaWorks was co-founded by Andrés Cook and Robert Dawson —
                two enterprise veterans who believe small businesses deserve the
                same caliber of AI strategy and technology that Fortune 500
                companies get. Between them: 40+ years of experience across AI
                strategy, workflow orchestration, enterprise architecture, and
                building full native AI applications.
              </p>
              <p>
                <em>Leva</em> means lever in Italian. We bring enterprise-grade
                thinking to the SMB market — identifying problems through
                partnership, then building exactly what you need, fast. No
                templates. No one-size-fits-all platforms. Custom leverage built
                by people who have done this at the highest level.
              </p>
            </div>
          </FadeIn>

          {/* Right — principles */}
          <div className="space-y-6">
            {principles.map((principle, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="p-6 rounded-xl bg-dark-card border border-white/5">
                  <h3 className="font-semibold text-lg mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
