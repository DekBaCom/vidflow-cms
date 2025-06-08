'use client'
import { useState, useCallback } from 'react'
import { CloudUpload, FileVideo, Image, CheckCircle } from 'lucide-react'

interface UploadZoneProps {
  uploadedFiles: File[]
  setUploadedFiles: (files: File[]) => void
}

export default function UploadZone({ uploadedFiles, setUploadedFiles }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    setUploadedFiles([...uploadedFiles, ...files])
    setIsUploaded(true)
  }, [uploadedFiles, setUploadedFiles])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setUploadedFiles([...uploadedFiles, ...files])
      setIsUploaded(true)
    }
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
      <div
        className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all cursor-pointer ${
          isDragging
            ? 'border-primary-500 bg-primary-50 transform scale-105'
            : isUploaded
            ? 'border-green-500 bg-green-50'
            : 'border-primary-300 hover:border-primary-500 hover:bg-primary-50'
        }`}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        <div className="flex justify-center mb-4">
          {isUploaded ? (
            <CheckCircle className="w-16 h-16 text-green-500" />
          ) : (
            <CloudUpload className="w-16 h-16 text-primary-500" />
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2">
          {isUploaded ? 'Files uploaded successfully!' : 'Drop your videos & images here'}
        </h3>
        
        <p className="text-gray-600 mb-2">
          {isUploaded 
            ? `${uploadedFiles.length} file(s) ready for processing`
            : 'or click to browse files'
          }
        </p>
        
        <small className="text-gray-500">
          Supports MP4, MOV, AVI, JPG, PNG (Max: 2GB)
        </small>
        
        <input
          type="file"
          id="fileInput"
          className="hidden"
          multiple
          accept="video/*,image/*"
          onChange={handleFileSelect}
        />
      </div>
      
      {uploadedFiles.length > 0 && (
        <div className="mt-6 space-y-2">
          <h4 className="font-semibold text-gray-700">Uploaded Files:</h4>
          {uploadedFiles.map((file, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              {file.type.startsWith('video/') ? (
                <FileVideo className="w-5 h-5 text-blue-500" />
              ) : (
                <Image className="w-5 h-5 text-green-500" />
              )}
              <span className="text-sm text-gray-700">{file.name}</span>
              <span className="text-xs text-gray-500 ml-auto">
                {(file.size / 1024 / 1024).toFixed(1)} MB
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
