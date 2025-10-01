import { motion } from 'framer-motion';
import Container from '../components/shared/Container';
import Section from '../components/shared/Section';
import SupportCard from '../components/shared/SupportCard';
import { supportSections } from '@/data/supports'

export default function Supports() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Hero Section with First Support Cards */}
      <Section background="base" padding="large">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="h1 text-sr-text-primary mb-6">
                Support
              </h1>
              <p className="body text-sr-text-secondary max-w-4xl mx-auto">
                Trusted support and resource links for the LGBTQ+ community, covering mental health, discrimination, healthcare, education, legal rights, and community networks. Our goal is to make it easier to find help, connect with supportive organizations, and feel less alone in facing challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {supportSections.slice(0, 2).map((section, cardIndex) => (
                <SupportCard
                  key={section.id}
                  section={section}
                  index={cardIndex}
                />
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Remaining Support Cards Sections */}
      {Array.from({ length: Math.ceil((supportSections.length - 2) / 2) }).map((_, sectionIndex) => (
        <Section
          key={sectionIndex}
          background={sectionIndex % 2 === 0 ? 'yellow' : 'base'}
          padding="normal"
        >
          <Container>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {supportSections.slice(2 + sectionIndex * 2, 2 + sectionIndex * 2 + 2).map((section, cardIndex) => (
                <SupportCard
                  key={section.id}
                  section={section}
                  index={cardIndex}
                />
              ))}
            </motion.div>
          </Container>
        </Section>
      ))}
    </motion.div>
  );
}