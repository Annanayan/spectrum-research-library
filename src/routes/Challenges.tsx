import { useParams, Link } from 'react-router-dom'
import { challenges, challengeNav } from '@/data/challenges'
import HeroBar from '@/shared/HeroBar'

export default function Challenges() {
  const { slug } = useParams()
  const current = challenges.find(c => c.slug === slug) || challenges[0]

  return (
    <div>
      <HeroBar src={current.heroImage} alt={current.title}>
        <div className="h-full w-full bg-[#D498E1]/45 flex items-center">
          <div className="container-xxl">
            <div className="max-w-[540px] pl-6 border-l-4 border-white/70 py-6 text-white/90">
              {challengeNav.map(item => {
                const active = item.slug === current.slug
                return (
                  <div key={item.slug} className="my-2">
                    <Link to={`/challenges/${item.slug}`} className={active ? 'font-semibold text-white' : 'text-white/80 hover:text-white'}>
                      {item.label}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </HeroBar>

      <section className="container-xxl pt-10 pb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{current.title}</h1>
        <div className="mt-8 space-y-10">
          {current.sections.map((s, idx) => (
            <div key={idx} className="max-w-4xl">
              <h2 className="text-2xl font-semibold">{s.heading}</h2>
              {Array.isArray(s.body) ? (
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  {s.body.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              ) : (
                <p className="mt-3 leading-relaxed">{s.body}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
