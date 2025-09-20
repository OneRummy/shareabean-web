import Script from 'next/script'

export function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '콩한쪽',
    description:
      '자취생활 공동구매·살림관리 올인원 플랫폼 - 자취 필수템 공동구매부터 자취 살림관리까지',
    url: 'https://www.shareabean.com',
    logo: 'https://www.shareabean.com/main_icon.png',
    slogan: '자취생활 공동구매·살림관리 No.1',
    keywords: '자취, 공동구매, 살림관리, 자취생활, 자취 공동구매, 자취 살림관리, 1인가구',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Korean',
    },
    sameAs: [
      'https://www.facebook.com/shareabean',
      'https://www.instagram.com/shareabean',
      'https://www.youtube.com/shareabean',
    ],
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: '콩한쪽 팀',
      },
    ],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '콩한쪽 - 자취 공동구매 살림관리',
    description: '자취생활 필수! 공동구매로 절약하고 살림관리로 편리한 자취생활 올인원 플랫폼',
    url: 'https://www.shareabean.com',
    inLanguage: 'ko-KR',
    isAccessibleForFree: true,
    keywords: '자취, 공동구매, 살림관리, 자취생활, 자취 커뮤니티, 1인가구',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.shareabean.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const appData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '콩한쪽 - 자취 공동구매 살림관리 앱',
    description:
      '자취생활 필수템 공동구매부터 자취 살림관리까지! 자취 커뮤니티와 함께하는 똑똑한 자취생활 플랫폼',
    url: 'https://www.shareabean.com',
    image: 'https://www.shareabean.com/og-image.png',
    keywords: '자취앱, 공동구매앱, 살림관리앱, 자취생활, 자취 커뮤니티, 1인가구앱',
    author: {
      '@type': 'Organization',
      name: '콩한쪽',
    },
    operatingSystem: ['iOS', 'Android', 'Web'],
    applicationCategory: 'LifestyleApplication',
    applicationSubCategory: 'Shopping & Community',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://www.shareabean.com',
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="app-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appData),
        }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
    </>
  )
}
