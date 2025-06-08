'use client'
import { useState } from 'react'
import { Share2, Calendar, BarChart3, Eye, Youtube, Instagram } from 'lucide-react'

export default function Sidebar() {
  const [selectedPlatforms, setSelectedPlatforms] = useState(['youtube', 'tiktok', 'facebook'])

  const platforms = [
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'text-red-500' },
    { id: 'tiktok', name: 'TikTok', icon: Video, color: 'text-black' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
    { id: 'twitter', name: 'Twitter', icon: Share2, color: 'text-blue-400' },
    { id: 'facebook', name: 'Facebook', icon: Share2, color: 'text-blue-600' },
    { id: 'linkedin', name: 'LinkedIn', icon: Share2, color: 'text-blue-700' },
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    )
  }

  return (
    <div className="space-y-6">
      {/* Social Platforms */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <Share2 className="w-5 h-5" />
          Social Platforms
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {platforms.map((platform) => {
            const Icon = platform.icon
            const isSelected = selectedPlatforms.includes(platform.id)
            return (
              <button
                key={platform.id}
                onClick={() => togglePlatform(platform.id)}
                className={`flex items-center gap-2 p-3 rounded-xl transition-all ${
                  isSelected
                    ? 'bg-primary-500 text-white transform -translate-y-0.5 shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : platform.color}`} />
                <span className="text-sm font-medium">{platform.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Smart Scheduling */}
      <div className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white rounded-2xl p-6 shadow-2xl">
        <h3 className="flex items-center gap-2 text-lg font-bold mb-4">
          <Calendar className="w-5 h-5" />
          Smart Scheduling
        </h3>
        <p className="mb-4 opacity-90">AI suggests optimal posting times</p>
        <div className="bg-white/20 rounded-xl p-4">
          <div className="font-bold">Best Time Today:</div>
          <div className="text-lg">2:30 PM - 4:30 PM</div>
          <div className="text-sm opacity-75">73% higher engagement</div>
        </div>
      </div>

      {/* Quick Analytics */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <BarChart3 className="w-5 h-5" />
          Quick Analytics
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Total Views', value: '12.4K' },
            { label: 'Engagements', value: '892' },
            { label: 'Posts Today', value: '34' },
            { label: 'Growth Rate', value: '7.2%' },
          ].map((metric) => (
            <div key={metric.label} className="text-center p-3 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-primary-500">{metric.value}</div>
              <div className="text-xs text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Preview */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <Eye className="w-5 h-5" />
          Content Preview
        </h3>
        <div className="bg-gray-800 rounded-xl h-32 flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1"></div>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          <strong>Preview how your content appears on each platform</strong>
        </p>
      </div>
    </div>
  )
}