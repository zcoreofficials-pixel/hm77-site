import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Game on iPhone — iOS Guide Pakistan 2026',
  description: 'How to play HM77 game on iPhone in Pakistan. HM77 iOS guide, browser access, and workarounds for playing HM77 on Apple devices.',
  alternates: { canonical: 'https://hm-77.com/hm77-ios' },
}

export default function IOSPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 on iPhone</div>
        <div className="page-hero">
          <h1>HM77 Game on iPhone — iOS Guide for Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>How to access and play <strong>HM77 game</strong> on an iPhone or iPad in Pakistan. Browser access guide and what to expect.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Open HM77 on iPhone</Link>
            <Link href="/hm77-download" className="btn btn-outline">Download for Android</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>Can You Play HM77 on iPhone?</h2>
          <p><strong>HM77</strong> is primarily designed as an Android app. However, iPhone users in Pakistan can access HM77 through the mobile browser at hm-77.com. Open Safari or Chrome on your iPhone, navigate to hm-77.com, and the mobile-optimised website loads automatically. You can register, deposit via JazzCash, play games, and withdraw through the browser version.</p>
          <h2>How to Use HM77 on iPhone via Browser</h2>
          <ul>
            <li>Open Safari on your iPhone and go to hm-77.com</li>
            <li>Tap Login or Register depending on whether you have an account</li>
            <li>Complete registration or login as normal</li>
            <li>Access your wallet and deposit via JazzCash or EasyPaisa</li>
            <li>Select games from the lobby and play directly in the browser</li>
          </ul>
          <h2>Adding HM77 to iPhone Home Screen</h2>
          <p>You can add <strong>HM77</strong> to your iPhone home screen for quick access similar to an app. Open hm-77.com in Safari, tap the Share button at the bottom of the screen, and select Add to Home Screen. This creates an icon that opens HM77 directly without going through the browser each time.</p>
          <h2>HM77 Browser vs App Experience on iPhone</h2>
          <p>The browser version of <strong>HM77</strong> on iPhone provides access to the same account, wallet, and games as the Android app. Some games that use advanced graphics may load slightly slower in a browser compared to the native Android app, but the core functionality including deposits, withdrawals, and gameplay is fully available.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Play HM77 on iPhone</Link>
            <Link href="/hm77-register" className="btn btn-outline">Create HM77 Account</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
