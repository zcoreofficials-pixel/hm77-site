import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Login — Access Your HM77 Game Account Pakistan',
  description: 'HM77 login guide for Pakistan. Learn how to login to HM77 game account, fix login issues, reset password. Fast and secure HM77 account access via app or browser.',
  alternates: { canonical: 'https://hm-77.com/hm77-login' },
}

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Login</div>
        <div className="page-hero"><img src="/images/banner2.webp" alt="HM77 Login Account Access Pakistan JazzCash EasyPaisa" title="HM77 Login Pakistan" width="800" height="200" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover" }} />
          <h1>HM77 Login — How to Access Your Account in Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Complete guide to logging into your <strong>HM77 game</strong> account. Works on Android app and mobile browser. Fix common login issues instantly.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Login to HM77 Now</Link>
            <Link href="/hm77-forgot-password" className="btn btn-outline">Forgot Password</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How to Login to HM77 Game</h2>
          <p>The <strong>HM77 login</strong> process is the same whether you are using the Android app or the browser version at hm-77.com. Open the app or website, tap the Login button in the top right corner, enter your registered Pakistani mobile number in 03XXXXXXXXX format, enter your password, and tap Login. If OTP verification is required, enter the six-digit code sent to your mobile number within 60 seconds.</p>
          <h2>HM77 Login Steps</h2>
          <ul>
            <li>Open the HM77 app or visit hm-77.com in your browser</li>
            <li>Tap the Login button in the top right corner</li>
            <li>Enter your registered mobile number as 03XXXXXXXXX</li>
            <li>Enter your HM77 account password</li>
            <li>Complete OTP verification if prompted</li>
            <li>You are now logged in and can access your wallet and games</li>
          </ul>
          <h2>Common HM77 Login Problems and Solutions</h2>
          <h3>Wrong Number Format</h3>
          <p>The most common <strong>HM77 login</strong> issue is entering the phone number incorrectly. Always use 03XXXXXXXXX format. Do not add +92 or 92 at the beginning. The number must be exactly the one you used during registration.</p>
          <h3>Forgotten Password</h3>
          <p>If you have forgotten your <strong>HM77</strong> password, tap Forgot Password on the login screen. Enter your registered mobile number, receive the OTP, enter it, and create a new password. This takes under two minutes.</p>
          <h3>App Not Opening</h3>
          <p>If the HM77 app is not opening or crashing at the login screen, download the latest version of the HM77 APK from this official page and install it over your existing app. This resolves most app-level login issues without affecting your account or balance.</p>
          <h2>HM77 Login Security</h2>
          <p>Your <strong>HM77 account</strong> is protected with OTP verification and password authentication. Never share your HM77 login credentials with anyone. HM77 support staff will never ask for your password. If you receive any message asking for your password, do not respond and contact official support at support@hm-77.com.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Login to HM77</Link>
            <Link href="/hm77-register" className="btn btn-outline">Create New Account</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
