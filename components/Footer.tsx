import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-dark-3 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <polygon points="13,1 4,13 10,13 9,21 18,9 12,9" fill="#C4F135" />
              </svg>
              <span className="font-barlow font-800 text-lg tracking-wider uppercase">
                Volta <span className="text-volt">NYC</span>
              </span>
            </div>
            <p className="text-mid text-sm leading-relaxed max-w-xs">
              Student-powered consulting for NYC small businesses. Digital equity through real work.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="section-label mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/showcase', label: 'Our Work' },
                { href: '/apply', label: 'Join Volta' },
                { href: '/partner', label: 'Work With Us' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-mid text-sm hover:text-volt transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-4">Contact</p>
            <a
              href="mailto:volta.newyork@gmail.com"
              className="text-mid text-sm hover:text-volt transition-colors duration-200 block mb-2"
            >
              volta.newyork@gmail.com
            </a>
            <p className="text-mid text-sm">New York City, NY</p>
            <div className="mt-4">
              <Link href="/partner" className="volt-btn-outline text-sm px-4 py-2">
                Partner With Us →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-3 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-mid text-xs">
            © {new Date().getFullYear()} Volta NYC. A branch of{' '}
            <a
              href="https://voltanpo.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-volt transition-colors"
            >
              voltanpo.org
            </a>
            . All rights reserved.
          </p>
          <p className="text-mid text-xs">
            Built by Volta's own tech team.
          </p>
        </div>
      </div>
    </footer>
  )
}
