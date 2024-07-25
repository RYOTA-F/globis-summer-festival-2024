import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GLOBIS夏祭り2024',
  description: '『GLOBIS 夏祭り2024』の特設ページです',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
