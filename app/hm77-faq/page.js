import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export const metadata = {
  title: 'HM77 Game FAQ — All Questions Answered Pakistan 2026',
  description: 'Complete HM77 FAQ for Pakistani players. Answers to all questions about HM77 download, login, deposit, withdrawal, bonus, games and account issues.',
  alternates: { canonical: 'https://hm-77.com/hm77-faq' },
}

export default function FAQPage() {
  const faqs = [
    { q: 'What is HM77 Game?', a: 'HM77 is a real money gaming platform for Pakistani players with 500+ games including slots, Teen Patti, Dragon Tiger, fishing games, and cricket betting. Players deposit via JazzCash or EasyPaisa, play games to win real PKR, and withdraw winnings back to their mobile wallets.' },
    { q: 'How do I download HM77 APK?', a: 'Download the HM77 APK from this official page at hm-77.com. Enable Unknown Sources in your phone Settings, then install the downloaded file. The process takes under five minutes on any Android phone.' },
    { q: 'What is the minimum deposit on HM77?', a: 'The minimum deposit on HM77 is PKR 100 via JazzCash or EasyPaisa. There is no requirement to deposit more than PKR 100 to access all games and features on the platform.' },
    { q: 'How long do HM77 withdrawals take?', a: 'JazzCash and EasyPaisa withdrawals from HM77 typically complete within five to ten minutes. Bank transfers take up to 24 hours. The minimum withdrawal is PKR 300.' },
    { q: 'Does HM77 work on iPhone?', a: 'HM77 is primarily an Android app. iPhone users can access HM77 through the mobile browser at hm-77.com. Full iOS app support may be added in future updates.' },
    { q: 'Is HM77 available on PC?', a: 'HM77 can be played on PC through an Android emulator such as LDPlayer or Bluestacks, or by visiting hm-77.com in a desktop browser.' },
    { q: 'How do I claim the HM77 welcome bonus?', a: 'The HM77 welcome bonus is claimed automatically. Register a new account, make your first deposit, and the 50% bonus is added to your wallet immediately. No promo code is needed.' },
    { q: 'Can I have multiple HM77 accounts?', a: 'HM77 permits one account per mobile number. Creating multiple accounts to claim multiple welcome bonuses is not permitted and may result in account suspension.' },
    { q: 'How do I contact HM77 support?', a: 'Contact HM77 customer support through the Live Chat feature inside the app, which is available 24/7, or by emailing support@hm-77.com.' },
    { q: 'Is HM77 game real or fake?', a: 'HM77 is a real platform that processes genuine JazzCash and EasyPaisa transactions. Always download from the official site hm-77.com to ensure you have the authentic app.' },
  ]

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '32px 16px 64px' }}>
        <div className="breadcrumb"><Link href="/">Home</Link> / HM77 FAQ</div>
        <div className="page-hero"><img src="/images/banner3.webp" alt="HM77 FAQ Questions Answers Pakistan JazzCash EasyPaisa" title="HM77 FAQ Pakistan" width="800" height="200" style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", objectFit: "cover" }} />
          <h1>HM77 Game FAQ — All Questions Answered for Pakistan</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px' }}>Every question Pakistani players ask about <strong>HM77 game</strong> — download, login, deposits, withdrawals, bonuses, and account management.</p>
        </div>
        <div className="page-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '12px', overflow: 'hidden' }}>
                <summary style={{ padding: '16px 20px', cursor: 'pointer', fontWeight: '600', color: 'var(--color-white)', fontSize: '15px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--color-accent)', fontSize: '20px', flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: '0 20px 16px', color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: '1.8' }}>{faq.a}</div>
              </details>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
            <Link href="/go" className="btn btn-primary">Join HM77 Now</Link>
            <Link href="/hm77-contact" className="btn btn-outline">Contact HM77 Support</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
