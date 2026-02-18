'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/showcase', label: 'Our Work' },
  { href: '/apply', label: 'Join Volta' },
  { href: '/partner', label: 'Work With Us' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-sm border-b border-dark-3' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <polygon
              points="13,1 4,13 10,13 9,21 18,9 12,9"
              fill="#C4F135"
              className="transition-all duration-200 group-hover:fill-white"
            />
          </svg>
          <span className="font-barlow font-800 text-xl tracking-wider uppercase text-light group-hover:text-volt transition-colors duration-200">
            Volta <span className="text-volt">NYC</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-dm text-sm tracking-wide transition-colors duration-200 ${
                pathname === href
                  ? 'text-volt'
                  : 'text-mid hover:text-light'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="volt-btn text-sm px-5 py-2"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-mid hover:text-light transition-colors"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-dark-2 border-b border-dark-3 transition-all duration-300 overflow-hidden ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`font-barlow font-600 text-lg uppercase tracking-wide transition-colors duration-200 ${
                pathname === href ? 'text-volt' : 'text-mid hover:text-light'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="volt-btn text-sm w-fit px-5 py-2"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  )
}
