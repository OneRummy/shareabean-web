import { ArrowLeft, MoreHorizontal, Users, Settings, Package, Truck, Check, Clock, MapPin, Phone, MessageSquare, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GroupPurchaseDetailProps {
  onBack: () => void;
  itemId: string;
}

export function GroupPurchaseDetail({ onBack, itemId }: GroupPurchaseDetailProps) {
  const [isDeliveryDialogOpen, setIsDeliveryDialogOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [selectedDeliveryInfo, setSelectedDeliveryInfo] = useState<{
    method: string;
    details: any;
  } | null>(null);

  const [deliveryDetails, setDeliveryDetails] = useState({
    // 직접 수령
    handoverLocation: '', // 주최자가 전달할 장소
    handoverTime: '',     // 전달 시간
    pickupNotes: '',      // 수령 시 참고사항
    // 택배 배송
    address: '',
    phone: '',
    memo: ''
  });

  const handleDeliverySubmit = () => {
    if (deliveryMethod) {
      const details = deliveryMethod === 'pickup' 
        ? { 
            handoverLocation: deliveryDetails.handoverLocation, 
            handoverTime: deliveryDetails.handoverTime,
            pickupNotes: deliveryDetails.pickupNotes
          }
        : { address: deliveryDetails.address, phone: deliveryDetails.phone, memo: deliveryDetails.memo };
      
      setSelectedDeliveryInfo({ method: deliveryMethod, details });
      setIsDeliveryDialogOpen(false);
    }
  };

  // 아이템 ID에 따라 다른 정보 표시 (예시)
  const getItemInfo = (id: string) => {
    if (id === '3') {
      return {
        title: '코스트코 레몬',
        productName: '코스트코 유기농 레몬',
        description: '3kg 포장 (약 15-20개)',
        image: 'https://images.unsplash.com/photo-1718196917011-801cddb84334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxlbW9ucyUyMGNpdHJ1cyUyMGZydWl0fGVufDF8fHx8MTc1NzUxMTQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      };
    }
    return {
      title: '코스트코 돼지고기',
      productName: '코스트코 삼겹살',
      description: '1kg 포장',
      image: 'https://images.unsplash.com/photo-1708388465069-1fc76ec68b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwYmVsbHklMjBtZWF0JTIwa29yZWFufGVufDF8fHx8MTc1NzUxMjIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    };
  };

  const itemInfo = getItemInfo(itemId);

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
      <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="p-2" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-semibold text-lg">{itemInfo.title}</h1>
            <span className="text-sm text-blue-600">진행중</span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="p-2">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      <div className="px-4 space-y-4 pb-6">
        {/* 공동구매 아이템 정보 */}
        <Card className="mt-4">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Package className="w-5 h-5 text-blue-600" />
              공동구매 아이템 정보
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                <ImageWithFallback 
                  src={itemInfo.image}
                  alt={itemInfo.productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{itemInfo.productName}</h3>
                <p className="text-sm text-gray-600 mt-1">{itemInfo.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">
                    공동구매
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    신선식품
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 탭 */}
        <Tabs defaultValue="participants" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="participants" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              참여자
            </TabsTrigger>
            <TabsTrigger value="manage" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              관리
            </TabsTrigger>
          </TabsList>

          <TabsContent value="participants" className="space-y-4 mt-4">
            {/* 제고 정보 */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">제고</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                    <ImageWithFallback 
                      src={itemInfo.image}
                      alt={itemInfo.productName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{itemInfo.productName}</h4>
                    <p className="text-sm text-gray-600">수량: 인당 5~10개, 직접받기 가능, 택배 가능</p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
                        <Package className="w-3 h-3" />
                        직접받기
                      </div>
                      <div className="flex items-center gap-1 text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                        <Truck className="w-3 h-3" />
                        택배가능
                      </div>
                    </div>

                    {selectedDeliveryInfo && (
                      <div className="mt-3 p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          {selectedDeliveryInfo.method === 'pickup' ? (
                            <Package className="w-3 h-3 text-green-600" />
                          ) : (
                            <Truck className="w-3 h-3 text-blue-600" />
                          )}
                          <span className="text-xs font-medium">
                            {selectedDeliveryInfo.method === 'pickup' ? '직접 수령' : '택배 배송'}
                          </span>
                        </div>
                        {selectedDeliveryInfo.method === 'pickup' ? (
                          <div className="text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {selectedDeliveryInfo.details.handoverLocation}
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Calendar className="w-3 h-3" />
                              {selectedDeliveryInfo.details.handoverTime}
                            </div>
                            {selectedDeliveryInfo.details.pickupNotes && (
                              <div className="flex items-center gap-1 mt-1">
                                <MessageSquare className="w-3 h-3" />
                                {selectedDeliveryInfo.details.pickupNotes}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {selectedDeliveryInfo.details.address.split('\n')[0]}
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                              <Phone className="w-3 h-3" />
                              {selectedDeliveryInfo.details.phone}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    수량조정
                  </Button>
                  
                  <Dialog open={isDeliveryDialogOpen} onOpenChange={setIsDeliveryDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className={`flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 ${
                          selectedDeliveryInfo ? 'bg-blue-50' : ''
                        }`}
                      >
                        {selectedDeliveryInfo ? '전달 방법 변경' : '진당 방법 선택'}
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Truck className="w-5 h-5 text-blue-600" />
                          전달 방법 선택
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                              <RadioGroupItem value="pickup" id="pickup" />
                              <div className="flex-1">
                                <Label htmlFor="pickup" className="flex items-center gap-2 cursor-pointer">
                                  <Package className="w-4 h-4 text-green-600" />
                                  직접 수령
                                </Label>
                                <p className="text-sm text-gray-500 mt-1">지정된 장소에서 직접 수령</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                              <RadioGroupItem value="delivery" id="delivery" />
                              <div className="flex-1">
                                <Label htmlFor="delivery" className="flex items-center gap-2 cursor-pointer">
                                  <Truck className="w-4 h-4 text-blue-600" />
                                  택배 배송
                                </Label>
                                <p className="text-sm text-gray-500 mt-1">주소지로 택배 배송</p>
                              </div>
                            </div>
                          </div>
                        </RadioGroup>

                        {deliveryMethod === 'pickup' && (
                          <div className="space-y-4 p-4 bg-green-50 rounded-lg">
                            <h4 className="font-medium text-green-800 flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              직접 전달 정보
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <Label htmlFor="handover-location" className="text-green-800">
                                  전달 장소 <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="handover-location"
                                  placeholder="예: 강남역 2번 출구 앞, 스타벅스 강남역점"
                                  value={deliveryDetails.handoverLocation}
                                  onChange={(e) => setDeliveryDetails(prev => ({
                                    ...prev,
                                    handoverLocation: e.target.value
                                  }))}
                                />
                                <p className="text-xs text-green-700 mt-1">참여자들이 수령할 수 있는 장소를 입력해주세요</p>
                              </div>
                              <div>
                                <Label htmlFor="handover-time" className="text-green-800">
                                  전달 시간 <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="handover-time"
                                  placeholder="예: 2024년 1월 15일 오후 3시 ~ 5시"
                                  value={deliveryDetails.handoverTime}
                                  onChange={(e) => setDeliveryDetails(prev => ({
                                    ...prev,
                                    handoverTime: e.target.value
                                  }))}
                                />
                                <p className="text-xs text-green-700 mt-1">전달 가능한 시간대를 입력해주세요</p>
                              </div>
                              <div>
                                <Label htmlFor="pickup-notes" className="text-green-800">
                                  수령 시 참고사항 (선택)
                                </Label>
                                <Textarea
                                  id="pickup-notes"
                                  placeholder="예: 연락처로 미리 연락 후 방문해주세요"
                                  value={deliveryDetails.pickupNotes}
                                  onChange={(e) => setDeliveryDetails(prev => ({
                                    ...prev,
                                    pickupNotes: e.target.value
                                  }))}
                                  className="resize-none h-16"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {deliveryMethod === 'delivery' && (
                          <div className="space-y-3 p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-medium text-blue-800 flex items-center gap-2">
                              <Truck className="w-4 h-4" />
                              배송 정보
                            </h4>
                            <div className="space-y-3">
                              <div>
                                <Label htmlFor="delivery-address">배송 주소</Label>
                                <Textarea
                                  id="delivery-address"
                                  placeholder="배송받을 주소를 입력해주세요"
                                  value={deliveryDetails.address}
                                  onChange={(e) => setDeliveryDetails(prev => ({
                                    ...prev,
                                    address: e.target.value
                                  }))}
                                  className="resize-none h-20"
                                />
                              </div>
                              <div>
                                <Label htmlFor="delivery-phone">연락처</Label>
                                <Input
                                  id="delivery-phone"
                                  placeholder="010-0000-0000"
                                  value={deliveryDetails.phone}
                                  onChange={(e) => setDeliveryDetails(prev => ({
                                    ...prev,
                                    phone: e.target.value
                                  }))}
                                />
                              </div>
                              <div>
                                <Label htmlFor="delivery-memo">배송 메모 (선택)</Label>
                                <Input
                                  id="delivery-memo"
                                  placeholder="배송 시 요청사항이 있으면 입력해주세요"
                                  value={deliveryDetails.memo}
                                  onChange={(e) => setDeliveryDetails(prev => ({
                                    ...prev,
                                    memo: e.target.value
                                  }))}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2 pt-4">
                          <Button 
                            variant="outline" 
                            className="flex-1" 
                            onClick={() => setIsDeliveryDialogOpen(false)}
                          >
                            취소
                          </Button>
                          <Button 
                            className="flex-1 bg-blue-600 hover:bg-blue-700" 
                            onClick={handleDeliverySubmit}
                            disabled={!deliveryMethod || 
                              (deliveryMethod === 'pickup' && (!deliveryDetails.handoverLocation || !deliveryDetails.handoverTime)) ||
                              (deliveryMethod === 'delivery' && (!deliveryDetails.address || !deliveryDetails.phone))
                            }
                          >
                            확인
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            {/* 정산관리 */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">정산관리 (1/2)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gray-300 text-gray-700">강민석</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">강민석</span>
                  </div>
                  <Badge className="bg-green-600 hover:bg-green-700">
                    <Check className="w-3 h-3 mr-1" />
                    정산완료
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gray-300 text-gray-700">김경훈</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">김경훈</span>
                  </div>
                  <Badge variant="outline" className="border-orange-500 text-orange-700 bg-orange-50">
                    <Clock className="w-3 h-3 mr-1" />
                    미정산
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center text-gray-500">
                  <Settings className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>관리 기능이 여기에 표시됩니다</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
