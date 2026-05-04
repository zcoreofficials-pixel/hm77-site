import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Referral Program — Earn PKR 100 Per Friend Pakistan',
  description: 'HM77 referral program Pakistan. Earn PKR 100 for every friend you refer to HM77 game. Share your referral link via WhatsApp. No limit on referrals.',
  alternates: { canonical: 'https://hm-77.com/hm77-referral' },
}

export default function ReferralPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Referral</div>
        <div className="page-hero">
          <h1>HM77 Referral Program — Earn PKR 100 Per Friend in Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Refer friends to <strong>HM77</strong> and earn PKR 100 for every successful referral. No limit on how many friends you can refer.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Join HM77 and Get Referral Link</Link>
            <Link href="/hm77-register" className="btn btn-outline">Create HM77 Account</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>How the HM77 Referral Program Works</h2>
          <p>The <strong>HM77</strong> referral program is one of the most straightforward ways to earn on the platform without playing games. Every registered HM77 player has a unique referral link available in the Referral section of the app. When you share this link with a friend and they register a new account using your link and make their first deposit, HM77 credits PKR 100 to your wallet automatically. There is no limit on the number of friends you can refer.</p>
          <h2>How to Share Your HM77 Referral Link</h2>
          <ul>
            <li>Open the HM77 app and go to the Referral section</li>
            <li>Copy your unique referral link or code</li>
            <li>Share it via WhatsApp, Facebook, Telegram, or any messaging platform</li>
            <li>When your friend registers using your link and deposits, PKR 100 is added to your wallet</li>
          </ul>
          <h2>HM77 Referral Bonus Terms</h2>
          <p>The referred friend must be a genuinely new <strong>HM77</strong> player — each mobile number can only be registered once. The referral bonus of PKR 100 is credited after the referred player makes their first deposit. The referred player also benefits from the standard 50% welcome bonus on their first deposit, making HM77 referrals attractive to both the referrer and the new player.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Get Your HM77 Referral Link</Link>
            <Link href="/hm77-bonus" className="btn btn-outline">All HM77 Bonuses</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
