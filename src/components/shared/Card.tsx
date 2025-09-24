import { motion } from 'framer-motion';
import { BookItem } from '../../data/books';

interface CardProps {
  book: BookItem;
  category: string;
  index?: number;
}

export default function Card({ book, category, index = 0 }: CardProps) {
  const handleClick = () => {
    window.open(book.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: 'easeOut'
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="card cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label={`Read more about ${book.title}`}
    >
      <div className="mb-4">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <span className="category-pill">{category}</span>
      </div>

      <h3 className="h3 text-sr-text-primary mb-3 line-clamp-2">
        {book.title}
      </h3>

      <p className="text-secondary text-sr-text-secondary line-clamp-4">
        {book.summary}
      </p>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="text-sm text-sr-text-secondary hover:text-sr-text-primary transition-colors">
          Read more →
        </span>
      </div>
    </motion.div>
  );
}