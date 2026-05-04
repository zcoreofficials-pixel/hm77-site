import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Account Verification — Complete Guide Pakistan',
  description: 'Complete HM77 account verification guide for Pakistan. How to verify your HM77 account, what documents are needed, and how verification improves withdrawal limits.',
  alternates: { canonical: 'https://hm-77.com/hm77-verification' },
}

export default function VerificationPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Verification</div>
        <div className="page-hero">
          <h1>HM77 Account Verification — Complete Guide</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Everything about <strong>HM77</strong> account verification including mobile number verification, identity verification, and how verification affects your account limits.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Verify HM77 Account</Link>
            <Link href="/hm77-login" className="btn btn-outline">Login to HM77</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>HM77 Mobile Number Verification</h2>
          <p><strong>HM77</strong> verifies your mobile number during registration through OTP confirmation. This is the primary verification step and is required to activate your account. Enter the six-digit code sent to your registered Pakistani mobile number within 60 seconds of registration to complete mobile verification. Without this step, your HM77 account remains inactive.</p>
          <h2>HM77 Identity Verification</h2>
          <p>For higher withdrawal limits and enhanced account security, <strong>HM77</strong> may request identity verification. This typically involves submitting a clear photo of your CNIC. Identity verification is not required for basic account use with standard limits, but completing it unlocks higher daily withdrawal amounts and provides an additional layer of security for your account.</p>
          <h2>Benefits of Verifying Your HM77 Account</h2>
          <ul>
            <li>Higher daily withdrawal limits</li>
            <li>Faster withdrawal processing priority</li>
            <li>Enhanced account security against unauthorised access</li>
            <li>Access to VIP tier rewards and higher loyalty points</li>
            <li>Eligibility for exclusive verified player promotions</li>
          </ul>
          <h2>How to Complete HM77 Verification</h2>
          <p>Go to your <strong>HM77</strong> account settings and find the Verification or Identity section. Follow the on-screen instructions to submit the required information. Verification is reviewed and completed within 24 hours in most cases. You receive a notification in the app when your verification is approved.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Complete HM77 Verification</Link>
            <Link href="/hm77-contact" className="btn btn-outline">Contact Support</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
