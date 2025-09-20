'use client'

import { useEffect, useState, useCallback } from 'react'

export function ScrollIndicator() {
  const [currentSection, setCurrentSection] = useState(0)
  const totalSections = 6 // Hero, Features, How-to-use, Testimonials, Download, Footer

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[data-section], footer[data-section]')
    const viewportTop = window.scrollY
    const viewportHeight = window.innerHeight
    const viewportCenter = viewportTop + viewportHeight / 2

    let current = 0

    sections.forEach((section, index) => {
      const element = section as HTMLElement
      const sectionTop = element.offsetTop
      const sectionBottom = sectionTop + element.offsetHeight

      // 섹션이 viewport 중앙을 지나갔는지 확인
      if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
        current = index
      }
    })

    // 디버깅용 (개발 시에만 사용)
    if (process.env.NODE_ENV === 'development') {
      console.log('Current section:', current, 'Viewport center:', viewportCenter)
    }

    setCurrentSection(current)
  }, [])

  useEffect(() => {
    // Initial call
    handleScroll()

    // Throttled scroll handler
    let timeoutId: NodeJS.Timeout
    const throttledHandler = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 16) // 60fps에 맞춰 더 반응적으로
    }

    window.addEventListener('scroll', throttledHandler, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledHandler)
      window.removeEventListener('resize', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [handleScroll])

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section[data-section]')
    const targetSection = sections[index] as HTMLElement

    if (targetSection) {
      const offsetTop = targetSection.offsetTop
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 space-y-2">
      {Array.from({ length: totalSections }, (_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSection ? 'bg-emerald-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={`섹션 ${index + 1}로 이동`}
        />
      ))}
    </div>
  )
}
