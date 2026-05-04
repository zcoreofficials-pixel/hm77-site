import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Contact — Customer Support Pakistan 24/7',
  description: 'Contact HM77 game support in Pakistan. 24/7 live chat, email support, and help for all HM77 issues including deposits, withdrawals, login, and account problems.',
  alternates: { canonical: 'https://hm-77.com/hm77-contact' },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Contact</div>
        <div className="page-hero">
          <h1>HM77 Contact — Customer Support Available 24/7</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Get help with any <strong>HM77</strong> issue. 24/7 live chat support inside the app and email support for all account, payment, and game-related queries.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Open HM77 Live Chat</Link>
            <Link href="/hm77-faq" className="btn btn-outline">Check FAQ First</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How to Contact HM77 Support</h2>
          <p>The fastest way to get help with any <strong>HM77</strong> issue is through the in-app Live Chat. Open the HM77 app, tap the Support or Help icon, and start a Live Chat session. The support team responds within minutes during all hours. Live Chat is the recommended contact method for urgent issues including deposit problems, withdrawal delays, and login issues.</p>
          <h2>HM77 Email Support</h2>
          <p>For non-urgent queries or issues that require sending screenshots or documents, contact <strong>HM77</strong> by email at support@hm-77.com. Include your registered mobile number, a clear description of the issue, and any relevant Transaction IDs or screenshots. Email queries are typically responded to within a few hours.</p>
          <h2>What HM77 Support Can Help With</h2>
          <ul>
            <li>Deposit not credited to HM77 balance</li>
            <li>Withdrawal not received in JazzCash or EasyPaisa</li>
            <li>Login issues and password recovery</li>
            <li>Account verification assistance</li>
            <li>Bonus queries and promotional offers</li>
            <li>Technical issues with the HM77 app or games</li>
            <li>Account security concerns</li>
          </ul>
          <h2>Before Contacting HM77 Support</h2>
          <p>Many common <strong>HM77</strong> issues are covered in the FAQ and Troubleshooting pages on this site. Checking these resources first may resolve your issue faster than waiting for a support response. For deposit issues, have your JazzCash or EasyPaisa Transaction ID ready when contacting support as this is the first thing the team will ask for.</p>
          <div className="info-box" style={{ marginTop: '24px' }}>
            <strong>HM77 Support Email:</strong> support@hm-77.com<br />
            <strong>HM77 Live Chat:</strong> Available inside the app 24/7
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
