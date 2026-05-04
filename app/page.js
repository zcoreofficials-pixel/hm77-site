import Link from 'next/link'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export const metadata = {
  title: 'HM77 Game Download APK Best Bonuses App in Pakistan',
  description: 'HM77 Game Pakistan 2026. Download HM77 APK free for Android. Play HM 77 slots, Teen Patti, Dragon Tiger. Deposit via JazzCash and EasyPaisa. 50% welcome bonus on first deposit.',
  alternates: { canonical: 'https://hm-77.com' },
}

function rotate(items) {
  return items[Math.floor(new Date().getHours() / 4) % items.length]
}

export default function HomePage() {
  const headline = rotate([
    "HM77 Game — Pakistan's Fastest Growing Real Money App",
    'Download HM77 APK Free — Earn Real Cash Today',
    'HM 77 Game Pakistan — 50% Bonus on First Deposit',
    'HM77 Game Download — Play via JazzCash and EasyPaisa',
  ])

  const desc = rotate([
    'HM77 Game is taking Pakistan by storm. With a clean interface, fast JazzCash withdrawals, and over 500 real money games, HM 77 has quickly become one of the most talked-about earning apps among Pakistani players in 2026.',
    'Thousands of Pakistani players have already discovered HM77 Game. Download the HM77 APK free, deposit as little as PKR 100 via JazzCash or EasyPaisa, and claim your 50% welcome bonus the moment you make your first deposit.',
    'Looking for a reliable earning app in Pakistan? HM 77 Game offers slots, Teen Patti, Dragon Tiger, fishing games, and live cricket betting — all in one lightweight Android app with instant JazzCash withdrawals.',
    'HM77 is built around what Pakistani players actually want — JazzCash and EasyPaisa support, games like Teen Patti and Ludo, and a low PKR 100 minimum deposit. Download HM77 APK and start today.',
  ])

  const cta = rotate([
    'Download HM77 — Claim 50% Bonus',
    'Join HM77 Free — Start Earning Now',
    'Get HM77 APK — PKR 100 Minimum',
    'Register on HM77 — Bonus Waiting',
  ])

  const updated = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })
  const month = new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long' })
  const year = new Date().getFullYear()

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://hm-77.com",
    "name": "HM77 Game Download APK Best Bonuses App in Pakistan",
    "description": "Download HM77 APK free for Android in Pakistan. JazzCash EasyPaisa deposits. 50% welcome bonus.",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-PK",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I download HM77 Game APK in Pakistan?", "acceptedAnswer": { "@type": "Answer", "text": "Visit hm-77.com, tap Download APK, enable Unknown Sources in Android settings, and install the file. The entire process takes under five minutes on any Android phone." } },
      { "@type": "Question", "name": "What is HM77 Game?", "acceptedAnswer": { "@type": "Answer", "text": "HM77 is a real money gaming platform for Pakistani players with 500+ games including slots, Teen Patti, Dragon Tiger, and cricket betting. Supports JazzCash and EasyPaisa." } },
      { "@type": "Question", "name": "How to deposit in HM77 via JazzCash?", "acceptedAnswer": { "@type": "Answer", "text": "Login to HM77, go to Wallet, select Deposit, choose JazzCash, send money to the merchant number shown, enter your Transaction ID. Balance updates instantly. Minimum deposit is PKR 100." } },
      { "@type": "Question", "name": "What is HM77 welcome bonus?", "acceptedAnswer": { "@type": "Answer", "text": "New HM77 players get 50% bonus on their first deposit automatically. Deposit PKR 100 and play with PKR 150. No promo code required." } },
      { "@type": "Question", "name": "How to login to HM77 Game?", "acceptedAnswer": { "@type": "Answer", "text": "Open the HM77 app, tap Login, enter your registered Pakistani mobile number in 03XXXXXXXXX format and your password." } },
      { "@type": "Question", "name": "Is HM77 Game real or fake?", "acceptedAnswer": { "@type": "Answer", "text": "HM77 is a genuine platform that processes real JazzCash and EasyPaisa transactions. Always download from the official site hm-77.com." } },
    ]
  }

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "HM77 Game",
    "operatingSystem": "Android",
    "applicationCategory": "GameApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "ratingCount": "4200" },
    "description": "HM77 Game Pakistan. Real money gaming app with slots, Teen Patti, Dragon Tiger. JazzCash EasyPaisa support."
  }

  const games = [
    { title: 'Teen Patti', desc: "The card game every Pakistani household knows has found a new home on HM77. HM77 Teen Patti tables run around the clock with real PKR stakes at every level. The rules are the same ones you grew up with, the only difference is that winning here means real money in your JazzCash wallet.", img: '/images/banner1.webp', alt: 'HM77 Teen Patti Game Pakistan Real Money JazzCash' },
    { title: 'Dragon Tiger', desc: "When you want a quick result without complexity, Dragon Tiger on HM77 delivers exactly that. One card is dealt to Dragon, one to Tiger — the higher card wins. A single round takes under 30 seconds, making it the fastest game on the platform.", img: '/images/banner2.webp', alt: 'HM77 Dragon Tiger Live Casino Game Pakistan' },
    { title: 'Slot Games', desc: "HM77 carries over 200 slot machines from game providers that Pakistani players actually recognise — JILI, FunTa, and HB lead the catalogue. Fortune Gems, Money Coming, and Golden Empire are among the most played.", img: '/images/banner3.webp', alt: 'HM77 Slot Games JILI FunTa Pakistan Real Money' },
    { title: 'Fishing Games', desc: "Fishing games occupy a unique space on HM77. You use different weapons to shoot fish swimming across the screen, with each fish worth a different number of coins. Jackpot Fishing and Royal Fishing are the top performers.", img: '/images/banner4.webp', alt: 'HM77 Fishing Games Jackpot Royal Fishing Pakistan' },
    { title: 'Aviator', desc: "Aviator on HM77 has built a loyal following among Pakistani players who enjoy games that test their nerve and timing. A plane takes off and a multiplier climbs — your job is to cash out before the plane disappears.", img: '/images/banner5.webp', alt: 'HM77 Aviator Crash Game Pakistan Earn Money' },
    { title: 'Cricket Betting', desc: "No platform for Pakistani players is complete without cricket, and HM77 takes cricket betting seriously. PSL matches, international tests, T20 series, and bilateral tours all feature live betting with odds that update ball by ball.", img: '/images/banner6.webp', alt: 'HM77 Cricket Betting PSL Pakistan Live Odds JazzCash' },
  ]

  const features = [
    { title: 'JazzCash Withdrawals in Minutes', desc: "The single most important thing to Pakistani players is whether they can actually get their money out. HM77 has built its reputation on fast withdrawals. When you request a JazzCash withdrawal on HM77, the money typically arrives within five to ten minutes." },
    { title: 'Start With Just PKR 100', desc: "HM77 set the minimum deposit at PKR 100 deliberately. With PKR 100 you can explore the platform, try different games, and understand how everything works before deciding how much you want to invest." },
    { title: '50% Welcome Bonus on First Deposit', desc: "Every new HM77 account receives a 50% bonus on the first deposit with no conditions. Deposit PKR 200 and your balance shows PKR 300. The bonus is credited automatically the moment your first deposit clears." },
    { title: 'Runs on Any Android Phone', desc: "HM77 was engineered specifically for the Android phones that most Pakistani players actually use. The APK is under 50MB and runs without lag on Infinix, Tecno, Samsung, Oppo, and Vivo devices." },
    { title: 'JazzCash and EasyPaisa Built In', desc: "HM77 was designed around Pakistani payment infrastructure from the beginning. JazzCash and EasyPaisa are both fully integrated for deposits and withdrawals with no need for international payment methods." },
    { title: '500+ Games Across Every Category', desc: "Slots, card games, live dealer tables, fishing games, crash games, and live sports betting — all available from a single HM77 account with a single wallet updated regularly with new titles." },
  ]

  const quickFacts = [
    ['Platform', 'HM77 Game'],
    ['Also Known As', 'HM 77, HM77 App, HM 77 Game'],
    ['Platform Type', 'Android APK, Mobile Browser'],
    ['Min Deposit', 'PKR 100 via JazzCash'],
    ['Min Withdrawal', 'PKR 300 via JazzCash'],
    ['Welcome Bonus', '50% on First Deposit'],
    ['Total Games', '500+ including Slots, Teen Patti'],
    ['Withdrawal Time', '5-10 minutes via JazzCash'],
    ['Customer Support', '24/7 Live Chat'],
    ['Download Cost', 'Free'],
  ]

  const faqs = [
    { q: 'How do I download the HM77 Game APK in Pakistan?', a: 'Tap the Download APK button at the top of this page. Your browser will save the HM77 APK file directly to your phone. Before installing, go to Settings and enable Unknown Sources under Security or Privacy. Once enabled, find the downloaded file, tap it, and follow the installation steps. From download to playing your first game takes under five minutes on any Android phone.' },
    { q: 'What exactly is HM77 Game and how does it work?', a: 'HM77 is a real money gaming platform built for Pakistani players. You create a free account with your mobile number, deposit funds using JazzCash or EasyPaisa starting from PKR 100, choose from over 500 games, play to win real PKR, and withdraw your earnings back to your JazzCash or EasyPaisa wallet.' },
    { q: 'How do I deposit money into HM77 via JazzCash?', a: 'Login to your HM77 account and go to the Wallet section. Tap Deposit and select JazzCash. HM77 displays a merchant number. Open your JazzCash app, send your chosen amount to that merchant number, then return to HM77 and enter the Transaction ID. Your balance updates within seconds.' },
    { q: 'What is the HM77 welcome bonus and how do I claim it?', a: 'The HM77 welcome bonus gives every new player 50% extra on their very first deposit. It is applied completely automatically. Deposit PKR 100 and you play with PKR 150. Deposit PKR 500 and your balance shows PKR 750.' },
    { q: 'How do I login to my HM77 Game account?', a: 'Open the HM77 app or visit hm-77.com in your mobile browser. Tap the Login button. Enter your registered Pakistani mobile number in 03XXXXXXXXX format and your account password. Complete OTP verification if prompted.' },
    { q: 'How long do HM77 withdrawals take to reach JazzCash?', a: 'JazzCash and EasyPaisa withdrawals from HM77 typically complete within five to ten minutes. Bank transfers take up to 24 hours. The minimum withdrawal amount on HM77 is PKR 300.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="update-badge">Updated: {updated}</div>
            <div className="hero-badge"><span className="pulse"></span> Pakistan's #1 HM77 Game Guide {year}</div>
            <h1 className="hero-title"><span>{headline}</span></h1>
            <p className="hero-desc">{desc}</p>
            <div className="hero-btns">
              <Link href="/hm77-download" className="btn btn-download">Download HM77 APK</Link>
              <Link href="/go" className="btn btn-primary">{cta}</Link>
              <Link href="/hm77-login" className="btn btn-login">HM77 Login</Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-label">Active Players</div>
                <div className="hero-stat-value">40,000+</div>
              </div>
              <div>
                <div className="hero-stat-label">Min Deposit</div>
                <div className="hero-stat-value">PKR 100</div>
              </div>
              <div>
                <div className="hero-stat-label">Welcome Bonus</div>
                <div className="hero-stat-value">50%</div>
              </div>
              <div>
                <div className="hero-stat-label">Total Games</div>
                <div className="hero-stat-value">500+</div>
              </div>
            </div>
          </div>
          <div className="hero-img-wrap">
            <img
              src="/images/hero.webp"
              alt="HM77 Game Pakistan — Real Money Earning App for Android with JazzCash and EasyPaisa payment support"
              title="HM77 Game — Pakistan Fastest Growing Earning App 2026"
              width="500"
              height="400"
              style={{ width: '100%', height: 'auto', borderRadius: '14px', boxShadow: '0 0 40px rgba(53,119,202,0.2)' }}
            />
          </div>
        </div>
      </section>

      {/* PAYMENT BAR */}
      <div className="container">
        <div className="payment-bar">
          <span className="payment-label">HM77 Payments:</span>
          <div className="payment-badges">
            <span className="payment-badge jazzcash">JazzCash</span>
            <span className="payment-badge easypaisa">EasyPaisa</span>
            <span className="payment-badge bank">Bank Transfer</span>
          </div>
          <span style={{ marginLeft: 'auto', fontSize: '13px', color: 'var(--color-text-muted)' }}>Min Deposit: PKR 100 · Min Withdrawal: PKR 300</span>
        </div>
      </div>

      {/* STATS */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><div className="stat-value">40,000+</div><div className="stat-label">Active Players</div></div>
            <div className="stat-item"><div className="stat-value">500+</div><div className="stat-label">Games Available</div></div>
            <div className="stat-item"><div className="stat-value">PKR 100</div><div className="stat-label">Minimum Deposit</div></div>
            <div className="stat-item"><div className="stat-value">5 Min</div><div className="stat-label">Avg Withdrawal</div></div>
          </div>
        </div>
      </section>

      {/* WHAT IS HM77 */}
      <section className="section">
        <div className="container">
          <h2>What is HM77 Game? Complete Guide for Pakistani Players in {year}</h2>
          <p><strong>HM77 Game</strong> arrived in Pakistan at exactly the right moment. As more players searched for earning apps that pay out reliably and quickly without complicated processes, <strong>HM 77</strong> filled that gap with a platform that combines a genuinely wide game library, fast JazzCash withdrawals, and one of the lowest entry points in the market — just PKR 100 to get started.</p>
          <p>At its core, <strong>HM77</strong> is a real money gaming platform. You deposit money using JazzCash or EasyPaisa, select from hundreds of games across multiple categories, play to win, and withdraw your earnings back to your mobile wallet. The entire cycle can happen within the same day.</p>
          <p>The <strong>HM77 game download</strong> is a free Android APK available exclusively from this official page at hm-77.com. Since the Google Play Store does not allow real money gaming apps in Pakistan, HM77 distributes its app as a direct APK download — which is the standard method used by all earning apps operating in Pakistan.</p>
          <p>What makes <strong>HM 77 game</strong> stand out in a crowded market is the combination of things it gets right simultaneously. The game library is genuinely broad with over 500 titles. The payment processing is fast and reliable. The minimum deposit is accessible to players at every income level. And the 50% welcome bonus is credited automatically without any conditions or delays.</p>

          {/* BANNER IMAGES IN CONTENT */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', margin: '32px 0' }}>
            <img src="/images/banner1.webp" alt="HM77 Game Pakistan Teen Patti Slots Real Money JazzCash EasyPaisa" title="HM77 Teen Patti Casino Game" width="300" height="180" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <img src="/images/banner2.webp" alt="HM77 Dragon Tiger Live Casino Game Pakistan Real Money Winning" title="HM77 Dragon Tiger Game" width="300" height="180" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <img src="/images/banner3.webp" alt="HM77 Slot Games JILI FunTa Pakistan Best Earning App 2026" title="HM77 Slot Games Pakistan" width="300" height="180" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <img src="/images/banner4.webp" alt="HM77 APK Download Free Android Pakistan JazzCash EasyPaisa Deposit" title="HM77 APK Download Pakistan" width="300" height="180" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          </div>

          <div className="card" style={{ marginTop: '16px' }}>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>HM77 Game — Quick Facts for {year}</h3>
            {quickFacts.map(([k, v]) => (
              <div key={k} className="comparison-row">
                <span className="comparison-key">{k}</span>
                <span className="comparison-val">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>How to Download HM77 Game and Start Earning in Pakistan</h2>
            <p>Getting from first visit to playing your first game on HM77 takes under ten minutes. Here is exactly what to do.</p>
          </div>
          <div className="cards-grid">
            {[
              { step: '1', title: 'Download the HM77 APK', desc: 'Tap the Download APK button at the top of this page. The HM77 APK file will save directly to your phone. Before installing, go to Settings and enable Unknown Sources under Security or Privacy. Once enabled, open the downloaded file and tap Install. The HM77 app installs in about 30 seconds.', link: '/hm77-download', label: 'Full HM77 APK Download Guide' },
              { step: '2', title: 'Create Your Free HM77 Account', desc: 'Open the HM77 app and tap Register. Enter your Pakistani mobile number in 03XXXXXXXXX format, create a password, and verify your number with the OTP sent by SMS. Your HM77 account is active within two minutes. Every new account automatically qualifies for the 50% welcome bonus.', link: '/hm77-register', label: 'HM77 Registration Guide' },
              { step: '3', title: 'Deposit via JazzCash or EasyPaisa', desc: 'Go to your HM77 wallet, tap Deposit, and choose JazzCash or EasyPaisa. Note the merchant number that HM77 displays. Send your deposit amount from your JazzCash app, then return to HM77 and enter the Transaction ID. Your balance updates within seconds and your 50% welcome bonus is credited automatically.', link: '/hm77-deposit', label: 'HM77 JazzCash Deposit Guide' },
            ].map((item) => (
              <div className="card" key={item.step}>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.9' }}>{item.desc}</p>
                <Link href={item.link} style={{ color: 'var(--color-accent)', fontSize: '14px', fontWeight: '600' }}>{item.label} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="section">
        <div className="container">
          <div className="bonus-box">
            <div className="bonus-amount">50%</div>
            <div className="bonus-label">HM77 Welcome Bonus on Your First Deposit — {month}</div>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto 28px', fontSize: '15px', lineHeight: '1.9' }}>
              Every new <strong>HM77</strong> account receives a 50% bonus on the very first deposit. Deposit PKR 100 and your wallet shows PKR 150. Deposit PKR 1000 and you start playing with PKR 1500. The bonus is there from the moment your first deposit clears.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/go" className="btn btn-primary">Claim HM77 Welcome Bonus Now</Link>
              <Link href="/hm77-bonus" className="btn btn-outline">View All HM77 Bonuses</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES WITH IMAGES */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>HM77 Games — 500+ Real Money Games Built for Pakistani Players</h2>
            <p>HM77 covers every game category Pakistani players care about. From traditional card games to live casino tables to cricket betting.</p>
          </div>
          <div className="cards-grid">
            {games.map((game, i) => (
              <div className="card" key={i}>
                <img src={game.img} alt={game.alt} title={`HM77 ${game.title} Pakistan`} width="300" height="160" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
                <h3>{game.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.9' }}>{game.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/hm77-casino" className="btn btn-outline">View Complete HM77 Game List</Link>
          </div>
        </div>
      </section>

      {/* DEPOSIT WITHDRAWAL */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>HM77 Deposit and Withdrawal via JazzCash and EasyPaisa</h2>
            <p>Moving money in and out of HM77 is as simple as any other JazzCash or EasyPaisa transaction you make on your phone.</p>
          </div>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card">
              <h3 style={{ color: 'var(--color-accent)' }}>HM77 Deposit via JazzCash</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.9' }}>Go to Wallet inside the <strong>HM77</strong> app and tap Deposit. Select JazzCash, note the merchant number, send your deposit from your JazzCash app, then enter the Transaction ID back in HM77. Your balance updates within seconds.</p>
              {[['Minimum Deposit', 'PKR 100'], ['Maximum Deposit', 'PKR 50,000'], ['Processing Time', 'Instant'], ['Methods', 'JazzCash, EasyPaisa, Bank']].map(([k, v]) => (
                <div key={k} className="comparison-row"><span className="comparison-key">{k}</span><span className="comparison-val">{v}</span></div>
              ))}
              <Link href="/hm77-deposit" className="btn btn-primary" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>Complete HM77 Deposit Guide</Link>
            </div>
            <div className="card">
              <h3 style={{ color: '#4ade80' }}>HM77 Withdrawal to JazzCash</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.9' }}>Go to Wallet and tap Withdraw. Choose JazzCash or EasyPaisa, enter your wallet number and amount, confirm with your withdrawal password. Most withdrawals reach your JazzCash wallet within five to ten minutes.</p>
              {[['Minimum Withdrawal', 'PKR 300'], ['Maximum Per Transaction', 'PKR 49,500'], ['Processing Time', '5-10 minutes'], ['Methods', 'JazzCash, EasyPaisa, Bank']].map(([k, v]) => (
                <div key={k} className="comparison-row"><span className="comparison-key">{k}</span><span className="comparison-val">{v}</span></div>
              ))}
              <Link href="/hm77-withdrawal" className="btn btn-download" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>Complete HM77 Withdrawal Guide</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HM77 */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <h2>Why Pakistani Players Are Choosing HM77 Game in {year}</h2>
            <p>HM77 is not just another earning app. Here is what genuinely sets it apart from the alternatives currently available in Pakistan.</p>
          </div>
          <div className="cards-grid">
            {features.map((item, i) => (
              <div className="card" key={i}>
                <h3>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.9' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGIN */}
      <section className="section">
        <div className="container">
          <h2>HM77 Login — How to Access Your Account Quickly and Safely</h2>
          <p>Logging into <strong>HM77</strong> takes about ten seconds once your account is set up. Open the HM77 app from your home screen or navigate to hm-77.com in your mobile browser, tap the Login button, and enter your registered Pakistani mobile number alongside your password.</p>
          <p>If you forget your <strong>HM77 login</strong> password, tap Forgot Password on the login screen. Enter your phone number, receive an OTP, and create a new password in under 2 minutes.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Login to HM77 Now</Link>
            <Link href="/hm77-forgot-password" className="btn btn-outline">Forgot HM77 Password</Link>
          </div>
        </div>
      </section>

      {/* APK */}
      <section className="section section--dark">
        <div className="container">
          <h2>HM77 APK Download — Free Android Install Guide for Pakistan</h2>
          <p>The <strong>HM77 game download</strong> comes as a free APK file for Android. Since Google Play Store does not permit real money gaming apps in Pakistan, <strong>HM77 APK</strong> is distributed directly through the official website hm-77.com.</p>
          <p>Installing the <strong>HM77 app</strong> requires enabling Unknown Sources in your phone Settings once. After that, tap the downloaded HM77 APK file and tap Install. Installation takes about 30 seconds and the app is ready immediately.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link href="/hm77-download" className="btn btn-download">Download HM77 APK Free</Link>
            <Link href="/hm77-apk" className="btn btn-outline">Full HM77 APK Guide</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>HM77 Game FAQ — Questions Pakistani Players Ask Most</h2>
            <p>Straight answers to the most common questions about HM77 game download, login, deposits, withdrawals, and bonuses.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', overflow: 'hidden' }}>
                <summary style={{ padding: '18px 20px', cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)', fontSize: '15px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--color-accent)', fontSize: '20px', flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: '0 20px 18px', color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: '1.9' }}>{faq.a}</div>
              </details>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link href="/hm77-faq" className="btn btn-outline">View All HM77 FAQs</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Download HM77 Game and Start Earning in Pakistan Today</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '580px', margin: '0 auto 28px', fontSize: '15px', lineHeight: '1.9' }}>
            Join tens of thousands of Pakistani players who have already made <strong>HM77</strong> their go-to earning app. Download the <strong>HM77 APK</strong> free, deposit PKR 100 via JazzCash, claim your 50% welcome bonus, and start playing today.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/hm77-download" className="btn btn-download">Download HM77 APK Free</Link>
            <Link href="/go" className="btn btn-primary">Register and Claim 50% Bonus</Link>
            <Link href="/hm77-login" className="btn btn-login">HM77 Login</Link>
          </div>
        </div>
      </section>

      {/* ALL PAGES */}
      <div className="container" style={{ paddingBottom: '56px' }}>
        <div className="related-pages">
          <h3 style={{ marginBottom: '16px', color: 'var(--color-text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Complete HM77 Guide — All Pages</h3>
          <div className="related-grid">
            {[
              ['HM77 APK Download', '/hm77-download'],
              ['HM77 Login', '/hm77-login'],
              ['HM77 Register', '/hm77-register'],
              ['HM77 Deposit', '/hm77-deposit'],
              ['HM77 Withdrawal', '/hm77-withdrawal'],
              ['HM77 Bonus', '/hm77-bonus'],
              ['HM77 Promo Codes', '/hm77-promo'],
              ['HM77 Referral', '/hm77-referral'],
              ['How to Play HM77', '/hm77-how-to-play'],
              ['HM77 Casino Games', '/hm77-casino'],
              ['HM77 Tips and Tricks', '/hm77-tricks'],
              ['HM77 Review', '/hm77-review'],
              ['Is HM77 Legit?', '/hm77-legit'],
              ['HM77 FAQ', '/hm77-faq'],
              ['HM77 Troubleshooting', '/hm77-troubleshooting'],
              ['HM77 Alternatives', '/hm77-alternatives'],
              ['HM77 Latest Update', '/hm77-updates'],
              ['HM77 APK Guide', '/hm77-apk'],
              ['HM77 on iPhone', '/hm77-ios'],
              ['HM77 on PC', '/hm77-pc'],
              ['HM77 Verification', '/hm77-verification'],
              ['About HM77', '/hm77-about'],
              ['HM77 Contact', '/hm77-contact'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="related-link">{label}</Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
