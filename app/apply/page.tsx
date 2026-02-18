'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

const tracks = ['Finance & Operations', 'Digital & Tech', 'Marketing & Strategy', 'Unsure — open to any']
const schools = ['Stuyvesant High School', 'Other NYC High School', 'CUNY School', 'Other College/University', 'Other']
const years = ['9th Grade / Freshman', '10th Grade / Sophomore', '11th Grade / Junior', '12th Grade / Senior', 'College Freshman', 'College Sophomore', 'College Junior', 'College Senior']

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    school: '',
    schoolOther: '',
    year: '',
    track: '',
    skills: '',
    why: '',
    availability: '',
  })
  const [resume, setResume] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    if (file && file.size > 5 * 1024 * 1024) {
      setErrorMsg('Resume must be under 5MB.')
      return
    }
    setResume(file)
    setErrorMsg('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      // Convert resume to base64
      let resumeBase64 = ''
      let resumeName = ''
      if (resume) {
        resumeName = resume.name
        const buf = await resume.arrayBuffer()
        resumeBase64 = btoa(String.fromCharCode(...new Uint8Array(buf)))
      }

      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'application',
          ...form,
          schoolFinal: form.school === 'Other NYC High School' || form.school === 'Other College/University' || form.school === 'Other'
            ? form.schoolOther : form.school,
          resumeBase64,
          resumeName,
        }),
      })

      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email volta.newyork@gmail.com directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-volt/10 border border-volt/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-volt text-2xl">⚡</span>
          </div>
          <h2 className="font-barlow font-800 text-4xl uppercase text-light mb-4">Application Received</h2>
          <p className="text-mid text-sm leading-relaxed mb-8">
            Thanks for applying to Volta. We review applications on a rolling basis and will reach out to schedule a short interview within a week or two. Keep an eye on your email.
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
          <p className="section-label mb-3">Spring 2026 Cohort</p>
          <h1 className="display-xl text-[clamp(2.8rem,6vw,5.5rem)] text-light leading-[0.92] mb-5">
            Join Volta
          </h1>
          <p className="text-mid text-lg leading-relaxed max-w-xl">
            We're looking for high school and college students who want to do real work — not mock projects. 2–4 hours a week, fully remote, rolling admissions.
          </p>
        </div>
      </section>

      {/* What to expect strip */}
      <div className="border-b border-dark-3 bg-dark-2">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['2–4 hrs/week', 'Time commitment'],
            ['Fully remote', 'No location required'],
            ['Rolling admissions', 'Apply early for priority'],
            ['Real deliverables', 'Ships to actual clients'],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="font-barlow font-700 text-lg text-volt">{val}</p>
              <p className="text-mid text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Personal Info */}
            <div>
              <h2 className="font-barlow font-700 text-2xl uppercase text-light mb-6 pb-3 border-b border-dark-3">
                About You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange}
                    required placeholder="Jane Smith"
                    className="form-input" />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="you@example.com"
                    className="form-input" />
                </div>
                <div>
                  <label className="form-label">School *</label>
                  <select name="school" value={form.school} onChange={handleChange}
                    required className="form-input">
                    <option value="" disabled>Select your school type</option>
                    {schools.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                {(form.school === 'Other NYC High School' || form.school === 'Other College/University' || form.school === 'Other') && (
                  <div>
                    <label className="form-label">School Name *</label>
                    <input name="schoolOther" value={form.schoolOther} onChange={handleChange}
                      required placeholder="Your school name"
                      className="form-input" />
                  </div>
                )}
                <div>
                  <label className="form-label">Year / Grade *</label>
                  <select name="year" value={form.year} onChange={handleChange}
                    required className="form-input">
                    <option value="" disabled>Select your year</option>
                    {years.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Track */}
            <div>
              <h2 className="font-barlow font-700 text-2xl uppercase text-light mb-6 pb-3 border-b border-dark-3">
                Track Preference
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tracks.map((t) => (
                  <label key={t} className={`flex items-center gap-3 border p-4 cursor-pointer transition-all duration-200 ${
                    form.track === t ? 'border-volt bg-volt/5 text-volt' : 'border-dark-3 text-mid hover:border-volt/40'
                  }`}>
                    <input type="radio" name="track" value={t}
                      checked={form.track === t}
                      onChange={handleChange}
                      className="accent-volt shrink-0" />
                    <span className="text-sm font-dm">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-barlow font-700 text-2xl uppercase text-light mb-6 pb-3 border-b border-dark-3">
                Experience & Availability
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="form-label">
                    Relevant Skills or Experience *
                    <span className="block text-xs text-mid/70 mt-0.5 font-normal">Tell us what you know — languages, tools, coursework, clubs, past projects. Don&apos;t undersell yourself.</span>
                  </label>
                  <textarea name="skills" value={form.skills} onChange={handleChange}
                    required rows={4}
                    placeholder="e.g. I've built two websites with React, taken AP CS, and I run my school's Instagram..."
                    className="form-input resize-none" />
                </div>
                <div>
                  <label className="form-label">
                    Why do you want to join Volta? *
                    <span className="block text-xs text-mid/70 mt-0.5 font-normal">Keep it honest and brief. What do you want to get out of this?</span>
                  </label>
                  <textarea name="why" value={form.why} onChange={handleChange}
                    required rows={3}
                    placeholder="e.g. I want to apply my coding skills to something with real impact..."
                    className="form-input resize-none" />
                </div>
                <div>
                  <label className="form-label">
                    Availability
                    <span className="block text-xs text-mid/70 mt-0.5 font-normal">When are you generally free? Any upcoming conflicts (AP exams, sports season, etc.)?</span>
                  </label>
                  <textarea name="availability" value={form.availability} onChange={handleChange}
                    rows={2}
                    placeholder="e.g. Free most afternoons, AP season in May might be tight..."
                    className="form-input resize-none" />
                </div>
              </div>
            </div>

            {/* Resume */}
            <div>
              <h2 className="font-barlow font-700 text-2xl uppercase text-light mb-6 pb-3 border-b border-dark-3">
                Resume
              </h2>
              <p className="text-mid text-sm mb-4">
                Upload your resume if you have one. PDF preferred, under 5MB. If you don&apos;t have one yet, just leave this blank.
              </p>
              <div
                onClick={() => fileRef.current?.click()}
                className={`border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-200 ${
                  resume ? 'border-volt/60 bg-volt/5' : 'border-dark-3 hover:border-volt/40'
                }`}
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFile}
                  className="hidden"
                />
                {resume ? (
                  <div>
                    <p className="text-volt font-barlow font-600 uppercase tracking-wide">{resume.name}</p>
                    <p className="text-mid text-xs mt-1">{(resume.size / 1024).toFixed(0)} KB · Click to change</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-mid text-sm">Click to upload resume</p>
                    <p className="text-mid/50 text-xs mt-1">PDF, DOC, or DOCX · Max 5MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            {errorMsg && (
              <p className="text-red-400 text-sm border border-red-400/20 bg-red-400/5 px-4 py-3">{errorMsg}</p>
            )}

            <div className="flex items-center gap-6 pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="volt-btn text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Application →'}
              </button>
              <p className="text-mid text-xs">
                Questions? Email{' '}
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
