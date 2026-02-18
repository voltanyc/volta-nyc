'use client'

import { useState } from 'react'
import Link from 'next/link'

const serviceOptions = [
  'Website (build or redesign)',
  'SEO & Google Maps optimization',
  'Social media management',
  'Founder storytelling / content',
  'Grant research & applications',
  'Sales data analysis',
  'POS & payment systems',
  'Other / Not sure yet',
]

export default function PartnerPage() {
  const [form, setForm] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    type: '',
    neighborhood: '',
    services: [] as string[],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'inquiry', ...form, services: form.services.join(', ') }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Email us directly at volta.newyork@gmail.com.')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-volt/10 border border-volt/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-volt text-2xl">⚡</span>
          </div>
          <h2 className="font-barlow font-800 text-4xl uppercase text-light mb-4">Message Received</h2>
          <p className="text-mid text-sm leading-relaxed mb-8">
            Thanks for reaching out. We&apos;ll be in touch within 2–3 business days to schedule an intro call and discuss how we can help.
          </p>
          <Link href="/" className="volt-btn text-sm">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 border-b border-dark-3">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-3">For Businesses & Organizations</p>
          <h1 className="display-xl text-[clamp(2.8rem,6vw,5.5rem)] text-light leading-[0.92] mb-5">
            Work With Us
          </h1>
          <p className="text-mid text-lg leading-relaxed max-w-xl">
            Volta provides free digital, financial, and marketing services to NYC small businesses. Tell us about your organization and what you need — we&apos;ll take it from there.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-14 px-6 bg-dark-2 border-b border-dark-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Digital & Tech',
                items: ['Website build or redesign', 'Google Maps & Yelp optimization', 'Web accessibility (ADA)', 'QR multilingual menus'],
              },
              {
                label: 'Finance & Operations',
                items: ['Grant research & applications', 'Revenue and sales analysis', 'POS cost reduction', 'Digital payment setup'],
              },
              {
                label: 'Marketing & Strategy',
                items: ['Social media management', 'Founder storytelling content', 'Content strategy & calendar', 'Instagram growth'],
              },
            ].map(({ label, items }) => (
              <div key={label} className="border border-dark-3 p-5">
                <p className="font-barlow font-700 text-lg uppercase text-volt mb-3">{label}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-mid">
                      <span className="text-volt shrink-0 mt-0.5">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-mid text-sm mt-6">
            All services are <span className="text-volt font-600">completely free</span> for your business. We&apos;re a nonprofit — no fees, no strings attached.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-barlow font-700 text-3xl uppercase text-light mb-8">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Org Info */}
            <div>
              <h3 className="font-barlow font-700 text-xl uppercase text-light mb-5 pb-3 border-b border-dark-3">
                Your Organization
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="form-label">Business or Organization Name *</label>
                  <input name="orgName" value={form.orgName} onChange={handleChange}
                    required placeholder="e.g. Anatolico, Park Slope 5th Ave BID"
                    className="form-input" />
                </div>
                <div>
                  <label className="form-label">Your Name *</label>
                  <input name="contactName" value={form.contactName} onChange={handleChange}
                    required placeholder="Your name"
                    className="form-input" />
                </div>
                <div>
                  <label className="form-label">Type *</label>
                  <select name="type" value={form.type} onChange={handleChange}
                    required className="form-input">
                    <option value="" disabled>Select type</option>
                    <option>Small Business</option>
                    <option>Restaurant / Food & Beverage</option>
                    <option>Retail Store</option>
                    <option>Service Business</option>
                    <option>Business Improvement District (BID)</option>
                    <option>Nonprofit / Community Org</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="you@yourbusiness.com"
                    className="form-input" />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="(212) 555-0100"
                    className="form-input" />
                </div>
                <div className="md:col-span-2">
                  <label className="form-label">Neighborhood / Location</label>
                  <input name="neighborhood" value={form.neighborhood} onChange={handleChange}
                    placeholder="e.g. Park Slope, Brooklyn"
                    className="form-input" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-barlow font-700 text-xl uppercase text-light mb-5 pb-3 border-b border-dark-3">
                What Do You Need?
              </h3>
              <p className="text-mid text-sm mb-4">Select all that apply. Don&apos;t worry if you&apos;re not sure — we&apos;ll figure it out together.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={`text-left px-4 py-3 border text-sm transition-all duration-200 ${
                      form.services.includes(s)
                        ? 'border-volt bg-volt/5 text-volt'
                        : 'border-dark-3 text-mid hover:border-volt/40 hover:text-light'
                    }`}
                  >
                    <span className="mr-2">{form.services.includes(s) ? '✓' : '+'}</span>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <h3 className="font-barlow font-700 text-xl uppercase text-light mb-5 pb-3 border-b border-dark-3">
                Anything Else?
              </h3>
              <label className="form-label">
                Tell us more about your situation
                <span className="block text-xs text-mid/70 mt-0.5 font-normal">
                  What&apos;s your biggest challenge right now? What have you tried before? The more context, the better.
                </span>
              </label>
              <textarea name="message" value={form.message} onChange={handleChange}
                rows={4}
                placeholder="e.g. We've been open for 10 years but we don't show up on Google Maps at all..."
                className="form-input resize-none" />
            </div>

            {errorMsg && (
              <p className="text-red-400 text-sm border border-red-400/20 bg-red-400/5 px-4 py-3">{errorMsg}</p>
            )}

            <div className="flex items-center gap-6 pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="volt-btn text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
              <p className="text-mid text-xs">
                Or email us at{' '}
                <a href="mailto:volta.newyork@gmail.com" className="text-volt hover:text-volt-dim">
                  volta.newyork@gmail.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
