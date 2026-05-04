import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Withdrawal Guide — JazzCash EasyPaisa Pakistan',
  description: 'Complete HM77 withdrawal guide for Pakistan. Withdraw HM77 winnings to JazzCash and EasyPaisa in 5-10 minutes. Minimum PKR 300. Step by step instructions.',
  alternates: { canonical: 'https://hm-77.com/hm77-withdrawal' },
}

export default function WithdrawalPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Withdrawal</div>
        <div className="page-hero">
          <h1>HM77 Withdrawal — How to Cash Out to JazzCash Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Complete guide to withdrawing your <strong>HM77</strong> winnings to JazzCash and EasyPaisa. Minimum PKR 300. Arrives in 5-10 minutes.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Withdraw from HM77</Link>
            <Link href="/hm77-deposit" className="btn btn-outline">HM77 Deposit Guide</Link>
          </div>
        </div>
        <div className="page-content">
          <div className="info-box">
            <strong>HM77 Withdrawal Summary:</strong> Minimum PKR 300 · Maximum PKR 49,500 per transaction · Methods: JazzCash, EasyPaisa, Bank · Processing: 5-10 minutes
          </div>
          <h2>How to Withdraw from HM77 to JazzCash</h2>
          <p>When you are ready to cash out your <strong>HM77</strong> winnings, open the app and go to the Wallet section. Tap Withdraw. Select JazzCash as your withdrawal method. Enter your JazzCash mobile number — make sure it is active and registered. Enter the withdrawal amount. You will be asked to confirm with your withdrawal password, which you set during account setup. Tap Confirm. Your JazzCash wallet receives the funds within five to ten minutes in most cases.</p>
          <h2>HM77 Withdrawal Limits</h2>
          <ul>
            <li>Minimum withdrawal: PKR 300</li>
            <li>Maximum per transaction: PKR 49,500</li>
            <li>Daily withdrawal limit: Varies by account level</li>
            <li>Processing time: 5-10 minutes for JazzCash and EasyPaisa</li>
            <li>Bank transfer processing: Up to 24 hours</li>
          </ul>
          <h2>HM77 Withdrawal Not Processing — Solutions</h2>
          <h3>Incorrect Withdrawal Password</h3>
          <p>The withdrawal password on <strong>HM77</strong> is separate from your login password. If you have not set a withdrawal password, go to Account Settings and set one before attempting to withdraw.</p>
          <h3>JazzCash Number Not Matching</h3>
          <p>Some <strong>HM77</strong> accounts require the withdrawal number to match the registered account number. Check your account settings to confirm whether this requirement applies to your account.</p>
          <h3>Insufficient Balance</h3>
          <p>Ensure your available balance in <strong>HM77</strong> meets the minimum withdrawal amount of PKR 300 after any bonus wagering requirements are met.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Withdraw from HM77</Link>
            <Link href="/hm77-deposit" className="btn btn-outline">Make a Deposit</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
