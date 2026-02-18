import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Volta NYC — Digital & Financial Equity for Small Businesses',
  description:
    'Volta places student teams on real consulting projects for NYC small businesses — building websites, running social media, and securing grants.',
  metadataBase: new URL('https://nyc.voltanpo.org'),
  openGraph: {
    title: 'Volta NYC',
    description: 'Real projects. Real impact. Student-powered consulting for NYC small businesses.',
    url: 'https://nyc.voltanpo.org',
    siteName: 'Volta NYC',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}>
      <body className="bg-dark text-light font-dm antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
