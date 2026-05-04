import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#050810', borderTop: '1px solid #1a2d4a', padding: '48px 16px 24px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', marginBottom: '40px' }}>

          <div>
            <div style={{ fontSize: '22px', fontWeight: '900', color: '#fff', marginBottom: '12px' }}>
              HM<span style={{ color: '#3577CA' }}>77</span> Game
            </div>
            <p style={{ color: '#8fa3c0', fontSize: '13px', lineHeight: '1.8' }}>
              Pakistan's fastest growing real money gaming platform. Play slots, Teen Patti, Dragon Tiger and 500+ games. Deposit and withdraw via JazzCash and EasyPaisa.
            </p>
            <div style={{ marginTop: '16px', fontSize: '12px', color: '#8fa3c0', lineHeight: '2' }}>
              <div>JazzCash · EasyPaisa · Bank Transfer</div>
              <div>Min Deposit: PKR 100 · Min Withdrawal: PKR 300</div>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#3577CA', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Download & Access</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['HM77 APK Download', '/hm77-download'],
                ['HM77 Login', '/hm77-login'],
                ['HM77 Register', '/hm77-register'],
                ['Forgot Password', '/hm77-forgot-password'],
                ['Account Verification', '/hm77-verification'],
                ['APK Guide', '/hm77-apk'],
                ['iPhone Guide', '/hm77-ios'],
                ['PC Guide', '/hm77-pc'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} style={{ color: '#8fa3c0', fontSize: '13px', textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#3577CA', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Payments & Bonuses</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['HM77 Deposit', '/hm77-deposit'],
                ['HM77 Withdrawal', '/hm77-withdrawal'],
                ['HM77 Bonus', '/hm77-bonus'],
                ['Promo Codes', '/hm77-promo'],
                ['Referral Program', '/hm77-referral'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} style={{ color: '#8fa3c0', fontSize: '13px', textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#3577CA', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Games & Guides</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['How to Play HM77', '/hm77-how-to-play'],
                ['HM77 Casino Games', '/hm77-casino'],
                ['Tips & Tricks', '/hm77-tricks'],
                ['Latest Update', '/hm77-updates'],
                ['HM77 Alternatives', '/hm77-alternatives'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} style={{ color: '#8fa3c0', fontSize: '13px', textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#3577CA', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Trust & Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['HM77 Review', '/hm77-review'],
                ['Is HM77 Legit?', '/hm77-legit'],
                ['HM77 FAQ', '/hm77-faq'],
                ['Troubleshooting', '/hm77-troubleshooting'],
                ['About HM77', '/hm77-about'],
                ['Contact Support', '/hm77-contact'],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} style={{ color: '#8fa3c0', fontSize: '13px', textDecoration: 'none' }}>{label}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '24px', borderTop: '1px solid #1a2d4a' }}>
          <p style={{ fontSize: '12px', color: '#6b7280' }}>© {year} HM77 Game Pakistan. All rights reserved.</p>
          <p style={{ fontSize: '12px', color: '#6b7280', maxWidth: '420px', textAlign: 'right' }}>HM77 is an entertainment platform. Play responsibly. We are not responsible for financial losses.</p>
        </div>
      </div>
    </footer>
  )
}
