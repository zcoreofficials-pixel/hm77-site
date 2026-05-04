import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'How to Play HM77 Game — Complete Beginner Guide Pakistan',
  description: 'Complete beginner guide to playing HM77 game in Pakistan. Learn how to play HM77 slots, Teen Patti, Dragon Tiger. Tips for new players. JazzCash deposit guide.',
  alternates: { canonical: 'https://hm-77.com/hm77-how-to-play' },
}

export default function HowToPlayPage() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / How to Play HM77</div>
        <div className="page-hero">
          <h1>How to Play HM77 Game — Complete Beginner Guide</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>New to <strong>HM77</strong>? This complete beginner guide covers everything from downloading the app to playing your first game and making your first withdrawal.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Start Playing HM77</Link>
            <Link href="/hm77-download" className="btn btn-outline">Download HM77 First</Link>
          </div>
        </div>
        <div className="page-content">
          <h2>Getting Started on HM77 — The Complete Process</h2>
          <p>Playing <strong>HM77 game</strong> for the first time is straightforward. Download the APK from this page, install it, register with your mobile number, deposit via JazzCash or EasyPaisa starting from PKR 100, and select a game from the lobby. The entire setup process takes under ten minutes.</p>
          <h2>How to Play HM77 Slots</h2>
          <p>Select any slot game from the <strong>HM77</strong> lobby. Set your bet amount using the plus and minus buttons — most slots start from PKR 1 per spin. Tap Spin to start the round. If the symbols that land match a winning combination shown in the paytable, your win is credited to your balance automatically. Many HM77 slots include free spin features that are triggered by landing scatter symbols.</p>
          <h2>How to Play HM77 Teen Patti</h2>
          <p>Select Teen Patti from the <strong>HM77</strong> card games section. Choose a table that matches your preferred stake level. Place your ante bet. You and the dealer each receive three cards. You can choose to Play or Fold based on your hand. If you Play and your hand ranks higher than the dealer, you win. HM77 Teen Patti follows standard three-card poker rankings.</p>
          <h2>How to Play HM77 Dragon Tiger</h2>
          <p>Dragon Tiger on <strong>HM77</strong> is the simplest game on the platform. Place a bet on Dragon, Tiger, or Tie. One card is dealt to each side. The higher card wins. Aces are low in Dragon Tiger. A Tie bet pays at higher odds but is less frequent. Each round on HM77 Dragon Tiger takes under 30 seconds.</p>
          <h2>Tips for New HM77 Players</h2>
          <ul>
            <li>Start with small bets while you learn how each game works on HM77</li>
            <li>Use your 50% welcome bonus to explore different game categories</li>
            <li>Set a daily budget before you start playing and stick to it</li>
            <li>Try Dragon Tiger or slots first as they require no prior game knowledge</li>
            <li>Check the HM77 Promotions section daily for bonus offers</li>
            <li>Withdraw your winnings regularly rather than leaving large balances in your HM77 wallet</li>
          </ul>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Play HM77 Now</Link>
            <Link href="/hm77-tricks" className="btn btn-outline">HM77 Tips and Tricks</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
