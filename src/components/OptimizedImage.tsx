// src/components/OptimizedImage.tsx

import { useState, useEffect, useRef } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  priority?: boolean // 是否优先加载（如首屏图片）
  placeholder?: 'blur' | 'skeleton' // 占位符类型
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  style,
  priority = false,
  placeholder = 'blur'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)
  
  // 生成低质量占位图 URL（使用 base64 或缩略图服务）
  const placeholderSrc = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E`
  
  useEffect(() => {
    if (priority || !imgRef.current) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0, rootMargin: '50px' }
    )
    
    observer.observe(imgRef.current)
    
    return () => observer.disconnect()
  }, [priority])
  
  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={style}>
      {/* 占位符 */}
      {placeholder === 'blur' && (
        <div 
          className={`absolute inset-0 bg-gray-200 transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${placeholderSrc})`,
            backgroundSize: 'cover',
            filter: 'blur(20px)',
            transform: 'scale(1.1)'
          }}
        />
      )}
      
      {placeholder === 'skeleton' && !isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* 实际图片 */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  )
}