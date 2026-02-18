import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const services = [
  { icon: "🌐", title: "Website Design & Development", desc: "Custom-built sites using modern frameworks. Mobile-friendly, accessible, and actually maintained." },
  { icon: "📱", title: "Social Media & Content", desc: "Instagram strategy, posting calendars, founder interview videos, and audience growth." },
  { icon: "💰", title: "Grant Research & Writing", desc: "We find grants your business qualifies for and help prepare the full application." },
  { icon: "🔍", title: "SEO & Online Visibility", desc: "Google Maps optimization, Yelp, Apple Maps, and search engine improvements." },
  { icon: "📊", title: "Sales & Financial Analysis", desc: "POS evaluation, transaction fee reduction, menu pricing, and inventory analysis." },
  { icon: "💳", title: "Digital Payment Setup", desc: "Help transitioning from cash-only to digital, setting up loyalty programs and online ordering." },
];

const miniShowcase = [
  { name: "Souk Al Shater", service: "Website Build", neighborhood: "Sunnyside, Queens", status: "In Progress" },
  { name: "Anatolico", service: "Social Media Management", neighborhood: "Park Slope, Brooklyn", status: "Active" },
  { name: "Higher Learning", service: "Website + SEO", neighborhood: "Chinatown, Manhattan", status: "In Progress" },
  { name: "The Painted Pot", service: "SEO + Google Visibility", neighborhood: "Park Slope, Brooklyn", status: "Active" },
];

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="bg-v-blue pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection>
            <p className="font-body text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">For businesses & BIDs</p>
            <h1
              className="font-display font-black text-white leading-none tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Free digital services<br />
              <span className="text-v-green">for NYC businesses.</span>
            </h1>
            <p className="font-body text-white/70 text-lg max-w-2xl leading-relaxed">
              Volta is a registered nonprofit. We place student teams on real projects for
              small businesses at no cost. No strings. No catch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white border-b border-v-border">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-3 gap-10 text-center">
          {[
            { step: "01", title: "Reach out", desc: "Fill out the form below or get referred by your local BID. We respond within a few days." },
            { step: "02", title: "We meet", desc: "A quick call or in-person visit to understand what you need and what's realistic." },
            { step: "03", title: "We get to work", desc: "A dedicated student team is assigned. You have one point of contact throughout." },
          ].map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.1}>
              <p className="font-display font-black text-v-green text-4xl mb-3">{s.step}</p>
              <h3 className="font-display font-bold text-v-ink text-lg mb-2">{s.title}</h3>
              <p className="font-body text-sm text-v-muted leading-relaxed">{s.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-v-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12">
            <p className="font-body text-sm font-semibold text-v-blue uppercase tracking-widest mb-3">What we offer</p>
            <h2 className="font-display font-black text-v-ink text-3xl md:text-4xl">Services — all free</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.07}>
                <div className="bg-white border border-v-border rounded-2xl p-7 project-card h-full">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-display font-bold text-v-ink mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-v-muted leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mini showcase */}
      <section className="py-16 bg-white border-y border-v-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-8">
            <h2 className="font-display font-black text-v-ink text-2xl md:text-3xl">Currently working with</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {miniShowcase.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.08}>
                <div className="border border-v-border rounded-xl p-5 bg-v-bg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-2 h-2 rounded-full bg-v-green animate-pulse" />
                    <span className="tag bg-lime-100 text-lime-700">{m.status}</span>
                  </div>
                  <h3 className="font-display font-bold text-v-ink">{m.name}</h3>
                  <p className="font-body text-xs text-v-blue font-semibold mt-1">{m.service}</p>
                  <p className="font-body text-xs text-v-muted mt-1">📍 {m.neighborhood}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 bg-v-bg" id="contact">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-10 text-center">
            <p className="font-body text-sm font-semibold text-v-green uppercase tracking-widest mb-3">Get in touch</p>
            <h2 className="font-display font-black text-v-ink text-3xl md:text-4xl mb-4">Work with us</h2>
            <p className="font-body text-v-muted max-w-xl mx-auto">
              Tell us a bit about your business and what you need. We&apos;ll follow up
              directly. If you were referred by a BID, mention that — it helps with matching.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* BID CTA */}
      <section className="py-14 bg-v-dark text-center">
        <div className="max-w-2xl mx-auto px-5">
          <AnimatedSection>
            <h2 className="font-display font-black text-white text-2xl mb-4">Are you a BID or community organization?</h2>
            <p className="font-body text-white/50 mb-6">
              We work directly with BIDs to identify businesses in your district that could use help.
              Email us to set up a conversation.
            </p>
            <a
              href="mailto:volta.newyork@gmail.com"
              className="inline-block border border-white/20 text-white font-display font-bold text-sm px-7 py-3 rounded-full hover:border-v-green hover:text-v-green transition-colors"
            >
              volta.newyork@gmail.com
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
