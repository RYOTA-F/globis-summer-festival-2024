import type { Metadata } from 'next'
import { SITE } from '@/constants/global'
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
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
