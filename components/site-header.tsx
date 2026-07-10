'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// NOTE: LogIn & LayoutDashboard are temporarily unused (Sign In / Admin disabled).
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { telHref, whatsappHref, siteConfig } from '@/lib/site-config'

/* Brand glyph for Instagram */
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.16a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  )
}

/* Brand glyph for WhatsApp */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className="fixed top-0 w-full bg-card shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/">
          <img src="/images/bajrang-logo.png" alt="Bajrang Plywood" className="h-12 sm:h-14 md:h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`relative font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                isActive(link.href)
                  ? 'text-primary after:w-full'
                  : 'text-foreground hover:text-primary after:w-0 hover:after:w-full'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          {/* TODO: Sign In & Admin are temporarily disabled — to be re-enabled later.
          <Link href="/sign-in" className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition font-medium">
            <LogIn size={18} />
            Sign In
          </Link>
          <Link href="/admin" className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition">
            <LayoutDashboard size={18} />
            Admin
          </Link>
          */}
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center text-primary hover:text-accent transition"
          >
            <InstagramIcon size={24} />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center text-primary hover:text-accent transition"
          >
            <WhatsAppIcon size={24} />
          </a>
          <a href={telHref} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition">
            <Phone size={18} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card p-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-3 py-2 font-medium transition ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary border-l-4 border-primary'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* TODO: Sign In & Admin are temporarily disabled — to be re-enabled later.
            <Link href="/sign-in" className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium">
              <LogIn size={18} />
              Sign In
            </Link>
            <Link href="/admin" className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition">
              <LayoutDashboard size={18} />
              Admin Panel
            </Link>
            */}
            <a href={telHref} className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded hover:bg-accent transition">
              <Phone size={18} />
              Call Now
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded hover:opacity-90 transition">
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
