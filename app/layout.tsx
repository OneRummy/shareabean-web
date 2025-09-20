import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { StructuredData } from '@/components/StructuredData'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '자취 공동구매 살림관리 | 콩한쪽 - 자취생활 올인원 플랫폼',
    template: '%s | 콩한쪽 자취 공동구매 살림관리',
  },
  description:
    '자취생활 필수! 공동구매로 대용량 상품을 저렴하게, 살림관리 기능으로 자취 생활을 더 편리하게. 콩한쪽에서 이웃과 함께하는 똑똑한 자취생활을 시작하세요.',
  keywords: [
    '자취',
    '공동구매',
    '살림관리',
    '자취생활',
    '자취 공동구매',
    '자취 살림관리',
    '공동구매 살림관리',
    '자취 필수템',
    '자취 절약',
    '대용량 공동구매',
    '코스트코 공동구매',
    '자취 커뮤니티',
    '자취 생활용품',
    '1인가구 공동구매',
    '자취방 살림관리',
    '자취 유통기한 관리',
    '자취 집안일',
    '자취 팁',
    '원룸 살림',
    '혼자사는 집 정리',
  ],
  authors: [{ name: '콩한쪽 팀' }],
  creator: '콩한쪽',
  publisher: '콩한쪽',
  category: 'lifestyle',
  classification: 'Business',
  metadataBase: new URL('https://www.shareabean.com'),
  alternates: {
    canonical: 'https://www.shareabean.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    creator: '@shareabean',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
