import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Latest Update — New Features and Games Pakistan 2026',
  description: 'Latest HM77 game updates for Pakistan 2026. New games added, features improved, bugs fixed. Download the latest HM77 APK version from official source.',
  alternates: { canonical: 'https://hm-77.com/hm77-updates' },
}

export default function UpdatesPage() {
  const year = new Date().getFullYear()
  const month = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long' })
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Updates</div>
        <div className="page-hero">
          <h1>HM77 Game Latest Update — {month}</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Latest <strong>HM77</strong> updates including new games, performance improvements, and feature additions. Always download from hm-77.com for the latest version.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/hm77-download" className="btn btn-download">Download Latest HM77 APK</Link>
            <Link href="/go" className="btn btn-primary">Play HM77 Now</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>HM77 Latest Version — {year}</h2>
          <p>The latest version of <strong>HM77</strong> includes performance improvements for budget Android devices, faster game loading times, and an updated game lobby that makes it easier to find new titles. Download the latest HM77 APK from this page to ensure you have the most current version with all improvements and security updates applied.</p>
          <h2>New Games Added to HM77</h2>
          <p><strong>HM77</strong> regularly adds new games from its network of providers. Recent additions include new JILI slots, additional fishing game variants, and expanded live dealer table options. The game library grows continuously — when you update your HM77 app, new titles appear automatically in the relevant game category sections.</p>
          <h2>How to Update HM77 App</h2>
          <p>Since <strong>HM77</strong> is distributed as an APK rather than through the Play Store, updates are not automatic. When a new version is available, the HM77 app displays a notification prompting you to update. Tap the notification or visit this page to download the latest APK. Install the new APK over your existing installation — your account, balance, and game history are all preserved during updates.</p>
          <h2>HM77 Update History</h2>
          <ul>
            <li>Latest version: Improved performance on budget Android phones, new slot titles added</li>
            <li>Previous version: Enhanced JazzCash deposit processing, UI improvements</li>
            <li>Earlier version: New fishing game variants added, login security strengthened</li>
          </ul>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/hm77-download" className="btn btn-download">Download Latest HM77</Link>
            <Link href="/go" className="btn btn-primary">Play HM77</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
