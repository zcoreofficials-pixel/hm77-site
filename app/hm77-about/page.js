import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'About HM77 Game — Pakistan Real Money Gaming Platform',
  description: 'About HM77 game Pakistan. Learn about the HM77 platform, its games, payment methods, and why it is the fastest growing earning app in Pakistan.',
  alternates: { canonical: 'https://hm-77.com/hm77-about' },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / About HM77</div>
        <div className="page-hero">
          <h1>About HM77 Game — Pakistan's Fastest Growing Real Money Platform</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>The story of <strong>HM77</strong>, what the platform offers, and why thousands of Pakistani players have made it their preferred earning app.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Join HM77 Today</Link>
            <Link href="/hm77-download" className="btn btn-outline">Download HM77 App</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>What is HM77 Game?</h2>
          <p><strong>HM77</strong> is a real money gaming platform designed specifically for Pakistani players. The platform offers over 500 games across multiple categories including slots, card games like Teen Patti, live dealer tables, fishing games, crash games like Aviator, and live sports betting with a focus on cricket. All games involve real PKR stakes with winnings withdrawable to JazzCash and EasyPaisa.</p>
          <h2>HM77 Mission</h2>
          <p>The mission behind <strong>HM77</strong> is to provide Pakistani players with a gaming platform that matches their actual needs — accessible entry points, familiar payment methods, games they genuinely enjoy, and a withdrawal process that works reliably and quickly. Every feature decision on HM77 has been made with the Pakistani player in mind.</p>
          <h2>HM77 Platform Features</h2>
          <ul>
            <li>500+ games from leading providers including JILI, FunTa, and HB</li>
            <li>JazzCash and EasyPaisa support for deposits and withdrawals</li>
            <li>Minimum deposit of PKR 100 accessible to all income levels</li>
            <li>50% welcome bonus credited automatically on first deposit</li>
            <li>JazzCash withdrawals typically processing within 5-10 minutes</li>
            <li>Lightweight Android APK under 50MB compatible with all Android phones</li>
            <li>24/7 customer support via in-app Live Chat</li>
          </ul>
          <h2>Contact HM77</h2>
          <p>For any questions, issues, or feedback regarding <strong>HM77 game</strong>, contact the support team through the 24/7 Live Chat feature inside the app, or email support@hm-77.com. The team responds to all queries within a few hours during normal operating hours.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Join HM77</Link>
            <Link href="/hm77-contact" className="btn btn-outline">Contact HM77</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
