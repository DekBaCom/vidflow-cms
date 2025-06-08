'use client'
import { useState } from 'react'
import UploadZone from '@/components/UploadZone'
import ContentForm from '@/components/ContentForm'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function Home() {
  const [activeTab, setActiveTab] = useState('upload')
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-6">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <UploadZone 
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
            />
            <ContentForm uploadedFiles={uploadedFiles} />
          </div>
          
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
