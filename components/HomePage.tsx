"use client"

import {
  ShoppingCart,
  Home,
  MessageSquare,
  Bookmark,
  User,
  Search,
  MapPin,
  Bell,
  Heart,
  ChevronDown,
  Eye,
} from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface HomePageProps {
  onItemClick: (itemId: string) => void
  onNavigate: (tab: string) => void
  activeTab: string
}

export function HomePage({ onItemClick, onNavigate, activeTab }: HomePageProps) {
  const categories = [
    {
      id: "food",
      name: "식료품",
      icon: "🥗",
      image:
        "https://images.unsplash.com/photo-1668295037389-292efc20dafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG9uaW9uJTIwZnJlc2glMjB2ZWdldGFibGV8ZW58MXx8fHwxNzU3NTg5NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "electronics",
      name: "전자제품",
      icon: "📱",
      image:
        "https://images.unsplash.com/photo-1636614223954-db6a663293ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzUyNTQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "stationery",
      name: "문구",
      icon: "✏️",
      image:
        "https://images.unsplash.com/photo-1612599316791-451087c7fe15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllcyUyMHN0YXRpb25lcnl8ZW58MXx8fHwxNzU3NTA3ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "kitchen",
      name: "주방",
      icon: "🍳",
      image:
        "https://images.unsplash.com/photo-1730597363352-0a8fe6eb5d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwdXRlbnNpbHMlMjBjb29raW5nfGVufDF8fHx8MTc1NzU4OTYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ]

  const recentViews = [
    {
      id: "5",
      title: "양파 공구해요 @@@",
      subtitle: "식료품",
      description: "Description Description Description Description Description Description Description Description",
      deadline: "25.07.14(토) 오후 6:00",
      participants: "3 / N 참여중",
      image:
        "https://images.unsplash.com/photo-1668295037389-292efc20dafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG9uaW9uJTIwZnJlc2glMjB2ZWdldGFibGV8ZW58MXx8fHwxNzU3NTg5NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ]

  const urgentPurchases = [
    {
      id: "6",
      title: "건전지 공구 딱 2자리 남음",
      subtitle: "전자제품",
      description: "Description Description Description Description Description Description Description Description",
      deadline: "25.07.25(금) 오전 11:00",
      participants: "3 / 4 참여중",
      image:
        "https://images.unsplash.com/photo-1636614223954-db6a663293ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzUyNTQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <div className="ml-1 w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="font-medium">상동동</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="p-2">
            <Bell className="w-5 h-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="p-2">
            <Heart className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>

      <div className="px-4 space-y-6 pb-20">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="원하는 공동구매를 검색해보세요"
            className="pl-10 h-12 bg-gray-100 border-none rounded-lg"
          />
        </div>

        {/* Main Banner */}
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <h2 className="font-semibold text-gray-900 mb-1">코스트코 돼지고기 대량 구매 공동구매 모집합니다</h2>
                <p className="text-sm text-gray-600 mb-2">@@</p>
                <p className="text-xs text-gray-500 mb-3">SubTitleSubTitleSubTitle</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>25.07.15(월) 오후 6:00</span>
                </div>
              </div>
              <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">카테고리로 공동구매 찾기</h3>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mb-2 mx-auto overflow-hidden">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <span className="text-sm text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Views */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900">최근 관심있게 봤던 공동구매</h3>
            <Eye className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500">SubHeading</p>

          {recentViews.map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onItemClick(item.id)}
            >
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <Button variant="ghost" size="icon" className="p-1 h-6 w-6">
                        <Heart className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{item.subtitle}</p>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                    <div className="text-xs text-gray-500">
                      <p>마감: {item.deadline}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Urgent Purchases */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">마감 임박 공동구매</h3>
          <p className="text-sm text-gray-500">SubHeading</p>

          {urgentPurchases.map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-red-500"
              onClick={() => onItemClick(item.id)}
            >
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <Button variant="ghost" size="icon" className="p-1 h-6 w-6">
                        <Heart className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{item.subtitle}</p>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                    <div className="text-xs text-gray-500">
                      <p>마감: {item.deadline}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-20 right-4">
          <Button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg">
            <span className="text-lg font-semibold">+ 글쓰기</span>
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
        <div className="flex justify-around items-center">
          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 p-2 h-auto ${
              activeTab === "home" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => onNavigate("home")}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">홈</span>
          </Button>

          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 p-2 h-auto ${
              activeTab === "my-purchases" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => onNavigate("my-purchases")}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="text-xs">나의 공동구매</span>
          </Button>

          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 p-2 h-auto ${
              activeTab === "chat" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => onNavigate("chat")}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">채팅</span>
          </Button>

          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 p-2 h-auto ${
              activeTab === "saved" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => onNavigate("saved")}
          >
            <Bookmark className="w-5 h-5" />
            <span className="text-xs">딥</span>
          </Button>

          <Button
            variant="ghost"
            className={`flex flex-col items-center gap-1 p-2 h-auto ${
              activeTab === "profile" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => onNavigate("profile")}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">마이페이지</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
