import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";

const bigNumbers = [
  { value: 12, suffix: "+", label: "Businesses Supported" },
  { value: 8, suffix: "", label: "Neighborhoods" },
  { value: 3, suffix: "", label: "Grants Researched" },
  { value: 40, suffix: "+", label: "Student Members" },
];

const bidPartners = [
  { name: "Park Slope 5th Ave BID", borough: "Brooklyn" },
  { name: "Sunnyside Shines BID", borough: "Queens" },
  { name: "Cypress Hills LDC", borough: "Brooklyn" },
  { name: "Greater Jamaica Development Corp", borough: "Queens" },
  { name: "Chinatown / Renaissance NYC", borough: "Manhattan" },
  { name: "LIC Partnership", borough: "Queens" },
  { name: "Atlantic Avenue BID", borough: "Brooklyn" },
  { name: "Bayside Village BID", borough: "Queens" },
  { name: "North Flatbush Ave BID", borough: "Brooklyn" },
];

const businesses = [
  { name: "Anatolico", type: "Turkish Home Goods", neighborhood: "Park Slope", services: ["Social Media", "Marketing"], status: "active" },
  { name: "Souk Al Shater", type: "Lebanese Restaurant", neighborhood: "Sunnyside", services: ["Website"], status: "active" },
  { name: "Higher Learning", type: "Tutoring Center", neighborhood: "Chinatown", services: ["Website", "SEO"], status: "active" },
  { name: "Juliette Floral Design", type: "Flower Shop", neighborhood: "Park Slope", services: ["Website"], status: "active" },
  { name: "The Painted Pot", type: "Arts Studio", neighborhood: "Park Slope", services: ["SEO", "Social Media"], status: "active" },
  { name: "Bayaal", type: "African Home Goods", neighborhood: "Park Slope", services: ["Website", "Social Media"], status: "active" },
  { name: "Gift Man", type: "Gift & Souvenir", neighborhood: "Park Slope", services: ["Website", "SEO"], status: "active" },
  { name: "The Lay Up", type: "Sports Bar", neighborhood: "Park Slope", services: ["Website"], status: "active" },
  { name: "Cafe Martin", type: "Coffee Shop", neighborhood: "Park Slope", services: ["Social Media"], status: "active" },
  { name: "The Gate", type: "Bar", neighborhood: "Park Slope", services: ["Social Media"], status: "active" },
  { name: "Paws in Paradise", type: "Pet Care", neighborhood: "Park Slope", services: ["Website"], status: "active" },
  { name: "Bricolage", type: "Vietnamese Restaurant", neighborhood: "Park Slope", services: ["Social Media"], status: "active" },
];

const serviceColors: Record<string, string> = {
  Website: "bg-blue-100 text-blue-700",
  "Social Media": "bg-lime-100 text-lime-700",
  Marketing: "bg-purple-100 text-purple-700",
  SEO: "bg-amber-100 text-amber-700",
  Grants: "bg-emerald-100 text-emerald-700",
};

export default function Showcase() {
  return (
    <>
      {/* Header */}
      <section className="bg-v-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection>
            <p className="font-body text-sm font-semibold text-v-green uppercase tracking-widest mb-4">Our work</p>
            <h1
              className="font-display font-black text-white leading-none tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Built in NYC.
              <br />
              <span className="text-v-green">For NYC.</span>
            </h1>
            <p className="font-body text-white/60 text-lg max-w-xl">
              Every project on this page is real work done for real businesses across
              New York City — no simulations, no mock clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Big numbers */}
      <section className="bg-v-green py-14">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
          {bigNumbers.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <div className="font-display font-black text-v-ink text-5xl mb-1">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="font-body text-xs text-v-ink/60 uppercase tracking-widest">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* BID Partners */}
      <section className="py-20 bg-v-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-10">
            <p className="font-body text-sm font-semibold text-v-blue uppercase tracking-widest mb-2">Community partnerships</p>
            <h2 className="font-display font-black text-v-ink text-3xl md:text-4xl">BID & Community Partners</h2>
            <p className="font-body text-v-muted mt-3 max-w-xl">
              We work through Business Improvement Districts and community organizations
              to reach businesses in underserved neighborhoods.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {bidPartners.map((b, i) => (
              <AnimatedSection key={b.name} delay={i * 0.05}>
                <div className="bg-white border border-v-border rounded-xl px-5 py-4 flex items-center justify-between project-card">
                  <div>
                    <p className="font-display font-bold text-v-ink text-sm">{b.name}</p>
                    <p className="font-body text-xs text-v-muted mt-0.5">{b.borough}</p>
                  </div>
                  <span className="text-v-green text-lg">⚡</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business clients */}
      <section className="py-20 bg-white border-t border-v-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-10">
            <p className="font-body text-sm font-semibold text-v-green uppercase tracking-widest mb-2">Client businesses</p>
            <h2 className="font-display font-black text-v-ink text-3xl md:text-4xl">Who We Work With</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {businesses.map((b, i) => (
              <AnimatedSection key={b.name} delay={i * 0.04}>
                <div className="border border-v-border rounded-2xl p-6 project-card bg-v-bg h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-v-ink text-lg">{b.name}</h3>
                      <p className="font-body text-sm text-v-muted">{b.type}</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-v-green mt-2 flex-shrink-0 animate-pulse" title="Active" />
                  </div>
                  <p className="font-body text-xs text-v-muted/70 mb-4 flex items-center gap-1">
                    <span>📍</span> {b.neighborhood}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {b.services.map((s) => (
                      <span key={s} className={`tag ${serviceColors[s] || "bg-gray-100 text-gray-600"}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project callout */}
      <section className="py-20 bg-v-dark">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-v-green/20 border border-v-green/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-v-green rounded-full animate-pulse" />
              <span className="font-body text-sm font-semibold text-v-green">Projects in progress</span>
            </div>
            <h2 className="font-display font-black text-white text-3xl md:text-5xl mb-6">
              More deliverables coming soon.
            </h2>
            <p className="font-body text-white/50 text-lg max-w-2xl mx-auto mb-10">
              Our Spring 2026 cohort is currently building websites for Souk Al Shater
              and Higher Learning, and running social media for Anatolico.
              Case studies will be published here as work ships.
            </p>
            <Link
              href="/partners"
              className="inline-block bg-v-green text-v-ink font-display font-bold text-base px-8 py-4 rounded-full hover:bg-v-green-dark transition-colors"
            >
              Get your business on this list →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
