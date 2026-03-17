"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const submitContact = useMutation(api.contacts.submit);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContact(form);
      setSubmitted(true);
      setForm({ name: "", email: "", business: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-dark-lighter">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Let&apos;s <span className="text-gold">talk</span>
          </h2>
          <p className="text-muted text-center text-lg mb-12">
            30-minute free consultation. We listen first, then tell you exactly
            what we can build.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          {submitted ? (
            <div className="text-center py-12 px-6 rounded-2xl bg-dark border border-gold/20">
              <span className="text-gold text-4xl block mb-4">&#10003;</span>
              <h3 className="text-xl font-bold mb-2">Message received</h3>
              <p className="text-muted">
                We will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="you@business.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="business"
                  className="block text-sm text-muted mb-1.5"
                >
                  Business
                </label>
                <input
                  id="business"
                  type="text"
                  required
                  value={form.business}
                  onChange={(e) =>
                    setForm({ ...form, business: e.target.value })
                  }
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Your business name"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted mb-1.5"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  placeholder="Tell us about your business and what you're looking to solve..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold hover:bg-gold-light disabled:opacity-50 text-dark font-semibold py-3 rounded-lg transition-colors text-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
