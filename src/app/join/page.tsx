import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

// Replace this URL with your actual Google Form link
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd7lZX7j7qunSm2c54VDYrV2GmCCHiy5JRvY3HtBp1Q2KORjg/viewform?usp=header";

const gains = [
  {
    icon: "🖥️",
    title: "Real deliverables",
    desc: "Deployed websites on GitHub, live social media campaigns, submitted grant applications — not mock projects.",
  },
  {
    icon: "📁",
    title: "A portfolio that holds up",
    desc: "Interview and say 'I built this restaurant's website' or 'I managed this brand's Instagram for a semester.'",
  },
  {
    icon: "🔗",
    title: "References that count",
    desc: "Work directly with project directors and team leads who can speak to your skills specifically.",
  },
  {
    icon: "📈",
    title: "Fast path to leadership",
    desc: "High performers move into team lead and pod manager roles quickly — we always need more of them.",
  },
  {
    icon: "🌆",
    title: "Real community impact",
    desc: "The businesses you help are real — family-owned restaurants, flower shops, tutoring centers across NYC.",
  },
  {
    icon: "🤝",
    title: "A team that ships",
    desc: "Work alongside students from Stuyvesant, CUNY schools, and other NYC institutions on real client projects.",
  },
];

const tracks = [
  {
    name: "Finance & Operations",
    icon: "📊",
    color: "border-amber-300 bg-amber-50",
    tagColor: "bg-amber-100 text-amber-800",
    skills: ["Interest in finance, accounting, or nonprofit work", "Ability to read basic financial documents", "Grant writing or research experience (preferred, not required)"],
    doWhat: ["Research and write grant applications for small businesses", "Analyze sales data and POS systems", "Help businesses reduce transaction fees and optimize operations", "Support nonprofit financial filings and documentation"],
  },
  {
    name: "Digital & Tech",
    icon: "💻",
    color: "border-blue-300 bg-blue-50",
    tagColor: "bg-blue-100 text-blue-800",
    skills: ["React.js and/or TypeScript experience", "Familiarity with GitHub", "Interest in full-stack or frontend development"],
    doWhat: ["Build and launch websites for client businesses", "Set up and optimize Google Maps and Yelp listings", "Implement SEO improvements and web accessibility (ADA)", "Deploy and manage code in a real GitHub repo"],
  },
  {
    name: "Marketing & Strategy",
    icon: "📣",
    color: "border-lime-300 bg-lime-50",
    tagColor: "bg-lime-100 text-lime-800",
    skills: ["Social media or content creation experience", "Design skills (Canva, Adobe, Figma)", "Strong writing and communication"],
    doWhat: ["Manage Instagram accounts for real businesses", "Develop and execute content strategies and posting calendars", "Film and edit founder interview content", "Run analytics and audience growth campaigns"],
  },
];

const faqs = [
  { q: "Is this paid?", a: "No — Volta is a nonprofit and all positions are volunteer. You gain experience, portfolio work, references, and leadership opportunities." },
  { q: "Do I need prior experience?", a: "It depends on the track. Tech requires some coding experience. Finance and marketing are more open to students who are still developing their skills." },
  { q: "Is it remote?", a: "Yes. All work is remote-friendly. Some members in NYC may choose to do in-person client visits, but it's not required." },
  { q: "How much time does it take?", a: "2–4 hours per week. Projects run 16–20 weeks per cohort. If you have a heavy week, communicate with your team — we understand student schedules." },
  { q: "Can college students apply?", a: "Yes. We actively recruit from CUNY schools and other NYC colleges. College students often move into team lead roles." },
  { q: "When does the cohort start?", a: "Spring 2026 cohort is currently open. Rolling admissions — apply early for priority project selection." },
];

