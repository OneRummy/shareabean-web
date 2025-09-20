'use client'

import {
  Download,
  Users,
  DollarSign,
  Clock,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  ChevronDown,
} from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ScrollIndicator } from './ScrollIndicator'

export function LandingPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: '함께 사면 더 저렴하게',
      description: '이웃들과 함께 대용량 제품을 나눠 구매하고 비용을 절약하세요',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: '투명한 가격',
      description: '모든 비용이 투명하게 공개되어 안전하고 신뢰할 수 있습니다',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '편리한 수령',
      description: '직접 수령부터 택배 배송까지 편리한 방법으로 받아보세요',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  const steps = [
    {
      step: '01',
      title: '나눔 찾기',
      description: '원하는 제품의 공동구매를 찾거나 직접 개설하세요',
    },
    {
      step: '02',
      title: '함께하기',
      description: '수량을 선택하고 이웃들과 함께 참여해보세요',
    },
    {
      step: '03',
      title: '나눠받기',
      description: '직접 수령 또는 택배로 편리하게 나눠받아보세요',
    },
  ]

  return (
    <div
      className="min-h-screen bg-white overflow-y-auto"
      style={{
        scrollSnapType: 'y mandatory',
        height: '100vh',
        scrollBehavior: 'smooth',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {/* Scroll Indicator */}
      {/* <ScrollIndicator /> */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <ImageWithFallback src="/main_icon.png" alt="메인 아이콘" className="object-contain" />
          </div>
          <span className="text-xl font-bold" style={{ color: '#468B4B' }}>
            콩한쪽
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            기능소개
          </button>
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            사용방법
          </button>
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' })}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            다운로드
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        data-section="0"
        className="relative overflow-hidden flex items-center justify-center min-h-screen pt-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, 
              rgba(225, 250, 228, 0.95) 0%, 
              rgba(225, 250, 228, 0.7) 40%, 
              rgba(225, 250, 228, 0.5) 70%, 
              rgba(225, 250, 228, 0.1) 100%
            ),
            url('/section_1_background.png')
          `,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          scrollSnapAlign: 'start',
        }}
      >
        <div className="w-full px-20 py-20">
          <div className="w-full max-w-4xl">
            <div className="relative space-y-8">
              <div className="space-y-4">
                <Badge className="px-4 py-2" style={{ backgroundColor: '#84CB6F', color: 'white' }}>
                  🎉 자취의 모든 순간, 콩한쪽에서
                </Badge>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold leading-tight">
                    <span style={{ color: '#468B4B' }}>800만 자취인을 위한</span>
                    <br />
                    <span style={{ color: '#468B4B' }}>공동구매 · 살림 관리</span>
                    <br />
                    <span style={{ color: '#468B4B' }}>올인원 플랫폼</span>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span style={{ color: '#84CB6F' }}>콩한쪽</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  공동구매로 비용을 절감하고, 커뮤니티를 통해 소통하세요
                  <br />
                  유통기한 관리, 집안일 관리, 살림 팁 등
                  <br />
                  자취 생활을 편리하고 즐겁게 만들어보세요!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#468B4B' }}
                >
                  <Download className="w-5 h-5 mr-2" />앱 다운로드
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 bg-transparent"
                  style={{ borderColor: '#468B4B', color: '#468B4B' }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  시작하기
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#468B4B' }}>
                    0+
                  </div>
                  <div className="text-sm text-gray-600">누적 공동구매</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#468B4B' }}>
                    0+
                  </div>
                  <div className="text-sm text-gray-600">활성 사용자</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#468B4B' }}>
                    0.0★
                  </div>
                  <div className="text-sm text-gray-600">평균 만족도</div>
                </div>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <span className="text-sm">스크롤하여 더보기</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        data-section="1"
        id="features"
        className="min-h-screen bg-gray-50 flex items-center justify-center py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#468B4B' }}>
              왜 콩한쪽을 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600">
              콩 한 쪽도 나눠먹는 따뜻한 이웃들과 함께하는 스마트한 쇼핑
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow border-0"
              >
                <CardContent className="space-y-4">
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto`}
                  >
                    <div className={feature.color}>{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section
        data-section="2"
        id="how-to-use"
        className="min-h-screen bg-white flex items-center justify-center py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#468B4B' }}>
              간단한 3단계로 시작하세요
            </h2>
            <p className="text-xl text-gray-600">누구나 쉽게 따라할 수 있는 간단한 사용법</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="mb-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white mb-4"
                    style={{ backgroundColor: '#84CB6F' }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        data-section="3"
        className="min-h-screen py-20 flex items-center justify-center"
        style={{
          backgroundColor: '#E1FAE4',
          scrollSnapAlign: 'start',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#468B4B' }}>
              많은 이웃들이 콩한쪽과 함께하고 있어요
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: '강민석',
                location: '강남구 거주',
                review:
                  '코스트코 대용량 제품을 혼자 다 못 먹어서 고민이었는데, 콩한쪽으로 이웃들과 나눠 사니까 정말 좋아요!',
                rating: 5,
              },
              {
                name: '이연지',
                location: '서초구 거주',
                review: '자취가 처음인데 콩한쪽 덕분에 너무 편하게 자취를 시작할 수 있었어요!',
                rating: 5,
              },
              {
                name: '김나윤',
                location: '송파구 거주',
                review:
                  '콩한쪽 덕분에 한 달 식비가 30% 정도 줄었어요. 이웃들과도 친해지고 일석이조!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-lg">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.review}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        data-section="4"
        id="download"
        className="min-h-screen bg-white flex items-center justify-center py-20"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 text-center">
            {/* <div className="w-24 h-24 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-8">
             */}
            <div className="relative w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <ImageWithFallback
                src="/main_icon.png"
                alt="메인 아이콘"
                className="object-contain"
              />
            </div>

            <h2 className="text-4xl font-bold mb-4" style={{ color: '#468B4B' }}>
              지금 바로 콩한쪽을 다운로드하고
              <br />
              자취 생활 만랩이 되어보세요
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              무료 다운로드로 시작하는 따뜻한 이웃과의 나눔 쇼핑
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#468B4B' }}
              >
                <Download className="w-5 h-5 mr-2" />
                App Store
              </Button>
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#468B4B' }}
              >
                <Download className="w-5 h-5 mr-2" />
                Google Play
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">100% 무료</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">안전한 거래</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">이웃과의 따뜻한 소통</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        data-section="5"
        className="bg-gray-900 text-white py-12 min-h-screen flex items-center justify-center"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8">
                  <ImageWithFallback
                    src="/main_icon.png"
                    alt="메인 아이콘"
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold">콩한쪽</span>
              </div>
              <p className="text-gray-400">
                800만 자취인을 위한
                <br />
                공동구매·살림 관리 올인원 플랫폼, 콩한쪽
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    공동구매 찾기
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    공동구매 개설
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    배송 서비스
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">고객지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    자주 묻는 질문
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    고객센터
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    이용약관
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 콩한쪽. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
