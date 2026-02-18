import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Volta NYC — Student-Led Digital & Financial Services for Small Businesses",
  description:
    "Volta is a registered nonprofit placing high school and college students on real consulting projects for NYC small businesses — websites, social media, grant writing, and more.",
  metadataBase: new URL("https://nyc.voltanpo.org"),
  openGraph: {
    title: "Volta NYC",
    description: "Real projects. Real impact. Built by students.",
    url: "https://nyc.voltanpo.org",
    siteName: "Volta NYC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
