import React from 'react'

export default function HeroBar({ src, alt, children, className = '' }: { src: string, alt: string, children?: React.ReactNode, className?: string }) {
  return (
    <section className="w-full">
      <div className={`relative w-full`}>
        <img src={src} alt={alt} className={`w-full object-cover ${className}`} style={{ aspectRatio: '1440 / 252' }} />
        {children ? <div className="absolute inset-0">{children}</div> : null}
      </div>
    </section>
  )
}
