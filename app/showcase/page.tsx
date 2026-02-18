import Link from 'next/link'
import { stats, bids, projects } from '@/data'
import AnimatedCounter from '@/components/AnimatedCounter'

const trackColors: Record<string, string> = {
  Tech: 'text-volt border-volt/30 bg-volt/5',
  Marketing: 'text-sky-400 border-sky-400/30 bg-sky-400/5',
  Finance: 'text-amber-400 border-amber-400/30 bg-amber-400/5',
}

const statusStyles: Record<string, string> = {
  Active: 'bg-volt/10 text-volt',
  Completed: 'bg-sky-400/10 text-sky-400',
  Upcoming: 'bg-dark-3 text-mid',
}

export default function ShowcasePage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 border-b border-dark-3">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Impact</p>
          <h1 className="display-xl text-[clamp(3rem,7vw,7rem)] text-light leading-[0.92] mb-6 max-w-4xl">
            Our Work
          </h1>
          <p className="text-mid text-lg max-w-2xl leading-relaxed">
            Real projects for real businesses across NYC. Every deliverable here is live, submitted, or in active development.
          </p>
        </div>
      </section>

      {/* ── Big Numbers ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-dark-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-dark-3">
            {[
              { value: stats.businesses, suffix: '+', label: 'Businesses Supported' },
              { value: stats.neighborhoods, suffix: '', label: 'Neighborhoods' },
              { value: stats.students, suffix: '+', label: 'Student Members' },
              { value: stats.grants, suffix: '', label: 'Grants Written' },
              { value: stats.bids || bids.length, suffix: '', label: 'BID Partners' },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="bg-dark-2 p-8 text-center">
                <p className="font-barlow font-800 text-5xl text-volt mb-1">
                  <AnimatedCounter target={value} suffix={suffix} />
                </p>
                <p className="text-mid text-xs uppercase tracking-widest font-barlow">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-2">Client Projects</p>
              <h2 className="font-barlow font-800 text-4xl md:text-5xl uppercase text-light">
                All Projects
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs text-mid font-barlow uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-volt inline-block" /> Active</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sky-400 inline-block" /> Completed</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-dark-3 inline-block" /> Upcoming</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.business} className="card border border-dark-3 hover:border-volt/30 transition-all duration-300 group">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="font-barlow font-800 text-2xl uppercase text-light group-hover:text-volt transition-colors duration-200">
                      {project.business}
                    </h3>
                    <p className="text-mid text-xs font-barlow uppercase tracking-wider mt-0.5">
                      {project.type} — {project.neighborhood}, {project.borough}
                    </p>
                  </div>
                  <span className={`text-xs font-barlow font-600 uppercase tracking-widest px-2.5 py-1 shrink-0 ${statusStyles[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-light/70 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Tracks */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.track.map((t) => (
                    <span key={t} className={`text-xs font-barlow font-600 uppercase tracking-widest px-2.5 py-1 border ${trackColors[t]}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="border-t border-dark-3 pt-4">
                  <p className="text-xs text-mid uppercase tracking-widest font-barlow mb-2">Deliverables</p>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((d) => (
                      <span key={d} className="text-xs text-mid border border-dark-3 px-2 py-1">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.websiteUrl || project.instagramUrl) && (
                  <div className="flex gap-4 mt-4 pt-4 border-t border-dark-3">
                    {project.websiteUrl && (
                      <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-volt hover:text-volt-dim transition-colors font-barlow uppercase tracking-widest">
                        Website →
                      </a>
                    )}
                    {project.instagramUrl && (
                      <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-volt hover:text-volt-dim transition-colors font-barlow uppercase tracking-widest">
                        Instagram →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BID Partners ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-dark-2">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-2">Community</p>
          <h2 className="font-barlow font-800 text-4xl md:text-5xl uppercase text-light mb-12">
            BID Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bids.map((bid) => (
              <div key={bid.name} className="border border-dark-3 p-5 hover:border-volt/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-barlow font-600 uppercase tracking-widest px-2 py-0.5 ${
                    bid.status === 'Active Partner' ? 'bg-volt/10 text-volt' : 'bg-dark-3 text-mid'
                  }`}>
                    {bid.status}
                  </span>
                </div>
                <p className="font-barlow font-700 text-lg uppercase text-light leading-tight">
                  {bid.name}
                </p>
                <p className="text-mid text-xs mt-1 font-barlow uppercase tracking-widest">
                  {bid.borough}
                </p>
              </div>
            ))}
          </div>

          <p className="text-mid text-sm mt-8 max-w-lg">
            We work through Business Improvement Districts and community organizations to connect with businesses that need help. Interested in partnering?{' '}
            <Link href="/partner" className="text-volt hover:text-volt-dim transition-colors">
              Get in touch →
            </Link>
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-dark-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-barlow font-800 text-3xl md:text-4xl uppercase text-light">
            Want your business on this page?
          </h2>
          <Link href="/partner" className="volt-btn text-sm shrink-0">
            Work With Volta →
          </Link>
        </div>
      </section>
    </>
  )
}
