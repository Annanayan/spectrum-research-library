import { GrayButton, BlackButton } from '@/components/Buttons'

export default function Landing() {
  return (
    <div>
      {/* TEXT BLOCK (65% width) */}
      <section className="container-xxl pt-10">
        <div className="max-w-[65%]">
          <h1 className="h1-hero">Spectrum Research Library</h1>
          <p className="p-hero mt-6">
            Spectrum Research Library is a digital hub dedicated to LGBTQ+ studies and support. It brings together
            research-based insights, curated support resources, and recommended literature to foster understanding,
            resilience, and well-being within diverse communities.
          </p>
        </div>
      </section>

      {/* HERO IMAGE (own row with extra breathing room) */}
      <section className="container-xxl mt-10">
        <img src="/assets/Home Hero.png" alt="Home hero" className="img-flat" style={{ aspectRatio: '1285 / 702' }} />
      </section>

      {/* JOURNEYS & CHALLENGES */}
      <section className="container-xxl section-gap">
        <h2 className="h2-section">Journeys & Challenges</h2>

        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <div>
            <img src="/assets/Identity and Self-Acceptance Challenges.png" alt="Identity and Self-Acceptance Challenges" className="img-flat" style={{ aspectRatio: '16 / 10' }} />
            <h3 className="h3-sub mt-6">Identity and Self-Acceptance Challenges</h3>
            <p className="lead-muted mt-2">
              Struggling with negative messages about one’s identity that have been absorbed from society.
            </p>
            <div className="mt-6">
              <GrayButton to="/challenges/coming-out-anxiety">Access Full Content</GrayButton>
            </div>
          </div>
          <div>
            <img src="/assets/Social Isolation and Community Disconnection.png" alt="Social Isolation and Community Disconnection" className="img-flat" style={{ aspectRatio: '16 / 10' }} />
            <h3 className="h3-sub mt-6">Social Isolation and Community Disconnection</h3>
            <p className="lead-muted mt-2">
              The internal and external struggles LGBTQ+ individuals face when their sexual or gender identities are
              rejected, suppressed, or invalidated by their families or religious communities.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPORT & LIFELINES (portrait image on the right) */}
      <section className="container-xxl section-gap">
        <div className="grid md:grid-cols-2 gap-10 items-start md:items-stretch">
          <div>
            <h2 className="h2-section">Support & Lifelines</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="h3-sub">Mental Health Issues</h3>
                <p className="lead-muted mt-2">
                  Depression, Anxiety Disorders, Suicidal Ideation &amp; Self-Harm, Substance Abuse, Low
                  Self-Esteem and Internalized Homophobia
                </p>
              </div>
              <div>
                <h3 className="h3-sub">Healthcare and Medical Support</h3>
                <p className="lead-muted mt-2">
                  Lack of LGBTQ+ inclusive healthcare, Gender-affirming healthcare access, Mental health support gaps
                </p>
              </div>
              <div>
                <h3 className="h3-sub">Legal and Policy Support</h3>
                <p className="lead-muted mt-2">
                  Marriage, Medical Authorization Rights, Anti-LGBTQ+ Laws and Policies, Refugee Issues
                </p>
              </div>
            </div>
            <div className="mt-8">
              <BlackButton to="/supports">View All Resources</BlackButton>
            </div>
          </div>
          <div className="flex">
            <img src="/assets/Support & Lifelines.png" alt="Support & Lifelines" className="portrait rounded-2xl" />
          </div>
        </div>
      </section>

      {/* BOOKS & JOURNALS */}
      <section className="container-xxl section-gap">
        <h2 className="h2-section">Books & Journals</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          <div>
            <img src="/assets/Boy Erased.png" alt="Boy Erased" className="img-flat" style={{ aspectRatio: '1 / 1' }} />
            <h3 className="h3-sub mt-4">Boy Erased</h3>
            <p className="lead-muted mt-2">
              A powerful memoir about growing up in a strict Christian family and undergoing conversion therapy.
            </p>
          </div>
          <div>
            <img src="/assets/We Are Everywhere.png" alt="We Are Everywhere" className="img-flat" style={{ aspectRatio: '1 / 1' }} />
            <h3 className="h3-sub mt-4">We Are Everywhere</h3>
            <p className="lead-muted mt-2">
              A blend of photographs and history, showcasing the LGBTQ+ community&apos;s struggles and victories.
            </p>
          </div>
          <div>
            <img src="/assets/Me.png" alt="Me" className="img-flat" style={{ aspectRatio: '1 / 1' }} />
            <h3 className="h3-sub mt-4">Me</h3>
            <p className="lead-muted mt-2">
              A candid memoir by the legendary British musician, covering his music career, struggles with addiction,
              and LGBTQ+ identity.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <GrayButton to="/books">Go to Full Library</GrayButton>
        </div>
      </section>
    </div>
  )
}
