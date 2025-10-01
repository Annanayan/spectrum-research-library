import { motion } from 'framer-motion';
import { GrayButton, BlackButton } from '@/components/Buttons'
import Container from '../components/shared/Container';
import Section from '../components/shared/Section';
import OptimizedImage from '@/components/OptimizedImage'

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Hero Section */}
      <Section background="soft" padding="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-10"
          >
            <h1 className="h1 text-sr-text-primary mb-5">
              Spectrum Research Library
            </h1>
            <p className="body text-sr-text-secondary max-w-2xl">
              A digital hub dedicated to LGBTQ+ studies and support. We bring together research-based insights,
              curated support resources, and recommended literature to foster understanding, resilience,
              and well-being within diverse communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <OptimizedImage
              src="/assets/Home Hero.png"
              alt="Home hero"
              className="w-full rounded-card object-cover"
              style={{ aspectRatio: '1285 / 702' }}
              priority={true}
              placeholder="blur"
            />
          </motion.div>
        </Container>
      </Section>

      {/* Journeys & Challenges Section */}
      <Section background="base" padding="normal">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="h2 text-sr-text-primary">Journeys & Challenges</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="card group"
            >
              <OptimizedImage
                src="/assets/Identity and Self-Acceptance Challenges.png"
                alt="Identity and Self-Acceptance Challenges"
                className="w-full rounded-card object-cover mb-5"
                style={{ aspectRatio: '16 / 10' }}
                priority={true}
                placeholder="skeleton"
              />
              <h3 className="h3 text-sr-text-primary mb-2">
                Identity and Self-Acceptance Challenges
              </h3>
              <p className="body text-sr-text-secondary mb-5">
                Struggling with negative messages about one's identity that have been absorbed from society.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.15 }}>
                <GrayButton to="/challenges/coming-out-anxiety">Access Full Content</GrayButton>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="card"
            >
              <OptimizedImage
                src="/assets/Social Isolation and Community Disconnection.png"
                alt="Social Isolation and Community Disconnection"
                className="w-full rounded-card object-cover mb-5"
                style={{ aspectRatio: '16 / 10' }}
                priority={true}
                placeholder="skeleton"
              />
              <h3 className="h3 text-sr-text-primary mb-2">
                Social Isolation and Community Disconnection
              </h3>
              <p className="body text-sr-text-secondary">
                The internal and external struggles LGBTQ+ individuals face when their sexual or gender identities are
                rejected, suppressed, or invalidated by their families or religious communities.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Support & Lifelines Section */}
      <Section background="soft" padding="normal">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="h2 text-sr-text-primary mb-6">Support & Lifelines</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="h3 text-sr-text-primary mb-2">Mental Health Issues</h3>
                  <p className="body text-sr-text-secondary">
                    Depression, Anxiety Disorders, Suicidal Ideation & Self-Harm, Substance Abuse,
                    Low Self-Esteem and Internalized Homophobia
                  </p>
                </div>
                <div>
                  <h3 className="h3 text-sr-text-primary mb-2">Healthcare and Medical Support</h3>
                  <p className="body text-sr-text-secondary">
                    Lack of LGBTQ+ inclusive healthcare, Gender-affirming healthcare access,
                    Mental health support gaps
                  </p>
                </div>
                <div>
                  <h3 className="h3 text-sr-text-primary mb-2">Legal and Policy Support</h3>
                  <p className="body text-sr-text-secondary">
                    Marriage, Medical Authorization Rights, Anti-LGBTQ+ Laws and Policies, Refugee Issues
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.15 }}>
                  <BlackButton to="/supports">View All Resources</BlackButton>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <OptimizedImage
                src="/assets/Support & Lifelines.png"
                alt="Support & Lifelines"
                className="w-full h-80 object-cover rounded-card"
                priority={true}
                placeholder="skeleton"
              />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Books & Journals Section */}
      <Section background="base" padding="normal">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="h2 text-sr-text-primary">Books & Journals</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="card"
            >
              <img
                src="/assets/Boy Erased.png"
                alt="Boy Erased"
                className="w-full rounded-card object-cover mb-3"
                style={{ aspectRatio: '1 / 1' }}
              />
              <h3 className="h3 text-sr-text-primary mb-2">Boy Erased</h3>
              <p className="body text-sr-text-secondary">
                A powerful memoir about growing up in a strict Christian family and undergoing conversion therapy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="card"
            >
              <img
                src="/assets/We Are Everywhere.png"
                alt="We Are Everywhere"
                className="w-full rounded-card object-cover mb-3"
                style={{ aspectRatio: '1 / 1' }}
              />
              <h3 className="h3 text-sr-text-primary mb-2">We Are Everywhere</h3>
              <p className="body text-sr-text-secondary">
                A blend of photographs and history, showcasing the LGBTQ+ community's struggles and victories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="card"
            >
              <img
                src="/assets/Me.png"
                alt="Me"
                className="w-full rounded-card object-cover mb-3"
                style={{ aspectRatio: '1 / 1' }}
              />
              <h3 className="h3 text-sr-text-primary mb-2">Me</h3>
              <p className="body text-sr-text-secondary">
                A candid memoir by the legendary British musician, covering his music career, struggles with addiction,
                and LGBTQ+ identity.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.15 }}>
              <GrayButton to="/books">Go to Full Library</GrayButton>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </motion.div>
  );
}