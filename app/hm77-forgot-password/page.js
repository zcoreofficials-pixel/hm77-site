import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Forgot Password — Reset HM77 Account Password Pakistan',
  description: 'Reset your HM77 game password in Pakistan. Step by step guide to recover HM77 account access. OTP verification password reset guide.',
  alternates: { canonical: 'https://hm-77.com/hm77-forgot-password' },
}

export default function ForgotPasswordPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Forgot Password</div>
        <div className="page-hero">
          <h1>HM77 Forgot Password — How to Reset Your Account</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Forgot your <strong>HM77</strong> password? Reset it in under two minutes using your registered mobile number and OTP verification.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Reset HM77 Password</Link>
            <Link href="/hm77-login" className="btn btn-outline">Back to Login</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How to Reset HM77 Password</h2>
          <p>Resetting your <strong>HM77</strong> password takes under two minutes. Open the HM77 app or visit hm-77.com, tap Login, then tap Forgot Password below the login form. Enter your registered Pakistani mobile number in 03XXXXXXXXX format. HM77 sends a six-digit OTP to that number via SMS. Enter the OTP within 60 seconds. You will then be prompted to create a new password. Enter your new password, confirm it, and tap Save. Your new password is active immediately.</p>
          <h2>HM77 Password Reset Steps</h2>
          <ul>
            <li>Open HM77 app or visit hm-77.com</li>
            <li>Tap Login then Forgot Password</li>
            <li>Enter your registered mobile number as 03XXXXXXXXX</li>
            <li>Receive OTP via SMS and enter it within 60 seconds</li>
            <li>Create and confirm your new password</li>
            <li>Login with your new password immediately</li>
          </ul>
          <h2>HM77 Password Reset Not Working</h2>
          <h3>OTP Not Received</h3>
          <p>If you do not receive the <strong>HM77</strong> OTP within two minutes, check that you entered the correct mobile number and that your phone has network signal. Tap Resend OTP if the option is available. If you still do not receive the OTP, contact HM77 support through Live Chat.</p>
          <h3>Wrong Mobile Number</h3>
          <p>If you no longer have access to the mobile number registered with your <strong>HM77</strong> account, contact HM77 customer support directly through the Live Chat in the app to verify your identity and recover access to your account.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Reset HM77 Password</Link>
            <Link href="/hm77-contact" className="btn btn-outline">Contact HM77 Support</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
