import HeroBar from '@/shared/HeroBar'

export default function Supports() {
  return (
    <div>
      <HeroBar src="/assets/Support & Lifelines Header.png" alt="Support & Lifelines" />
      <section className="container-xxl pt-10 pb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Support & Lifelines</h1>
        <p className="mt-3 text-sr-muted">Curated resources by theme.</p>
      </section>
    </div>
  )
}
