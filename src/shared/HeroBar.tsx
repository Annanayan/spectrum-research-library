export default function HeroBar({ src, alt, children }: { src: string; alt: string; children?: React.ReactNode }) {
  return (
    <section className="w-full mb-12">
      <div className="relative w-full" style={{ aspectRatio: '1440 / 252' }}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {children ? (
          <div className="absolute inset-0">
            <div className="container-xxl h-full flex items-center">
              <div className="p-6 bg-transparent">
                {children}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}