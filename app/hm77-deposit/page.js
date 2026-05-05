import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Deposit Guide — JazzCash EasyPaisa Pakistan',
  description: 'Complete HM77 deposit guide for Pakistan. Learn how to deposit via JazzCash and EasyPaisa. Minimum deposit PKR 100. Instant balance update. Step by step instructions.',
  alternates: { canonical: 'https://hm-77.com/hm77-deposit' },
}

export default function DepositPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Deposit</div>
        <div className="page-hero"><img src="/images/banner4.webp" alt="HM77 Deposit JazzCash EasyPaisa Pakistan PKR 100 Minimum" title="HM77 Deposit Pakistan" width="800" height="200" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover" }} />
          <h1>HM77 Deposit — JazzCash and EasyPaisa Guide Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Complete guide to depositing money into your <strong>HM77</strong> account via JazzCash and EasyPaisa. Minimum PKR 100. Balance updates instantly.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Deposit on HM77 Now</Link>
            <Link href="/hm77-register" className="btn btn-outline">Create HM77 Account</Link>
          </div>
        </div>
        <div className="page-content">
          <div className="info-box">
            <strong>HM77 Deposit Summary:</strong> Minimum PKR 100 · Maximum PKR 50,000 · Methods: JazzCash, EasyPaisa, Bank Transfer · Processing: Instant
          </div>
          <h2>How to Deposit in HM77 via JazzCash</h2>
          <p>Depositing into <strong>HM77</strong> via JazzCash is a straightforward process that takes about two minutes. Login to your HM77 account, go to the Wallet section, and tap Deposit. Select JazzCash as your payment method. HM77 displays a merchant number on screen. Open your JazzCash app separately, go to Send Money or Pay Bill, and send your chosen amount to that merchant number. Once the JazzCash transaction is complete, you receive a Transaction ID. Return to HM77, enter that Transaction ID in the confirmation field, and your <strong>HM77</strong> balance updates within seconds.</p>
          <h2>How to Deposit in HM77 via EasyPaisa</h2>
          <p>The EasyPaisa deposit process on <strong>HM77</strong> follows the same steps as JazzCash. Go to Wallet, tap Deposit, select EasyPaisa, note the merchant number, send the amount from your EasyPaisa app, and enter the Transaction ID back in HM77. Your balance updates instantly after the Transaction ID is confirmed.</p>
          <h2>HM77 Deposit Limits and Processing Times</h2>
          <ul>
            <li>Minimum deposit: PKR 100</li>
            <li>Maximum single deposit: PKR 50,000</li>
            <li>Processing time: Instant after Transaction ID entry</li>
            <li>Supported methods: JazzCash, EasyPaisa, Bank Transfer</li>
            <li>First deposit bonus: 50% credited automatically</li>
          </ul>
          <h2>HM77 Deposit Not Working — Common Issues</h2>
          <h3>Wrong Transaction ID</h3>
          <p>The most common deposit issue on <strong>HM77</strong> is entering an incorrect Transaction ID. Copy the ID directly from your JazzCash or EasyPaisa app rather than typing it manually to avoid errors.</p>
          <h3>Expired Merchant Number</h3>
          <p>HM77 merchant numbers refresh periodically. If your deposit is not processing, go back to the HM77 deposit screen to get a fresh merchant number rather than sending to an old one.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Deposit on HM77</Link>
            <Link href="/hm77-withdrawal" className="btn btn-outline">HM77 Withdrawal Guide</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
