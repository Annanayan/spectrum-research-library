import { motion } from 'framer-motion';
import Container from '../components/shared/Container';
import Section from '../components/shared/Section';
import SectionHeader from '../components/shared/SectionHeader';
import Card from '../components/shared/Card';
import HorizontalScroller from '../components/shared/HorizontalScroller';
import { booksData } from '../data/books';

export default function Books() {
  // Get all books from all sections and randomize order
  const allBooks = booksData.sections.flatMap(section => section.items);
  const featuredBooks = [...allBooks].sort(() => Math.random() - 0.5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Hero Section */}
      <Section background="base" padding="large">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="h1 text-sr-text-primary mb-6">
              Books & Journals
            </h1>
            <p className="body text-sr-text-secondary max-w-2xl mx-auto">
              Discover essential reading materials covering LGBTQ+ experiences, research, and community stories.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Horizontal Scroller - Featured Books */}
      <Section background="soft" padding="normal">
        <Container>
          <SectionHeader
            title="Featured Reading"
            description="A curated selection of impactful books and memoirs"
            className="mb-8"
          />
          <HorizontalScroller books={featuredBooks} category="Featured" />
        </Container>
      </Section>

      {/* Three Main Sections */}
      {booksData.sections.map((section, sectionIndex) => (
        <Section
          key={section.name}
          background={sectionIndex % 2 === 0 ? 'base' : 'soft'}
          padding="normal"
        >
          <Container>
            <SectionHeader
              title={section.name}
              description={section.intro}
              className="mb-12"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.08 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {section.items.map((book, index) => (
                <Card
                  key={index}
                  book={book}
                  category={section.name}
                  index={index}
                />
              ))}
            </motion.div>
          </Container>
        </Section>
      ))}
    </motion.div>
  );
}
