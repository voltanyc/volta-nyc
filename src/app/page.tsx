import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";

const stats = [
  { value: 12, suffix: "+", label: "Businesses Supported" },
  { value: 8, suffix: "", label: "NYC Neighborhoods" },
  { value: 40, suffix: "+", label: "Student Members" },
  { value: 3, suffix: "", label: "Service Tracks" },
];

const tracks = [
  {
    icon: "📊",
    name: "Finance & Operations",
    color: "bg-amber-50 border-amber-100",
    accent: "bg-amber-400",
    items: ["Grant research & writing", "Revenue & sales analysis", "POS & payment optimization", "Operational consulting"],
  },
  {
    icon: "💻",
    name: "Digital & Tech",
    color: "bg-blue-50 border-blue-100",
    accent: "bg-v-blue",
    items: ["Website design & development", "SEO & Google Maps visibility", "Web accessibility (ADA)", "Cloud & security basics"],
  },
  {
    icon: "📣",
    name: "Marketing & Strategy",
    color: "bg-lime-50 border-lime-100",
    accent: "bg-v-green",
    items: ["Social media management", "Founder storytelling & video", "Content creation & strategy", "Audience growth analytics"],
  },
];

const currentProjects = [
  {
    name: "Souk Al Shater",
    type: "Lebanese Restaurant",
    neighborhood: "Sunnyside, Queens",
    service: "Website",
    color: "bg-orange-400",
  },
  {
    name: "Anatolico",
    type: "Turkish Home Goods",
    neighborhood: "Park Slope, Brooklyn",
    service: "Social Media",
    color: "bg-v-green",
  },
  {
    name: "Higher Learning",
    type: "Tutoring Center",
    neighborhood: "Chinatown, Manhattan",
    service: "Website",
    color: "bg-v-blue",
  },
];

