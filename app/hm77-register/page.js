import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Register — Create Your HM77 Game Account Pakistan',
  description: 'Create your free HM77 game account in Pakistan. Step by step HM77 registration guide. Get 50% welcome bonus on first deposit. JazzCash EasyPaisa supported.',
  alternates: { canonical: 'https://hm-77.com/hm77-register' },
}

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Register</div>
        <div className="page-hero">
          <h1>HM77 Register — Create Your Free Account in Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Register on <strong>HM77 game</strong> in under two minutes. All you need is your Pakistani mobile number. New accounts get 50% welcome bonus automatically.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Register on HM77 Now</Link>
            <Link href="/hm77-download" className="btn btn-outline">Download HM77 First</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How to Register on HM77 Game</h2>
          <p>Creating an <strong>HM77</strong> account is one of the quickest registration processes among all earning apps in Pakistan. You only need your Pakistani mobile number — no email address, no national ID, no complicated forms. The entire process from opening the app to having an active account with a welcome bonus ready to claim takes under two minutes.</p>
          <h3>Step 1 — Open HM77 App</h3>
          <p>Download the <strong>HM77 APK</strong> from this page and install it. Open the app and tap Register on the welcome screen.</p>
          <h3>Step 2 — Enter Your Mobile Number</h3>
          <p>Enter your Pakistani mobile number in 03XXXXXXXXX format. This number becomes your HM77 login credential and the number where OTP verification codes are sent. Make sure it is a number you have active access to.</p>
          <h3>Step 3 — Create a Password</h3>
          <p>Create a strong password for your <strong>HM77 account</strong>. Use a combination of letters and numbers. Do not use the same password you use for your JazzCash or EasyPaisa account.</p>
          <h3>Step 4 — Verify with OTP</h3>
          <p>HM77 sends a six-digit OTP to your mobile number. Enter it within 60 seconds to verify your number and activate your account.</p>
          <h3>Step 5 — Make First Deposit</h3>
          <p>Your account is now active. Go to Wallet, tap Deposit, and make your first deposit via JazzCash or EasyPaisa. The 50% welcome bonus is credited automatically the moment your first deposit clears.</p>
          <h2>HM77 Registration Requirements</h2>
          <p>To register on <strong>HM77 game</strong> in Pakistan you need an active Pakistani mobile number, an Android phone with the HM77 APK installed, and a JazzCash or EasyPaisa account for deposits and withdrawals. That is all. There is no age verification document required at registration.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Register on HM77</Link>
            <Link href="/hm77-login" className="btn btn-outline">Already have account? Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
