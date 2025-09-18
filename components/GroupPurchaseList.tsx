"use client"

import { ShoppingCart, Home, MessageSquare, Bookmark, User, Clock, Users } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface GroupPurchaseListProps {
  onItemClick: (itemId: string) => void
  onNavigate: (tab: string) => void
  activeTab: string
}

export function GroupPurchaseList({ onItemClick, onNavigate, activeTab }: GroupPurchaseListProps) {
  const groupPurchases = [
    {
      id: "1",
      title: "코스트코 돼지고기 대용구매 공동구매 모집합니다",
      image:
        "https://images.unsplash.com/photo-1708388465069-1fc76ec68b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwYmVsbHklMjBtZWF0JTIwa29yZWFufGVufDF8fHx8MTc1NzUxMjIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "진행중",
      participants: 3,
      maxParticipants: 5,
      deadline: "2024.01.20",
    },
    {
      id: "2",
      title: "코스트코 돼지고기 대용구매 공동구매 모집합니다",
      image:
        "https://images.unsplash.com/photo-1708388465069-1fc76ec68b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwYmVsbHklMjBtZWF0JTIwa29yZWFufGVufDF8fHx8MTc1NzUxMjIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "진행중",
      participants: 2,
      maxParticipants: 4,
      deadline: "2024.01.18",
    },
    {
      id: "3",
      title: "코스트코 유기농 레몬 공동구매",
      image:
        "https://images.unsplash.com/photo-1718196917011-801cddb84334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxlbW9ucyUyMGNpdHJ1cyUyMGZydWl0fGVufDF8fHx8MTc1NzUxMTQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "진행중",
      participants: 1,
      maxParticipants: 3,
      deadline: "2024.01.15",
    },
  ]

  const completedPurchases = [
    {
      id: "4",
      title: "코스트코 견과류 믹스 공동구매",
      image:
        "https://images.unsplash.com/photo-1708388465069-1fc76ec68b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwYmVsbHklMjBtZWF0JTIwa29yZWFufGVufDF8fHx8MTc1NzUxMjIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "완료",
      participants: 5,
      maxParticipants: 5,
      completedDate: "2024.01.10",
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
      <div className="px-4 py-4 bg-white border-b border-gray-200">
        <h1 className="text-lg font-semibold">나의 공동구매</h1>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4">
        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="ongoing" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              진행중
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              ✓ 진행종료
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="space-y-3">
            {groupPurchases.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onItemClick(item.id)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-600 hover:bg-blue-700 text-xs">{item.status}</Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          {item.participants}/{item.maxParticipants}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        마감: {item.deadline}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-3">
            {completedPurchases.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-md transition-shadow opacity-80"
                onClick={() => onItemClick(item.id)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          {item.participants}/{item.maxParticipants}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">✓ 완료: {item.completedDate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
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
