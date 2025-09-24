// src/utils/imageOptimization.ts

// 预加载关键图片
export function preloadImages(imagePaths: string[]) {
  imagePaths.forEach(path => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = path
    document.head.appendChild(link)
  })
}

// 获取优化的图片 URL（如果使用 CDN 或图片服务）
export function getOptimizedImageUrl(
  src: string,
  _options?: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'jpg' | 'png'
  }
) {
  // 如果你使用 Cloudinary, Imgix 等服务，在这里处理 URL
  // 示例：return `https://your-cdn.com/${src}?w=${width}&q=${quality}&fm=${format}`
  
  // 本地开发直接返回原始 URL
  return src
}

// 检测 WebP 支持
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

// 渐进式图片加载策略
export class ProgressiveImageLoader {
  private queue: string[] = []
  private loading = false
  private concurrency = 3 // 同时加载的图片数
  
  add(src: string) {
    if (!this.queue.includes(src)) {
      this.queue.push(src)
      this.process()
    }
  }
  
  private async process() {
    if (this.loading || this.queue.length === 0) return
    
    this.loading = true
    const batch = this.queue.splice(0, this.concurrency)
    
    await Promise.all(
      batch.map(src => this.loadImage(src))
    )
    
    this.loading = false
    if (this.queue.length > 0) {
      this.process()
    }
  }
  
  private loadImage(src: string): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = img.onerror = () => resolve()
      img.src = src
    })
  }
}

export const imageLoader = new ProgressiveImageLoader()