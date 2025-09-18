"use client"

import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [currentSection, setCurrentSection] = useState(0)
  const totalSections = 6 // Hero, Features, How-to-use, Testimonials, Download, Footer

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sectionIndex = Math.round(scrollPosition / windowHeight)
      setCurrentSection(Math.min(sectionIndex, totalSections - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const targetPosition = index * window.innerHeight
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 space-y-2">
      {Array.from({ length: totalSections }, (_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSection ? "bg-emerald-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`섹션 ${index + 1}로 이동`}
        />
      ))}
    </div>
  )
}
