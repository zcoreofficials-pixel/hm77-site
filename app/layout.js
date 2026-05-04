import './globals.css'

export const metadata = {
  metadataBase: new URL('https://hm-77.com'),
  title: {
    default: 'HM77 Game Download APK Best Bonuses App in Pakistan',
    template: '%s HM77 Game Pakistan',
  },
  description: 'HM77 Game Pakistan 2026. Download HM77 APK free for Android. Play HM 77 slots, Teen Patti, Dragon Tiger. Deposit via JazzCash and EasyPaisa. 50% welcome bonus on first deposit.',
  keywords: 'HM77, HM 77, HM77 game, HM77 download, HM77 APK, HM77 app, HM 77 game, HM77 Pakistan, HM77 login, HM77 register, HM77 deposit, HM77 bonus, HM77 game download, HM77 game APK, hm777 download APK',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://hm-77.com',
    siteName: 'HM77 Game Pakistan',
    title: 'HM77 Game Download APK Best Bonuses App in Pakistan',
    description: 'HM77 Game Pakistan 2026. Download HM77 APK free for Android. Play HM 77 slots, Teen Patti, Dragon Tiger. Deposit via JazzCash and EasyPaisa. 50% welcome bonus.',
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'HM77 Game Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HM77 Game Download APK Best Bonuses App in Pakistan',
    description: 'Download HM77 APK free for Android in Pakistan. JazzCash EasyPaisa deposits. 50% welcome bonus on first deposit.',
    images: ['/images/hero.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HM77 Game Pakistan",
              "url": "https://hm-77.com",
              "logo": "https://hm-77.com/images/hero.webp",
              "description": "Pakistan's fastest growing real money gaming app",
              "address": { "@type": "PostalAddress", "addressCountry": "PK" },
              "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "support@hm-77.com" }
            })
          }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif", background: '#080d18', color: '#e5e7eb', margin: 0, overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
