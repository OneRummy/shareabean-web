import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: '콩한쪽',
  description: '800만 자취인을 위한 공동구매·살림 관리 올인원 플랫폼, 콩한쪽',
  metadataBase: new URL('https://www.shareabean.com'),
  openGraph: {
    title: '콩한쪽 - 자취의 모든 순간, 콩한쪽에서',
    description: '800만 자취인을 위한 공동구매·살림 관리 올인원 플랫폼, 콩한쪽',
    url: 'https://www.shareabean.com',
    siteName: '콩한쪽',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '콩한쪽 - 자취의 모든 순간, 콩한쪽에서',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '콩한쪽 - 자취의 모든 순간, 콩한쪽에서',
    description: '800만 자취인을 위한 공동구매·살림 관리 올인원 플랫폼, 콩한쪽',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
