import React from 'react'

export default function HeroBar({ src, alt, children }: { src: string; alt: string; children?: React.ReactNode }) {
  return (
    <section className="w-full mb-12">
      <div className="relative w-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-[252px] object-cover"
        />

        {children ? (
          <div className="absolute inset-0">
            {/* 让 overlay 内容跟页面容器左对齐，并垂直居中 */}
            <div className="container-xxl h-full flex items-center justify-start">
              {/* 控制导航块的最大宽度，避免铺太开；可按需调宽 */}
              <div className="max-w-[560px]">
                {children}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

