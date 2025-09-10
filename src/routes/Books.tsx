import HeroBar from '@/shared/HeroBar'

export default function Books() {
  return (
    <div>
      <HeroBar src="/assets/Books & Journals Header.png" alt="Books & Journals" />
      
      <section className="container-xxl pt-10 pb-16 min-h-[50vh]">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Recommended Books & Journals</h1>
        <p className="p text-gray-600">15 slots planned.</p>
      </section>
    </div>
  )
}
