import { useState } from 'react'
import { HomePage } from './components/HomePage'
import { GroupPurchaseList } from './components/GroupPurchaseList'
import { GroupPurchaseDetail } from './components/GroupPurchaseDetail'
import { LandingPage } from './components/LandingPage'

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'home' | 'list' | 'detail'>('landing')
  const [activeTab, setActiveTab] = useState('home')
  const [selectedItemId, setSelectedItemId] = useState<string>('')

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId)
    setCurrentView('detail')
  }

  const handleBackToList = () => {
    if (activeTab === 'home') {
      setCurrentView('home')
    } else {
      setCurrentView('list')
    }
    setSelectedItemId('')
  }

  const handleNavigate = (tab: string) => {
    setActiveTab(tab)

    if (tab === 'home') {
      setCurrentView('home')
    } else if (tab === 'my-purchases') {
      setCurrentView('list')
    } else {
      // 다른 탭들은 아직 구현되지 않았으므로 홈으로 이동
      setCurrentView('home')
      setActiveTab('home')
    }
  }

  // Landing page view
  if (currentView === 'landing') {
    return <LandingPage />
  }

  if (currentView === 'detail') {
    return <GroupPurchaseDetail onBack={handleBackToList} itemId={selectedItemId} />
  }

  if (currentView === 'list') {
    return (
      <GroupPurchaseList
        onItemClick={handleItemClick}
        onNavigate={handleNavigate}
        activeTab={activeTab}
      />
    )
  }

  return (
    <HomePage onItemClick={handleItemClick} onNavigate={handleNavigate} activeTab={activeTab} />
  )
}
