import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Troubleshooting — Fix Common Problems Pakistan',
  description: 'Fix common HM77 problems in Pakistan. HM77 app not opening, login issues, deposit not working, withdrawal delayed. Step by step solutions for all issues.',
  alternates: { canonical: 'https://hm-77.com/hm77-troubleshooting' },
}

export default function TroubleshootingPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Troubleshooting</div>
        <div className="page-hero">
          <h1>HM77 Troubleshooting — Fix All Common Problems</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Solutions to every common <strong>HM77</strong> problem including app crashes, login failures, deposit issues, and withdrawal delays.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/hm77-contact" className="btn btn-primary">Contact HM77 Support</Link>
            <Link href="/hm77-faq" className="btn btn-outline">View HM77 FAQ</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>HM77 App Not Opening or Crashing</h2>
          <p>If the <strong>HM77</strong> app is not opening or keeps crashing, the most reliable solution is to download the latest APK from this page and install it over your existing app. This updates the app to the current version without affecting your account. Also check that your phone has enough storage space — HM77 needs at least 100MB of free storage to run properly.</p>
          <h2>HM77 Login Not Working</h2>
          <p>If you cannot log into <strong>HM77</strong>, verify that you are entering your mobile number in 03XXXXXXXXX format without the country code. Check that your password is correct — it is case sensitive. If you have forgotten your password, use the Forgot Password option on the login screen. If the issue persists after resetting your password, download the latest HM77 APK from this page.</p>
          <h2>HM77 Deposit Not Showing</h2>
          <p>If your <strong>HM77</strong> deposit is not reflecting in your balance, first confirm that the JazzCash or EasyPaisa transaction was successful by checking your mobile wallet transaction history. If the transaction was successful, ensure you entered the correct Transaction ID in HM77. Transaction IDs are case sensitive — copy them directly from the JazzCash or EasyPaisa app rather than typing manually. If the balance still does not update within 15 minutes, contact HM77 support with your Transaction ID.</p>
          <h2>HM77 Withdrawal Delayed</h2>
          <p>If your <strong>HM77</strong> withdrawal has not arrived within 30 minutes, check that you entered the correct JazzCash or EasyPaisa number. Verify that your mobile wallet account is active and can receive transfers. During peak hours, withdrawals may take slightly longer than usual. If the withdrawal has not arrived after one hour, contact HM77 support through the in-app Live Chat with your withdrawal reference number.</p>
          <h2>HM77 Games Not Loading</h2>
          <p>If games are not loading on <strong>HM77</strong>, check your internet connection first. HM77 requires a stable connection to load game graphics. Switch between WiFi and mobile data to see if one performs better. If individual games are not loading while others work normally, that specific game may be temporarily under maintenance — try again after a few minutes.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/hm77-contact" className="btn btn-primary">Contact HM77 Support</Link>
            <Link href="/hm77-download" className="btn btn-outline">Reinstall HM77 App</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
