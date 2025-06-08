'use client'
import { Video, Upload, BarChart3, Settings } from 'lucide-react'

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'library', label: 'Library', icon: Video },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Video className="w-8 h-8 text-primary-500" />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            VidFlow
          </h1>
        </div>
        
        <nav className="flex gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-lg transform -translate-y-0.5'
                    : 'text-gray-600 hover:bg-primary-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}