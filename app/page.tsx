import Link from 'next/link'
import AnimatedCounter from '@/components/AnimatedCounter'
import { stats, projects, tracks, ticker } from '@/data'

export default function HomePage() {
  const activeProjects = projects.filter((p) => p.status === 'Active')

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#C4F135 1px, transparent 1px), linear-gradient(90deg, #C4F135 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-volt/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full">
          <p className="section-label mb-6">New York City — Spring 2026</p>

          <h1 className="display-xl text-[clamp(3.5rem,9vw,9rem)] text-light mb-6 max-w-5xl leading-[0.92]">
            Real work for{' '}
            <span className="text-volt">real</span>{' '}
            businesses.
          </h1>

          <p className="text-mid text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-dm">
            Volta places student teams on actual projects — building websites, running social media, and securing grants for NYC small businesses. No simulations. The work ships.
          </p>

          <div className="flex flex-wrap gap-4 mb-20">
            <Link href="/apply" className="volt-btn text-base">
              Join the team →
            </Link>
            <Link href="/partner" className="volt-btn-outline text-base">
              Work with us
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-dark-3">
            {[
              { value: stats.businesses, suffix: '+', label: 'Businesses Supported' },
              { value: stats.neighborhoods, suffix: '', label: 'NYC Neighborhoods' },
              { value: stats.students, suffix: '+', label: 'Student Members' },
              { value: stats.grants, suffix: '', label: 'Grants Written' },
            ].map(({ value, suffix, label }, i) => (
              <div
                key={label}
                className={`p-6 md:p-8 ${i < 3 ? 'border-r border-dark-3' : ''} ${i >= 2 ? 'border-t md:border-t-0 border-dark-3' : ''}`}
              >
                <p className="font-barlow font-800 text-[clamp(2.5rem,5vw,4rem)] text-volt leading-none mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </p>
                <p className="text-mid text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neighborhood Ticker ──────────────────────────────────────────── */}
      <div className="ticker-wrap border-y border-dark-3 py-3 overflow-hidden">
        <div className="ticker-inner flex whitespace-nowrap animate-ticker">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 font-barlow font-600 text-sm uppercase tracking-widest text-mid">
              {item}
              <span className="text-volt text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Active Projects ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-2">Currently Shipping</p>
              <h2 className="font-barlow font-800 text-4xl md:text-5xl uppercase text-light">
                Active Projects
              </h2>
            </div>
            <Link href="/showcase" className="volt-btn-outline text-sm px-4 py-2 hidden md:flex">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeProjects.map((project) => (
              <div key={project.business} className="card group">
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-volt/10 text-volt text-xs font-barlow font-600 uppercase tracking-widest px-2.5 py-1">
                    {project.track.join(' + ')}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-volt mt-1.5 animate-pulse" />
                </div>
                <h3 className="font-barlow font-700 text-2xl uppercase text-light mb-1 group-hover:text-volt transition-colors duration-200">
                  {project.business}
                </h3>
                <p className="text-mid text-xs mb-3 font-barlow uppercase tracking-wider">
                  {project.type} — {project.neighborhood}, {project.borough}
                </p>
                <p className="text-light/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.deliverables.map((d) => (
                    <span key={d} className="text-xs text-mid border border-dark-3 px-2 py-1">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/showcase" className="volt-btn-outline text-sm px-4 py-2">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-dark-2">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-2">What We Do</p>
          <h2 className="font-barlow font-800 text-4xl md:text-5xl uppercase text-light mb-12">
            Three Tracks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tracks.map((track) => (
              <div key={track.name} className="border border-dark-3 p-8 hover:border-volt/40 transition-all duration-300 group">
                <p className="text-4xl mb-6">{track.icon}</p>
                <h3 className="font-barlow font-800 text-2xl uppercase text-light mb-5 group-hover:text-volt transition-colors duration-200">
                  {track.name}
                </h3>
                <ul className="space-y-2 mb-6">
                  {track.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-mid">
                      <span className="text-volt mt-0.5">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-light/50 leading-relaxed border-t border-dark-3 pt-4">
                  {track.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For students */}
            <div>
              <p className="section-label mb-2">For Students</p>
              <h2 className="font-barlow font-800 text-4xl uppercase text-light mb-8">
                How to Join
              </h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Apply', desc: 'Submit your resume or answer two short prompts. Takes 10 minutes. We review on a rolling basis.' },
                  { step: '02', title: 'Interview', desc: 'A 20-minute call with our program directors. We want to understand your track interest and goals.' },
                  { step: '03', title: 'Get Matched', desc: 'You\'re placed on a small team (3-5 people) and assigned a real client project within your track.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-5">
                    <span className="font-barlow font-800 text-volt text-2xl leading-none mt-0.5 shrink-0">
                      {step}
                    </span>
                    <div>
                      <p className="font-barlow font-700 text-xl uppercase text-light mb-1">{title}</p>
                      <p className="text-mid text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/apply" className="volt-btn text-sm">
                  Apply Now →
                </Link>
              </div>
            </div>

            {/* For businesses */}
            <div>
              <p className="section-label mb-2">For Businesses</p>
              <h2 className="font-barlow font-800 text-4xl uppercase text-light mb-8">
                How We Help
              </h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Discovery', desc: 'We visit your business or schedule a call to understand what you need most — website, social media, grants, or operations.' },
                  { step: '02', title: 'Matched Team', desc: 'We assign a small, dedicated team from the right track. One point of contact manages the relationship.' },
                  { step: '03', title: 'Delivery', desc: 'Work is delivered on a clear timeline. We hand off everything you need to maintain it after we\'re done — always at no cost.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-5">
                    <span className="font-barlow font-800 text-volt text-2xl leading-none mt-0.5 shrink-0">
                      {step}
                    </span>
                    <div>
                      <p className="font-barlow font-700 text-xl uppercase text-light mb-1">{title}</p>
                      <p className="text-mid text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/partner" className="volt-btn-outline text-sm">
                  Get in Touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-volt">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-barlow font-800 text-4xl md:text-5xl uppercase text-dark leading-tight">
              Ready to build something real?
            </h2>
            <p className="text-dark/70 mt-2 text-lg">
              Join our Spring 2026 cohort. 2–4 hours a week. Fully remote.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-volt font-barlow font-700 text-lg uppercase tracking-wide hover:bg-dark-2 transition-colors duration-200"
            >
              Apply Now
            </Link>
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-dark text-dark font-barlow font-700 text-lg uppercase tracking-wide hover:bg-dark hover:text-volt transition-colors duration-200"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
