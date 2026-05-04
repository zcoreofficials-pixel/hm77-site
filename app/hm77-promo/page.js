import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Promo Code — Latest Promotions Pakistan 2026',
  description: 'Latest HM77 promo codes and promotions for Pakistan 2026. HM77 bonus codes, referral codes, and seasonal offers. Claim HM77 welcome bonus without any code.',
  alternates: { canonical: 'https://hm-77.com/hm77-promo' },
}

export default function PromoPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Promo Codes</div>
        <div className="page-hero">
          <h1>HM77 Promo Code — Latest Promotions and Offers Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Latest <strong>HM77</strong> promo codes and bonus offers for Pakistani players. The 50% welcome bonus requires no promo code — it is automatic.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Claim HM77 Bonus Now</Link>
            <Link href="/hm77-bonus" className="btn btn-outline">All HM77 Bonuses</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>Does HM77 Require a Promo Code?</h2>
          <p>The <strong>HM77</strong> welcome bonus of 50% on the first deposit does not require any promo code. It is applied automatically when you make your first deposit as a new player. You do not need to search for a code, enter it anywhere, or contact support to claim it. The bonus is simply part of the standard new player experience on HM77.</p>
          <h2>HM77 Referral Code</h2>
          <p>Existing <strong>HM77</strong> players can share a unique referral code with friends. When a friend registers using your referral code and makes their first deposit, both you and your friend receive bonus rewards. Find your personal HM77 referral code in the Referral section of the app.</p>
          <h2>HM77 Seasonal Promo Codes</h2>
          <p><strong>HM77</strong> periodically releases promo codes during special events including Eid, PSL season, and platform anniversaries. These codes typically offer enhanced deposit bonuses or free spins on selected slots. When HM77 releases a promo code offer, it is announced inside the app in the Promotions section and may also be shared through official HM77 social media channels.</p>
          <h2>How to Enter an HM77 Promo Code</h2>
          <p>When <strong>HM77</strong> runs a promo code campaign, the code entry field appears in the Promotions section of the app or during the deposit process. Enter the code exactly as provided, including any capital letters or numbers, before confirming your deposit to ensure the bonus is applied correctly.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Claim HM77 Bonus</Link>
            <Link href="/hm77-referral" className="btn btn-outline">HM77 Referral Program</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
