'use client'
import { useState } from 'react'
import { Hash, Type, AlignLeft, Sparkles, Rocket } from 'lucide-react'

interface ContentFormProps {
  uploadedFiles: File[]
}

export default function ContentForm({ uploadedFiles }: ContentFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState(['content creation', 'tutorial'])
  const [newTag, setNewTag] = useState('')
  const [isPublishing, setIsPublishing] = useState(false)

  const enhanceDescription = () => {
    setDescription(
      "🎬 Welcome to an amazing content creation journey! This video showcases cutting-edge techniques and insider tips that will transform your creative process. Perfect for content creators, marketers, and anyone looking to elevate their digital presence. Don't forget to subscribe and hit the bell icon for more awesome content! #ContentCreation #DigitalMarketing #CreativeProcess"
    )
  }

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim()) {
      setTags([...tags, newTag.trim()])
      setNewTag('')
    }
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  const handlePublish = async () => {
    setIsPublishing(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsPublishing(false)
    alert('Published successfully!')
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
      <form className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Type className="w-4 h-4" />
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
            placeholder="Enter compelling title..."
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <AlignLeft className="w-4 h-4" />
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all h-32 resize-y"
            placeholder="Write engaging description..."
          />
          <button
            type="button"
            onClick={enhanceDescription}
            className="mt-2 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-xl hover:transform hover:-translate-y-0.5 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            AI Enhance Description
          </button>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Hash className="w-4 h-4" />
            Tags
          </label>
          <div className="flex flex-wrap gap-2 p-3 border-2 border-gray-200 rounded-xl min-h-[60px] focus-within:border-primary-500">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-primary-500 text-white rounded-full text-sm"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="hover:bg-primary-600 rounded-full w-4 h-4 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </span>
            ))}
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={addTag}
              className="flex-1 min-w-[120px] outline-none bg-transparent"
              placeholder="Add tags..."
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handlePublish}
          disabled={isPublishing}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl font-bold text-lg hover:transform hover:-translate-y-1 transition-all disabled:opacity-50"
        >
          {isPublishing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Publishing...
            </>
          ) : (
            <>
              <Rocket className="w-5 h-5" />
              Publish to All Channels
            </>
          )}
        </button>
      </form>
    </div>
  )
}