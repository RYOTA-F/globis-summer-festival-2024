import type { Metadata } from 'next'
import { SITE } from '@/constants/global'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: SITE.TITLE,
  description: `『${SITE.TITLE}』の特設ページです`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <meta property="og:title" content={SITE.TITLE} />
        <meta property="og:description" content={SITE.DESCRIPTION} />
        <meta property="og:image" content="/home/main.png" />
        <meta
          property="og:url"
          content="https://globis-summer-festival-2024.vercel.app/"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-serif">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
