import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookItem } from '../../data/books';
import Card from './Card';

interface HorizontalScrollerProps {
  books: BookItem[];
  category: string;
}

export default function HorizontalScroller({ books, category }: HorizontalScrollerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (scrollLeft >= maxScrollLeft) {
        // Reset to beginning
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll by card width (240px + gap)
        container.scrollBy({ left: 250, behavior: 'smooth' });
      }
    };

    const intervalId = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const cardWidth = 320; // Approximate card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    // Update button states after scroll animation
    setTimeout(checkScrollButtons, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && canScrollLeft) {
      scroll('left');
    } else if (e.key === 'ArrowRight' && canScrollRight) {
      scroll('right');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative"
    >
      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 z-10 left-4">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
            canScrollLeft
              ? 'text-sr-text-primary hover:scale-110'
              : 'text-gray-300 cursor-not-allowed'
          }`}
          aria-label="Scroll left"
        >
          ←
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 z-10 right-4">
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
            canScrollRight
              ? 'text-sr-text-primary hover:scale-110'
              : 'text-gray-300 cursor-not-allowed'
          }`}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 px-6 pb-4 scrollbar-hide scroll-smooth"
        onScroll={checkScrollButtons}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${category} books carousel`}
      >
        {books.map((book, index) => (
          <div key={index} className="flex-none w-60">
            <Card book={book} category={category} index={index} />
          </div>
        ))}
      </div>

    </motion.div>
  );
}