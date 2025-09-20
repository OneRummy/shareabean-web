import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '콩한쪽 - 자취 공동구매 살림관리',
    short_name: '콩한쪽',
    description: '자취생활 필수! 공동구매로 절약하고 살림관리로 편리한 자취생활',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#84CB6F',
    lang: 'ko',
    categories: ['lifestyle', 'shopping', 'productivity'],
    keywords: ['자취', '공동구매', '살림관리', '자취생활', '자취앱', '1인가구', '자취 커뮤니티'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