const marqueeItems = [
  "Souk Al Shater · Sunnyside",
  "Anatolico · Park Slope",
  "Higher Learning · Chinatown",
  "Juliette Floral · Park Slope",
  "The Painted Pot · Park Slope",
  "Bayaal · Park Slope",
  "Gift Man · Park Slope",
  "The Lay Up · Park Slope",
  "Bricolage · Park Slope",
  "Cafe Martin · Park Slope",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-v-bg pt-16">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-60" />

        {/* Green glow top-right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-v-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-v-blue/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center px-5 max-w-4xl mx-auto">
          {/* Logo */}
          <div
            className="mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <Image
              src="/logo.png"
              alt="Volta"
              width={72}
              height={72}
              className="object-contain"
              priority
            />
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black text-v-ink leading-none tracking-tighter mb-6 opacity-0 animate-fade-up"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              animationDelay: "0.2s",
              animationFillMode: "forwards",
            }}
          >
            VOLTA
            <span className="text-v-green">.</span>
            <br />
            <span className="text-v-green">NYC</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-lg md:text-xl text-v-muted max-w-2xl leading-relaxed mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            High school and college students building websites, running social
            media, and writing grants for NYC small businesses.{" "}
            <span className="text-v-ink font-semibold">For free.</span>
          </p>

          {/* CTAs */}
          <div
            className="flex gap-4 flex-wrap justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <Link
              href="/join"
              className="bg-v-green text-v-ink font-display font-bold text-base px-8 py-4 rounded-full hover:bg-v-green-dark transition-all hover:scale-105 shadow-lg shadow-v-green/20"
            >
              Apply to Join →
            </Link>
            <Link
              href="/partners"
              className="border-2 border-v-blue text-v-blue font-display font-bold text-base px-8 py-4 rounded-full hover:bg-v-blue hover:text-white transition-all"
            >
              Partner With Us
            </Link>
          </div>

          {/* Trust badge */}
          <div
            className="mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          >
            <span className="inline-flex items-center gap-2 bg-white border border-v-border rounded-full px-4 py-2 text-xs font-body font-semibold text-v-muted">
              <span className="w-2 h-2 rounded-full bg-v-green animate-pulse" />
              Registered nonprofit · NYC Spring 2026 cohort open
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-body text-v-muted/60 tracking-widest uppercase">scroll</span>
          <div className="w-5 h-8 border-2 border-v-muted/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-1.5 bg-v-muted/40 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div className="bg-white border-y border-v-border py-4 overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="font-body text-sm text-v-muted font-medium px-8 whitespace-nowrap">
              {item}
              <span className="text-v-green mx-8">⚡</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="bg-v-dark py-20">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <AnimatedSection key={s.label} className="text-center">
              <div className="font-display font-black text-5xl md:text-6xl text-v-green mb-2">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="font-body text-xs uppercase tracking-widest text-white/40">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── THREE TRACKS ─────────────────────────────────────── */}
      <section className="py-24 bg-v-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-14">
            <p className="font-body text-sm font-semibold text-v-green uppercase tracking-widest mb-3">What we do</p>
            <h2 className="font-display font-black text-v-ink" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Three tracks.<br />Real work.
            </h2>
            <p className="font-body text-v-muted text-lg mt-3 max-w-xl">
              Every project delivers something that actually matters to the business.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {tracks.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className={`${t.color} border rounded-2xl p-8 h-full project-card`}>
                  <div className="text-4xl mb-5">{t.icon}</div>
                  <h3 className="font-display font-bold text-v-ink text-lg mb-4">{t.name}</h3>
                  <ul className="space-y-2.5">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 font-body text-sm text-v-muted">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${t.accent}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENT PROJECTS ─────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-v-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-10 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-body text-sm font-semibold text-v-green uppercase tracking-widest mb-2">Currently active</p>
              <h2 className="font-display font-black text-v-ink text-3xl md:text-4xl">In the field right now</h2>
            </div>
            <Link href="/showcase" className="font-body text-sm font-semibold text-v-blue hover:underline">
              See all work →
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {currentProjects.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <div className="border border-v-border rounded-2xl overflow-hidden project-card bg-v-bg">
                  <div className={`${p.color} h-2`} />
                  <div className="p-6">
                    <span className="tag bg-v-border text-v-muted mb-4 inline-block">{p.service}</span>
                    <h3 className="font-display font-bold text-v-ink text-xl mb-1">{p.name}</h3>
                    <p className="font-body text-sm text-v-muted">{p.type}</p>
                    <p className="font-body text-xs text-v-muted/70 mt-2 flex items-center gap-1">
                      <span>📍</span> {p.neighborhood}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL CTA ─────────────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[400px]">
        {/* Students */}
        <AnimatedSection
          direction="left"
          className="bg-v-green flex flex-col justify-center p-12 md:p-16"
        >
          <p className="font-display font-bold text-v-ink/60 text-sm uppercase tracking-widest mb-4">For students</p>
          <h2 className="font-display font-black text-v-ink text-3xl md:text-4xl leading-tight mb-4">
            Build a portfolio<br />on real projects.
          </h2>
          <p className="font-body text-v-ink/70 mb-8 max-w-sm">
            2–4 hours a week. Deployed websites, published content, submitted grants.
            High school and college students welcome.
          </p>
          <Link
            href="/join"
            className="inline-block bg-v-ink text-white font-display font-bold text-base px-8 py-4 rounded-full hover:bg-v-ink/80 transition-colors self-start"
          >
            Apply Now →
          </Link>
        </AnimatedSection>

        {/* Businesses */}
        <AnimatedSection
          direction="right"
          className="bg-v-blue flex flex-col justify-center p-12 md:p-16"
        >
          <p className="font-display font-bold text-white/60 text-sm uppercase tracking-widest mb-4">For businesses</p>
          <h2 className="font-display font-black text-white text-3xl md:text-4xl leading-tight mb-4">
            Get real help.<br />At no cost.
          </h2>
          <p className="font-body text-white/70 mb-8 max-w-sm">
            We work with small businesses across NYC on websites, social media,
            grants, and more. Referred by your local BID or apply directly.
          </p>
          <Link
            href="/partners"
            className="inline-block bg-white text-v-blue font-display font-bold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-colors self-start"
          >
            Get Started →
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
