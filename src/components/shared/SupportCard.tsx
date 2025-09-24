import { motion } from 'framer-motion';
import { SupportSection } from '../../data/supports';

interface SupportCardProps {
  section: SupportSection;
  index: number;
}

export default function SupportCard({ section, index }: SupportCardProps) {
  // Parse challenges to extract individual tags
  const challengesText = section.challenges.replace('Challenges:', '').trim();
  const challengeTags = challengesText.split(',').map(tag => tag.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="card h-full flex flex-col"
    >
      {/* Image */}
      <div className="mb-4">
        <img
          src={section.image}
          alt={section.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Title */}
      <h3 className="h3 text-sr-text-primary mb-4">
        {section.title}
      </h3>

      {/* Challenge Tags */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {challengeTags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="mb-4 flex-grow">
        <h4 className="font-semibold text-sr-text-primary mb-2">Solutions:</h4>
        <ul className="space-y-1">
          {section.solutions.items.map((item, itemIdx) => (
            <li key={itemIdx} className="flex items-start">
              <span className="text-sr-text-secondary mr-2 mt-1">•</span>
              <span className="text-sm text-sr-text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Support Resources */}
      <div className="bg-gray-50 p-4 rounded-lg mt-auto">
        <h4 className="font-semibold text-sr-text-primary mb-3">Support Resources:</h4>
        <ul className="space-y-2">
          {section.supportResources.items.map((item, itemIdx) => (
            <li key={itemIdx}>
              {item.link && item.link.startsWith('http') ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group"
                >
                  <span className="flex-grow">{item.text}</span>
                  <svg
                    className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ) : (
                <span className="text-sm text-sr-text-secondary">
                  {item.text} {item.link && `(${item.link})`}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}