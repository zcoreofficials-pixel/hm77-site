import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Casino Games — Slots Teen Patti Dragon Tiger Pakistan',
  description: 'Complete guide to all HM77 casino games in Pakistan. Slots, Teen Patti, Dragon Tiger, Fishing Games, Aviator, Cricket Betting. 500+ real money games on HM77.',
  alternates: { canonical: 'https://hm-77.com/hm77-casino' },
}

export default function CasinoPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 Casino Games</div>
        <div className="page-hero">
          <h1>HM77 Casino Games — 500+ Real Money Games Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Complete overview of every game category available on <strong>HM77</strong>. Slots, card games, live casino, fishing, crash games and sports betting.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Play HM77 Games Now</Link>
            <Link href="/hm77-download" className="btn btn-outline">Download HM77 App</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>HM77 Teen Patti</h2>
          <p><strong>HM77</strong> Teen Patti is the most played game on the platform among Pakistani users. The classic three-card game runs around the clock with tables at every stake level. Whether you are a casual player who enjoys a few rounds or a serious player who studies patterns and manages bankroll carefully, HM77 Teen Patti has a table for you. Winnings are credited to your HM77 wallet in real time and can be withdrawn to JazzCash immediately.</p>
          <h2>HM77 Slot Games</h2>
          <p>Over 200 slot machines are available on <strong>HM77</strong> from providers including JILI, FunTa, and HB. The catalogue includes classic three-reel slots, modern video slots with multiple bonus features, and progressive jackpot slots where a single spin can return thousands of times the bet. Popular titles include Fortune Gems, Money Coming, Golden Empire, and Crazy 777. Most HM77 slots allow bets starting from PKR 1 per spin.</p>
          <h2>HM77 Dragon Tiger</h2>
          <p>Dragon Tiger on <strong>HM77</strong> is the fastest real money game on the platform. One card is dealt face up to Dragon and one to Tiger. The higher card wins. A round takes under 30 seconds. There are no complex rules to learn and no strategy required beyond choosing which side you believe will receive the higher card. For players who want quick, clear results, HM77 Dragon Tiger is consistently one of the most popular choices.</p>
          <h2>HM77 Fishing Games</h2>
          <p>Fishing games on <strong>HM77</strong> are unlike any other game category. You shoot fish swimming across the screen using weapons of different power levels, with each fish worth a different number of coins based on its size and rarity. Jackpot Fishing, Royal Fishing, and All Star Fishing are the top performers. The games are visually engaging and the shooting mechanic gives players a sense of active participation that purely luck-based games do not provide.</p>
          <h2>HM77 Aviator</h2>
          <p>Aviator on <strong>HM77</strong> has attracted a dedicated following among Pakistani players who enjoy games that combine timing with nerve. A plane takes off and a multiplier climbs from 1x upward. You must tap Cash Out before the plane disappears — if you wait too long, you lose your bet. The game is genuinely tense and the potential multipliers can be very large for players who time their exits well.</p>
          <h2>HM77 Cricket Betting</h2>
          <p><strong>HM77</strong> sports betting covers PSL, international cricket, T20 World Cup, bilateral series, and major football leagues. Live odds update in real time during matches and there are dozens of betting markets available beyond just match winner. For Pakistani cricket fans who follow the game closely, HM77 cricket betting allows them to put that knowledge to use with real PKR stakes.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Play HM77 Games</Link>
            <Link href="/hm77-tricks" className="btn btn-outline">HM77 Tips and Tricks</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
