'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/hm77-download', label: 'Download' },
    { href: '/hm77-register', label: 'Register' },
    { href: '/hm77-deposit', label: 'Deposit' },
    { href: '/hm77-bonus', label: 'Bonus' },
    { href: '/hm77-casino', label: 'Games' },
    { href: '/hm77-how-to-play', label: 'How to Play' },
    { href: '/hm77-faq', label: 'FAQ' },
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo">
          HM<span>77</span>
        </Link>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/hm77-login" className="btn btn-login btn-sm">Login</Link>
          <Link href="/go" className="btn btn-primary btn-sm">Join Now</Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px', flexShrink: 0 }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#e5e7eb', borderRadius: '2px', transition: 'all 0.2s' }}></span>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#e5e7eb', borderRadius: '2px', transition: 'all 0.2s' }}></span>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#e5e7eb', borderRadius: '2px', transition: 'all 0.2s' }}></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/hm77-login" onClick={() => setMenuOpen(false)} style={{ color: '#3577CA', fontWeight: '600' }}>
            Login to HM77
          </Link>
          <Link href="/go" onClick={() => setMenuOpen(false)} style={{ color: '#fff', background: '#3577CA', borderRadius: '6px', padding: '10px 12px', marginTop: '8px', display: 'block', textAlign: 'center', fontWeight: '700' }}>
            Join HM77 Now
          </Link>
        </div>
      )}
    </header>
  )
}
