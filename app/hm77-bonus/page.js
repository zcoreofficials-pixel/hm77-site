import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Bonus — Welcome Bonus and All Promotions Pakistan',
  description: 'Complete guide to all HM77 bonuses and promotions in Pakistan. 50% welcome bonus on first deposit. Daily login bonus. Referral bonus PKR 100. No promo code needed.',
  alternates: { canonical: 'https://hm-77.com/hm77-bonus' },
}

export default function BonusPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Bonus</div>
        <div className="page-hero"><img src="/images/banner6.webp" alt="HM77 Bonus 50% Welcome Offer Pakistan JazzCash EasyPaisa" title="HM77 Bonus Pakistan" width="800" height="200" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover" }} />
          <h1>HM77 Bonus — All Promotions and Offers in Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Complete guide to every <strong>HM77</strong> bonus available in Pakistan. Welcome bonus, daily rewards, referral bonus and seasonal promotions.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Claim HM77 Bonus Now</Link>
            <Link href="/hm77-register" className="btn btn-outline">Create Account First</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>HM77 Welcome Bonus — 50% on First Deposit</h2>
          <p>The <strong>HM77</strong> welcome bonus gives every new player 50% extra on their very first deposit. This is the most generous standard welcome bonus currently available among earning apps in Pakistan. The bonus is credited automatically — no promo code, no opt-in form, no support request required. Deposit PKR 100 and play with PKR 150. Deposit PKR 1000 and your opening balance is PKR 1500. The welcome bonus applies to the first deposit only and is a one-time offer per account.</p>
          <h2>HM77 Daily Login Bonus</h2>
          <p>Returning players on <strong>HM77</strong> receive a daily login bonus simply for opening the app each day. The bonus value increases with consecutive daily logins, rewarding players who engage with the platform regularly. Check the Promotions section of the HM77 app each day to claim your daily reward.</p>
          <h2>HM77 Referral Bonus</h2>
          <p>When you refer a friend to <strong>HM77</strong> and they register and make their first deposit, you receive a PKR 100 referral bonus added to your wallet. There is no limit to how many friends you can refer. Go to the Referral section of the HM77 app to find your unique referral link and share it via WhatsApp, Facebook, or any other platform.</p>
          <h2>HM77 VIP and Loyalty Rewards</h2>
          <p>Active <strong>HM77</strong> players accumulate points that unlock VIP tiers with progressively better rewards. Higher VIP tiers include faster withdrawal processing, higher daily limits, exclusive promotions, and dedicated customer support. The more you play on HM77, the more the platform gives back.</p>
          <h2>HM77 Seasonal Promotions</h2>
          <p><strong>HM77</strong> runs special promotions during major Pakistani events including Eid ul Fitr, Eid ul Adha, and PSL season. These promotions typically include enhanced deposit bonuses, free spins on selected slots, and special cricket betting offers. Check the Promotions section of the app during these periods for the latest offers.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Claim All HM77 Bonuses</Link>
            <Link href="/hm77-promo" className="btn btn-outline">HM77 Promo Codes</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