export default function Join() {
  return (
    <>
      {/* Hero */}
      <section className="bg-v-bg pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-v-green/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection>
            <p className="font-body text-sm font-semibold text-v-green uppercase tracking-widest mb-4">Join Volta</p>
            <h1
              className="font-display font-black text-v-ink leading-none tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              Do real work.<br />
              <span className="text-v-green">Build real things.</span>
            </h1>
            <p className="font-body text-v-muted text-lg max-w-2xl leading-relaxed mb-8">
              Volta places student teams on actual consulting projects for NYC small businesses.
              High school and college students both welcome. No prior nonprofit experience needed.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-v-green text-v-ink font-display font-bold text-base px-8 py-4 rounded-full hover:bg-v-green-dark transition-all hover:scale-105 shadow-lg shadow-v-green/20"
              >
                Apply Now — It takes 5 minutes →
              </Link>
              <span className="font-body text-sm text-v-muted">Spring 2026 cohort · Rolling admissions</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What you gain — PROMINENT since unpaid */}
      <section className="py-20 bg-v-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12">
            <p className="font-body text-sm font-semibold text-v-green uppercase tracking-widest mb-3">This is unpaid. Here's why it's worth it.</p>
            <h2 className="font-display font-black text-white text-3xl md:text-4xl">What you actually walk away with</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gains.map((g, i) => (
              <AnimatedSection key={g.title} delay={i * 0.07}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-v-green/40 transition-colors">
                  <div className="text-3xl mb-4">{g.icon}</div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{g.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{g.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Three tracks detail */}
      <section className="py-20 bg-v-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-12">
            <p className="font-body text-sm font-semibold text-v-blue uppercase tracking-widest mb-3">Pick your path</p>
            <h2 className="font-display font-black text-v-ink text-3xl md:text-4xl">Three tracks</h2>
            <p className="font-body text-v-muted text-lg mt-3 max-w-xl">
              Choose the track that fits your skills. Many members contribute across tracks over time.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className={`border-2 ${t.color} rounded-2xl p-8 h-full`}>
                  <div className="text-4xl mb-4">{t.icon}</div>
                  <span className={`tag ${t.tagColor} mb-4 inline-block`}>{t.name}</span>
                  <h3 className="font-display font-bold text-v-ink text-lg mb-4">What you&apos;ll do</h3>
                  <ul className="space-y-2 mb-6">
                    {t.doWhat.map((d) => (
                      <li key={d} className="font-body text-sm text-v-muted flex items-start gap-2.5">
                        <span className="text-v-green mt-0.5 flex-shrink-0">→</span> {d}
                      </li>
                    ))}
                  </ul>
                  <h3 className="font-display font-bold text-v-ink text-sm mb-3 uppercase tracking-wide">We look for</h3>
                  <ul className="space-y-2">
                    {t.skills.map((s) => (
                      <li key={s} className="font-body text-xs text-v-muted flex items-start gap-2">
                        <span className="text-v-muted/50 mt-0.5 flex-shrink-0">·</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment + progression */}
      <section className="py-16 bg-white border-y border-v-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-8 text-center">
          {[
            { label: "Time Commitment", value: "2–4 hrs/week", sub: "Async and remote-friendly" },
            { label: "Cohort Length", value: "16–20 weeks", sub: "Spring 2026 cohort now open" },
            { label: "Team Size", value: "3–10 students", sub: "Small, focused teams per project" },
          ].map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <p className="font-body text-xs uppercase tracking-widest text-v-muted mb-2">{item.label}</p>
              <p className="font-display font-black text-v-ink text-3xl mb-1">{item.value}</p>
              <p className="font-body text-sm text-v-muted">{item.sub}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-v-bg">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="font-display font-black text-v-ink text-3xl">Questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={i * 0.06}>
                <div className="bg-white border border-v-border rounded-xl p-6">
                  <h3 className="font-display font-bold text-v-ink mb-2">{f.q}</h3>
                  <p className="font-body text-sm text-v-muted leading-relaxed">{f.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-v-green">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <AnimatedSection>
            <h2 className="font-display font-black text-v-ink text-4xl md:text-5xl mb-5">
              Ready to apply?
            </h2>
            <p className="font-body text-v-ink/70 text-lg mb-8">
              Submit your resume. That&apos;s it. We&apos;ll reach out to schedule a short
              conversation and match you with a project.
            </p>
            <Link
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-v-ink text-white font-display font-bold text-lg px-10 py-5 rounded-full hover:bg-v-ink/80 transition-all hover:scale-105 shadow-xl shadow-v-ink/20"
            >
              Apply Now →
            </Link>
            <p className="font-body text-sm text-v-ink/50 mt-5">
              Takes 5 minutes · Resume or 2 short prompts · Rolling admissions
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
