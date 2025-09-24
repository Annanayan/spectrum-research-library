
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  className = ''
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="h2 text-sr-text-primary mb-4">{title}</h2>
      {subtitle && (
        <h3 className="h3 text-sr-text-secondary mb-6">{subtitle}</h3>
      )}
      {description && (
        <p className="body text-sr-text-secondary max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}