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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
